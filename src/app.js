import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import MoviesListContainer from "components/movies-list/movies-list.container"
import MovieContainer from "components/movie/movie.container"

const MainLayout = () => (
  <div className="main-layout">
    <header>
      Our video App
    </header>
    <main>
      <Switch>
        <Route path="/" exact component={MoviesListContainer} />
        <Route path="/movie" exact component={MoviesListContainer} />
        <Route path="/movie/:movieId" component={MovieContainer} />
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
)

const App = () => (
  <BrowserRouter>
    <MainLayout />
  </BrowserRouter>
)

export default App