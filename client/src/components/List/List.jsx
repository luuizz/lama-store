import React from 'react'
import "./List.scss"
import { Card } from '../Card/Card'
import useFetch from "../../hooks/useFetch"

export const List = ({subCats, maxPrice, sort, catId}) => {

  const { data, loading, error } = useFetch(`/produtos?populate=*`);    

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}
