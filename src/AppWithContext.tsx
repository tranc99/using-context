import React from 'react';
import logo from './logo.svg';
import './App.css';

interface CommonProps {
  theme: string
}

class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />
  }
}

function Toolbar(props: CommonProps) {
  return(
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  )
}

class ThemedButton extends React.Component<CommonProps> {
  render() {
    return(
      <Button theme={this.props.theme} />
    )
  }
}

const Button = (props: CommonProps) => {
  return(
  <button>I am a {`${props.theme} button`}</button>
  )
} 

export default App;
