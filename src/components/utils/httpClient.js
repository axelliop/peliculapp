import React from 'react'

// --- LLAMO A LA API POR TOKEN!

const API = "https://api.themoviedb.org/3";

export function httpClient (path) {
  return (
    fetch(API + path, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmJiNTMzZjUzMjZiOGEzYjlkZmIxMTYzNjUzMzRiMyIsInN1YiI6IjYzZmVhZDUwNjk5ZmI3MDBlNmZkNThlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XLfk961EG09RBdquJZbA0dQX5nIorurYxjiM9eeuPj0",

          //--- LA PONGO ENTRE COMILLAS PORQEU ESTA SEPARADAS POR UN GUION
          "Content-Type": "application/json;charset=utf-8"
        }
      }).then((result) => result.json())  //.json para parsearlo, data es el resultado del json parseado
  )
}
