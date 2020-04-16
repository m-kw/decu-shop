export const initialState = {
  products: {
    data: [
      {
        id: 1,
        title: 'Decu box',
        price: 30,
        images: ['https://i.ibb.co/pzvYhLD/box.png', 'https://i.ibb.co/6r655dF/wooden-Box.png', 'https://i.ibb.co/d53Tj91/boxXmas.jpg'],
        category: 'decoupage',
      },
      {
        id: 1,
        title: 'Decu frame',
        price: 5,
        images: ['https://i.ibb.co/yBnWkMs/frame.jpg'],
        category: 'decoupage',
      },
      {
        id: 3,
        title: 'Knitted baby vest',
        price: 40,
        images: ['https://i.ibb.co/8cMJSbR/babyVest.jpg'],
        category: 'knitted',
      },
      {
        id: 4,
        title: 'Decu letters',
        price: 15,
        images: ['https://i.ibb.co/LR4m90F/home-Letters.jpg'],
        category: 'decoupage',
      },
      {
        id: 5,
        title: 'Knitted hats',
        price: 50,
        images: ['https://i.ibb.co/5cDj4JV/hats.jpg', 'https://i.ibb.co/F3ZdhMt/rocknwool-y7-NBx-Zu-L-w-unsplash-1.jpg'],
        category: 'knitted',
      },
      {
        id: 6,
        title: 'Painted sneakers',
        price: 80,
        images: ['https://i.ibb.co/4ZbkvkP/sneakers.jpg'],
        category: 'painted',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
