import { View, Text, Switch, StyleSheet } from "react-native";
import { useColorScheme } from 'nativewind'
import colors from 'tailwindcss/colors';

export function ToggleTheme() {
    const { colorScheme, toggleColorScheme } = useColorScheme();


    const className = 'font-bold'
    return (
        <View className="flex-row items-center">
            <Text className={className} style={estilo.textoPrincipal}
            > Darksss </Text>


            <Switch
                trackColor={{true: colors.blue[400], false: colors.yellow[500]}}
                thumbColor={ colorScheme === 'light' ? colors.blue[900] : colors.yellow[900] } 
                onValueChange={ toggleColorScheme }
                value={ colorScheme === 'light'}/>

            <Text className="dark:text-white light:text-black text-2xl font-bold my-4"
            > Light </Text>
        </View>

    )
}
const estilo = StyleSheet.create({
    textoPrincipal:{
        color: 'red',
        //fontSize: 30
    }})