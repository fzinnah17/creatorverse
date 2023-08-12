import React, { useState, useEffect } from "react";
// get the API call here and pass it to the ContenCreator file to render it and then pass it to all other files in the pages directory
//fetch the data from the database then render it in the ContentCreator file
import ContentCreator from "../components/ContentCreator";
import { supabase } from '../client.js';
import { deleteCreator } from '../pages/utils.js';


function ShowCreators() {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        (async () => {
            const { data, error } = await supabase.from('creators').select('*').order('id', { ascending: true });
            if (data) {
                setCreators(data);
                console.log('Creators have changed!', creators);
            }
        })();
    }, [creators]);
    const handleDelete = async (id) => {
        const error = await deleteCreator(id);
        if (!error) {
          setCreators(prevCreators => prevCreators.filter(creator => creator.id !== id)); // This line updates the state and the UI
        }
      };

    return (
        <div>
            {/* Checking if the 'creators' array is empty 
            Then show a message saying no content creators are found*/}
            {creators.length === 0 ? (
                <p>No content creators found in the database.</p>
            ) : (
                // creators.map(creator => <ContentCreator key={creator.name} creator={creator} />)
                <ContentCreator creators={creators} onDelete={handleDelete} />
                // Call aka Render the ContentCreator component and pass the 'creators' array as a prop so that the 
                // creators from the ContentCreator.jsx file can show up on screen
            )}
        </div>
    );
}


export default ShowCreators;