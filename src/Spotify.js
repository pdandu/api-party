import React, { Component } from 'react'
import './Spotify.css'
import { Route } from 'react-router-dom'
import SpotifyUser from './SpotifyUser'

class Spotify extends Component {
  state = {
    username: ''
  }

  handleChange = (ev) => {
    const username = ev.currentTarget.value
    this.setState({ username })
  }

  handleSubmit = (ev) => {
      ev.preventDefault()
      this.props.history.push(`/spotify/${this.state.username}`)
  }

  render() {
    return (
      <div className="spotify">
        <img className="spotify" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/500px-Spotify_logo_with_text.svg.png" alt="spotify" />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type="text"
              value={this.state.username}
              onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit">Look up spotify user</button>
          </div>
        </form>

        <Route path='/spotify/:username' component={SpotifyUser} />

        <Route exact path='/spotify' render={() => (
            <h3> Please enter a username to search on Spotify </h3>
            )} />
      </div>
    )
  }
}

export default Spotify