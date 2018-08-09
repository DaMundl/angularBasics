export class ProductService {

  getProducts() {
    return [
      {
        imageUrl: 'https://placeimg.com/120/120/tech/random',
        productName: 'Product 1',
        releasedDate: new Date(2017, 5, 31),
        description: 'An awesome product',
        rating: 2,
        numOfReviews: 27
      },
      {
        imageUrl: 'https://placeimg.com/120/120/tech/random',
        productName: 'Product 2',
        releasedDate: new Date(2017, 10, 11),
        description: 'Another awesome product',
        rating: 5,
        numOfReviews: 120
     },
     {
        imageUrl: 'https://placeimg.com/120/120/tech/random',
        productName: 'Product 3',
        releasedDate: new Date(2018, 1, 1),
        description: 'Not so awesome',
        rating: 1,
        numOfReviews: 10
     },
    ];
  }
}
