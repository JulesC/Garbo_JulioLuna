export const productos = [
    {
        id: '1',
        title: 'Remera',
        price: 250,
        stock: 5,
        url: '#',
        img: '../img/logo.png'
    },
    {
        id: '2',
        title: 'Jean',
        price: 1220,
        stock: 15,
        url: '#',
        img: '../img/logo.png'
    },
    {
        id: '3',
        title: 'Camisa',
        price: 600,
        stock: 3,
        url: '#',
        img: '../img/logo.png'
    }
]

export const getProductos = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
    }, 2000)
})

