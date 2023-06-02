import { View,Text, TouchableOpacity } from "react-native"; 
import { style, styleCss } from "../../../assets/css/style";
import { Ionicons } from '@expo/vector-icons';
import { Button1 } from "../Button/Button1";
import { StyleSheet } from "react-native";
import metrics from "../../../assets/css/metrics";


export function Header() {
    return (
        <View style={styles.container} >
            <Ionicons name="arrow-back" size={30} color="#555"/>
            <Text style={styles.text}> Perfil </Text>
            <Ionicons name="search" size={30} color="#555"/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height: metrics.headerHeight,
      paddingTop: metrics.headerPadding,
      paddingHorizontal: metrics.padding,
      borderBottomWidth: 1,
      borderColor:  style.cores.light,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18
    }
})