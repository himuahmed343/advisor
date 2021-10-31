import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ReactLoading from 'react-loading';


function App() {

  const [advice, setAdvice] = useState("")
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchAdvice = () => {
    setLoading(true)
    axios.get('	https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice)
        setLoading(false)

    })
      .catch((err) => {
        setLoading(false);
        setError(true);
    })

  }
  useEffect(() => {
    fetchAdvice()
  }, [])
  return (
    <div className="main">
      <div className="text-box">

        <h1 className="text">{advice}</h1>
        {!loading && advice.length === 0 && <div>No data found, Bro!</div>}
        {error && <div>There was an error!</div>}
        {loading && <h5>Loading...</h5>}
      </div>
    </div>
  );
}

export default App;
