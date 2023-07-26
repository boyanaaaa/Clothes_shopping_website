import { useState } from 'react'
import {sliderItems} from "../data"
import styled from 'styled-components'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import {mobile} from "../responsive"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
`
    
const Arrow = styled.div`
    width: 40px;
    height: 40px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    postion: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    z-index: 2;
    margin: auto;
   
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    overflow: hidden;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg}
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`


const Title = styled.h1`
    font-size: 60px;
`
const Description = styled.p`
    margin: 30px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`   


function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    
    };


  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowCircleLeftOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>   
            {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
            </Slide>
            ))}

        </Wrapper>

        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowCircleRightOutlinedIcon/>
        </Arrow>


    </Container>
  )
}

export default Slider
