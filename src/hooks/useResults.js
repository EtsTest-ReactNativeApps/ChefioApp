import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState([])
  const [errMessg, setErrMessg] = useState('')

  const filterResultByKind = kind => {
    switch (kind) {
      case 1:
        return searchApi('restaurant')
      case 2:
        return searchApi('food')
      case 3:
        return searchApi('drink')
      default:
        break
    }
  }

  const searchApi = async searchTerm => {
    try {
      setLoading(true)
      setResults([])
      const response = await yelp.get('/search', {
        params: {
          limit: 20,
          term: searchTerm,
          location: 'san jose',
        },
      })
      setResults(response.data.businesses)
      setLoading(false)
    } catch (e) {
      setErrMessg('Something Went Wrong')
    }
  }
  useEffect(() => {
    searchApi('pasta')
  }, [])

  return { searchApi, filterResultByKind, results, errMessg, loading }
}
