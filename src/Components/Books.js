import React, {useState, useEffect} from 'react'
import {AiFillDelete} from "react-icons/ai"
import {AiFillFileAdd} from "react-icons/ai"
import {AiFillEdit} from "react-icons/ai"

const URL = "http://localhost:9292/books";
const fetchBooks = () => fetch(URL).then(res => res.json());


function Books() {

  const [books, setBooks] = useState([]);

  useEffect(() =>{
    fetchBooks().then(data => setBooks(data));
},[]);


  
  return (
    <>
    <h1 className='booktitle'><em>Here are some book to keep you engaged during your free time.</em></h1>
    <section className="bookdata">
    {books.map((book) => {
      const {name, author_id, description,image} = book

      return(
        <>
        <div className='card'>
        <h3 className='titlebooks'>{name}</h3>
        <div>
          <img className='images' src={image} alt={name}/>
        </div>
        <div>
          <p>{description}</p>
          <p>{author_id}</p>
        </div>
        <div className='icons'>
          <AiFillDelete />
          <AiFillFileAdd />
          <AiFillEdit />
        </div>
        </div>
        
        </>
      )
    })}
    </section>
    </>
    
  )
}

export default Books