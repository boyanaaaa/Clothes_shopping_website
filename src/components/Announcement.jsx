import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding: 2px;
    
`

function Announcement() {
  return (
    <Container>Super Deal! Free Shipping on Orders over $50</Container>
  )
}

export default Announcement