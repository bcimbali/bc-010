// @flow
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Chevron = styled(FontAwesomeIcon)`
  color: ${props => props.theme.primary};
  font-weight: 100;
  margin-right: 5px;
  transition: all 0.1s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    `};
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.2s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      max-height: 2000px;
      opacity: 1;
    `};
`;

const DropdownItem = styled.div`
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

const Header = styled.div`
  border-bottom: 1px solid ${props => props.theme.primary};
  border-top: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  display: flex;
  font-size: 2rem;
  justify-content: space-between;
  letter-spacing: 3px;
  line-height: 70%;
  padding: 20px 0;
  text-align: center;
  text-transform: uppercase;
  width: 100%;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function SideNavDropdown({
  activeItem,
  currentSelection,
  name,
  items,
  clickHandler,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header onClick={() => setIsOpen(!isOpen)}>
        {name}
        <Chevron icon={faChevronDown} isOpen={isOpen} />
      </Header>
      <ItemContainer isOpen={isOpen}>
        {items.map((item, idx) => {
          const isActive = currentSelection(item);
          return (
            <DropdownItem
              isActive={isActive}
              onClick={() => {
                clickHandler(item);
              }}
              key={`${item}-${idx}`}
            >
              {typeof item === 'string' ? item : item.name}
            </DropdownItem>
          );
        })}
      </ItemContainer>
    </>
  );
}

export default SideNavDropdown;
