import React from 'react';
import HomePage from './pages/HomePage';
import ByCategoryPage from './pages/ByCategoryPage';
import DetailsPage from './pages/DetailsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/byCategory/:categoryID" element={<ByCategoryPage/>}/>
                <Route path="/details/:postID" element={<DetailsPage/>}/>
     </Routes>
     </BrowserRouter>
     <Footer/>
     
    </div>
  );
};

export default App;