import styled from "styled-components"
import {mobile} from "../responsive"


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255, 0.5)), url("https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/06/Untitled-1024-%C3%97-683px-26.jpg") center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({width: "75%"})}
`;

const Wrapper = styled.div`
    padding: 20px;
    width:25%;
    background-color: white;
    border-radius: 10px;
    ${mobile({width: "75%"})}
`;
const Title = styled.h1`
    text-align: center;
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
    text-align: center;
`;
const Button = styled.button`
    margin: 10px 0px;
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    font-size: 16px;
    font-weight: 500;
    border-radius: 10px;
`;

const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

function Login() {
  return (
    <Container>

        <Wrapper>
            <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="password" type="password"/>
                    <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                    <Button>SIGN IN</Button>
                    
                </Form>
                <Link>DO NOT YOU REMEBER THE PASSWORD?</Link><br/>
                <Link>CREATE A NEW ACCOUNT</Link>
        </Wrapper>

    </Container>
  )
}

export default Login