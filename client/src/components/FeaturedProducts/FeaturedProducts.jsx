import React from 'react'
import "./FeaturedProducts.scss"
import { Card } from '../Card/Card'
import useFetch from "../../hooks/useFetch"

export const FeaturedProducts = ({type}) => {

  const { data, loading, error } = useFetch(`/produtos?populate=*`);
  return (
    <div className='featured-products'>
        <div className="top">
            <h1>{type} produtos</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nihil asperiores vel animi, eaque id perferendis corporis quod atque veniam voluptatum aut necessitatibus natus qui alias magnam autem tempora cumque!</p>
        </div>
        <div className="bottom">
        {error
          ? "Poxa, deu ruim!!"
          : loading
          ? "Carregando"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>

    </div>
  )
}
