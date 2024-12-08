export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
}

export const toppicks: Product[] = [
    {
        id: 1,
        name: 'Trenton modular sofa_3',
        price: 'Rs. 25,000.00',
        image: '/images/singlesofa.jpg',
    },
    {
        id: 2,
        name: 'Granite dining table with dining chair',
        price: 'Rs. 25,000.00',
        image: '/images/offwhite-chair-table.jpg',
    },
    {
        id: 3,
        name: 'Outdoor bar table and stool',
        price: 'Rs. 25,000.00',
        image: '/images/outdoor-chairtable.jpg',
    },
    {
        id: 4,
        name: 'Plain console with teak mirror',
        price: 'Rs. 25,000.00',
        image: '/images/table2.jpg',
    },
];