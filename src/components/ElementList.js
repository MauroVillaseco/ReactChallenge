import React from "react";
import PropTypes from "prop-types";
import { Element } from "./Element";
import styled from 'styled-components'
const ContainerElement = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
  margin-top: 20px;
`;

// List that recives all the elements and iterate between them to pass the data to the element Component.
export const ElementList = ({ elements }) => {
  if (!elements) { 
    return null;
  }
  return(
 
  <ContainerElement>
       
      {elements.map(element => (
        //i couldn't use the user id here, because sometimes it was null
        <Element key={element.registered.date}
        first={element.name.first}
        last={element.name.last}
        email={element.email}
        phone={element.phone}
        picture={element.picture}
        location={element.location}
          />
      ))}
    
  </ContainerElement>   
  )
};

ElementList.propTypes = {
  elements: PropTypes.array.isRequired
};
