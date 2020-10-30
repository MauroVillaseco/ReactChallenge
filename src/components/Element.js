import React, { useState } from "react";
import PropTypes from "prop-types";
import { useElementsStore } from "../store";
import {ParentElement,IconElement, TextContainer, TextContainerDouble,InputEditable, ImageContainer,ButtonForm,HeadElement,TextElement } from "./styled-components/ElementStyles"


export const Element = ({ first, last, email, phone, picture, location }) =>{
  const [ editable, setEditable ] = useState();
  const { editElement } = useElementsStore();

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt)
    editElement({'first':evt.target.first.value,'last':evt.target.last.value, 'email': evt.target.email.value,'phone': evt.target.phone.value, 'city': evt.target.city.value, 'state':evt.target.state.value}, evt.target.email.defaultValue);
    setEditable(false)
  }

if (editable) {
  return (
    <form className='form-submit' onSubmit={onSubmit}>
      <ParentElement >
        <IconElement data-testid="cancel-edit" onClick={() => setEditable(false)}></IconElement>
        <TextContainerDouble className='double-input'>
        <InputEditable className='color-white' name='first' type='text' defaultValue={first} maxLength='30' required/> 
        <InputEditable className='color-white' name='last' type='text' defaultValue={last} maxLength='30' required/>
        </TextContainerDouble>    
        <ImageContainer className='image-cropper'>    
          <img alt='Predefined' src={picture.large}/>
        </ImageContainer>
        <TextContainer>
          <InputEditable type='email' name='email' maxLength='50' placeholder='Enter Email..' defaultValue={email} required/>
        </TextContainer>
        <TextContainer>
          <InputEditable name='phone' maxLength='50' defaultValue={phone} placeholder='Enter Phone..' required/>
        </TextContainer>
        <TextContainerDouble className='double-input'>    
          <InputEditable name='city' type='text' maxLength='80' defaultValue={location.city} placeholder='Enter City..' required/>
          <InputEditable name='state' type='text' maxLength='80' defaultValue={location.state} placeholder='Enter State..' required/>
        </TextContainerDouble>
        <ButtonForm data-testid="submit-edit" type='submit'>Save Changes</ButtonForm>
      </ParentElement>
    </form>
  );
}
return (
 
  <ParentElement>
    <IconElement data-testid="edit" onClick={() => setEditable(true)}></IconElement>
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
