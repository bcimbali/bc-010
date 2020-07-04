// @flow
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ContainerHeader = styled.div`
  background-color: #40522d;
  color: #ffffff;
  display: flex;
  font-size: 2.25rem;
  justify-content: center;
  overflow: hidden;
  text-transform: uppercase;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

type Props = {
  name: string,
};

/** Component header used for banks in control panel. */
function PanelSectionHeader({ name }: Props) {
  return <ContainerHeader>{name}</ContainerHeader>;
}

PanelSectionHeader.propTypes = {
  name: PropTypes.string,
};

export default PanelSectionHeader;