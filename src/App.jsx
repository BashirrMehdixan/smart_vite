import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import ProductDetail from './pages/products/ProductDetail';
import Wishlist from "./pages/wishlist/Wishlist";
import FormComponent from './components/FormComponent';
import NotFound from './pages/NotFound';

// Layouts
import RootLayout from './layouts/RootLayout';

// CSS
import "./index.css"
import './App.css';

function App() {

    const router = createBrowserRouter([
        {
            element: <RootLayout />,
            children: [
                {
                    path: "*",
                    element: <NotFound />
                },
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "products",
                    element: <Products />,
                },
                {
                    path: "/products/:productId",
                    element: <ProductDetail />,
                },
                {
                    path: "/form",
                    element: <FormComponent />
                },
                {
                    path: "/wishlist",
                    element: <Wishlist />
                }
            ]
        }
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;