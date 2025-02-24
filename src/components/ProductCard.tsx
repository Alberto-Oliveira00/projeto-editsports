import React from 'react';
import { MessageSquare } from 'lucide-react';
import '../styles/ProductCard.css';

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-content">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <a
          href="https://wa.me/5511947814551"
          target="_blank"
          rel="noopener noreferrer"
          className="product-link"
        >
          <MessageSquare className="icon" />
          Solicitar Orçamento
        </a>
      </div>
    </div>
  );
};

export default ProductCard;