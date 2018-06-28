import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'
import { Provider } from 'react-redux';

const emptyFunc = () => {}
if(process.env.NODE_ENV === 'production') { // empty console
    window.console = {
        log: emptyFunc,
        error: emptyFunc,
        warn: emptyFunc,
        info: emptyFunc,
        assert: emptyFunc,
        clear: emptyFunc,
        debug: emptyFunc,
        group: emptyFunc,
        groupEnd: emptyFunc,

    }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
