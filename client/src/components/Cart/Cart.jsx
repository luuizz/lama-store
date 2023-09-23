import React from 'react'
import { DeleteOutline } from '@mui/icons-material'
import "./Cart.scss"
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReduces'
import { makeRequest } from '../../../makeRequest'
import { loadStripe } from '@stripe/stripe-js'

export const Cart = () => {

    const products = useSelector(state=> state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        
        products.forEach((item) => {
            const quantity = parseInt(item.quantity, 10);
            const price = parseFloat(item.preco);
            
            if (!isNaN(quantity) && !isNaN(price)) {
            total += quantity * price;
            }
        });
        
        return total.toFixed(2);
    };

    const stripePromise = loadStripe('pk_test_51NtLKjEhxnh6tW4NRfjS2fGa0KnyWJR1iiu9mMi2T97FzmTr7ekkAnOShVwne3vWfxOpaDJ6qr8rPF8fZEBhbTvg00Y1zK17J7');
    const handlePayment = async () => {
        try {
          const stripe = await stripePromise;
          const res = await makeRequest.post("/orders", {
            products,
          });
          await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
          });
    
        } catch (err) {
          console.log(err);
        }
    };
  

  return (
    <div className='cart'>
        <h1>Produtos em seu carrinho:</h1>
        {products?.map(item => (
            <div className="item" key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.description?.substring(0, 100)}</p>
                    <div className="price">
                        {item.quantity} x R${item.preco}
                    </div>
                </div>
                <DeleteOutline className='delete'
                onClick={() => dispatch(removeItem(item.id))}
                />
            </div>
        ))}
        <div className="total">
            <span>Subtotal</span>
            <span>R${totalPrice().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </div>
        <button onClick={handlePayment}>Ir para o checkout</button>
        <span className="reset"
        onClick={() => dispatch(resetCart())}
        >Limpar carrinho</span>
    </div>
  )
}
