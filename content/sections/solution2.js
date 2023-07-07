import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const Q1 = () => {
    return (
        <StyledWrapper>
            <Container >
                
                
                <QuestionsDiv>
                  
                    <GridContainer>
                        <GridItem style={{backgroundColor:"#d6cbd3"}}>1st</GridItem>
                        <GridItem style={{backgroundColor:"#f0efef"}}>2nd</GridItem>
                        <GridItem style={{backgroundColor:"#d6cbd3"}}>3rd</GridItem>
                        <GridItem style={{backgroundColor:"#f0efef"}}>4th</GridItem>
                    </GridContainer>
                </QuestionsDiv>
            </Container>
        </StyledWrapper>
    )
}

export default Q1

const StyledWrapper = styled(Wrapper)`
background:#F6F7F9;
`


const QuestionsDiv = styled.div``

const GridContainer=styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
`
const GridItem=styled.div`
padding:80px;
background:#FFFFFF;
border: 1px solid #000000;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
`
