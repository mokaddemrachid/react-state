import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      
            fullName : "foulen ben foulen",
             bio : "Mark Elliot Zuckerberg naît le 14 mai 1984 à White Plains dans l’État de New York au sein d’une famille juive américaine. Il est le fils de Karen Kempner (née en 1958), psychiatre, et d'Edward Zuckerberg (né en 1954), dentiste.",
             imgSrc : "https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?w=2000",
             profession : "Full Stack JS React developer"
           },
    show: false,
    mountedAt: new Date(),
  };

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  calculateTimeSinceMount = () => {
    const now = new Date();
    const mountedAt = this.state.mountedAt;
    const timeDifference = now.getTime() - mountedAt.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    return seconds;
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div>
            <img src={imgSrc} alt={fullName} style={{width:"200px", height:"150px"}}/>
            <h1>{fullName}</h1>
            <p>Profession: {profession}</p>
            <p>{bio}</p>
          </div>
        )}
        <p>Time since mount: {this.calculateTimeSinceMount()} seconds</p>
      </div>
    );
  }
}

export default App;
