import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import ListaProdutos from "./Componentes/Adaptadores/ListaProdutos";

const produtos = [
  {id : 1, nome: "Cola-cola", preco: 5.5},
  {id : 2, nome: "Pepsi", preco: 5},
  {id : 3, nome: "Fanta", preco: 5.5},
  {id : 4, nome: "Guarana", preco: 5.5}
];


export default function Index() {

  let [contador, setContador]= useState(0);

  return (
    <View
      style={
       estilo.container
       
      }
    >
      <ListaProdutos produtos={produtos}></ListaProdutos>

      <Button title={`Clicado ${contador.toString()} vezes`} onPress={()=>{clicarBotao()}}>

      </Button>
    </View>
    );

    function clicarBotao(){
      setContador(contador+1);
    }
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        alignItems: "flex-start"
  },
  text: {
    color: "#000000"
  },
  titulo: {
    color: "#000000",
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold",
    fontFamily: "chiller",
  }
});

