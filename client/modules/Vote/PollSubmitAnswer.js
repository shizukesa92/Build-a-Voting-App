import React, { Component } from 'react';
import axios from 'axios';
import PollAnswers from './PollAnswers';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class PollSubmitAnswer extends Component {
  state = {
    selectedAnswer: '',
    otherAnswer: ''
  };

  submitAnswer = async () => {
    if (this.state.selectedAnswer === '')
      window.alert('Please select an answer in order to vote.');
    else if (this.state.selectedAnswer === 'other') {
      if (!this.props.auth) {
        if (window.confirm('Please login in order to submit custom asnwer.'))
          this.props.history.push({
            pathname: '/login',
            state: { from: this.props.location }
          });
      } else if (this.state.otherAnswer === '')
        window.alert(
          'Please type in an answer in order to submit custom answer.'
        );
      else {
        try {
          await axios.post('/api/add_answer/' + this.props.pollId + '/', {
            answer: this.state.otherAnswer
          });
          window.alert('Thank you for your vote.');
          // this.setState({ selectedAnswer: '', otherAnswer: '' });
          this.props.getPollInfo(this.props.pollId);
          this.props.clearAnswers();
        } catch (err) {
          window.alert('There was a problem recording your response: ' + err);
        }
      }
    } else {
      try {
        console.log(this.props.pollId);
        await axios.post(
          '/api/vote/' + this.props.pollId + '/' + this.state.selectedAnswer,
          {}
        );
        window.alert('Thank you for your vote.');
        // this.setState({ selectedAnswer: '', otherAnswer: '' });
        this.props.getPollInfo(this.props.pollId);
        this.props.clearAnswers();
      } catch (err) {
        window.alert('There was a problem recording your response: ' + err);
      }
    }
  };

  handleAnswerSelect = e => {
    if (e.target.id === 'other') this.otherInput.focus();
    this.setState({ selectedAnswer: e.target.id });
  };

  handleOtherTyping = e => {
    this.setState({ otherAnswer: e.target.value });
  };

  handleOtherFocus = () => {
    this.setState({ selectedAnswer: 'other' });
  };
  renderOtherOption() {
    return (
      <div className="answerOptions">
        <input
          className="with-gap"
          type="radio"
          id="other"
          onChange={this.handleAnswerSelect}
          checked={this.state.selectedAnswer === 'other'}
        />
        <label htmlFor={'other'}>Other: </label>
        <div className="input-field inline">
          <input
            onFocus={this.handleOtherFocus}
            onChange={this.handleOtherTyping}
            ref={input => {
              this.otherInput = input;
            }}
            type="text"
            className="otherAnswer"
            value={this.state.otherAnswer}
          />
        </div>
      </div>
    );
  }
  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        <PollAnswers
          answers={this.props.answers}
          selectedAnswer={this.state.selectedAnswer}
          handleAnswerSelect={this.handleAnswerSelect}
        />
        {this.renderOtherOption()}
        <div className="btn blockBtns" onClick={this.submitAnswer}>
          Submit<i className="material-icons right">send</i>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(withRouter(PollSubmitAnswer));
