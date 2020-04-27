// @flow
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleOscillators } from './../OscillatorBtn/actions.js';
import {
  updateFilterEnvelope,
  updateSynthEnvelope,
} from './../VerticalSlider/actions.js';

const HeaderContainer = styled.header`
  color: white;
  display: flex;
  font-size: 2vw;
  font-weight: bold;
  justify-content: space-between;
`;

const PresetsContainer = styled.div`
  background-color: orange;
  border: 1px dotted red;
  height: 10px;
  width: 40px;
`;

function Header(props) {
  console.log('In Header.jsx, this is props: ', props);
  return (
    <HeaderContainer>
      <div>bc-010</div>
      <PresetsContainer
        onClick={() => {
          props.toggleOscillators('sine');
          props.updateSynthEnvelope('attack', 0.5);
          props.updateFilterEnvelope('frequency', 13);
          props.updateFilterEnvelope('baseFrequency', 550);
        }}
      >
        <div />
      </PresetsContainer>
    </HeaderContainer>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleOscillators,
      updateFilterEnvelope,
      updateSynthEnvelope,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(Header);
