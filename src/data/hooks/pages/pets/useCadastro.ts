import { useState } from "react";
import { ApiSerive } from "../../../services/ApiService";
import { AxiosError } from "axios";

export function useCadastro() {
  const [name, setName] = useState(""),
    [history, setHistory] = useState(""),
    [photo, setPhoto] = useState(""),
    [message, setMessage] = useState("");

  function cadastrar() {
    if (validaFormulario()) {
      ApiSerive.post("/pets", {
        name,
        history,
        photo,
      })
        .then(() => {
          limpaFormulario();
          setMessage("Pet cadastrado com sucesso!");
        })
        .catch((error: AxiosError) => {
          setMessage(error.response?.data.message);
        });
    } else {
      setMessage("Preencha todos os campos");
    }
  }

  function validaFormulario() {
    return name.length > 2 && history.length > 20 && photo.length > 5;
  }

  function limpaFormulario() {
    setName("");
    setHistory("");
    setPhoto("");
  }

  return {
    name,
    history,
    photo,
    setName,
    setHistory,
    setPhoto,
    cadastrar,
    message,
    setMessage,
  };
}
