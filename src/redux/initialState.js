export const initialState = {
  products: {
    data: [
      {
        id: '1',
        title: 'Decu box',
        price: 30,
        images: ['https://i.ibb.co/pzvYhLD/box.png', 'https://i.ibb.co/6r655dF/wooden-Box.png', 'https://i.ibb.co/d53Tj91/boxXmas.jpg'],
        category: 'decoupage',
        description: 'Description of the product - decu box',
      },
      {
        id: '2',
        title: 'Decu frame',
        price: 5,
        images: ['https://i.ibb.co/yBnWkMs/frame.jpg'],
        category: 'decoupage',
        description: 'Description of the product - decu frame',
      },
      {
        id: '3',
        title: 'Knitted baby vest',
        price: 40,
        images: ['https://i.ibb.co/8cMJSbR/babyVest.jpg'],
        category: 'knitted',
        description: 'Description of the product - knitted baby vest',
      },
      {
        id: '4',
        title: 'Decu letters',
        price: 15,
        images: ['https://i.ibb.co/LR4m90F/home-Letters.jpg'],
        category: 'decoupage',
        description: 'Description of the product - decu letters',
      },
      {
        id: '5',
        title: 'Knitted hats',
        price: 50,
        images: ['https://i.ibb.co/5cDj4JV/hats.jpg', 'https://i.ibb.co/F3ZdhMt/rocknwool-y7-NBx-Zu-L-w-unsplash-1.jpg'],
        category: 'knitted',
        description: 'Description of the product - knitted hats',
      },
      {
        id: '6',
        title: 'Painted sneakers',
        price: 80,
        images: ['https://i.ibb.co/4ZbkvkP/sneakers.jpg'],
        category: 'painted',
        description: 'Description of the product - painted sneakers',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
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
    ],
    amount: 1,
    total: 30,
  },
};
