import styled from "styled-components"; 
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';



const Container = styled.div``;


const Wrapper = styled.div`
        padding: 50px;
        display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

const Title = styled.h1`
    font-weight: 200;

`;

const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 200;
    font-size: 40px;
`;
const Image = styled.img`
    width: 60%;
    height: 70vh;
    object-fit: cover;
    border-radius: 10px;
    
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 2px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
    font-weight: 700;

    &:hover{
        background-color: teal;
        color: white;
    }
`;

function Product() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://static.e-stradivarius.net/5/photos3/2023/I/0/1/p/2351/219/702/2351219702_2_1_4.jpg?t=1679417049162"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure et, cum aliquam eligendi distinctio! </Desc>
                <Price>$20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>Xl</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveCircleOutlineIcon/>
                        <Amount>1</Amount>
                        <AddCircleOutlineIcon/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>

    </Container>
  )
}

export default Product