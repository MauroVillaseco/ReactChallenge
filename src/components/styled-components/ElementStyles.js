import myImage from '../../img/editIcon.svg';
import styled from 'styled-components'
import * as palette from '../../styles/styledComponentsGenerals.js';

export const ParentElement = styled.div`
background-color: ${palette.WHITE};
color: ${palette.BLACK};
border-radius:3px;
display: grid;
text-align: center;
box-shadow: 0px 4px 9px -1px rgba(61,61,61,1);
background: linear-gradient(to bottom, #416dff 30%, ${palette.WHITE} 30%);
height: 370px;
grid-template-columns: 75%;
justify-content: center;
position: relative;
`;

export const TextContainer = styled.div`
padding-bottom: 20px;
color: ${palette.BLACK};
border-radius:3px; 
display: inline-block;
align-self: end;
`;

export const TextContainerDouble = styled.div`
padding-bottom: 20px;
color: ${palette.BLACK};
border-radius:3px;
align-self: end;
display: flex;
justify-content: center;
padding-bottom: 8px !important;
input {
max-width: 80px;
    &:first-of-type{
      margin-right: 25px;
    }
  }
`;

export const HeadElement = styled.h4`
font-size: 20px;
color: ${palette.WHITE};
text-transform: capitalize;
text-overflow: ellipsis;
overflow: hidden;
`;

export const TextElement = styled.p`
font-size: 15px;
color: #878787;
text-overflow: ellipsis;
overflow: hidden;
`;

export const ImageContainer = styled.div`
  width: 130px;
  height: 130px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  border: 3px ${palette.WHITE} solid;
  box-shadow: 0px 4px 9px -1px rgba(61,61,61,1);
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  img {
      display: inline;
      margin: 0 auto;
    }
`;

export const IconElement = styled.div`
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
export const InputEditable = styled.input`
height: 25px;
background: inherit;
border: none;
border-bottom: 1px solid;
border-radius: 0;
 &:focus {
   outline: none;
 }
`;

export const ButtonForm = styled.button`
 background: #416dff;
 height: 30px;
 cursor: pointer;
 border: 1px solid #ccc;
 border-radius: 3px;
 color:${palette.WHITE};
 font-weight: bold;
`;
