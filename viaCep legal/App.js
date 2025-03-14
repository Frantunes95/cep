import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { useState } from 'react';

export default function App() {

  let [cep, setCep] = useState("");
  let [render, setRender] = useState([]);
  let [rua, setRua] = useState('');
  let [numero, setNumero] = useState('');
  let [complemento, setComplemento] = useState('');
  let [bairro, setBairro] = useState('');
  let [cidade, setCidade] = useState('');
  let [estado, setEstado] = useState('');
  let [regiao, setRegiao] = useState('');


  const BuscaCep = (x) => {
    let url = `https://viacep.com.br/ws/${x}/json/`;
    console.log(url);

    fetch(url)
      .then(
        (resp) => { return resp.json() }
      ).then(
        (dados) => {
          console.log(dados);

          console.log(dados.logradouro);
          console.log(dados["logradouro"]);
          setRender(dados);
          setRua(dados.logradouro);
          setBairro(dados.bairro);
          setCidade(dados.localidade);
          setEstado(dados.estado);
          setRegiao(dados.regiao);
        }
      ).catch(
        (erro) => { console.log(erro) }
      )

  }

  return (
    
      <View style={styles.container}>
        <Text>Via Cep</Text>

        <TextInput
          label={'CEP:'}
          mode='outlined'
          onChangeText={(value) => { setCep(value) }}
          onBlur={()=>{BuscaCep(cep)}}
        />

        <Button
          style={{marginTop:10}} 
          icon="magnify"
          onPress={() => { BuscaCep(cep) }}
          mode="contained">
          Busca
        </Button>

        <TextInput
          label={'Endereço:'}
          mode='outlined'
          value={rua}
          onChangeText={(value) => { setRua(value) }}
          editable={false}
          multiline={true}
        />

        <TextInput
          label={'Número:'}
          mode='outlined'
          value={numero}
          onChangeText={(value) => { setNumero(value) }}
        />

        <TextInput
          label={'Complemento:'}
          mode='outlined'
          value={complemento}
          onChangeText={(value) => { setComplemento(value) }}
        />

        <TextInput
          label={'Bairro:'}
          mode='outlined'
          value={bairro}
          onChangeText={(value) => { setBairro(value) }}
          editable={false}
          multiline={true}
        />

        <TextInput
          label={'Cidade:'}
          mode='outlined'
          value={cidade}
          onChangeText={(value) => { setCidade(value) }}
          editable={false}
        />

        <TextInput
          label={'Estado:'}
          mode='outlined'
          value={estado}
          onChangeText={(value) => { setEstado(value) }}
          editable={false}
        />

        <TextInput
          label={'Região:'}
          mode='outlined'
          value={regiao}
          onChangeText={(value) => { setRegiao(value) }}
          editable={false}
        />
        <StatusBar style="auto" />
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
