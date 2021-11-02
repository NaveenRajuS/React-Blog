
import React, { Component } from 'react'
import data from './data';

export default class Details extends Component {
    render() {
       let getId = this.props.match.params.id;

       const getData = data.cardData[getId -1];
       console.log(getData)

        return (
            <section class='py-4 py-lg-5 container'>
            <div class= 'row justify-content-center'>
                <div class = 'col-10'>
                    <img src ={getData.img} class="img-fluid" alt="ok" />
                    <h1>{getData.title}</h1>
                    <p>{getData.desc}</p>
                    </div>



                </div>
                </section>
        )
    }
}

