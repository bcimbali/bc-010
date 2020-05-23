// @flow
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 1.5vw;
  height: 5vh;
  text-align: center;
  vertical-align: middle;
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
  overflow: hidden;
  text-align: center;
`;

type Props = {
  abbr: string,
};

/** Display component just shows the type of slider. */
function SliderLabel({ abbr }: Props) {
  return (
    <Header>
      <Label>{abbr}</Label>
    </Header>
  );
}

SliderLabel.propTypes = {
  /** Abbreviation of the parameter the slider changes (eg. A,D,S,R). */
  abbr: PropTypes.string,
};

export default SliderLabel;
