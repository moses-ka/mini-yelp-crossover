import React from 'react'
import * as ReactBootstrap from "react-bootstrap";
import BasicSpinner from "./BasicSpinner";
import {useState} from 'react'



const Homepage = () => {
    const [load, setLoad] = useState(false);
    const [noContentCase, setNoContentCase] = useState("");
    const [searchContent, setSearchContent] = useState("");
// const url = "";


    const data = {
        "_id": {
          "$oid": "650564093722a2833143fdec"
        },
        "restaurants": [
          {
            "name": "La Vie",
            "cuisine": "French",
            "location": {
              "city": "Hamburg",
              "latitude": 53.55,
              "longitude": 10,
              "street": "123 Main Street"
            },
            "tags": [
              "French",
              "Fine Dining"
            ],
            "comments": [
              {
                "user": "User1",
                "comment": "Excellent food and service!",
                "rating": 5,
                "date": "2023-09-15T10:30:00Z"
              },
              {
                "user": "User2",
                "comment": "A bit pricey, but worth it.",
                "rating": 4,
                "date": "2023-09-15T15:45:00Z"
              },
              {
                "user": "User3",
                "comment": "Great atmosphere.",
                "rating": 4,
                "date": "2023-09-16T09:15:00Z"
              }
            ]
          },
          {
            "name": "Mami mia",
            "cuisine": "Italian",
            "location": {
              "city": "Berlin",
              "latitude": 52.52,
              "longitude": 13.405,
              "street": "456 Elm Street"
            },
            "tags": [
              "Italian",
              "Pizza"
            ],
            "comments": [
              {
                "user": "User4",
                "comment": "Delicious pizza!",
                "rating": 5,
                "date": "2023-09-17T18:30:00Z"
              },
              {
                "user": "User5",
                "comment": "Good service too.",
                "rating": 4,
                "date": "2023-09-18T12:20:00Z"
              }
            ]
          },
          {
            "name": "nanika",
            "cuisine": "Japanese",
            "location": {
              "city": "Kiel",
              "latitude": 54.3233,
              "longitude": 10.1228,
              "street": "789 Oak Avenue"
            },
            "tags": [
              "Japanese",
              "Sushi"
            ],
            "comments": [
              {
                "user": "User6",
                "comment": "Fresh sushi!",
                "rating": 5,
                "date": "2023-09-16T14:55:00Z"
              },
              {
                "user": "User7",
                "comment": "Quick service.",
                "rating": 4,
                "date": "2023-09-17T10:10:00Z"
              }
            ]
          }
        ]
      }

    //   const getSearchResults = async () => {
    //     try{
    //       setLoading(true);
    //       const client = contentful.createClient({
    //         space: space,
    //         accessToken: accessToken,
    //       });
    //       const response = await client.getEntries(); 
    //       setBreeds(response.items);
    //     }
    //     catch (error){
    //       console.error
    //     }
    //     finally {
    //       setLoading(false)
    //     }
    //   };
    
    //   useEffect(() => {
    //     getSearchResults();
    //   }, []);

      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try{
            setLoad(!load);
            // const getData = await axios.get(url);
            
            if(!data) throw new Error("Request failed with a status of ${getData.status}");
            const response = await data.restaurants; //data already an array
           
            console.log(data.restaurants);
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

    const handleSearch = (event) => {
        setSearchContent(event.target.value);
    }



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
    
            <input type="text" id="search"  placeholder="Find a restaurant" onChange={handleSearch} ></input>
            <button type="submit">Search</button>
        </form>

    <p>{data.restaurants[0].name}</p>
    {load ? (<BasicSpinner  />) : null}
            <h4>{noContentCase}</h4>
            {data.length ? (
            data.restaurants.map((response) => (
                <ul key={response.name}>
                <li>{response.name}</li>
                </ul>
            )) 
            ) : (
                <h4>What do you want to know?</h4>
            )}
   
   
   </div>

  )
}

export default Homepage