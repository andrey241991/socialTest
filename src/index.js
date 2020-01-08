import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import StoreContext from './StoreContext';
// import { Provider } from './StoreContext';
import { Provider } from 'react-redux';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root')
);

serviceWorker.unregister();




// export let rerenderEntireTree = (state) => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App />
//             </Provider>
//         </BrowserRouter>
//         , document.getElementById('root')
//     );
// }

// rerenderEntireTree(store.getState());
// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });

// serviceWorker.unregister();

// <StoreContext.Provider>
// {/* <App
//     store={store}
//     state={state}
//     dispatch={store.dispatch.bind(store)} /> */}
//     <App/>
// </StoreContext.Provider>