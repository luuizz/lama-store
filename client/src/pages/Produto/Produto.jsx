import React, { useState } from 'react'
import "./Produto.scss"
import { AddShoppingCart } from '@mui/icons-material';
import { Balance } from '@mui/icons-material';
import { FavoriteBorder } from '@mui/icons-material';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReduces';

export const Produto = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch()
  const { data, loading, error } = useFetch(`/produtos/${id}?populate=*`);
  return (
    <div className='produto'>
      <div className="left">
        <div className="images">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setSelectedImg("img")} />
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e => setSelectedImg("img2")} />
        </div>
        <div className="mainImage">
          <img 
          src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg].data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>R${data?.attributes?.preco}</span>
        <p>{data?.attributes?.description}</p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev-1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add" onClick={() =>dispatch(addToCart({
          id:data.id,
          title: data.attributes.title,
          description:data.attributes.description,
          preco:data.attributes.preco,
          img:data.attributes.img.data.attributes.url,
          quantity,
        }))}>
          <AddShoppingCart />
          <span>Adicionar ao carrinho</span>
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorder />
            <span>Adicionar a lista de desejos</span>
          </div>
          <div className="item">
            <Balance />
            <span>Comparar items</span>
          </div>
        </div>
        <div className="info">
          <span>Fornecedor: Polo</span>
          <span>Tipo de produto: Camiseta</span>
          <span>Tags: Camiseta, Homem, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>Descrição</span>
          <hr />
          <span>Informações adicionais</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}
