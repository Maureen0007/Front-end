import React, {useState, useEffect} from 'react'

const URL = "http://localhost:9292/books";
const fetchBooks = () => fetch(URL).then(res => res.json());


function Books() {

  const [books, setBooks] = useState([]);

  useEffect(() =>{
    fetchBooks().then(data => setBooks(data));
},[]);


  
  return (
    <>
    <h1>books</h1>
    <section className="bookdata">
    {books.map((book) => {
      const {name, author_id, image} = book

      return(
        <>
        <div className='card'>
        <h3 className='titlebooks'>{name}</h3>
        <div>
          <img className='images' src={image} alt={name}/>
        </div>
        <div>
          <p>{author_id}</p>
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