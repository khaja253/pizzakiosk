import product1 from '../../images/product-1.jpg';
import product2 from '../../images/product-2.jpg';
import product3 from '../../images/product-3.jpg';
import sweet1 from '../../images/sweet3.jpg';
import sweet2 from '../../images/sweet-2.jpg';
import sweet3 from '../../images/sweet-3.jpg';
import { makeAutoObservable } from 'mobx';

class MainData {
  constructor() {
    makeAutoObservable(this);
  }
  productData = [
    {
      heading: "Choose Your Favourite Pizza",
      details: [
        {
          img: product1,
          alt: 'Pizza',
          name: 'BBQ Chicken Pizza',
          desc:
            'BBQ Sauce,Chicken,Cheese,Red Onion',
          price: 19.99,
          quantity: 0,
          button: 'Add to Cart'
        },

        {
          img: product2,
    alt: 'Pizza',
    name: 'Buffalo Pizza',
    desc:
      ' ball mozzarella,blue cheese,chicken,red onion',
    price: 16.99,
    quantity: 0,
    button: 'Add to Cart'
        },
        {
          img: product3,
          alt: 'Pizza',
          name: 'The Works Pizza',
          desc:
            'pepperoni, julienne-cut Canadian bacon,Italian sausage.',
          price: 14.99,
          quantity: 0,
          button: 'Add to Cart'
        },
      ],
    },
    {
      heading: "Sweet treats for you",
      details: [
        {
          img: sweet2,
          alt: 'Sweet',
          name: 'Gulab-Jamun',
          desc:
            'Gulab jamun is a milk-solid-based sweet from the Indian subcontinent made from milk product called khowa',
          price: 9.99,
          quantity: 0,
          button: 'Add to Cart'
        },
        {
          img: sweet3,
          alt: 'Ice Cream',
          name: 'Tutti frutti',
          desc:
            'Colorful confectionery containing various chopped and usually candied fruits, or an artificial or natural flavouring.',
          price: 12.99,
          quantity: 0,
          button: 'Add to Cart'
        },
        {
          img: sweet1,
          alt: 'Halwa',
          name: 'Carrot Halwa',
          desc:
            'Made by placing grated carrots in a pot containing a specific amount of water, milk, sugar & cardamom.',
          price: 9.99,
          quantity: 0,
          button: 'Add to Cart'
        },
      ],
    },
  ];
}


export const products_data = new MainData()
window.products_data = products_data