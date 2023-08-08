import React, {useState} from "react";
// get the API call here and pass it to the ContenCreator file to render it and then pass it to all other files in the pages directory
//fetch the data from the database then render it in the ContentCreator file
import ContentCreator from "../components/ContentCreator";

function ShowCreators({ creators }) {
    return (
        <div>
            {creators.length === 0 ? (
                <p>No content creators found in the database.</p>
            ) : (
                // creators.map(creator => <ContentCreator key={creator.name} creator={creator} />)
<ContentCreator creators={creators} />

)}
        </div>
    );
}


export default ShowCreators;