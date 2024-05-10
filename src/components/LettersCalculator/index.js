// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onLetterCount = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="enterPhrase" className="enter-phrase">
            Enter the phrase
          </label>
          <input
            onChange={this.onLetterCount}
            type="text"
            placeholder="Enter the phrase"
            id="enterPhrase"
            value={inputPhrase}
          />
          <p className="letter-counter">No.of letters: {inputPhrase.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
