import React, { useState } from 'react';
import './ProductCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '../Rating/Rating';
import { ProductType } from '../../Pages/HomePage/HomePage'; // اطمینان حاصل کنید که نوع را به درستی ایمپورت کرده‌اید

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isadded, setIsAdded] = useState(false);
  const expandedToggle = () => {
    setIsExpanded(prev => !prev)
  }
  const addedToBagg = () => {
    setIsAdded(prev => !prev)
  }

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={product.image} className='card_image' />
      <Card.Body className='card_body'>
        <Card.Title className='card_title'>{product.title}</Card.Title>

        <Card.Text className='card_text'>{isExpanded ? product.description : `${product.description.substring(0, 20)}...`}
          <span onClick={expandedToggle}><i className={isExpanded ? 'bi bi-caret-up-fill' : 'bi bi-caret-down-fill'}></i></span>
        </Card.Text>
        <Card.Text className='card_price'>{product.price} $</Card.Text>
        <Rating rating={product.rating.rate} count={product.rating.count} />
      </Card.Body>
      <div className='card_footer'>
        <p> sale : {product.rating.count}</p>
        <Button className='card_button style_button' onClick={addedToBagg}>
          {isadded ? <i className="bi bi-bag-check"></i> : <i className="bi bi-bag"></i>}

        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;