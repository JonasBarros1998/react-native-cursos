import React, { useState } from "react";
import { Text, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import Item from '../../../componentes/Item';

export default function ItemServicos({ nome, preco, descricao }) {
  
  const [expandir, setExpandir] = useState(false);

  const inverteExpandir = () => {
    setExpandir(!expandir)
  }

  return <>
    <TouchableOpacity
      style={estilos.informacao}
      onPress={inverteExpandir}>
      <Text style={estilos.nome}>{nome}</Text>
      <Text style={estilos.preco}>{
        Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(preco)
      }</Text>
      <Text style={estilos.descricao} >{descricao}</Text>
    </ TouchableOpacity>
    {expandir && 
      <Item 
        nomeBotao="Adicionar ao carrinho"
        estilos={estilos}
        preco={preco}
      />
    }
  </>
}
