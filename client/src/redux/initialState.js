export const initialState = {
  cart: {
    products: [
      {
        id: '1',
        title: 'Decu box',
        price: 30,
        images: ['https://i.ibb.co/pzvYhLD/box.png', 'https://i.ibb.co/6r655dF/wooden-Box.png', 'https://i.ibb.co/d53Tj91/boxXmas.jpg'],
        category: 'decoupage',
        description: 'Description of the product - decu box',
        amount: 1,
      },
      {
        id: '6',
        title: 'Painted sneakers',
        price: 80,
        images: ['https://i.ibb.co/4ZbkvkP/sneakers.jpg'],
        category: 'painted',
        description: 'Description of the product - painted sneakers',
        amount: 1,
        notes: 'Spring motives please',
      },
    ],
    amount: 2,
    total: 110,
    delivery: 10,
  },
};
