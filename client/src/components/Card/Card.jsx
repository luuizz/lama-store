import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.scss"

export const Card = ({item}) => {
  return (
    <Link className='link' to={`/produto/${item.id}`}>
        <div className='card'>
            <div className="image">
                {item?.attributes.isNew && <span>Nova temporada</span>}
                <img src={
                  process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
                  } alt="" className="mainImage" />
                <img src={
                  process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data[0]?.attributes?.url
                  } alt="" className="secondImage" />
            </div>
            <h2>{item?.attributes.title}</h2>
            <div className="prices">
                <h3>R${item.oldPrice || (item?.attributes.preco + 20)}</h3>
                <h3>R${item?.attributes.preco}</h3>
            </div>
        </div>
    </Link>
  )
}
