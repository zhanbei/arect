//

const load = require('./loader');

const React = load('react', 'React');
const ReactDom = load('react-dom', 'ReactDOM');
React.React = React;
React.ReactDom = ReactDom;
React.ReactDOM = ReactDom;
module.exports = React;
