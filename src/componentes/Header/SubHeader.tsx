import { View, Image, Text, TouchableOpacity } from "react-native"; 
import { style, styleCss } from "../../../assets/css/style";
import { font } from "../../../assets/css/style";
import { Ionicons } from '@expo/vector-icons';
import { Button1 } from "../Button/Button1";

import { StyleSheet } from 'react-native';

export function SubHeader() {
    return (
        <View style={styleCss.container2} className="border border-black border-solid border-1">
          <Image
            style={styles.avatar}
            source={require('../../../assets/imagens/perfil-test.png')}
          />
        <View style={styles.profileInfo}> 
          <Text style={styles.name}> Antonio </Text>
          <Text style={styles.bio}> Desenvolvedor de Software </Text>

          <View style={styles.buttonContainer}> 
            <Button1 title="Mensagem" type="outline"> </Button1>
            <Button1 title="Seguir"> </Button1>
          </View>
          
        </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      height: 31,
      backgroundColor: 'red',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 10,
      paddingTop: 16,
    },
    profileContainer: {
        flexDirection: 'row',
      },
    
      avatar: {
        width: 68,
        height: 68,
        borderRadius: 34,
        marginRight: 10,
      },
    
      profileInfo: {
        flex: 1,
      },
    
      name: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        marginTop: 5,
      },
    
      bio: {
        fontSize: font.regular,
        color: '#333',
        marginTop: 5,
      },
    
      firstButton: {
        marginRight: 10,
      },
      

});