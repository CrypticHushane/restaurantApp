import {useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
            params: {
                term: searchTerm,
                limit: 50,
                location: 'new york'
            }
        });
        setResults(response.data.businesses);
        
        } catch (err) {
            console.log(err.toString());
            setError('Something went wrong!');
        }
        
    }

    useEffect(() => {
        searchApi('jamaica');
    },[]);

    return [searchApi, results, error];
}