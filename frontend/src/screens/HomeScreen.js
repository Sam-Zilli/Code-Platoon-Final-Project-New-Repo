import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect, useState} from 'react'
import { listProducts } from '../actions/productActions'

function HomeScreen() {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList

    // useEffect will be triggered whenever the component loads, dispatch is from productActions
    useEffect( () => {
        dispatch(listProducts())

    }, [dispatch])


    // cat API
    // from week 17 day 4 chad lesson
    const [cat, setCat] = useState([])

    useEffect( () => {
        async function getCat() {
            const res = await fetch("https://cataas.com/c/")
            const body = await res.json()
            setCat(body)
        }
        getCat()
    }, [dispatch])

    const createOptions = () => {
        return cat
    }

    return (
        <div>
            <h1> Quests  </h1>
            {loading ? <h3>I've got a blank space...</h3>
                : error ? <h3>I forgot that you existed. (error 404: loading page) </h3>
                :             
                <Row>
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={2}>
                            <Product product={product}/>
                        </Col>
                    ))}
                </Row>}
                {createOptions()}
        </div>
    )

}

export default HomeScreen