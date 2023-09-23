import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'
import Chapeu from "../../assets/8622048.jpg"
import Bolsas from "../../assets/bolsas-GettyImages-1228975370.webp"
import EstampaCamiseta from "../../assets/estampa camiseta.webp"
import Bones from "../../assets/bones.webp"
import Bermudas from "../../assets/bermudas.jfif"
import Camisetas from "../../assets/camisetas.webp"

export const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src={Camisetas} alt="" />
                <button>
                    <Link className='link' to="/produtos/1">Camisetas</Link>
                </button>
            </div>
            <div className="row">
                <img src={Bermudas} alt="" />
                <button>
                    <Link className='link' to="/produtos/1">Bermudas</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src={Bones} alt="" />
                <button>
                    <Link className='link' to="/produtos/1">Bonés</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src={Bolsas} alt="" />
                    <button>
                        <Link className='link' to="/produtos/1">Bolsas</Link>
                    </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src={Chapeu} alt="" />
                    <button>
                        <Link className='link' to="/produtos/1">Chapéus</Link>
                    </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src={EstampaCamiseta} alt="" />
                <button>
                    <Link className='link' to="/produtos/1">Estampas</Link>
                </button>
            </div>
        </div>
    </div>
  )
}
