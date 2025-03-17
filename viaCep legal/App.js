import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { TextInput, Text, Button, List } from 'react-native-paper';
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
    <ScrollView>
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
          style={{marginTop:5}}
        />

        <TextInput
          label={'Número:'}
          mode='outlined'
          value={numero}
          onChangeText={(value) => { setNumero(value) }}
          style={{marginTop:5}}
        />

        <TextInput
          label={'Complemento:'}
          mode='outlined'
          value={complemento}
          onChangeText={(value) => { setComplemento(value) }}
          style={{marginTop:5}}
        />

        <TextInput
          label={'Bairro:'}
          mode='outlined'
          value={bairro}
          onChangeText={(value) => { setBairro(value) }}
          editable={true}
          multiline={true}
          style={{marginTop:5}}
        />

        <TextInput
          label={'Cidade:'}
          mode='outlined'
          value={cidade}
          onChangeText={(value) => { setCidade(value) }}
          editable={true}
          style={{marginTop:5}}
        />

        <TextInput
          label={'Estado:'}
          mode='outlined'
          value={estado}
          onChangeText={(value) => { setEstado(value) }}
          editable={true}
          style={{marginTop:5}}
        />

        <TextInput
          label={'Região:'}
          mode='outlined'
          value={regiao}
          onChangeText={(value) => { setRegiao(value) }}
          editable={true}
          style={{marginTop:5}}
        />

        <List.Section title="Estado">
          <List.Accordion
            title="Selecione o Estado"
            >

              <List.Item title="AC"/>
              <List.Item title="AL"/>
              <List.Item title="AP"/>
              <List.Item title="AM"/>
              <List.Item title="BA"/>
              <List.Item title="CE"/>
              <List.Item title="DF"/>
              <List.Item title="ES"/>
              <List.Item title="GO"/>
              <List.Item title="MA"/>
              <List.Item title="MS"/>
              <List.Item title="MT"/>
              <List.Item title="MG"/>
              <List.Item title="PA"/>
              <List.Item title="PB"/>
              <List.Item title="PR"/>
              <List.Item title="PE"/>
              <List.Item title="PI"/>
              <List.Item title="RJ"/>
              <List.Item title="RN"/>
              <List.Item title="RS"/>
              <List.Item title="RO"/>
              <List.Item title="RR"/>
              <List.Item title="SC"/>
              <List.Item title="SP"/>
              <List.Item title="SE"/>
              <List.Item title="TO"/>
            
          </List.Accordion>

        </List.Section>
        <StatusBar style="auto" />
      </View>
      </ScrollView>
    
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
