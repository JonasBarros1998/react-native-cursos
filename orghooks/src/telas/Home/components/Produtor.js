import React, {useReducer, useMemo} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Estrelas from '../../../components/Estrelas';

const distanciaEmMetros = distancia => {
  return `${distancia}m`;
};

export default function Produtor({nome, imagem, distancia, estrelas}) {
  const [selecionado, inverterSelecionado] = useReducer(
    select => !select,
    false,
  );

  const distanciaTexto = useMemo(
    () => distanciaEmMetros(distancia),
    [distancia],
  );

  return (
    <TouchableOpacity style={estilos.cartao} onPress={inverterSelecionado}>
      <Image source={imagem} accessibilityLabel={nome} style={estilos.imagem} />
      <View style={estilos.informacoes}>
        <View>
          <Text style={estilos.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Text style={estilos.distancia}>{distanciaTexto}</Text>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#f6f6f6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',

    //ANDROID
    elevation: 4,

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },

  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },

  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },

  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },

  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});
