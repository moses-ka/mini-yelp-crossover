import React from 'react'
import * as ReactBootstrap from "react-bootstrap";
import BasicSpinner from "./BasicSpinner";
import {useState, useEffect} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


const Homepage = () => {
    const url = "http://localhost:3012/api/restaurants";


    const [load, setLoad] = useState(false);
    const [noContentCase, setNoContentCase] = useState("");
    const [searchContent, setSearchContent] = useState("");
    const [location, setLocation] = useState("");
    const [data, setData] = useState([]);
    const [displayAll, setDisplayAll] = useState([]);
    const [searchInput, setSearchInput] = useState("");




    const fetchApi = async () => {    
        try{
            setLoad(!load);
            const data = await axios.get(url);
            
            if(!data) throw new Error("Request failed with a status of ${getData.status}");
            const response = await data.data; //data already an array
           setDisplayAll(response);
            console.log(response);
            if(response.length > 0) {
                setLoad(load);
            } else if(response.length === 0) {
                setLoad(load);
                setNoContentCase("no results found");
            }
        }catch(error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchApi();
    }, [])
    


      const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            setLoad(!load);
            const data = await axios.get(`http://localhost:3012/api/restaurants/tag/${searchContent.toLowerCase()}`);
            if(!data) throw new Error("Request failed with a status of ${getData.status}");
            const response = await data.data; 
          console.log(response);
            setDisplayAll(response);
            if(response.length > 0) {
                setLoad(load);
            } else if(response.length === 0) {
                setLoad(load);
                setNoContentCase("no results found");
            }
        }catch(error) {
            console.log(error.message);
        }
    }

    
    useEffect(() => {
        handleSubmit();
    }, [])


    
    const handleSearch = (event) => {
        setSearchContent(event.target.value);
    }
    console.log(searchContent);


    



  return (
   <div>
    <div>Mini-Yelp</div>

    {load ? (
        <div>
          <ReactBootstrap.Spinner animation="border" variant="light" />
          <p className='paragraphContent'>Content loading ...</p>
        </div>
      ) : null}


    <form onSubmit={handleSubmit}>
            <input type="text" id="search" placeholder="Find a restaurant" onChange={handleSearch} value={searchContent} ></input>
             <button type="submit">Search</button>
    </form>


    {load ? (<BasicSpinner  />) : null}
    <h4>{noContentCase}</h4>
    
            
    {data.length ? (data.map((response) => (
        <Card className="card" key={response.id} style={{ width: '50rem' }}>
        <Card.Img variant="top" src={response.img}  style ={{width: '90%'}}/>
     
      <Card.Body>
        <Card.Title>{response.name}</Card.Title>
        <Card.Text>{response.location.city}, {response.location.street}</Card.Text>
        <Button 
        variant="primary">See details</Button>
      </Card.Body>
    </Card>
            )) 
            ) : (
                <h4>What do you want to know?</h4>
            )}
           <div>

           {displayAll.length ? (displayAll.map((response) => (
            <Card key={response.id} style={{ width: '50rem' }}>
            <Card.Img variant="top" src={response.img} style ={{width: '90%'}}/>
            <Card.Body>
             <Card.Title>{response.name}</Card.Title>
            <Card.Text>{response.location.city}, {response.location.street}</Card.Text>
            <Link to={`details/${response.id}`}><Button variant="primary">See details</Button></Link>
             </Card.Body>
        </Card>
           ))) : null}
           </div>
         
   
   
   </div>

  )
}

export default Homepage