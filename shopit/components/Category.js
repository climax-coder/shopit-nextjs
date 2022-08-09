import React from 'react';
import { useQuery } from '@apollo/client';
import { categoryquery } from '../Graphql/queries';
import Categoryitems from './categoryitems';
import styles from '../styles/categorycomp.module.css';

function Category() {
  const { loading, error, data } = useQuery(categoryquery);
  if (loading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className={styles.catbox}>
      {data.categories.data.map((cat) => (
        <div key={cat.attributes.cid}>
          <Categoryitems
            imageurl={`http://localhost:1337${cat.attributes.cimage.data.attributes.url}`}
            cname={cat.attributes.cname}
            slug={cat.attributes.cslug}
          />
        </div>
      ))}
    </div>
  );
}

export default Category;
