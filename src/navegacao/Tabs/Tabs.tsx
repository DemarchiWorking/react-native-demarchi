import { View, Text, Button, TouchableOpacity } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import metrics from "../../../assets/css/metrics";
import { style } from "../../../assets/css/style";

export function Tabs() {
  

  return (
  <View style={styles.container}>
  <Ionicons name="copy" size={30} color="#555"  style={styles.icon}/>
  <Ionicons name="search" size={30} color="#555"  style={styles.icon}/>
  <Ionicons name="add-circle" size={30} color="#555" style={styles.mainIcon}/>
  <Ionicons name="notifications" size={30} color="#555"  style={styles.icon}/>
  <Ionicons name="code-working-sharp" size={30} color="#555"  style={styles.icon}/>
  </View>
  );


}
const styles = StyleSheet.create({
      container: {
        backgroundColor: "white",
        height: metrics.tabBarHeight,
        paddingHorizontal: metrics.padding,
        borderColor: style.cores.light,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
      },
      icon: {
        color: "#333"
      },
      active: {
        color: style.cores.vermelho
      },
      main: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: style.cores.vermelho,
        justifyContent: 'center',
        alignItems: 'center',
      },
      mainIcon: {
        color: style.cores.azul,
        fontSize: 50
      }
})