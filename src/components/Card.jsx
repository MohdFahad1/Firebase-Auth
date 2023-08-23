import React, {useState, useEffect} from 'react';
import { useFirebase } from '../context/Firebase';

const Card = ({name, isbn, price, imageURL}) => {
    const firebase = useFirebase();
    const [url, setUrl] = useState(null);

    useEffect(() => {
        firebase.getImageURL(imageURL).then((url) => setUrl(url))
    },[firebase, imageURL])
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={url} alt={name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 capitalize">{name}</div>
                    <p className="text-gray-700 text-base">
                        This book has a title {name} and this book costs Rs.{price}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rs. {price}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ISBN: {isbn}</span>
                </div>
        </div> 
  )
}

export default Card