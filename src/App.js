import { BrowserRouter, Routes, Route } from "react-router-dom"; 

//14.1k (gzipped: 5.5k)

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";

function App() {
    return (
        <BrowserRouter>
        <AppContext>

            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
            <Newsletter />
            <Footer />
        ß</AppContext>
        </BrowserRouter>
    );
}

export default App;
