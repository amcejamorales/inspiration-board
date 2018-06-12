import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
      emoji: ''
    };
  }

  onInputChange = (event) => {
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const emoji_options = EMOJI_LIST.map((emoji, index) => {
      return <option key={index} >
        { emoji }
      </option>;
    });
    return (
      <form onSubmit={this.onFormSubmit}>
        <h3>Add a new inspirational note to this board.</h3>
        <div>
          <label htmlFor="text">Message</label>
          <input
            type="text"
            name="text"
            onChange={ this.onInputChange }
          />
        </div>
        <div>
          <label htmlFor="emoji">Emoji (optional)</label>
          <select
            name="emoji"
            onChange={ this.onInputChange }
          >
            { emoji_options }
          </select>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    );
  }
}

export default NewCardForm;
