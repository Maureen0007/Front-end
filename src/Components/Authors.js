import React, {useState, useEffect} from 'react'

const URL = "http://localhost:9292/authors";
const fetchAuthors = () => fetch(URL).then(res => res.json());

function Authors() {

    const [data, setData] =useState([]);

    useEffect(() =>{
        fetchAuthors().then(data => setData(data));
    },[]);
  return (
    <>
    <div>Authors</div>
    {data.map(data => (
        <div key={data.id}>{data.name}</div>
        
    ))}


    </>
  )
}

export default Authors