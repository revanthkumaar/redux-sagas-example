import { useState, useEffect } from 'react';

import {useCompFetch} from './customHook'


function HooksFetch(){
    const [status, setStatus] = useState('idle');
    const [query, setQuery] = useState('');
    const [data, setData] = useState([])

    //using a custom hook
    const {count, add, subtract} = useCounter(100); //object destructuring

    useEffect(()=> {
        if (!products) return;
        const fetchData = async () => {
        setStatus('fetching');
        const response = await fetch(
            `https://hn.algolia.com/api/v1/search?query=${query}`
        );
        const data = await response.json();
        setData(data.hits);
        setStatus('fetched');
    };
    fetchData();
    }, [products]);

    return(
        <div>

        </div>
    )
}
