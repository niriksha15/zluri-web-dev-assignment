import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";
import dropdown from "../images/dropdown-trial.png"

const Q3 = () => {
    return (
        <StyledWrapper>
            <StyledContainer >
                <Title>
                    <h3>
                        <span>Task 4:</span> Build a component
                    </h3>
                    <p>In this section, you are required to build a new component based on a Figma design and prototype. The component's function should be to change the image displayed based on the item selected in the dropdown. Implement this functionality using HTML, CSS, and JavaScript.</p>
                </Title>
                <QuestionsGrid>
                    <AnswerDiv>
                        <FigmaButton>Figma</FigmaButton>
                        <PrototypeButton>Prototype</PrototypeButton>
                    </AnswerDiv>
                </QuestionsGrid>
            </StyledContainer>
        </StyledWrapper>
    )
}

export default Q3

const StyledWrapper=styled(Wrapper)`
background:#F6F7F9;
`
const Title = styled.div`
h3{
    font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
    span{
        background:#FAE090;
    }
}
p{
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const QuestionsGrid = styled.div`
`
const StyledContainer = styled(Container)`
margin-top:0;
`
const ImageDiv = styled.div`
img{
    width:300px;
}
`
const AnswerDiv = styled.div`
align-self:center;
display: flex;
flex-direction:row;
button{
    margin:0 10px;
}
`
const FigmaButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #2684FE;
min-width:150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #FFF;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor:pointer;
`
const PrototypeButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #FFFFFF;
min-width:150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #2684FE;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor:pointer;
`