import React, { Component } from 'react';

import SliderLabel from './../SliderLabel';
import SliderNumberDisplay from './../SliderNumberDisplay';

class EnvelopeSlider extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.updateSynthValue = this.updateSynthValue.bind(this);
    this.state = {
      value: 1
    }
  }

  // Calls the function in App.jsx to update the synth timbre
  updateSynthValue() {
    this.props.envelopeSliderChange(this.props.adsr, this.state.value);
  }

  // Actually updates state in this slider instance
  updateValue(event) {
    this.setState({value: event.target.value});
  }

  // Handles slider changes
  handleChange(event) {
    this.updateValue(event);
    this.updateSynthValue();
  }

  render() { 
    return(
      <div className="envelopeSlider">
        <SliderLabel
          abbr={this.props.abbr}
          adsr={this.props.type}
        />
        <div className="slider-housing">
          <div className="slider-container">
            <input
              adsr={this.props.type}
              className="html-slider"
              type="range" 
              min={this.props.min} 
              max={this.props.max}
              onChange={this.handleChange}
              step={this.props.step}
              value={this.props.value}
            />
          </div>
        </div>
        <SliderNumberDisplay 
          value={this.props.value}
        />
      </div>
    );
  }
};

export default EnvelopeSlider;