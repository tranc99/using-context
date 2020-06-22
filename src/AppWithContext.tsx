import React from 'react';
import logo from './logo.svg';
import './App.css';

const ThemeContext = React.createContext('light')

interface CommonProps {
  theme: string
}

class AppWithContext extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

function Toolbar() {
  return(
    <div>
      <ThemedButton />
    </div>
  )
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext

  render() {
    return(
      <Button theme={this.context} />
    )
  }
}

const Button = (props: CommonProps) => {
  return(
  <button>I am a {`${props.theme} button`}</button>
  )
} 

export default AppWithContext;
