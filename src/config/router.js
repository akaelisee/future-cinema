/* eslint-disable react/prop-types */
import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import Home from '../views/home'
import Login from '../views/login'
import Content from '../components/contenu/content'
import Newletter from '../components/newletter'
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
        <PrivateRoute exact path='/register' component={Register} />
        <PrivateRoute exact path='/login' component={Login} />
        <Content>
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute exact path='/movie' component={Movie} />
          <PrivateRoute exact path='/salle' component={Cinema} />
          <PrivateRoute exact path='/about' component={About} />
          <PrivateRoute exact path='/contact' component={Contact} />
          <PrivateRoute exact path='/programme/:id' component={Programme} />
          <PrivateRoute
            exact
            path='/detail/:name/:id'
            component={DetailCinema}
          />
          <Newletter />
        </Content>
      </Switch>
    </Router>
  )
}

export default Routes
