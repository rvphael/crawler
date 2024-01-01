import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import ProductDetail from '../components/molecules/ProductDetail';
import ProductImage from '../components/atoms/Image';
import { fetchProductDetails } from '../utils/api';
import { Product } from '../types/Product';

const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const productUrl = queryParams.get('url');
    if (productUrl) {
      fetchProductDetails(productUrl)
        .then(data => {
          if (data) {
            setProduct(data);
          } else {
            navigate('/product-not-found');
          }
        })
        .catch(err => {
          console.error('Failed to fetch product details:', err);
          navigate('/product-not-found');
        });
    }
  }, [search, navigate]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <ProductImage src={product.imageUrl} alt={product.name} />
      <ProductDetail
        name={product.name}
        barCode={product.barCode}
        brand={product.brand}
        price={product.price}
      />
      <Footer />
    </div>
  );
};

export default ProductPage;
