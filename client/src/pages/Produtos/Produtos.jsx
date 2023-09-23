import React, {useState} from 'react'
import "./Produtos.scss"
import { List } from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'


export const Produtos = () => {

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const {data, loading, error} = useFetch(`/subcategorias?[filters][categorias][id][$eq]=${catId}`);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item=> item !== value));
  };


  return (
    <div className='produtos'>
      <div className="left">
        <div className="filterItem">
          <h2>Categoria do produto</h2>
          {data?.map(item=>(
            <div className="inputItem" key={item.id}>
            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
            <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filtrar por preço</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Ordenar por</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value="asc" name='preço' onChange={e => setSort("asc")} />
            <label htmlFor="asc">Preço (menor preço)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value="desc" name='preço' onChange={e => setSort("desc")} />
            <label htmlFor="desc">Preço (maior preço)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='catImg' src="https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <List catId={catId} maxPrice={maxPrice}  sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}
