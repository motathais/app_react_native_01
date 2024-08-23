import { View } from "react-native";
import  ItemProduto from "../ItemProdutos"

function ListaProdutos({produtos}:{produtos:{nome:string, preco:number} []}){
    return(<View>
        {produtos.map((p)=>
        <ItemProduto produto={p}>

        </ItemProduto>)}


    </View>
    )
}

export default ListaProdutos

