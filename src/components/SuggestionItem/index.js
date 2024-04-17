import './index.css'

import {Component} from 'react'

class SuggestionItem extends Component {
  onClickUpdateSearchInput = () => {
    const {item, displayValue} = this.props
    const {suggestion} = item
    displayValue(suggestion)
  }

  render() {
    const {item} = this.props
    const {suggestion} = item
    return (
      <li className="bg-item" onClick={this.onClickUpdateSearchInput}>
        <p className="bg-text">{suggestion}</p>
        <img
          className="bg-icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow icon"
        />
      </li>
    )
  }
}

export default SuggestionItem
