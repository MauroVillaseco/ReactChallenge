import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'
import { useElementsStore } from "../store";
import myImage from '../img/editIcon.svg';

const ParentElement = styled.div`
 background-color: #FFF;
 color: #000;
 border-radius:3px;
 display: grid;
 text-align: center;
 box-shadow: 0px 4px 9px -1px rgba(61,61,61,1);
 background: linear-gradient(to bottom, #416dff 30%, #fff 30%);
 height: 370px;
 grid-template-columns: 75%;
 justify-content: center;
 position: relative;
`;

const TextContainer = styled.div`
 padding-bottom: 20px;
 color: #000;
 border-radius:3px; 
 display: inline-block;
 align-self: end;
`;
const HeadElement = styled.h4`
 font-size: 20px;
 color: #FFF;;
 text-transform: capitalize;
 text-overflow: ellipsis;
 overflow: hidden;
`;

const TextElement = styled.p`
 font-size: 15px;
 color: #878787;
 text-overflow: ellipsis;
 overflow: hidden;
`;
const ImageContainer = styled.div`
position: relative;
left: 50%;
transform: translateX(-50%);
`;
const IconElement = styled.div`
position: absolute;
left: 15px;
top: 15px;
background-image: url(${myImage});
filter: invert(100%);
-webkit-filter: invert(100%);
width: 20px;
height: 20px;
background-size: 20px 20px;
cursor:pointer;
transition: opacity .3s ease-in-out;
&:hover {
  opacity: 0.8;
}
`;

const InputEditable = styled.input`
height: 25px;
background: inherit;
border: none;
border-bottom: 1px solid;
border-radius: 0;
  &:focus {
    outline: none;
  }
`;

const ButtonForm = styled.button`
  background: #416dff;
  height: 30px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 3px;
  color:#FFF;
  font-weight: bold;
`;


export const Element = ({ first, last, email, phone, picture, location }) =>{
  const [ editable, setEditable ] = useState();
  const { editElement } = useElementsStore();

  const onSubmit = (evt) => {
    evt.preventDefault();
    editElement({'first':evt.target.first.value,'last':evt.target.last.value, 'email': evt.target.email.value,'phone': evt.target.phone.value, 'city': evt.target.city.value, 'state':evt.target.state.value}, evt.target.email.defaultValue);
    setEditable(false)
  }

if (editable) {
  return (
    <form onSubmit={onSubmit}>
      <ParentElement >
        <IconElement onClick={() => setEditable(false)}></IconElement>
        <TextContainer className='double-input'>
        <InputEditable className='color-white' name='first' type='text' defaultValue={first} maxLength='30' required/> 
        <InputEditable className='color-white' name='last' type='text' defaultValue={last} maxLength='30' required/>
        </TextContainer>    
        <ImageContainer className='image-cropper'>    
          <img alt='Predefined' src={picture.large}/>
        </ImageContainer>
        <TextContainer>
          <InputEditable type='email' name='email' maxLength='50' placeholder='Enter Email..' defaultValue={email} required/>
        </TextContainer>
        <TextContainer>
          <InputEditable name='phone' maxLength='50' defaultValue={phone} placeholder='Enter Phone..' required/>
        </TextContainer>
        <TextContainer className='double-input'>    
          <InputEditable name='city' type='text' maxLength='80' defaultValue={location.city} placeholder='Enter City..' required/>
          <InputEditable name='state' type='text' maxLength='80' defaultValue={location.state} placeholder='Enter State..' required/>
        </TextContainer>
        <ButtonForm type='submit'>Save Changes</ButtonForm>
      </ParentElement>
    </form>
  );
}
return (
 
  <ParentElement>
    <IconElement onClick={() => setEditable(true)}></IconElement>
    <TextContainer>
    <HeadElement>{first} {last}</HeadElement>
    </TextContainer>    
    <ImageContainer className='image-cropper'>    
      <img alt='Predefined' src={picture.large}/>
    </ImageContainer>
    <TextContainer>
      <TextElement>{email}</TextElement>
    </TextContainer>
    <TextContainer>
      <TextElement>{phone}</TextElement>
    </TextContainer>
    <TextContainer>    
      <TextElement>{location.city}, {location.state}</TextElement>
    </TextContainer>
  </ParentElement>
);

}
Element.propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  picture: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired
};
