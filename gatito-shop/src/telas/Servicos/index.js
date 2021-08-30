import React from 'react';
import {
  FlatList,
} from 'react-native';
import ItemServicos from './item'

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.90,
    descricao: "NÃO DE BANHO NO SEU GATO, MAS SE PRECISAR NÓS DAMOS"
  },
  {
    id: 2,
    nome: "Vacina v4",
    preco: 89.90,
    descricao: "Uma dose da vacina v4, seu gato precisa de duas"
  },
  {
    id: 3,
    nome: "Vacina antirrábica",
    preco: 99.90,
    descricao: "Uma dose da vacina antirrábica, seu gato precisa de uma por ano"
  },
]

export default function Servicos() {
  return (
    <>
      <FlatList
        data={servicos}
        renderItem={({ item }) => <ItemServicos {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  )

}
