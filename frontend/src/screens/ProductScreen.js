import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
// import axios from 'axios'
import { listProductDetails } from '../actions/productActions'

 
function ProductScreen() {
    const { id } = useParams()
    const navigate = useNavigate()
 
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
 
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product} = productDetails
 
    useEffect(() => {
        dispatch(listProductDetails(id))
    }, [dispatch, id])
 
    const addToCartHandler = () => {
        navigate(`/cart/${id}`, {state: qty})
    }
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'> Go Back </Link>
            {loading ? <h3>I've got a blank space...</h3>
                : error ? <h3>I forgot that you existed. (error 404: loading page) </h3>
                :   
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant = "flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>   


                        <ListGroup.Item>
                            <h3>{product.description}</h3>
                        </ListGroup.Item>  

                    </ListGroup>
                </Col>


                <Col md={3}>
                    <Card>
                        <ListGroup variant = "flush">

                            <ListGroup.Item>
                                <Col> Price: </Col>
                                <Col>
                                <strong>{product.price}</strong>
                                </Col>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button 
                                    // Calling the function to add this item to the cart
                                    onClick={addToCartHandler}
                                    className = 'btn-block' 
                                    type='button'>
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>

                        </ListGroup >  
                        {product.countInStock > 0 && (
                            <ListGroup.Item>
                            <Row>
                                <Col>Qty</Col>
                                <Col xs='auto' className='my-1'>
                                <Form.Control
                                as="select"
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}>
                                { [...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                {x + 1}
                                </option>
                                ))
                                 }
                                </Form.Control>
                                </Col>
                                </Row>
                            </ListGroup.Item>
                        )}         
                    </Card>
                </Col>
            </Row>
        }
        </div>    
    )
}

export default ProductScreen