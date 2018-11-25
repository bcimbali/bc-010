# bc-010

A browser based synthesizer. :musical_keyboard: :sound:

## What is this?

This is an audio synthesizer to be used right in your own web browser. You can play the computer keyboard to sound the notes or click them in with the mouse. The tone of the synth can be changed by clicking and dragging the sliders in the control panel.

## Screenshot:

![Screenshot of synth](https://res.cloudinary.com/bcimbali/image/upload/dpr_auto,c_scale,f_auto,q_auto:eco,w_900/v1543174973/bc-010/bc-010_desktop.png)

## How to Use:

- Open a Chrome web browser (ony Chrome supports all features of Web MIDI / Web Audio)
- GO to the URL for the app/synth: https://frosty-swanson-669b64.netlify.com/
- Click on a musical key to play the synth
  - You can also use the "musical typing" feature of the computer keyboard to play notes
- Click and drag the sliders to adjust the tone
- Change the waveform of the synth between the 4 shown in the control panel (sine, square, triangle, sawtooth)
- Adjust the octave of the keyboard by toggling the plus and minus buttons in the octave section

## How to install and Run:

- `git clone` the repo
- Run `npm install` to get all dependencies
- `cd` into `bc-010`
- Run `npm start`
- Go to `localhost:3000` in your web browser

## How to type check with Flow

- `cd` into the root of the repo
- Run `npm install --save-dev flow-bin`
  - This command installs Flow as a Dev Dependency
- While in the root of the repo, run `npm run flow`
- Any errors will be logged to the console
  - If there aren't any errors, it will display as well

## Documentation

- [Components, props, and methods all documented here](https://spiffy-vase.surge.sh/)

## Built with:

- React
- Flow
- Javascript
- Tone.js
- HTML
- CSS

## Future Features:

- Ability to login and save presets
- Add MIDI keyboard recognition
- Fully adjustable portamento
