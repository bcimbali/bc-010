// @flow
import React from 'react';
import styled, { css } from 'styled-components';

const PresetItem = styled.div`
  border-bottom: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  display: flex;
  font-size: 2rem;
  justify-content: center;
  letter-spacing: 3px;
  line-height: 70%;
  padding: 20px 0;
  text-align: center;
  text-transform: uppercase;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  :hover {
    background-color: ${props => props.theme.quaternary};
    color: white;
    cursor: pointer;
    opacity: 0.8;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${props => props.theme.secondary};
      color: ${props => props.theme.tertiary};
    `};
`;

const SubHeader = styled.div`
  border-bottom: 1px solid ${props => props.theme.primary};
  border-top: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  display: flex;
  font-size: 2rem;
  justify-content: flex-start;
  letter-spacing: 3px;
  line-height: 70%;
  padding: 20px 0;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;

function SideNavDropdown({
  activeItem,
  currentSelection,
  name,
  items,
  clickHandler,
}) {
  return (
    <>
      <SubHeader>{name}</SubHeader>
      {items.map((item, idx) => {
        const isActive = currentSelection(item);
        return (
          <PresetItem
            isActive={isActive}
            onClick={() => {
              clickHandler(item);
            }}
            key={`${item}-${idx}`}
          >
            {typeof item === 'string' ? item : item.name}
          </PresetItem>
        );
      })}
    </>
  );
}

export default SideNavDropdown;
