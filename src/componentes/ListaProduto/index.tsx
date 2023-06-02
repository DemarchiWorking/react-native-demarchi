import { View } from 'react-native';
import styles from './styles';
import { Component } from 'react';
import { Produto } from './Produto';


interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
}


interface ProductListState {
  products: any[];
}

export class ProductList extends Component<{}, ProductListState> {
  state: ProductListState = {
    products: [
      {
        id: 1,
        image: 'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=28010875',
        title: 'Acne Studios',
        description: 'Andrea nappa dusty pink',
        price: 'R$50,00',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        { this.state.products.map((product: Product) => <Produto key={product.id} product={product} />) }
      </View>
    );
  }
}