import React from "react";
import { supabase } from '../client.js';
import { Link } from "react-router-dom";

function AddCreator() {
    return (
        <div>
            <Link to="/add-creator">
                <button>Add New Content Creator</button>
            </Link>
            {creators.length === 0 ? (
                <p>No content creators found in the database.</p>
            ) : (
                <ContentCreator creators={creators} />
            )}
        </div>
    );
}

export default AddCreator;