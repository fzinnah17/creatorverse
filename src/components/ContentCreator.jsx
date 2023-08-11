import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteCreator } from '../pages/utils.js';

import './ContentCreator.css';

function ContentCreator({ creators }) {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this content creator?")) {
      const error = await deleteCreator(id);
      if (!error) {
        navigate("/");
      }
    }
  };

  return (
    <div className="content-container">
      {creators.map((creator, index) => (
        <div key={index} className="content-card">
          <img className="contentcard-image" src={creator.imageURL} alt={creator.name} />
          <div className={`content-cover content-cover${(index % 3) + 1}`}>
            <h1 style={{ margin: "0.25em" }}>{creator.name}</h1>
            <h2 style={{ margin: "0.1em", marginBottom: "1.5em" }}>{creator.description}</h2>
            <a href={creator.url} target="_blank" rel="noopener noreferrer">
              {creator.url}
            </a>
            <button onClick={() => navigate(`/view/${creator.id}`)}>View</button>
            <button onClick={() => navigate(`/edit/${creator.id}`)}>Edit</button>
            <button onClick={() => handleDelete(creator.id)}>Delete</button>
          </div>
        </div>
      ))}
      <div onClick={() => navigate("/add")} className="content-btn content-btn-add">
        <span className="plus-btn">+ Add a Content Creator</span>
      </div>
    </div>
  );
}

export default ContentCreator;


