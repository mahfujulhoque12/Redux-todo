import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AddBooks from '../features/books/AddBooks';
import BooksView from '../features/books/BooksView';
import Navbar from '../layouts/Navbar';
import Error from '../pages/Error';
import Home from '../pages/Home';
import EditBooks from '../features/books/EditBooks';

const Index = () => {
    return <BrowserRouter>
    <Navbar></Navbar>
       <main>
       <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/show-books' element={<BooksView></BooksView>}></Route>
            <Route path='/add-books' element={<AddBooks></AddBooks>}></Route>
            <Route path='/edit-book' element={<EditBooks></EditBooks>}></Route>
            <Route path='*' element={<Error></Error>}></Route>
        </Routes>
       </main>
    </BrowserRouter>
};

export default Index;