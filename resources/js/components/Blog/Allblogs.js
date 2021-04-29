import axios from "axios";
import React,{useEffect} from "react";
import { BASE_API_URL } from '../../api'
import Blog from './Blog'
import "./styles.css";


const AllBlogs = () => {
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/blog')
        .then(response => {
            console.log(response.data)
        })
    }, [])
  return (<div>
      <h1>Allblogs</h1>
       {/* {
           blog.map((item)=> {
               return(
                   <Blog key={item.id} />
               )
           })
       } */}
  </div>)
};

export default AllBlogs;
