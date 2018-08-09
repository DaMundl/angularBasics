export class ProductService {

  getProducts() {
    return [
      {
        imageUrl: 'https://placeimg.com/120/120/tech/random',
        productName: 'Product 1',
        releasedDate: 'October 31, 2017',
        description: 'An awesome product',
        rating: 2,
        numOfReviews: 27
      },
      {
        imageUrl: 'https://placeimg.com/120/120/tech/random',
        productName: 'Product 2',
        releasedDate: 'November 10, 2017',
        description: 'Another awesome product',
        rating: 5,
        numOfReviews: 120
     },
     {
        imageUrl: 'https://placeimg.com/120/120/tech/random',
        productName: 'Product 3',
        releasedDate: 'January 1, 2018',
        description: 'Not so awesome',
        rating: 1,
        numOfReviews: 10
     },
    ];
  }
}
