import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";


const Feedback = () => {
    return (
        <StyledWrapper>
        <Container >
            <Title>
               {/* <h4>
                    Thanks for taking up this assignment.
                    </h4>
                     <p>Anything you would like to add over here?</p>*/}
                <h1>Embracing Growth through Feedback: Committed to Continuous Improvement</h1>
                
            </Title>

            <FeedbackDiv>
                <p>
                Thank you for providing me with the opportunity to showcase my skills. My dedication to delivering exceptional work and pursuing excellence is unwavering. I highly appreciate any feedback or suggestions you may have regarding my code. I am committed to continuous learning and professional growth, striving to become an accomplished expert in the field. Your feedback, following the review of my submission, holds immense value for my personal and professional development. Thank you for taking the time to evaluate my work
                </p>
                
            </FeedbackDiv>
            
        </Container>
    
        </StyledWrapper>
        
    );
};

export default Feedback

const StyledWrapper=styled(Wrapper)`
background:#FFFFFF;
`;

const Title = styled.div`
h1{
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
font-size: 16px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 300;
line-height: 28px;
}
`;
const FeedbackDiv= styled.div`
p{

    font-size:16px;
    color:rgb(0,0,0);
    font-family: Lexend Medium;
    font-style: normal;
    font-weight: 200;
    line-height: 40px;
   
    @media (max-width: 768px) {
        line-height: 20px;
        padding-bottom: 50px;  
    }    
    
}
`;
