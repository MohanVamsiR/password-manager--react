import {Component} from 'react'

import './index.css'

import {v4} from 'uuid'

import GetPassword from '../Get_list'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class FillForm extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    list: [],

    searchInp: '',
    isChecked: false,
  }

  submitDetails = event => {
    event.preventDefault()
    const {website, password, username} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newUser = {
      id: v4(),
      website,
      username,
      password,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newUser],
      website: '',
      username: '',
      password: '',
    }))
  }

  changeCheckboxInp = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  changeWebsite = event => {
    this.setState({website: event.target.value})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeSearchInp = event => {
    this.setState({searchInp: event.target.value})
  }

  onDelItem = id => {
    const {list} = this.state
    const results = list.filter(each => each.id !== id)
    this.setState({list: results})
  }

  render() {
    const {
      website,
      username,

      password,
      searchInp,
      isChecked,
      list,
    } = this.state

    const filteredList = list.filter(each =>
      each.website.toLowerCase().includes(searchInp.toLowerCase()),
    )

    const count = filteredList.length

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="image"
        />

        <div className="first-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-manager-image"
          />
          <form className="formEl" onSubmit={this.submitDetails}>
            <h1 className="form-heading">Add New password</h1>

            <div className="inputEl">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-image"
              />
              <input
                type="text"
                className="input-text"
                onChange={this.changeWebsite}
                placeholder="Enter Website"
                value={website}
              />
            </div>

            <div className="inputEl">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-image"
              />
              <input
                type="text"
                className="input-text"
                onChange={this.changeUsername}
                placeholder="Enter Username"
                value={username}
              />
            </div>

            <div className="inputEl">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-image"
              />
              <input
                type="password"
                className="input-text"
                onChange={this.changePassword}
                placeholder="Enter Password"
                value={password}
              />
            </div>
            <div>
              <button type="submit" className="button">
                Add
              </button>
            </div>
          </form>
        </div>

        <div className="second-card">
          <div className="count-search-container">
            <div className="count-cont">
              <h1 className="count-heading">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="search-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-image"
              />
              <input
                type="search"
                placeholder="Search"
                className="searchInp"
                value={searchInp}
                onChange={this.changeSearchInp}
              />
            </div>
          </div>
          <hr className="hr" />
          <div className="check-cont">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              onClick={this.changeCheckboxInp}
            />
            <label className="label" htmlFor="checkbox">
              Show Passwords
            </label>
          </div>

          {count === 0 ? (
            <div className="empty">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-img"
              />
              <p className="no-para">No Passwords</p>
            </div>
          ) : (
            <ul className="unordered">
              {filteredList.map(each => (
                <GetPassword
                  key={each.id}
                  details={each}
                  onDelItem={this.onDelItem}
                  isChecked={isChecked}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default FillForm
