import React,{useContext} from 'react'
import { CartContext } from '../ContextApi/CartContext'
import { Button, Card } from 'react-bootstrap'

export const CartPage = () => {
    const {cart, setCart} = useContext(CartContext)
    const deleteFromCart = (id) =>{
        const updatedCart = cart.filter(product => product.id !==id)
        setCart(updatedCart) 
    }
  return (
    <div>
        <div>
            Your shopping Cart Page
        </div>
        
        {cart.length > 0 ? <div>
           { cart.map(item => <Card key={item.id} width={"15rem"}>
                <Card.Header>
                    <Card.Img  src={item.image_url}/>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{item.title}</Card.Text>
                    <Button onClick={()=>deleteFromCart(item.id)}>Delete</Button>
                </Card.Body>
            </Card>)}
            </div>
         : <div> Your cart is empty</div>        }
    </div>
  )
}
