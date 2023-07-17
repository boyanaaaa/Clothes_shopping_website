import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {mobile} from "../responsive"

const Container = styled.div`
    height: 60px;
    ${mobile({height: "40px"})}
}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0px"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: "center", flex: "2"})}
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`


const Input = styled.input`
    border: none;
    ${mobile({width: "15px"})}
`

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    ${mobile({fontSize: "24px"})}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
    
`

function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search..." />
                    <SearchIcon style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>BOYANA.</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartIcon color="action" />
                    </Badge>
                </MenuItem>


            </Right>
        </Wrapper>

    </Container>
  )
}

export default Navbar