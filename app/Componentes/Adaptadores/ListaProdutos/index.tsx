import { View } from "react-native";
import  ItemProduto from "../ItemProdutos"
import Style from "@/app/Estilos/Default";
import { ScrollView } from "react-native-gesture-handler";

function ListaProdutos({produtos}:{produtos:{id:number, nome:string, preco:number} []}){
    return(
    
    <ScrollView>
        <View style={Style.container}>
        {produtos.map((p)=>
        <ItemProduto produto={p} key={p.id}>

        </ItemProduto>)}


    </View>
    </ScrollView>
    )
}

export default ListaProdutos;

