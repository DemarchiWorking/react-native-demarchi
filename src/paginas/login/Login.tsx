import { View, Text, Image, StyleSheet } from "react-native";
import { Input } from "../../componentes/Input";
import { Button } from "../../componentes/Button/Button";
import { ToggleTheme } from "../../componentes/ToggleTheme";
import { KeyboardAvoidingView } from "native-base";
import { style } from "../../../assets/css/style";

export function Login(props : any) {

  function redirect(pagina : string){
    props.navigation.navigate(pagina);
  }

  return (
    <KeyboardAvoidingView>
    <View style={{alignItems: "center", paddingTop: 290}} className="flex-1 dark:bg-black light:bg-white items-center justify-center">
        <Image source={require('../../../assets/imagens/favicon.png')}></Image>
      <View style={{paddingTop: 40}}>
        <Text>Usuário ou senha inválido.</Text>
      </View>
      <Input
        placeholder="Usuario"
      />

      
      <Input  
        placeholder="Senha"
      />
    
      <Button 
              title="Entrar" 
              w="80%" 
              />

      <Text style={{paddingTop: 30}} onPress={() => redirect('SelecionarTipoRegistro')}> Registrar </Text>

    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  login:{
    
  }

});