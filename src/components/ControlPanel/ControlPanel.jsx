import FilterSliderBank from './../FilterSliderBank';
import OctaveContainer from './../OctaveContainer';
import OscillatorBtn from './../OscillatorBtn';
import PropTypes from 'prop-types';
import React from 'react';
import SliderBank from '../SliderBank/SliderBank';
import oscillatorTypes from './../../oscillatorTypes.json';

function ControlPanel({
  attackValue,
  decayValue,
  sustainValue,
  releaseValue,
  decreaseOctave,
  envelopeSliderChange,
  filterValue,
  increaseOctave,
  lfoValue,
  octave,
  oscillator,
  toggleOscillator
}) {
  return(
    <div className="controlPanel">
    <SliderBank
      attackValue={attackValue}
      decayValue={decayValue}
      sustainValue={sustainValue}
      releaseValue={releaseValue} 
      envelopeSliderChange={envelopeSliderChange} 
    />
    <FilterSliderBank 
      envelopeSliderChange={envelopeSliderChange}
      filterValue={filterValue}
      lfoValue={lfoValue} 
    />
    <OctaveContainer
      key="octave-container"
      decreaseOctave={decreaseOctave}
      increaseOctave={increaseOctave}
      octave={octave}
    />
    {oscillatorTypes.map(({abbr, id, type}) => (
      <OscillatorBtn
        abbr={abbr} 
        key={`${id}-${type}`}
        oscillator={oscillator}
        toggleOscillator={toggleOscillator}
        type={type}
      />
    ))}
      
    </div>
  );
};

ControlPanel.propTypes = {
  attackValue: PropTypes.number,
  decayValue: PropTypes.number,
  sustainValue: PropTypes.number,
  releaseValue: PropTypes.number,
  decreaseOctave: PropTypes.func,
  envelopeSliderChange: PropTypes.func,
  filterValue: PropTypes.number,
  increaseOctave: PropTypes.func,
  lfoValue: PropTypes.number,
  octave: PropTypes.number,
  oscillator: PropTypes.string,
  toggleOscillator: PropTypes.func
};

export default ControlPanel;