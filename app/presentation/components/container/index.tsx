import React from 'react';
import * as S from './styles';

interface IContainer {
  children: React.ReactNode
}

export const Container = ({children}:IContainer) => {
  return(
    <S.Container>
      {children}
    </S.Container>
  )
}