import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiSerive } from "../../services/ApiService";
import { AxiosError } from "axios";

export function useIndex() {
  const [petsList, setPetsList] = useState<Pet[]>([]),
    [selectedPet, setSelectedPet] = useState<Pet | null>(null),
    [email, setEmail] = useState(""),
    [value, setValue] = useState(""),
    [message, setMessage] = useState("");

  useEffect(() => {
    ApiSerive.get("/pets").then((response) => {
      setPetsList(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedPet === null) {
      clearForm();
    }
  }, [selectedPet]);

  function adotar() {
    if (selectedPet !== null) {
      if (validateAdoptionData()) {
        ApiSerive.post("/adocoes", {
          valor: value,
          email,
          pet_id: selectedPet.id,
        })
          .then(() => {
            setSelectedPet(null);
            setMessage("Pet adotado com sucesso!");
            // clearForm();
          })
          .catch((error: AxiosError) => {
            setMessage(error.response?.data.message);
          });
      } else {
        setMessage("Preencha todos os campos corretamente!");
      }
    }
  }

  function validateAdoptionData() {
    return email.length > 0 && value.length > 0;
  }

  function clearForm() {
    setEmail("");
    setValue("");
  }

  return {
    petsList,
    selectedPet,
    setSelectedPet,
    email,
    setEmail,
    value,
    setValue,
    message,
    setMessage,
    adotar,
  };
}
