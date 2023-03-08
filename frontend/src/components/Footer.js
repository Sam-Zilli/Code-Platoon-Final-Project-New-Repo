import React from 'react'
import { Container, Col } from 'react-bootstrap'
import {useEffect, useState} from 'react'


function Footer() {

    // from week 17 day 4 chad lesson
    const [users, setUsers] = useState([])

    useEffect( () => {
        async function getUser() {
            const res = await fetch("https://taylorswiftapi.onrender.com/get")
            const body = await res.json()
            setUsers(body)
        }
        getUser()
    }, [])

    const createOptions = () => {
        return users.quote
    }


  return (
        <Container>
          <Col className="text-center py-3"></Col>
          {createOptions} 
          {/* cant get random taylor quote here :( */}
          <h3>hey</h3>
        </Container>
        
  )
}

export default Footer