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
  console.log(
    'In SideNavDropdown.jsx, this is currentSelection: ',
    currentSelection,
  );
  // console.log('In SideNavDropdown.jsx, this is activeItem: ', activeItem);
  // console.log('In SideNavDropdown.jsx, this is items: ', items);
  return (
    <>
      <SubHeader>{name}</SubHeader>
      {items.map((item, idx) => {
        console.log(
          'currentSelection(item, activeItem)',
          currentSelection(item, activeItem),
        );
        const isActive = currentSelection(item);
        return (
          <PresetItem
            isActive={isActive}
            onClick={() => {
              console.log('item', item);
              clickHandler(item);
            }}
            key={`${item}-${idx}`}
          >
            {item}
          </PresetItem>
        );
      })}
    </>
  );
}

export default SideNavDropdown;
