import React, { useState, useEffect } from "react";
import { ElementList } from "../components/ElementList";
import { useElementsStore } from "../store";
import { SearchInput } from '../components/SearchInput';
import styled from 'styled-components';

  
const GridContainer = styled.div`
  padding:30px;
`;
// Container to show the elements and filter them
export const VisibleElementList = () => {
  const [ input, setInput ] = useState();
  const { elements } = useElementsStore();
  const [ elementsListsFiltered, setElementsListsFiltered] = useState(elements);
  useEffect( () => {
    setElementsListsFiltered(elements);
  }, [elements])
  
  const updateInput = async (input) => {
      const filtered = elements.filter(element => {
      return (element.name.first + element.name.last).replace(/\s/g,'').toLowerCase().includes(input.replace(/\s/g,'').toLowerCase())
      })
      setInput(input);
      setElementsListsFiltered(filtered);
  }


  return( 
    <GridContainer>
      <SearchInput input={input} onChange={updateInput} />
      <ElementList elements={elementsListsFiltered} />
    </GridContainer>);
};
