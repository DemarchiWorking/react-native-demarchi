import { View, Text, Button, TouchableOpacity, ScrollView } from "react-native";
import { Header } from "../../componentes/Header/Header";
import { Tabs } from "../../navegacao/Tabs/Tabs";
import { SubHeader } from "../../componentes/Header/SubHeader";


export function Perfil() {
  

  return (
  <View style={{flex:1}}>
    
    <Header/>
    <SubHeader/>
    <ScrollView/>
    <Tabs/>
  </View>
  );
}
