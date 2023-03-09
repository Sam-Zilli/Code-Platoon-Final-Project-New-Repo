import React from 'react'
import { Container, Col } from 'react-bootstrap'
import {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'

function Footer() {

// Generates random Tswift quote in the footer

  const dispatch = useDispatch()

// -----------------------------------------------------------------------

    // from week 17 day 4 chad lesson
    const [users, setUsers] = useState([])

    useEffect( () => {
        async function getUser() {
            const res = await fetch("https://taylorswiftapi.onrender.com/get")
            const body = await res.json()
            setUsers(body)
        }
        getUser()
    }, [dispatch])

    const createOptions2 = () => {
        return users.quote
    }

  // -----------------------------------------------------------------------  


  return (
        <Container>
          <Col className="text-center py-3"></Col>
          {createOptions2()}
        </Container>
        
  )
}

export default Footer