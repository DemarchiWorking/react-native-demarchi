import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styleCss } from '../../../assets/css/style';
import { Header } from "../../componentes/Header/Header";
import { Button } from "../../componentes/Button/Button";
import { ToggleTheme } from "../../componentes/ToggleTheme";

export function Home(props : any) {
  var t : string = "tst";

  function alerta(){
    alert("test");
  }
  function redirect(pagina : string){
    props.navigation.navigate(pagina);
  }
  return (
  <View style={{flex:1}} className="space-y-5">



    <Button title="Login"  onPress={() => redirect('Login')} className="">
    </Button>

    
    <Button title="Reg"  onPress={() => redirect('SelecionarTipoRegistro')}/>

    <Button title="Perfil"  onPress={() => redirect('Perfil')}/>

    
  </View>
  );
}
