import React from "react";
import { useElementsStore } from "../store";
import styled from 'styled-components';

const SortContainer = styled.div`
 margin: 30px;
 color: #000;
 border-bottom: 1px solid #ccc;
`;
const ButtonElement = styled.button`
 background-color: #F1F1F1;
 padding: 14px;
 color: #000;
 border-radius:3px;
 border:none;
 margin-top: 30px;
 margin-bottom: 30px;
 cursor:pointer;
 border:1px solid #CCC;
 transition: all .3s ease-in-out;
  &:hover {
    background-color: #FFF;
  }
`;

// Container to sort the elements by name
export const SortElements = () => {
  //var and modifier
  const { elements, sortElements } = useElementsStore();

  return (
    <SortContainer>
      <h2>Just a button to sort by Last Name</h2>
     
      <ButtonElement type="button" onClick={() => sortElements(elements)}>Lets Sort!</ButtonElement>
    </SortContainer>
  );
};
