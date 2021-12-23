import { endOfDay, format, parseISO } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';

import ptBR from 'date-fns/locale/pt-BR';

import { useFetchCalls } from '../../hooks/useFetchCalls';
import { useWindowSize } from '../../hooks/useWindowSize';

import {
  Container,
  Content,
  Demand,
  HeaderContent,
  Listdemand,
  Separator,
  TimeZone
} from "./styles";

interface CallProps {
  id?: number;
  empresaLogotipo: string;
  empresaNome: string;
  numeroIdentificador: string;
  horarioPrimeiraNotificacao: string;
}

export default function Home() {
  const { data } = useFetchCalls();

  const size = useWindowSize();

  const dateAndTime = useMemo(() => {
    return format(endOfDay(new Date()), "dd 'de' MMMM 'de' yyyy 'às' HH:mm:ss", { locale: ptBR });
  }, []);

  return (
    <Container>
      <Content>
        <HeaderContent>
          <div>
            <img src={data?.call.empresaLogotipo} alt={data?.call.empresaNome} />

            <h1>{data?.call.empresaNome}</h1>
          </div>
          <h2>{data?.call.numeroIdentificador}</h2>

          <span>{data?.call.horarioPrimeiraNotificacao}</span>
        </HeaderContent>
        <Separator>

          {size.width <= 768 ? (
            <Separator>
              <Listdemand>
                {data?.lastCalls.map(lastCall => (
                  <Demand key={lastCall.numeroIdentificador}>
                    <img src={lastCall?.empresaLogotipo} alt={lastCall.empresaNome} />

                    <h2>{lastCall.numeroIdentificador}</h2>

                    <span>{lastCall.horarioPrimeiraNotificacao}</span>
                  </Demand>
                ))}
              </Listdemand>
            </Separator>
          ) : (
            <>
              <Listdemand>
                {data?.lastCalls.slice(0, 4).map(lastCall => (
                  <Demand key={lastCall.numeroIdentificador}>
                    <img src={lastCall?.empresaLogotipo} alt={lastCall.empresaNome} />

                    <h2>{lastCall.numeroIdentificador}</h2>

                    <span>{lastCall.horarioPrimeiraNotificacao}</span>
                  </Demand>
                ))}
              </Listdemand>

              <Listdemand className='box2'>
                {data?.lastCalls.slice(4, 8).map(lastCall => (
                  <Demand key={lastCall.numeroIdentificador}>
                    <img src={lastCall?.empresaLogotipo} alt={lastCall.empresaNome} />

                    <h2>{lastCall.numeroIdentificador}</h2>

                    <span>{lastCall.horarioPrimeiraNotificacao}</span>
                  </Demand>
                ))}
              </Listdemand>
            </>
          )}
        </Separator>

        <TimeZone>{dateAndTime}</TimeZone>
      </Content>
    </Container>
  )
}