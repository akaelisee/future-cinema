/* eslint-disable react/prop-types */
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import PrivateRoute from './privateRoute'
import Home from '../views/home'
import Login from '../views/login'
import Content from '../components/contenu/content'
import Newletter from '../components/newletter'
import NoPage from '../views/404'
import NoLog from '../views/noLog'
import DetailCinema from '../views/detailCinema'
import Movie from '../views/movie'
import Cinema from '../views/cinema'
import About from '../views/about'
import Contact from '../views/contact'
import Programme from '../views/programme'
import Register from '../views/register'
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Content>
          <Route exact path='/' component={Home} />
          <Route exact path='/movie' component={Movie} />
          <Route exact path='/salle' component={Cinema} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/programme/:id' component={Programme} />
          <Route exact path='/detail/:name/:id' component={DetailCinema} />
          <Newletter />
        </Content>
      </Switch>
    </Router>
  )
}

export default Routes
