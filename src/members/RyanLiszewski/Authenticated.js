import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

export default class Authenticated extends Component {

  render (){
    const authenticated = sessionStorage.getItem('authenticated');

    if(!authenticated || sessionStorage.getItem('authenticated') === null){
      return <Redirect to='/ryan/locked'/>
    }
  }
}