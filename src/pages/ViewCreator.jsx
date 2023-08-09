import React, { useState, useEffect } from "react";
import { supabase } from '../client.js';
import { deleteCreator } from '../utils';
import { useParams } from 'react-router-dom';

function ViewCreator() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [creator, setCreator] = useState({});
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this content creator?")) {
          await deleteCreator(id);
          navigate("/"); // Redirect to ContentCreator after deletion
        }
      };

    useEffect(() => {
        (async () => {
            const { data, error } = await supabase.from('creators').select('*').eq('id', id);
            if (data && data.length > 0) {
                setCreator(data[0]);
            }
        })();
    }, [id]);

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
