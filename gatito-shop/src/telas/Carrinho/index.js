import React from 'react';
import { FlatList } from 'react-native';
import ItemCarrinho from './item';
import StatusCarrinho from '../../componentes/StatusCarrinho';


const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.90,
    descricao: "NÃO DE BANHO NO SEU GATO, MAS SE PRECISAR NÓS DAMOS",
    quantidade: 2,
  },
  {
    id: 2,
    nome: "Vacina v4",
    preco: 89.90,
    descricao: "Uma dose da vacina v4, seu gato precisa de duas",
    quantidade: 1,
  },
  {
    id: 3,
    nome: "Vacina antirrábica",
    preco: 99.90,
    descricao: "Uma dose da vacina antirrábica, seu gato precisa de uma por ano",
    quantidade: 2
  },
]

export default function Carrinho() {

  const total = servicos.reduce((soma, {preco, quantidade}) => 
      soma += (preco * quantidade), 0)
    
  return (
    <>
      <StatusCarrinho total={total}/>
      <FlatList
        data={servicos}
        renderItem={({ item }) => <ItemCarrinho {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>

  )

}
