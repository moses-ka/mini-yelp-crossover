import React from 'react'

const Details = () => {


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


      
  return (
    <div>Details</div>
  )
}

export default Details

