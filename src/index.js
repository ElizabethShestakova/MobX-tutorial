import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import store from './TodoStore';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoList store={store} />, document.getElementById('root'));

serviceWorker.unregister();
