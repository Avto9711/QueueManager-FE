import React from 'react'
import { Route } from "react-router-dom";
import Home from '../Home'
import About from '../About'

function Routes(){
    return (
      <div>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
      </div>
    )
  }

  export default Routes