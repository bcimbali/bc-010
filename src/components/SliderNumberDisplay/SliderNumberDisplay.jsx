// @flow
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 1vw;
  height: 5vh;
  text-align: center;
  vertical-align: middle;
  width: 100%;
`;

const NumberDisplay = styled.p`
  margin: 0;
  text-align: center;
`;

type Props = {
  value: number,
};

/** Display component that shows the real-time value of the slider. */
function SliderNumberDisplay({ value }: Props) {
  return (
    <Container>
      <NumberDisplay>{value}</NumberDisplay>
    </Container>
  );
}

SliderNumberDisplay.propTypes = {
  /** Value for that slider parameter as it is in App.jsx state. */
  value: PropTypes.number,
};

export default SliderNumberDisplay;
