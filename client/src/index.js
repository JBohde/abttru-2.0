import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);
// Kicks off the process of finding <i> tags and replacing with <svg>
dom.watch();

ReactDOM.render(<App />, document.getElementById('root'));
