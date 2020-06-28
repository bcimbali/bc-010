// @flow
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { bindActionCreators } from 'redux';
import { toggleOscillators } from './../OscillatorBtn/actions.js';
import Icon from './../Icon';
import oscillatorTypes from './../../data/oscillatorTypes.json';
import sawtoothIcon from './../../img/long-sawtooth.svg';
import sineIcon from './../../img/long-sine.svg';
import squareIcon from './../../img/long-square.svg';
import triangleIcon from './../../img/long-triangle.svg';

const ContainerHeader = styled.div`
  background-color: #40522d;
  color: #ffffff;
  display: flex;
  font-size: 2.25rem;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
`;

const OuterContainer = styled.section`
  align-self: center;
  border: 1px solid #40522d;
  min-width: 192px;
`;

const WaveformSelectionBttn = styled.div`
  align-items: center;
  border-bottom: 1px solid #40522d;
  display: flex;
  justify-content: center;
  padding: 10px 0;

  :hover {
    background-color: #00bfa5;
    color: white;
    cursor: pointer;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #00bb10;
      color: white;
    `};

  &:last-child {
    /* border-bottom: none; */
  }
`;

const waveformIcons = {
  sine: sineIcon,
  square: squareIcon,
  triangle: triangleIcon,
  sawtooth: sawtoothIcon,
};

type Props = {
  abbr: string,
  synthParams: Object,
  toggleOscillators: Function,
  type: string,
  oscType: string,
};

function WaveformContainer({
  abbr,
  oscType,
  synthParams,
  toggleOscillators,
  type,
}: Props) {
  return (
    <OuterContainer>
      <ContainerHeader>Waveform</ContainerHeader>
      {oscillatorTypes.map(({ abbr, icon, id, type }) => {
        const isSelected = type === oscType;
        return (
          <WaveformSelectionBttn
            isSelected={isSelected}
            key={`${id}-${type}`}
            onClick={() => toggleOscillators(type)}
            type={type}
          >
            <Icon
              icon="square"
              width="95%"
              strokeColor={isSelected ? '#ffffff' : '#40522d'}
            />
          </WaveformSelectionBttn>
        );
      })}
    </OuterContainer>
  );
}

const mapStateToProps = state => ({
  oscType: state.synthesizer.oscillator.type,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleOscillators,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WaveformContainer);
