// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {
        username: 'JohnDoe',
        fullName: 'John Doe',
        email: 'johndoe@example.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        avatarUrl: 'https://via.placeholder.com/150',
      },
    };
  }

  render() {
    const { userProfile } = this.state;
    return (
      <div className="profile-container">
        <div className="profile-header">
          <img className="avatar" src={userProfile.avatarUrl} alt="User Avatar" />
          <h1>{userProfile.fullName}</h1>
          <p>@{userProfile.username}</p>
          <p>{userProfile.email}</p>
        </div>
        <div className="profile-bio">
          <h2>Bio</h2>
          <p>{userProfile.bio}</p>
        </div>
      </div>
    );
  }
}

export default App;
