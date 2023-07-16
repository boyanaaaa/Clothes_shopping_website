import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255, 0.5)), url("https://design-zentrum-hamburg.de/site/assets/files/3194/keyvisuals_ffp16-v1.jpg") center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    padding: 20px;
    width:40%;
    background-color: white;
`;
const Title = styled.h1`
    text-align: center;
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
    text-align: center;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    font-size: 16px;
    font-weight: 500;
    border-radius: 10px;
`;

function Register() {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="email" type="email"/>
                <Input placeholder="username"/>
                <Input placeholder="password" type="password"/>
                <Input placeholder="confirm password" type="password"/>
                <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>

    </Container>
  )
}

export default Register