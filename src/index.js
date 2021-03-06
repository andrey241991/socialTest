import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import store from './redux/state';

export let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <BrowserRouter>
            <App
            store={store}
            state={state}
            dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
