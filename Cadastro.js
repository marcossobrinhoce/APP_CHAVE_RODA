import React from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet} from "react-native";

export default function App(){
  return(
    <KeyboardAvoidingView style={styles.background}>
      
      <Text style={styles.submitText}>Cadastro usuário</Text>
            
	  <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Nome" autoCorrect={false} onChangeText={()=> {}} />

        <TextInput style={styles.input} placeholder="CPF" autoCorrect={false} onChangeText={()=> {}} />

        <TextInput style={styles.input} placeholder="e-mail" autoCorrect={false} onChangeText={()=> {}} />

        <TextInput style={styles.input} placeholder="Senha" autoCorrect={false} onChangeText={()=> {}} />

        <TextInput style={styles.input} placeholder="Repetir Senha" autoCorrect={false} onChangeText={()=> {}} />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Salvar</Text>
        </TouchableOpacity>

        
        

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    color: '#FFF'
  },
  containerLogo:{
    flex:1,
    justifyContent: 'center',
    color: '#FFF'

  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'90%',
    paddingBottom: 50
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit:{
    backgroundColor: '#00FF00',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  submitText:{
    color: '#FFF',
    fontSize: 18
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#FFF'
  }
});