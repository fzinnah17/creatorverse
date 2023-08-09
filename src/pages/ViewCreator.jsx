import React, { useState, useEffect } from "react";
import { supabase } from '../client.js';
import { useParams } from 'react-router-dom';

function ViewCreator() {
    const { id } = useParams();
    const [creator, setCreator] = useState({});

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
        </div>
    );
}

export default ViewCreator;
