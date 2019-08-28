// @flow
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #40522d;
  display: flex;
  font-size: 1.5vw;
  justify-content: center;
`;

/** Header section for octave section of control panel. */
function OctaveHeader() {
  return <Container>Octave</Container>;
}

export default OctaveHeader;
