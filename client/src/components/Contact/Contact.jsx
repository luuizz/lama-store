import React from 'react'
import "./Contact.scss"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";


export const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>Entre em contato conosco</span>
            <div className="mail">
                <input type="email" placeholder='Preencha com seu e-mail...' />
                <button>Junte-se a nós</button>
            </div>
            <div className="icons">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <GoogleIcon />
                <PinterestIcon />
            </div>
        </div>
    </div>
  )
}
