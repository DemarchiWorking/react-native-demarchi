import { View, Text, Image, StyleSheet } from "react-native";
import { Input } from "../../componentes/Input";
import { Button } from "../../componentes/Button/Button";
import { ToggleTheme } from "../../componentes/ToggleTheme";
import { KeyboardAvoidingView } from "native-base";
import { style } from "../../../assets/css/style";

export function Registrar(props : any) {

  function redirect(pagina : string){
    props.navigation.navigate(pagina);
  }

  return (
    <KeyboardAvoidingView>
    <View style={{alignItems: "center", paddingTop: 160}} className="flex-1 dark:bg-black light:bg-white items-center justify-center">
    <View style={{paddingTop: 40}}>
        <Text>Usuário ou senha inválido.</Text>
      </View>

      <Input
        placeholder="Nome"
      />
      
      <Input  
        placeholder="Sobrenome"
      />

      <Input
        placeholder="Senha"
      />
      
      <Input  
        placeholder="Senha"
      />
    


      <Button 
              title="Entrar" 
              w="80%" 
              />

      <Text style={{paddingTop: 30}} onPress={() => redirect('Home')}> Voltar </Text>

    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  login:{
    
  }

});