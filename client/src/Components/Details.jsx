
import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

const Details = (props) => {
  const { id } = useParams();
  const url = `http://localhost:3012/api/restaurants/${id}`;
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [comments, setComments] = useState("");



  


  const fetchDetails = async () => {
      try{
        setLoad(!load);
        const data = await axios.get(url);
        
        if(!data) throw new Error("Request failed with a status of ${getData.status}");
        const response = await data.data; //data already an array
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


/*useEffect(() => {
  fetchDetails();
}, [])*/



  return (
    <div>Details
    <h2>{data.length > 0 ? data[0].name : null }</h2>

    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    
    </div>
  )
}

export default Details








  

  
  // const detailsFetch = async () => {
  //   try{
  //     setLoading(true);
  //     const data = await axios.get(url);
  //     if(!data) throw new Error("Request failed with a status of ${getData.status}");
  //     const response = await data.data; //data already an array
  //     setData(response);
      
  //     console.log(response);
  //     }
  
  //     const response = await client.getEntry(index);
  //     setLoading(true)
  //     setName(response.fields.breedName);
  //     setImg(response.fields.dogImg[1].fields.file.url);
  //     setAbout(response.fields.dogAbout);
  //     setRatingSport(response.fields.sportNeed);
  //     setAffectionLevel(response.fields.affectionateLevel);

  //   }
  //   catch(error){
  //     console.error
  //   }
  //   finally {
  //     setLoading(false)
  //   }
    
  // }

  // useEffect(() => {
  //   dogFetch();
  // }, []);






   

