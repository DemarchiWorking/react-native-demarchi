import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';
import { Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { style, styleCss } from '../../../assets/css/style';

type Props = IButtonProps & {
    title: string;
}

export function Button1({ type, children, style }: any) {


    return (
      <>
          <TouchableOpacity
          style={[
            styles.container,
            styles.borda,
            type ? styles[`button-outline`] : {}, 
          ]}>

          <Text  style={[ 
                      styles.text, 
                      type ? styles[`text-outline`] : {}, 
                      ]}> test </Text>
        </TouchableOpacity>
      </>
    );
}

const styles = StyleSheet.create({
    container: {
      height: 31,
      backgroundColor: 'white',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    borda: {
      borderWidth: 1,
      borderColor: style.cores.azul,
    }
    ,
    'button-outline': {
      backgroundColor: style.cores.azul,
      borderWidth: 1,
      color: style.cores.azul,
      borderColor: style.cores.azul,
    },
  
    text: {
      color: style.cores.azul,
      fontWeight: 'bold',
    },
  
    'text-outline': {
      color: 'white',
    },
  });