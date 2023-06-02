import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styleCss } from '../../../assets/css/style';

export function SelecionarTipoRegistro(props : any) {

  return (
    <View style={styleCss.container3}>
    
    <Text style={{fontSize: 30, paddingBottom: 30}}> Qual sua busca ? </Text> 
      <View style={styleCss.container2}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Registrar')} style={{ padding: 30, borderWidth: 1, borderColor: 'black' }}>
            <Ionicons name="briefcase" size={100} color="#555"/>   
            <Text> Trabalho </Text> 
            </TouchableOpacity>
  
  
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={{ padding: 30 , borderWidth: 1, borderColor: 'black' }}>
            <Ionicons name="search" size={100} color="#555"/> 
            <Text> Recrutamento </Text> 
            </TouchableOpacity>
      </View>
    </View>
  );
}
