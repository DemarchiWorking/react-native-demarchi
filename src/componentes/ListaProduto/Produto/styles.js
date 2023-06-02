import { StyleSheet, Dimensions } from 'react-native';
import { style } from '../../../../assets/css/style';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 3,
    width: (width - 45) / 2,
    marginBottom: style.padding,
    shadowColor: style.colors.light,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    alignSelf: 'flex-start',
  },

  checkIcon: {
    position: 'absolute',
    right: style.metrics.padding,
    top: style.metrics.padding,
    color: style.cores.light,
    zIndex: 1,
  },

  imageContainer: {
    padding: style.metrics.padding,
  },

  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },

  infoContainer: {
    padding: style.metrics.padding,
    borderTopWidth: 1,
    borderColor: style.cores.light,
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: style.cores.light,
  },

  description: {
    textAlign: 'center',
    color: style.cores.light,
  },

  price: {
    textAlign: 'center',
    color: style.cores.light,
    marginTop: 5,
  },
});

export default styles;