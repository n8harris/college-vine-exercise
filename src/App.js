import React, { Component } from 'react';
import CounterButton from './CounterButton';
import RecapButton from './RecapButton';
import Counter from './Counter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.COLORS = {
      green: 'green',
      blue: 'blue',
      white: 'white',
    }
    this.state = {
      counterVal: 0,
      backgroundColor: this.COLORS.white,
      dropShadowStyleActive: false,
      colorHistory: [],
      currentColorIndex: 0,
      runningRecap: false,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.recapColors = this.recapColors.bind(this);
  }

  incrementCounter() {
    if (this.state.counterVal < 100) {
      this.setState({ counterVal: this.state.counterVal + 1 }, this.checkCounterVal);
    }
  }

  checkCounterVal() {
    // Precedence is order in which specifications were given
    if (this._isDivByFiveRemThree(this.state.counterVal)) {
      this.setColorState(this.COLORS.green);
      return;
    }

    if (this._isPrime(this.state.counterVal)) {
      this.setColorState(this.COLORS.blue);
      return;
    }

    if(this._isNotZeroDivByTen(this.state.counterVal)) {
      this.setState({ backgroundColor: this.COLORS.white, dropShadowStyleActive: true });
      return;
    }

    this.setState({ backgroundColor: this.COLORS.white, dropShadowStyleActive: false });
  }

  setColorState(color) {
    this.setState({
      backgroundColor: color,
      colorHistory: this.state.colorHistory.concat([color]),
      dropShadowStyleActive: false,
    });
  }

  recapColors() {
    if (!this.state.runningRecap) {
      this.setState({ runningRecap: true });
      const recapInterval = setInterval(() => {
        if (this.state.currentColorIndex < this.state.colorHistory.length) {
          this.setState({
            backgroundColor: this.state.colorHistory[this.state.currentColorIndex],
            currentColorIndex: this.state.currentColorIndex + 1
          });
        } else {
          clearInterval(recapInterval);
          this.setState({ runningRecap: false, currentColorIndex: 0 });
        }
      }, 500);
    }
  }

  _isDivByFiveRemThree(val) {
    return val % 5 === 3;
  }

  _isPrime(val) {
    // A functional approach to isPrime
    return val > 1 && Array.from({length: val - 2}, (v, k) => k + 2).filter((v) => val % v === 0).length === 0;
  }

  _isNotZeroDivByTen(val) {
    return val !== 0 && val % 10 === 0;
  }

  render() {
    return (
      <div className="App">
        <CounterButton
          incrementCounter={this.incrementCounter}
          dropShadowStyleActive={this.state.dropShadowStyleActive}
          backgroundColor={this.state.backgroundColor}
        />
        <Counter counterVal={this.state.counterVal} />
        <RecapButton
          recapColors={this.recapColors}
        />
      </div>
    );
  }
}

export default App;
