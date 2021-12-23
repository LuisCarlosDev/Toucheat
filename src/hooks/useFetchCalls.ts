import { useQuery } from "react-query";
import { format, parseISO } from "date-fns";
import { api } from "../services/api";

interface CallProps {
  id?: number;
  empresaLogotipo: string;
  empresaNome: string;
  numeroIdentificador: string;
  horarioPrimeiraNotificacao: string;
}

interface CallPropsResponse {
  call: CallProps,
  lastCalls: CallProps[];
}

const getCall = async (): Promise<CallPropsResponse> => {
  const { data } = await api.get('/Orders');

  const call = {
    empresaLogotipo: data[0].call.empresaLogotipo,
    empresaNome: data[0].call.empresaNome,
    numeroIdentificador: data[0].call.numeroIdentificador,
    horarioPrimeiraNotificacao: format(parseISO(data[0].call.horarioPrimeiraNotificacao), "HH:mm 'hrs'")
  };

  const lastCalls = data[0].lastCalls.map((call: CallProps) => {
    return { 
      id: call.id,
      empresaLogotipo: call.empresaLogotipo,
      empresaNome: call.empresaNome,
      numeroIdentificador: call.numeroIdentificador,
      horarioPrimeiraNotificacao: format(parseISO(call.horarioPrimeiraNotificacao), 'HH:mm')
    }
  })  

  return {
    call,
    lastCalls
  };
}

export const useFetchCalls = () => {
  return useQuery('calls', getCall, { refetchOnWindowFocus: false });
}