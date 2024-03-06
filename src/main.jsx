import ReactDOM from 'react-dom/client';
import ProductProvider from './context/ProductContext';
import store from "./store/store"
import { Provider } from 'react-redux';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            <ProductProvider>
                <App />
            </ProductProvider>
        </Provider>
    </>

)