import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



const Details = (props) => {
  const { id } = useParams();
  const url = `http://localhost:3012/api/restaurants/${id}`;
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [comments, setComments] = useState("");
  const [tags, setTags] = useState("");





  


  const fetchDetails = async () => {
      try{
        setLoad(!load);
        const data = await axios.get(url);
        
        if(!data) throw new Error("Request failed with a status of ${getData.status}");
        const response = await data.data[0]; //data already an array
        setLat(response.location.latitude)
        setLng(response.location.longitude)
        setImg(response.img)
        setComments(response.comments)
        setTags(response.tags)
       setData(response);
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
  fetchDetails();
}, [])

console.log(data.comments);

  return (
    <div>
      <Card className="card" style={{ width: '50rem' }}>
      <Card.Img variant="top" src={img} style ={{width: '90%'}}/>
      <Card.Body>
        <Card.Title><h2>{data.name}</h2> </Card.Title>
        <ListGroup variant="flush">
        <ListGroup.Item>Location:
        {Object.keys(data).length > 0 ? 
    <> 
    

    <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false} style={{height: '500px', width: '500px' }}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[lat, lng]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
</>
: null }
        </ListGroup.Item>
        <ListGroup.Item>Comments: <ul>  {comments.length > 0 ? comments.map((response) => (<li>{response.user} : {response.comment} <br/> {response.rating}/5; {response.date}</li> ))  : null}</ul>
          
          
     
        </ListGroup.Item>
        <ListGroup.Item> <h4>Tags:</h4> <ul> {tags.length > 0 ? tags.map((response) => (<li>{response}</li>)): null} </ul>
        </ListGroup.Item>
      </ListGroup>
        
      </Card.Body>
    </Card>
    
    
</div>
  )
}

export default Details
