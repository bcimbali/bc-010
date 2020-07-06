// @flow
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import styled, { css, ThemeContext } from 'styled-components';
import { bindActionCreators } from 'redux';
import { toggleOscillators } from './../OscillatorBtn/actions.js';
import Icon from './../Icon';
import PanelSectionHeader from './../PanelSectionHeader';
import oscillatorTypes from './../../data/oscillatorTypes.json';

const OuterContainer = styled.section`
  border: 1px solid ${props => props.theme.primary};
  max-width: 250px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 150px;
  }

  @media (max-width: 420px) {
    max-width: 100px;
  }
`;

const WaveformSelectionBttn = styled.div`
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.primary};
  display: flex;
  justify-content: center;
  padding: 5px 0;

  @media (max-width: 768px) {
    /* max-height: 18px; */
  }

  :hover {
    background-color: ${props => props.theme.quaternary};
    color: white;
    cursor: pointer;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${props => props.theme.secondary};
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
  const themeContext = useContext(ThemeContext);
  return (
    <OuterContainer>
      <PanelSectionHeader name="Waveform" />
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
              strokeColor={
                isSelected ? themeContext.tertiary : themeContext.primary
              }
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
