import React, { useState } from 'react'
import FlagBrazil from "../../../public/img/brazil-flag.svg";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import { Cart } from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const [openCart, setOpenCart] = useState(false);
    const products = useSelector((state) => state.cart.products);

  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <div className="item">
                    <img src={FlagBrazil} alt="Bandeira do país Brazil" />
                    <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                    <span>BRL</span>
                    <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                    <Link to="/produtos/1" >Mulher</Link>
                </div>
                <div className="item">
                    <Link to="/produtos/2" >Homem</Link>
                </div>
                <div className="item">
                    <Link to="/produtos/3" >Infantil</Link>
                </div>
            </div>
            <div className="center">
                <Link to="/">LAMASTORE</Link>
            </div>
            <div className="right">
                <div className="item">
                    <Link to="/produtos/3" >Sobre</Link>
                </div>
                <div className="item">
                    <Link to="/produtos/3" >Contato</Link>
                </div>
                <div className="item">
                    <Link to="/produtos/3" >Loja</Link>
                </div>
                <div className="icons">
                    <SearchIcon />
                    <PersonOutlineIcon />
                    <FavoriteBorderIcon />
                    <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
                        <ShoppingCartOutlinedIcon />
                        <span>{products.length}</span>
                    </div>
                </div>
            </div>
        </div>
        {openCart && <Cart />}
    </div>
  )
}

export default Navbar