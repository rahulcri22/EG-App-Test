import { Product } from "../../interfaces/data"

export const mockProduct: Product[] = [
    {
        price: 100,
        name: 'Toyota',
        description: 'Corolla'
    },
    {
        price: 200,
        name: 'Suzuki',
        description: 'Swift'
    },
    {
        price: 300,
        name: 'Audi',
        description: 'Q7'
    },
    {
        price: 400,
        name: 'BMW',
        description: 'X5'
    },
    {
        price: 500,
        name: 'Mercedes',
        description: 'G63'
    },
    {
        price: 600,
        name: 'Honda',
        description: 'Civic'
    },
    {
        price: 700,
        name: 'Nissan',
        description: 'GTR'
    },
    {
        price: 800,
        name: 'Volkswagen',
        description: 'Golf'
    },
    {
        price: 900,
        name: 'Dacia',
        description: 'Duster'
    }
];

export const mockProductHttpResponse: any = {
    ok: true,
    data: mockProduct
}