import React, { useState } from "react";
import styled from "styled-components";
import AirtificialIntellegence from "../../content/images/AirtificialIntellegence.png";
import CloudComputing from "../../content/images/CloudComputing.png";
import IOT from "../../content/images/IOT.png";
import webDevelopment from "../../content/images/webDevelopment.png";
import dropdownIcon from "../../content/images/dropdown.png";
import solution3 from "./solution3";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  background: #def3fc;
  @media (max-width:768px){
    height: 70vh;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
   
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const DropdownWrapper = styled.div`
position: relative;
display: flex;
flex: 1;
margin-left: 100px;
align-items: center;
justify-content: center;

@media (max-width: 768px) {
    display:flex;
    width: 70%;
    margin-left: 0px;
  }
`;   

const DropdownButton = styled.button`
  padding: 20px;
  background-color: snow;
  cursor: pointer;
  text-align: left;
  font-weight: bold;
  color: #b1adad;
  border-radius: 10px;
  border: 2px solid blue;
  min-width: 100%;
  font-family:Lexend Medium;
  display: flex;
  align-items: right;
  color: ${(props) => (props.open ?"none"  : "black")};
  @media (max-width: 768px) {
    display:flex;
    width: 70%;
    margin-left: 0px;
  }
  
`;

const DropdownIcon = styled.div`
width: 10px;
height: 10px;
margin-left: 10px;
position: absolute;
right: 10px;
top: 50%;
transform: translateY(-50%) rotate(${(props) => (props.open ? "180deg" : "0deg")});
transition: transform 0.3s ease;
background-image: url(${dropdownIcon}); 
background-repeat: no-repeat;
background-size: contain;
cursor: pointer;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100%;
  padding: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: absolute;
  left: 0;
  width: 100%;
  top: 100%;

  border-radius: 10px;
  @media (max-width: 768px) {
    top:75%;
  }
`;

const DropdownOption = styled.a`
display: block;
padding: 8px;
color: black;
text-decoration: none;
cursor: pointer;
min-width: 100%;
font-family: Lexend Medium;
&:hover {
  background-color: #def3fc;
  border-radius: 10px;
}
${(props) =>
  props.active &&
  `
  background-color: #def3fc;
  border-radius: 10px;
`}
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 3;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ImageItem = styled.img`
  cursor: pointer;
  width: 75%;
  height: 75%;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 20px;
  border: 10px solid white;
  background-size: cover;
`;

const images = [AirtificialIntellegence, CloudComputing, IOT, webDevelopment];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectImageText, setSelectImageText] = useState("Dropdown");
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (image) => {
    setSelectedImage(image);
    setIsOpen(false);
    setSelectImageText(image.split("/")[2].split("-")[0]);
  };

  const handleOptionHover = (image) => {
    setSelectedImage(image);
  };

  return (
    <MainWrapper>
      <ContentWrapper>
         <DropdownWrapper>
           <DropdownButton open={isOpen} onClick={toggleDropdown}> 
             {isOpen ? "Dropdown" : selectImageText}
            <DropdownIcon open={isOpen} />
          </DropdownButton>
          <DropdownContent open={isOpen}>
            {images.map((image, index) => (
              <DropdownOption
                key={index}
                active={selectedImage == image}
                onMouseEnter={() => handleOptionHover(image)}
                onClick={() => handleOptionClick(image)}
              >
                {image.split("/")[2].split("-")[0]}
              </DropdownOption>
            ))}
          </DropdownContent> 
          
         <solution3></solution3>
        </DropdownWrapper>
         
        
        <ImageWrapper>
          <ImageContainer>
            <ImageItem src={selectedImage} alt="Selected Image" />
          </ImageContainer>
        </ImageWrapper>  
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Dropdown;