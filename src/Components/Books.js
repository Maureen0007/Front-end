import React, {useState, useEffect} from 'react'
import Authors from './Authors';

const URL = "http://localhost:9292/books";
const fetchBooks = () => fetch(URL).then(res => res.json());


function Books() {

  const [active, setActive] = useState([]);

  const [books, setBooks] = useState([]);

  useEffect(() =>{
    fetchBooks().then(data => setBooks(data));
},[]);


  
  return (
    <>
    <h1>books</h1>
    {books.map((book) => {
      const {name, author_id, image} = book

      return(
        <>
        <div>
          <img src={image} alt={name}/>
        </div>
        <div>
          <h3>{name}</h3>
          <p>{author_id}</p>
        </div>
        </>
      )
    })}

    <div>
    <button onClick={()=> setActive("Authors")}>Authors</button>

    </div>
    {active === "Authors" && <Authors title="" />}
    <div>

    </div>
    </>
    
  )
}

export default Books