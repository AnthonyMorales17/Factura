export const invoice = {
    id:10,
    name: 'Computadoras',
    client: {
        name: 'Anthony',
        lastname: 'Morales',
        address: {
            country: 'Ecuador',
            city: 'El Recreo',
            street: 'Av Moran Valverde 123',
            number: 1028
        },
    },
    company: {
        name: 'Accme',
        ruc: '123456789'
    },
    items: [
        {   id: 1,
            product: 'Peluche',
            price: 40,
            quantity: 1
        },
        {   id: 2,
            product: 'Laptop',
            price: 60,
            quantity: 1
        },
        {   id: 3,
            product: 'Mochilas',
            price: 10,
            quantity: 1
        }
    ]
}