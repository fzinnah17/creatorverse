// how to render the name, url, description, and imageURL
import React from 'react';

function ContentCreator({ creator }) {
    return (
        <div className="creator-container">
            <img src={creator.imageURL} alt={creator.name} />
            <h2>{creator.name}</h2>
            <a href={creator.url} target="_blank" rel="noopener noreferrer">{creator.url}</a>
            <p>{creator.description}</p>
        </div>
    );
}

export default ContentCreator;
