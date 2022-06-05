import { Button } from "@mui/material";
import { Pet } from "../../../data/@types/Pet";
import { TextService } from "../../../data/services/TextService";
import {
  ListStyled,
  ItemList,
  Photo,
  Informations,
  Name,
  Description,
} from "./List.style";

interface ListProps {
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export default function List(props: ListProps) {
  const textMaxLength = 200;

  return (
    <ListStyled>
      {props.pets.map((pet) => (
        <ItemList key={pet.id}>
          <Photo src={pet.photo} alt={pet.name} />
          <Informations>
            <Name>{pet.name}</Name>
            <Description>
              {TextService.textLimit(pet.history, textMaxLength)}
            </Description>
            <Button
              variant={"contained"}
              fullWidth
              onClick={() => props.onSelect(pet)}
            >
              Adotar {pet.name}
            </Button>
          </Informations>
        </ItemList>
      ))}
    </ListStyled>
  );
}
