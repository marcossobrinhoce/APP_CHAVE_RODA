import React from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet} from "react-native";

export default function App(){
  return(
    <KeyboardAvoidingView style={styles.background}>
      
      <Text style={styles.submitText}>Menu de Serviços</Text>
            
	  <View style={styles.container}>

        <TouchableOpacity style={styles.btnSubmit1}>
          <Text style={styles.submitText}>Agendar Serviço Carro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSubmit2}>
          <Text style={styles.submitText}>Agendar Serviço Moto</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.btnSubmit3}>
          <Text style={styles.submitText}>Agendar Serviço Bicicleta</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.btnSubmit4}>
          <Text style={styles.submitText}>Agendar Serviço Outros Autos</Text>
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
  btnSubmit1:{
    backgroundColor: '#0000CD',
    width: '90%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  btnSubmit2:{
    backgroundColor: '#87CEFA',
    width: '90%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  btnSubmit3:{
    backgroundColor: '#4682B4',
    width: '90%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  btnSubmit4:{
    backgroundColor: '#00CED1',
    width: '90%',
    height: 90,
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