import {useEffect, useState} from 'react'

const UseFetch = (category) => {
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3000/${category}`)
        .then(res => res.json())
        .then(data => setFetchedData(data))
    }, [category]);
    
  return fetchedData;
}

export default UseFetch