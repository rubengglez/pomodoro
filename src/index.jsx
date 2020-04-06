import '../styles/main.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/home.page';
import PomodoroPage from './pages/pomodoro.page';
import SettingsPage from './pages/settings.page';

const rootNode = document.getElementById('root');

class AppMain extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    return React.createElement(
      'div',
      {},
      <HomePage />,
      <PomodoroPage />,
      <SettingsPage />
    )
  }
}

const nodeGitbug = React.createElement(AppMain)

ReactDOM.render(nodeGitbug, rootNode);
