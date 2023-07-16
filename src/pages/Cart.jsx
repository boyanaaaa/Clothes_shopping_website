import React from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';

const Container = styled.div``;

const Wrapper = styled.div`
padding: 20px
`;

const Title = styled.h1`
font-weight: 300;
text-align: cneter;
`;

const Top = styled.h1`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`;

const Bottom = styled.h1``;


function Cart() {
  return (
    
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top></Top>
            <Bottom></Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart