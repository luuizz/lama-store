import React from 'react'
import BannerPagamento from "../../../public/img/payment.png"
import "./footer.scss"

export const Footer = () => {

  const anoAtual = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="top">
          <div className="item">
            <h1>Categorias</h1>
            <span>Mulher</span>
            <span>Sapatos</span>
            <span>Acessórios</span>
            <span>Novas Chegadas</span>
          </div>
          <div className="item">
          <h1>Links úteis</h1>
            <span>FAQ</span>
            <span>Lojas</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="item">
            <h1>Sobre</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi incidunt quidem corrupti, maxime aliquam distinctio et cum praesentium dolorum accusantium, excepturi ullam similique soluta sint optio culpa consequatur laboriosam.</span>
          </div>
          <div className="item">
            <h1>Contato</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi incidunt quidem corrupti, maxime aliquam distinctio et cum praesentium dolorum accusantium, excepturi ullam similique soluta sint optio culpa consequatur laboriosam.</span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className='logo'>Lamastore</span>
            <span className='copyright'>{anoAtual}© Copyright. Todos os direitos reservados</span>
          </div>
          <div className="right">
            <img src={BannerPagamento} alt="Formas de pagamento" title='Formas de pagamento aceitas' />
          </div>
        </div>
      </footer>
    </>
  )
}
