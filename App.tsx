import { Home } from './src/paginas/home/Home';
import { style } from './assets/css/style';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './src/paginas/login/Login';
import { white } from 'tailwindcss/colors';
import { NativeBaseProvider } from 'native-base';
import { Perfil } from './src/paginas/perfil/Perfil';
import { SelecionarTipoRegistro } from './src/paginas/registrar/SelecionarTipoRegistro';
import { Registrar } from './src/paginas/registrar/Registrar';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ Home } options={{ 
          title:"Bem Vindo1", headerStyle:{ backgroundColor: "#121214"}, headerTintColor: '333', headerTitleStyle: { fontWeight: 'bold', color: white}}} />
        
        <Stack.Screen name="Login" component={ Login }  options={{headerShown:false}}/>

        <Stack.Screen name="Perfil" component={ Perfil } options={{ 
                  title:"Bem Vindo2", headerStyle:{backgroundColor: style.cores.azul}, headerTintColor: '333', headerTitleStyle: { fontWeight: 'bold'}}} />

        <Stack.Screen name="SelecionarTipoRegistro" component={ SelecionarTipoRegistro } options={{ 
                  title:"Bem Vindo3", headerStyle:{backgroundColor: style.cores.azul}, headerTintColor: '333', headerTitleStyle: { fontWeight: 'bold'}}} />

          <Stack.Screen name="Registrar" component={ Registrar } options={{ 
                  title:"Bem Vindo3", headerStyle:{backgroundColor: style.cores.azul}, headerTintColor: '333', headerTitleStyle: { fontWeight: 'bold'}}} />

      </Stack.Navigator>
      </NavigationContainer>
      </NativeBaseProvider>
  );
}
