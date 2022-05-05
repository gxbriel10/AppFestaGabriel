import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Componente from './components/componente.js';

export default function App() {
  const [inputQtd, setInputQtd] = useState(0);
  const [qtd, setQtd] = useState(0);

  function enviaValor(){
    setQtd(inputQtd);
  }
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Quantidade de Pessoas </Text>
        <TextInput
          style={styles.input}
          value={inputQtd}
          onChangeText={(value) => setInputQtd(value)}
        />
      </View>
      <TouchableOpacity style={styles.botao}
       onPress={()=>setQtd(inputQtd)}
      >
        <Text style={styles.textoBotao}> Calcular </Text>
      </ TouchableOpacity>
      <Componente qtd={qtd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBCBCB',
    alignItems: 'left',
    justifyContent: 'center',
  },
  bloco: {
    width: '100%',
    marginBottom: 20,
  },
  textoBloco: {
    color:'#0000',
    marginLeft: '10%',
    fontSize: 20,
  },
  input: {
    color:'#0000',
    borderWidth: 1,
    width: '80%',
    marginLeft: '10%',
    borderRadius: 10,
    fontSize: 25,
  },
  botao:{
    width: '24%',
    marginLeft: '10%',
    borderRadius: 10,
    backgroundColor:'#6D13E8',
    marginBottom:20
  },
  textoBotao: {
    color:'#6D13E8',
    marginLeft: '10%',
    fontSize: 20,
    color:"#FFF"
}}); 
