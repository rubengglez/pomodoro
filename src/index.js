import '../styles/main.scss'
import * as React from "react";
import * as ReactDOM from "react-dom";

import {Test} from './test';

const node = document.getElementById('root');
const github = document.getElementById('github');

const root = React.createElement(
  "div",
  {},
  React.createElement(
    "h1",
    {},
    "Hello, world!",
    React.createElement(
      "a",
      { href: "mailto:mark@ifelse.io" },
      React.createElement("h1", {}, "React In Action"),
      React.createElement("em", {}, "...and now it really is!")
    )
  )
);

class Div extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return React.createElement(
      'div',
      {
        className: this.props.class,
      },
      'contentDiv'
    )
  }
}

class H3 extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    return React.createElement(
      'h3',
      {
        className: this.props.class,
      },
      React.createElement(
        'span',
        {
          className: 'counter'
        },
        this.props.counter
      )
    )
  }
}

class Group extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    return React.createElement(
      'div',
      {
        id: this.props.id,
        role: 'navigation',
      },
      "testo",
      React.createElement(
          Div,
          {},
          'soy div inside'
      ),
      React.createElement(
        H3,
        {
          class: this.props.class,
          counter: this.props.counter,
        }
      ),
      React.createElement(
        Div,
        {},
        'aaaaaaaaaa'
      )
    )
  }
}

class Github extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    return React.createElement(
      'div',
      {
        id: 'buuuuu',
      },
      React.createElement(
        Group,
        {
          id: this.props.id,
          counter: this.props.counter,
          class: this.props.class,
        }
      )
    )
  }
}

ReactDOM.render(root, node);

const nodeGitbug = React.createElement(Github, {
    id: 'your_repos',
    counter: 105,
    class: 'pepe'
})

ReactDOM.render(nodeGitbug, github);

const x = 10;

function sume(a, b) {
  return a + b;
}

const t = new Test();

console.log(t.foo);
