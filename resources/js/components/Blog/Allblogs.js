import React, { useEffect, useState } from "react";
import { apiClient } from "../../api";
import Blog from "./Blog";
import "./styles.css";

const AllBlogs = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        apiClient.get("blog").then((response) => {
            setBlog(response.data);
        });
    }, []);
    console.log(blog);
    return (
        <div>
            {blog.map((item) => {
                return (
                    <Blog
                        key={item.id}
                        title={item.title}
                        created={item.created_at}
                        update={item.updated_at}
                    />
                );
            })}
        </div>
    );
};

export default AllBlogs;
