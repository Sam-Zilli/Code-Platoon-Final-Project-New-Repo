import { useDispatch, useSelector } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'

function CartScreen(history) {

    // Cat image API connection START
    const dispatch = useDispatch()
    const [img, setImg] = useState();
  
    const fetchImage = async () => {
      const res = await fetch("https://cataas.com/cat/cute/says/Complete more adventures!");
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
    };
  
    useEffect(() => {
      fetchImage();
    }, []);

    // Cat image API connection END
  
    const {id} = useParams()
    const productId = id
     
    const location = useLocation()
    const qty = location.state ? Number(location.state) : 1
 
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
        
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))

     }

    // const checkoutHandler = () => {
    //      history.push('/login?redirect=shipping')
    //  }


    return (
        <Row>
            <Col md={8}>
                <h1>Completed Adventures</h1>
                {/*  If they haven't completed any adventures */}
                {cartItems.length === 0 ? (
                    // <Message variant='info'>
                    //     Your cart is empty <Link to='/'>Go Back</Link>
                    // </Message>
                    <h2> You need to get started! </h2>
                ) : (
                    <ListGroup variant='flush'>
                    {cartItems.map(item => (
                        <ListGroup.Item key={item.product}>
                            <Row>
                                <Col>
                                    {item.name}
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </Col>

                                <Col md={2}>
                                    {item.value}
                                </Col>
                                <Col md={1}>
                                    <Button
                                        type='button'
                                        title = 'remove'
                                        onClick={() => removeFromCartHandler(item.product)}
                                    >
                                        <i className='trash'></i>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
    </Col>










            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3> Completed: ({cartItems.reduce((acc, item) => acc + item.qty, 0)})</h3>
                            <h3> Total Points: {cartItems.reduce((acc, item) => acc + item.qty * item.value, 0).toFixed(2)}</h3>
                        </ListGroup.Item>
                    </ListGroup>

                    {/* <ListGroup.Item>
                        <Button
                            type='button'
                            className='btn-block'
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}
                        >
                            Proceed To Checkout
                        </Button>
                    </ListGroup.Item> */}


                </Card>
                <hr></hr>
                <img style={{ width: 500, height: 600 }} src={img} alt="icons" />
            </Col>
        </Row>
    )
}

export default CartScreen