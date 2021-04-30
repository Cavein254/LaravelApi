import axios from "axios";
import React,{useEffect, useState} from "react";
import { BASE_API_URL } from '../../api'
import Blog from './Blog'
import "./styles.css";


const AllBlogs = () => {
    const [blog,setBlog] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/blog')
        .then(response => {
            setBlog(response.data)
        })
    }, [])
    console.log(blog)
  return (<div>
      <h1>Allblogs</h1>
       {
           blog.map((item)=> {
               return(
                   <Blog key={item.id} title={item.title}  created={item.created_at} update={item.updated_at}/>
               )
           })
       }
  </div>)
};

export default AllBlogs;
