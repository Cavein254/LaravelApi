import React, { useState, useEffect } from "react";
import data from "./data.json";
import TestListing from "./TestListing";

export default function() {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        setJobs(data);
    }, []);
    console.log(data)
    return (
        <div>
            {
                jobs.length === 0 ? (
                    <p>Jobs are fetching</p>
                ):(
                    jobs.map(job=>(
                        <TestListing jobs={jobs} />
                    ))
                )
            }
        </div>
    );
}
