export interface University {
    alpha_two_code: string;
    web_pages: Array<string>;
    name: string;
    domains: Array<string>;
    state: string | null;
    country: string;
}

export interface CatFact {
    fact: string;
    length: number;
}

export interface Product {
    price: number;
    name: string;
    description: string;
}