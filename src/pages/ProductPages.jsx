import React from 'react';
import UpNavbar from '../components/Navbar/UpNavbar';
import NavbarTwo from '../components/Navbar/NavbarTwo';
import ProductCard from '../components/Products/ProductCard';
import ProductList from '../components/Products/ProductList';
import ProductPagination from '../components/Products/ProductPagination';
import Footer from '../components/Footer/Footer';

const ProductPages = () => {
    return (
        <div>
            <UpNavbar/>
            <NavbarTwo/>
            <ProductPagination/>
            <ProductList/>
            <Footer/>
        </div>
    );
};

export default ProductPages;