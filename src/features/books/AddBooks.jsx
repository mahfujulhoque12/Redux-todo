import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './BooksSlice';
import {useNavigate} from 'react-router-dom';

const AddBooks = () => {
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const numberOfBooks=useSelector((state)=>state.booksReducer.books.length)

    const handaleSubmit=(e)=>{
        e.preventDefault()
        const book={id: numberOfBooks + 1,title,author};
        dispatch(addBook(book))
        navigate('/show-books',{replace:true})
    }
    return (
        <div>
            <h1>add Book</h1>
            <form onSubmit={handaleSubmit}>
                <div className='form-field'>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="title" value={title} 
                    onChange={(e)=>setTitle(e.target.value)} required/>
                </div>
                <div className='form-field'>
                    <label htmlFor="author">Author: </label>
                    <input type="text" name="author" id="author" value={author} 
                    onChange={(e)=>setAuthor(e.target.value)} required/>
                </div>
                <button type='submit'>add book</button>
            </form>
        </div>
    );
};

export default AddBooks;