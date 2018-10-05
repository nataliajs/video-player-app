import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { Link } from "react-router-dom"

import MoviesListContainer from "components/movies-list/movies-list.container"
import MovieContainer from "components/movie/movie.container"

const MainLayout = () => (
  <div className="main-layout">
    <header className="Header">
      <Link to="/" className="Header__first"/>
      <div className="Header__content">
      <div className="Header__content__text">video app</div>
      </div>
    </header>
    <span className="main-layout__vertical-col" />
    <main>      
      <Switch>
        <Route path="/" exact component={MoviesListContainer} />
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