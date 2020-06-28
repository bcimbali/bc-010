// @flow
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { bindActionCreators } from 'redux';
import { toggleOscillators } from './../OscillatorBtn/actions.js';
import Icon from './../Icon';
import oscillatorTypes from './../../data/oscillatorTypes.json';

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

const OuterContainer = styled.section`
  align-self: center;
  border: 1px solid #40522d;
  max-width: 250px;

  @media (max-width: 768px) {
    max-width: 150px;
  }

  @media (max-width: 420px) {
    max-width: 100px;
  }
`;

const WaveformSelectionBttn = styled.div`
  align-items: center;
  border-bottom: 1px solid #40522d;
  display: flex;
  justify-content: center;
  padding: 5px 0;

  @media (max-width: 768px) {
    max-height: 18px;
  }

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
    border-bottom: none;
  }
`;

type Props = {
  toggleOscillators: Function,
  oscType: string,
};

function WaveformContainer({ oscType, toggleOscillators }: Props) {
  return (
    <OuterContainer>
      <ContainerHeader>Waveform</ContainerHeader>
      {oscillatorTypes.map(({ icon, id, type }) => {
        const isSelected = type === oscType;
        return (
          <WaveformSelectionBttn
            isSelected={isSelected}
            key={`${id}-${type}`}
            onClick={() => toggleOscillators(type)}
            type={type}
          >
            <Icon
              icon={type}
              strokeColor={isSelected ? '#ffffff' : '#40522d'}
              width="95%"
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

WaveformContainer.propTypes = {
  oscType: PropTypes.string,
  toggleOscillators: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WaveformContainer);
