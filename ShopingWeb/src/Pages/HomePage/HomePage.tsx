import { useEffect, useState } from 'react';
import './HomePage.css';
import { Container, Row } from 'react-bootstrap';
import NavbarMenu from '../../Components/NavbarMenu/NavbarMenu';
import ProductCard from '../../Components/ProductCard/ProductCard';
import axios from 'axios';
import FilteringHomePage from '../../Components/FilteringHomePage/FilteringHomePage';

axios.defaults.baseURL = 'https://fakestoreapi.com';

export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export default function HomePage() {
    const [allProducts, setAllProducts] = useState<ProductType[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
    const [filter, setFilter] = useState<string>('all');

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        filterProducts();
    }, [allProducts, filter]);

    const getProducts = () => {
        axios.get('/products').then(res => {
            setAllProducts(res.data);
            setFilteredProducts(res.data);
        });
    };

    const filterProducts = () => {
        if (filter === 'all') {
            setFilteredProducts(allProducts);
        } else {
            setFilteredProducts(allProducts.filter(product => product.category.toLowerCase().includes(filter)));
        }
    };

    return (
        <Container className='container'>
            <NavbarMenu />
            <div>
                <FilteringHomePage setFilter={setFilter} />
                <Container className='cards_holder'>
                    <Row>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <p>در حال بارگذاری محصولات...</p>
                        )}
                    </Row>
                </Container>
            </div>
        </Container>
    );
}