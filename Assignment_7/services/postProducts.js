const fetch = require('node-fetch');

const products = [
    {id: '1', image: 'https://github.com/Ekow-Davis/rn-assignment6-11083926/blob/main/Assignment_6/assets/dress1.png', title: 'Office Wear', description: 'Reversible angora cardigan', price: 120, category: 'clothing'},
    {id: '2', image: 'https://github.com/Ekow-Davis/rn-assignment6-11083926/blob/main/Assignment_6/assets/dress2.png', title: 'Black', description: 'Reversible angora cardigan', price: 120, category: 'clothing'},
    {id: '3', image: 'https://github.com/Ekow-Davis/rn-assignment6-11083926/blob/main/Assignment_6/assets/dress3.png', title: 'Church Wear', description: 'Reversible angora cardigan', price: 120, category: 'clothing'},
    {id: '4', image: 'https://github.com/Ekow-Davis/rn-assignment6-11083926/blob/main/Assignment_6/assets/dress4.png', title: 'Lamerei', description: 'Reversible angora cardigan', price: 120, category: 'clothing'},
    {id: '5', image: 'https://github.com/Ekow-Davis/rn-assignment6-11083926/blob/main/Assignment_6/assets/dress5.png', title: '21WN', description: 'Reversible angora cardigan', price: 120, category: 'clothing'},
    {id: '6', image: 'https://github.com/Ekow-Davis/rn-assignment6-11083926/blob/main/Assignment_6/assets/dress6.png', title: 'Lopo', description: 'Reversible angora cardigan', price: 120, category: 'clothing'},
    {id: '7', image: 'https://github.com/Ekow-Davis/rn-assignment6-11083926/blob/main/Assignment_6/assets/dress7.png', title: '21WN', description: 'Reversible angora cardigan', price: 120, category: 'clothing'},
    {id: '8', image: 'https://github.com/Ekow-Davis/rn-assignment6-11083926/blob/main/Assignment_6/assets/dress3.png', title: 'Lame', description: 'Reversible angora cardigan', price: 120, category: 'clothing'},
];

const pushProductsToAPI = async () => {
    try {
        const responses = await Promise.all(products.map(product =>
            fetch('https://fakestoreapi.com/products', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }).then(res => res.json())
        ));
        console.log('Products added successfully:', responses);
    } catch (error) {
        console.error('Error adding products:', error);
    }
};

pushProductsToAPI();
