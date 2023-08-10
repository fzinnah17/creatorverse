import React, { useState, useEffect } from "react";
import { supabase } from '../client.js';
import { deleteCreator } from '../pages/utils.js';
import { useParams, useNavigate } from 'react-router-dom';

function ViewCreator() {
    const { id } = useParams(); // Extract the Required key from the URL parameters
    const navigate = useNavigate();
    const [creator, setCreator] = useState({}); // Initialize state to store the creator's details
    // function to handle the delete button click
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this content creator?")) {
            await deleteCreator(id); // Call the deleteCreator function from the utility module
            navigate("/"); // Redirect to ContentCreator after deletion
        }
    };

    // Fetch the creator's details from the database using an effect hook
    useEffect(() => {
        // Requirement says to use an asynchronous function to fetch the data
        (async () => {
            // Use the supabase client to fetch data from the 'creators' table
            const { data, error } = await supabase.from('creators').select('*').eq('id', id);
            if (data && data.length > 0) {
                // Update the state with the first item (since we're querying by Required ID name)
                setCreator(data[0]);
            }
        })();
    }, [id]); // Trigger the effect whenever the required 'id' name changes

    return (
        <div>
            <h1>Creator Details</h1>
            <img src={creator.imageURL} alt={creator.name} />
            <h2>{creator.name}</h2>
            <a href={creator.url} target="_blank" rel="noopener noreferrer">{creator.url}</a>
            <p>{creator.description}</p>
            <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>

    );
}

export default ViewCreator;
