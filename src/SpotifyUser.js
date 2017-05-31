import React, { Component } from 'react'

import './Spotify.css'

class SpotifyUser extends Component {
    state = {
      user: { 
        id: '',
        display_name: '',
        birthdate: '',
        followers: '',
        following: '',
        external_urls: '',
     }
    }
    constructor(props) {
        super(props)
        this.fetchUserData(props)
    }

    fetchUserData = (props) => {
        fetch(`https://api.spotify.com/v1/users/${props.match.params.username}`)
        .then(response => response.json())
        .then(user => this.setState({ user }))
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = (nextProps.location !== this.props.location)
        if (locationChanged) {
            this.fetchUserData(nextProps)
        }
}
    render() {
        const { user } = this.state
        return (
        <div className="spotify-user">
            <h2>{user.id}</h2>
            <h3>Username: {user.display_name}</h3>
            <h3>Birthdate: {user.birthdate}</h3>
            <h3>Followers: {user.followers}</h3>
            <h3>Following: {user.following}</h3>
            <a href={user.html_url} target="_">Link to {user.id}'s profile </a>
            </div>
        )
    }
}

export default SpotifyUser