import Item from "./Item";
import { useState } from 'react';
import Navbar from "./Navbar";
import chicken from "../images/chicken.jpg"
import './Shop.css'

const Shop=()=>{
    function importAll(images,titles) {
        const projects = [];
        
        images.keys().forEach((image,index) => {
          //images[item.replace('./', '')] = r(item);
          projects.push({title:titles[index],image: images(image),href:'/projects/'+images(image).match(/(?<=\/)[a-z-_]*(?=\.)/)})
        });
    //    for (let i=0;i<15;i++ ) {
    // images[i].title=titles[i]
    //    }
        return projects;
      }
    
    
        const titlesArray=[   
      "Rubber Chicken",
      "Groucho Glasses",
      "USB Pet Rock",
      "Useless Box",
      "Whoopee Cushion"
      ];
    
      const [projects,setProjects]=useState(importAll(
        require.context('../images', false, /\.(png|jpg)$/),titlesArray
      ));
    return (
        <div>
    <Navbar />
    <div className="mai">
    <div className="items">
    {projects.map(project=>{
return  <Item title={project.title} image={project.image}/>
    })}
       
        </div>
    </div>    
    </div>
    )
}

export default Shop;