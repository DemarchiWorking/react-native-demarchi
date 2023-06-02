import { StyleSheet } from "react-native";

export const style = {
    "cores": {
      "azul": "#0A66C2",
      "vermelho": "#FF0000",
      "light": "#67e8f9"
    },
    "font-size": "16px",
    "padding": "10px"
}

export const styleCss = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  container3: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  containerRock: {
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textPage: {
    backgroundColor: 'orange',
    padding: 20,
  },

})

export const font = {
  bigger: 24,
  big: 16,
  regular: 14,
  small: 12,
  smaller: 11,
};