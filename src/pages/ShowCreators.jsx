import React, { useState, useEffect } from "react";
// get the API call here and pass it to the ContenCreator file to render it and then pass it to all other files in the pages directory
//fetch the data from the database then render it in the ContentCreator file
import ContentCreator from "../components/ContentCreator";
import { supabase } from '../client.js';
import { deleteCreator } from '../pages/utils.js';


function ShowCreators() {
    const [creators, setCreators] = useState([]); // UseState hook to create a state variable 'creators' to store the list of creators and the function setCreators to modify it.
    // Initially, this list is empty.

    // UseEffect hook to run a side effect after rendering the component. It will run every time the 'creators' state changes.
    useEffect(() => {
        // Using an asynchronous self-invoking function to fetch data from the database
        (async () => {
            // Fetching all columns from the 'creators' table in the database and ordering them by 'id' in ascending order so that the creators added are in order and doesn't mess up the array content order.
            const { data, error } = await supabase.from('creators').select('*').order('id', { ascending: true });
            if (data) {
                setCreators(data);
                console.log('Creators have changed!', creators);
            }
        })();
    }, [creators]); // The useEffect hook has 'creators' as a dependency, so it will re-run whenever 'creators' state changes.

    // This function is called when a creator is deleted. It deletes the creator from the database and then updates the UI.
    const handleDelete = async (id) => {
        // Calling the imported deleteCreator function to delete the creator with the specified 'id'.
        const error = await deleteCreator(id);
        if (!error) {
            // If there's no error, then update the 'creators' state by filtering out the deleted creator.
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