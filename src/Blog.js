import React from "react";
import data from "./data";
import Card from "./Card";

const Blog  = () => {
    return(
       <section class='py-4 py-lg-5 container'>
           <div class= 'row justify-content-center'>
               
            {data.cardData.map((item, index)=>{
            return(
            <Card key={index} img={item.img} title={item.title} desc={item.desc} link={`/details/${item.id}`} />
            )
            } )} 


           </div>

       </section>
    )
}

export default Blog;