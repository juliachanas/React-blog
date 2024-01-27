import { getAllCategories } from '../../../redux/categoryRedux';
import { useSelector } from 'react-redux';
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './CategoriesPage.module.scss';

const CategoriesPage = () => {
  const categories = useSelector(getAllCategories);

  return (
    <div className={styles.container}>
      <h1 style={{ marginBottom: '1.5rem' }}>All Categories</h1>
      <Card>
        <ListGroup variant='flush'>
          {categories.map((category) => (
            <ListGroup.Item key={category.id}>{category.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default CategoriesPage;
