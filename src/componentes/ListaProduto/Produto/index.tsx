
/* Presentational */
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
interface Product {
  product: {
    id: number;
    image: string;
    title: string;
    description: string;
    price: string;
  }

}
export function Produto({ product: { image, title, description, price }} : Product) : any {
  <View style={styles.container}>
    <Icon name="ios-checkmark-circle-outline" size={24} style={styles.checkIcon} />
    <View style={styles.imageContainer}>
      <Image source={{ uri: image }} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  </View>
}
