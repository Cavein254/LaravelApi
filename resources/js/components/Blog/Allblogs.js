import React from "react";
import { BASE_API_URL } from '../../api'
import Blog from './Blog'
import "./styles.css";


const AllBlogs = () => {
    const [blog, setBlog] = React.useState([]);
    React.useEffect(() => {
        const fetchBlog = async () => {
            const blog = await axios.get(BASE_API_URL + 'questions')
                .then(response => { setBlog(response.data.data) })
                .catch(error => console.error(error))
        }
        fetchBlog()
    }, []);

  return (<div>
       {
           blog.map((item)=> {
               return(
                   <Blog key={item.id} />
               )
           })
       }
  </div>)
};

export default AllBlogs;
