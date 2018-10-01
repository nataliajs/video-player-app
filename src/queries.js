const axios = require('axios')

const movies_query = `
    query movies {
      movies {
        id
        manifest
        name
      }
    }
  `
const movie_query = `
  query movie($id: String!) {
    movie(id: $id) {
      id
      manifest
      name
    }
  }
`


export function getMovies(){
  return new Promise((resolve, reject)=>{
    axios.post("/graphql",
      { query: movies_query }
    )
    .then(result=>{
      resolve(result.data)
    })
    .catch(error=>{
      console.error(error);
      reject(error)
    })
  })
}

export function getMovie( id ){
  return new Promise((resolve, reject)=>{
    axios.post("/graphql",
      { 
        query: movie_query,
        variables: { id: id }
      }
    )
    .then(result=>{
      resolve(result.data)
    })
    .catch(error=>{
      console.error(error);
      reject(error)
    })
  })
}