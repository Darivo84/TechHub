import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  color: #fff;
  font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-weight: 400;
  padding: 7px 1em;
  border-radius: 3px;
  background-color: rgba(191, 96, 55, 1.0);
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    color: #bf6037;
    font-weight: 600;
    border: 2px solid #bf6037;
    background-color: transparent;
  }
  &:focus {
    outline: none;
  }
`;

export function Button(props) {
  const { size } = props;

  return (
    <ButtonWrapper size={size}>
      {props.children}
    </ButtonWrapper>
  )
}
