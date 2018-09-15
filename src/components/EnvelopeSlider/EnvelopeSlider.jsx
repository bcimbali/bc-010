import React, { Component } from 'react';

class EnvelopeSlider extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.updateSynthValue = this.updateSynthValue.bind(this);
    this.state = {
      value: 0.001
    }
  }

  updateSynthValue() {
    this.props.envelopeSliderChange(this.state.value);
  }

  updateValue(event) {
    this.setState({value: event.target.value});
  }

  handleChange(event) {
    this.updateValue(event);
    this.updateSynthValue();
  }

  render() { 
    return(
      <div className="envelopeSlider">
        <input 
          type="range" 
          min="0.001" 
          max="1"
          onChange={this.handleChange}
          step="0.0001" 
          value={this.state.value}
        />
        {console.log('slider value: ', this.state.value)}
      </div>
    );
  }
};

export default EnvelopeSlider;