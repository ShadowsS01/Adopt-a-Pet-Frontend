import { useState, useEffect } from "react";
import { Relatorio } from "../../../@types/Relatorio";
import { ApiSerive } from "../../../services/ApiService";

export function useRelatorio() {
  const [listaRelatorio, setListaRelatorio] = useState<Relatorio[]>([]);

  useEffect(() => {
    ApiSerive.get("/adocoes").then((response) => {
      setListaRelatorio(response.data);
    });
  }, []);

  return {
    listaRelatorio,
  };
}
