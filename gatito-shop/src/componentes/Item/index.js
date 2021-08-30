import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import Botao from '../Botao';
import CampoInteiro from '../CampoInteiro';

export default function Item({ nomeBotao, estilos, preco, quantidadeInicial = 1 }) {

  const [quantidade, setQuantidade] = useState(quantidadeInicial);
  const [total, setTotal] = useState(preco);

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    calculaTotal(novaQuantidade);
    setQuantidade(novaQuantidade);
  }

  const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * preco);
  }

  useEffect(() => {
    calculaTotal(quantidade);
  });

  return (
    <>
      <View style={estilos.carrinho} >
        <View>
          <View style={estilos.valor} >
            <Text style={estilos.descricao} >Quantidade: </Text>
            <CampoInteiro
              estilos={estilos.quantidade}
              valor={quantidade}
              acao={atualizaQuantidadeTotal} />
          </View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao} >Total: </Text>
            <Text style={estilos.preco} >{
              Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(total)
            }</Text>
          </View>
        </View>
        <Botao valor={nomeBotao} acao={() => { }} />
      </View>
      <View style={estilos.divisor} ></View>
    </>
  )
}
