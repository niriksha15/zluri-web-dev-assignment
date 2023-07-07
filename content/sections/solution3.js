import React, { useState } from "react";
import styled from "styled-components";
import dropdownIcon from "../../content/images/dropdown.png";
import AirtificialIntellegence from "../../content/images/AirtificialIntellegence.png";
import CloudComputing from "../../content/images/CloudComputing.png";
import IOT from "../../content/images/IOT.png";
import webDevelopment from "../../content/images/webDevelopment.png";


const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72vh;
  background: #def3fc;
  @media (max-width: 768px) {
    height:50vh;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
   margin-bottom: 100px;
  }
  
`;

const DropdownWrapper = styled.div`
  position: relative;
  width: 25%;
  margin-bottom: 100px;
  display: flex;
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
  font-family: Lexend Medium;
  display: flex;
  align-items: right;
  color: ${(props) => (props.open ? "none" : "black")};
  
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

const Dropdown = () => {
  const images = [AirtificialIntellegence, CloudComputing, IOT, webDevelopment];
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
                active={selectImageText === image.split("/")[2].split("-")[0]}
                onClick={() => handleOptionClick(image)}
              >
                {image.split("/")[2].split("-")[0]}
              </DropdownOption>
            ))}
          </DropdownContent>
        </DropdownWrapper>
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Dropdown;






















