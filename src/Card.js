import React, { Component } from 'react'

import {Route, Link } from 'react-router-dom';

export default class card extends Component {
    render() {
        return (
        <div class="col-11 col-md-6 col-lg-4 mx-0 mb-4">
        <div class="card p-0 overflow-hidden h-300 shadow">
        <img src={this.props.img} class="card-img-top" alt="ok"/>
        <div class="card-body">
        <h4 class="card-title">{this.props.title}</h4>
                  
        <Route>
            <Link to={this.props.link} class="btn btn-primary">Details</Link>
        </Route>
        </div>
        </div>
        </div>
        )
    }
}
