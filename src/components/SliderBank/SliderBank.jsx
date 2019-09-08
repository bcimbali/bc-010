// @flow
import EnvelopeSlider from './../EnvelopeSlider';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.section`
  align-self: flex-end;
  border: 1px solid #40522d;
  display: flex;
  height: 40vh;
`;

type Props = {
  sliderArray: Array<Object>,
  sliderParams: Object,
  typeOfParams: string,
};

/** Houses all the tweakable sliders. */
function SliderBank({ sliderArray, sliderParams, typeOfParams }: Props) {
  return (
    <SliderContainer>
      {sliderArray.map(({ abbr, id, max, min, sliderName, step }) => (
        <EnvelopeSlider
          abbr={abbr}
          sliderName={sliderName}
          key={`${id}-${sliderName}`}
          type="range"
          typeOfParams={typeOfParams}
          min={min}
          max={max}
          step={step}
          value={sliderParams[sliderName]}
        />
      ))}
    </SliderContainer>
  );
}

SliderBank.propTypes = {
  /** List of sliders to be created. */
  sliderArray: PropTypes.array,
  /** All tweakable properties accessible in the slider bank.  */
  sliderParams: PropTypes.object,
  /** Name of the object of which envelope to be adjusted */
  typeOfParams: PropTypes.string,
};

export default SliderBank;
