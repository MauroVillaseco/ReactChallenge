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
  const CrossStyles = styled.span`
    cursor: pointer;
    left: -12px;
    position: relative;
    opacity:0;
    pointer-events:none;
    transition: opacity .3s ease-in-out;
    &.active {
      opacity:1;
      pointer-events:auto;
    }
  `;
export const SearchInput = ({input:keyword, onChange:setKeyword}) => {
  return (
    <div>
      <BarStyling 
      key="random1"
      value={keyword || ''}
      placeholder={"Search People.."}
      onChange={(e) => setKeyword(e.target.value)}
      />
      <CrossStyles className={keyword && 'active'} onClick={() => setKeyword('')}>x</CrossStyles>
    </div>
  );
}


Element.propTypes = {
  keyword: PropTypes.string.isRequired
};

