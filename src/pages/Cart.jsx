import React from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button } from '@mui/material';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.h1`
 padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const Bottom = styled.div`
    display: flex;
    jystify-content: space-between;
`;
const Info = styled.div`
    flex: 3;
`;


const TopTexts = styled.div``;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    font-size: 16px;
    font-weight: 200;
    margin: 0px 10px;

`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color}
`;
const ProductSize = styled.span``;


const PriceDetails = styled.span`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justufy-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;


const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
`;


const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    height: 50vh;
`;


const SummaryTitle = styled.h1`
    font-weight: 200;
`;


const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;


const SummaryItemText = styled.span`

`;


const SummaryItemPrice = styled.span`

`;



const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 800;

`;


function Cart() {
  return (
    
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bags (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://ae01.alicdn.com/kf/Hed73fcc957bc45d68499094ec618e851O.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b>DEREK THUNDER SHOES</ProductName>
                                <ProductId><b>ID:</b>03265899453165</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <AddCircleOutlineIcon/>
                                <ProductAmount>2</ProductAmount>
                                <RemoveCircleOutlineIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetails>
                    </Product>

                    <Hr/>

                    <Product>
                        <ProductDetail>
                            <Image src="https://i.etsystatic.com/17595179/r/il/d36e4f/4049347058/il_570xN.4049347058_mm8r.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b>HAKURA SHOES</ProductName>
                                <ProductId><b>ID:</b>03265899453165</ProductId>
                                <ProductColor color="gray"/>
                                <ProductSize><b>Size:</b>36.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <AddCircleOutlineIcon/>
                                <ProductAmount>1</ProductAmount>
                                <RemoveCircleOutlineIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 24</ProductPrice>
                        </PriceDetails>
                    </Product>
                </Info>


                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryButton>CHECKOUT NOW</SummaryButton>


                </Summary>


            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart