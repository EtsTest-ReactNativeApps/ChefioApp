import {useState, useEffect} from 'react'
import yelp from '../api/yelp'

export default() => {
    
        const [results,setResults] = useState([])
	const [errMessg, setErrMessg] = useState('')

	const searchApi = async(searchTerm) =>{
		try{
		const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        })
		setResults(response.data.businesses) }
		catch (e) {
			setErrMessg('Something Went Wrong')
		}
	}
useEffect(()=>{searchApi('pasta')},[])

    return [searchApi,results,errMessg];
}
