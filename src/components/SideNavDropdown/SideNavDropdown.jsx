// @flow
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tc from "tinycolor2";

const Chevron = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.primary};
  font-weight: 100;
  margin-right: 5px;
  transition: all 0.1s;

  ${({ isopen }) =>
    isopen === 'true' &&
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

  ${({ isopen }) =>
    isopen === 'true' &&
    css`
      max-height: 2000px;
      opacity: 1;
    `};
`;

const DropdownItem = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  color: ${({ textColor }) => textColor};
  display: flex;
  font-size: 2rem;
  justify-content: center;
  letter-spacing: 3px;
  line-height: 70%;
  padding: 20px 0;
  text-align: center;
  text-transform: uppercase;
  transition: all ${({ theme }) => theme.globalTransition};
  width: 100%;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  :hover {
    background-color: ${({ theme }) => theme.quaternary};
    color: white;
    cursor: pointer;
    opacity: 0.8;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.tertiary};
    `};
`;

const Header = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  border-top: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  font-size: 2rem;
  justify-content: space-between;
  letter-spacing: 3px;
  line-height: 70%;
  padding: 20px 0;
  text-align: center;
  text-transform: uppercase;
  transition: all ${({ theme }) => theme.globalTransition};
  width: 100%;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const getItemName = item => (typeof item === 'string' ? item : item.name);

type Props = {
  clickHandler: Function,
  currentSelection: Function,
  items: Array<string | Object>,
  name: string,
  theme: Object,
};

function SideNavDropdown({
  clickHandler,
  currentSelection,
  items,
  name,
  theme,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const tcBackground = tc(theme.background);
  const tcPrimary = tc(theme.primary);
  const isBackgroundLight = tcBackground.isLight();

  return (
    <>
      <Header onClick={() => setIsOpen(!isOpen)}>
        {name}
        <Chevron icon={faChevronDown} isopen={isOpen.toString()} />
      </Header>
      <ItemContainer isopen={isOpen.toString()}>
        {items.map((item, idx) => {
          const idxOffset = idx / 2;
          const isActive = currentSelection(item);
          const itemName = getItemName(item);
          return (
            <DropdownItem
              bgColor={isBackgroundLight ? tcBackground.darken(idxOffset).toString() : tcBackground.lighten(idxOffset).toString()}
              isActive={isActive}
              onClick={() => {
                clickHandler(item);
              }}
              key={`${itemName}-${idx}`}
              textColor={isBackgroundLight ? tcPrimary.lighten(idxOffset).toString() : tcPrimary.darken(idxOffset).toString() }
            >
              {itemName}
            </DropdownItem>
          );
        })}
      </ItemContainer>
    </>
  );
}

SideNavDropdown.propTypes = {
  /** Function that runs when dropdown item is clicked. */
  clickHandler: PropTypes.func,
  /** Determines if current dropdown item is active, mostly used for styling active state. */
  currentSelection: PropTypes.func,
  /** Array of items to be listed in dropdown. */
  items: PropTypes.array,
  /** Header name of the dropdown. */
  name: PropTypes.string,
  /** Selected theme object */
  theme: PropTypes.object,
};

export default withTheme(SideNavDropdown);
