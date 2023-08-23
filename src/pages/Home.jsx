import React, { useState, useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import Card from '../components/Card';

const Home = () => {

    const firebase = useFirebase();
    
    const [books, setBooks] = useState([]);

    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs));
    }, [firebase]);

  return (
    <div className="grid md:grid-cols-3 gap-10 my-10 grid-cols-1 px-10 place-items-center	">
        {books.map((book) => (
            <Card name={book.data().name} key={book.id} price={book.data().price} isbn={book.data().isbn} imageURL={book.data().imageURL}/>
        ))}
    </div>
  )
}

export default Home