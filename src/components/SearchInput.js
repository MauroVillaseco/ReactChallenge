import React from 'react';
import styled from 'styled-components'
import PropTypes from "prop-types";
const BarStyling = styled.input`
    height: 25px;
    background: inherit;
    border: none;
    border-bottom: 1px solid;
    border-radius: 0;
      &:focus {
        outline: none;
      }
  `;
export const SearchInput = ({input:keyword, onChange:setKeyword}) => {
  return (
    <BarStyling 
     key="random1"
     value={keyword || ''}
     placeholder={"Search People.."}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}


Element.propTypes = {
  keyword: PropTypes.string.isRequired
};

