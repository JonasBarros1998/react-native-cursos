import React from "react";
import {Text, View} from 'react-native';
import estilos from './estilos';
import Item from '../../../componentes/Item';

export default function ItemCarrinho({nome, 
    preco, 
    descricao, 
    quantidade: quantidadeInicial}) {

  return (<>
    <View 
      style={estilos.informacao}>
      <Text style={estilos.nome}>{nome}</Text>
      <Text style={estilos.preco}>{
        Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(preco)
      }</Text>
      <Text style={estilos.descricao} >{descricao}</Text>
    </ View>

    <Item 
      nomeBotao="Remover do carrinho"
      estilos={estilos}
      preco={preco} 
      quantidadeInicial={quantidadeInicial}
    />
  </>)
}
