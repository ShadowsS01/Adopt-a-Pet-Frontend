import type { NextPage } from "next";
import Title from "../ui/components/Title/Title";
import List from "../ui/components/List/List";
import {
  Dialog,
  TextField,
  Grid,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";
import { useIndex } from "../data/hooks/pages/useIndex";

const Home: NextPage = () => {
  const {
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
  } = useIndex();

  return (
    <div>
      <Title
        title=""
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />

      <List pets={petsList} onSelect={(pet) => setSelectedPet(pet)} />

      <Dialog
        open={selectedPet !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setSelectedPet(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={"E-mail"}
              type={"email"}
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label={"Quantia por mês"}
              type={"number"}
              fullWidth
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button color={"secondary"} onClick={() => setSelectedPet(null)}>
            Cancelar
          </Button>
          <Button variant={"contained"} onClick={() => adotar()}>
            Confirmar adoção
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={message.length > 0}
        message={message}
        autoHideDuration={2500}
        onClose={() => setMessage("")}
      />
    </div>
  );
};

export default Home;
