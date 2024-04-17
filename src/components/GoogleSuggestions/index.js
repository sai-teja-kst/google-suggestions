// Write your code here

import {Component} from 'react'

import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  displayValue = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const filterValues = suggestionsList.filter(eachItem =>
      eachItem.suggestion.includes(searchInput),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="bg-img"
        />
        <div className="bg-card">
          <div className="bg-search-div">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="bg-icon"
              />
            </div>
            <div>
              <input
                type="search"
                className="bg-input"
                value={searchInput}
                onChange={this.onChangeSearch}
              />
            </div>
          </div>
          <ul className="bg-ul">
            {filterValues.map(eachItem => (
              <SuggestionItem
                item={eachItem}
                key={eachItem.id}
                displayValue={this.displayValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
