
import { LogoDev, SocialDistanceOutlined } from "@mui/icons-material";
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import {mobile} from "../responsive"


const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``
const Description = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 10px 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    font-weight: 200;
    font-size: 16px;
    margin-bottom: 10px;
`;


const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`;


const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
`;


const Payment = styled.img`
    width: 50%;
`;

function Footer() {
  return (
    <Container>
        <Left>
            <Logo>BOYANA.</Logo>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ad deserunt? Ipsa sint illo, at repellendus veniam aspernatur unde doloribus.</Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>

                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>

                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>

                <SocialIcon color="E60023">
                    <PinterestIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Usefull links:
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Title>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><MapIcon/> Bulgaria, Sofia, Bussiness Park</ContactItem>
            <ContactItem><LocalPhoneIcon/> +359 111 111 111</ContactItem>
            <ContactItem><EmailIcon/>boyanawebsite@gmail.com</ContactItem>
            <Payment src="https://cdn.webshopapp.com/shops/218525/files/371942398/payment-methods-epicerie-ludo.png"/>

        </Right>




    </Container>
  )
}

export default Footer