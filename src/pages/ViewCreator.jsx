import React, { useState, useEffect } from "react";
import { supabase } from '../client.js';
import { deleteCreator } from '../pages/utils.js';
import { useParams, useNavigate } from 'react-router-dom';
import wwwIcon from '../assets/www.svg';
import instagramIcon from '../assets/instagram.svg';
import twitterIcon from '../assets/twitter.svg';
import linkedinIcon from '../assets/linkedin.svg';
import facebookIcon from '../assets/facebook.svg';

import './ViewCreator.css';


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
  const socialIcons = {
    'website': { url: creator.url, icon: wwwIcon },
    'instagram': { url: creator.instagram, icon: instagramIcon },
    'twitter': { url: creator.twitter, icon: twitterIcon },
    'linkedin': { url: creator.linkedin, icon: linkedinIcon },
    'facebook': { url: creator.facebook, icon: facebookIcon }
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
    <div className="view-creator-container box">
      <div className="content">
        <div className="image">
          <img src={creator.imageURL} alt={creator.name} />
        </div>
        <div className="text">
          <p className="name">{creator.name}</p>
          <p className="job_discription">{creator.description}</p>
        </div>

        <div className="icons">
          {Object.keys(socialIcons).map(icon => (
            socialIcons[icon].url && (
              <a key={icon} href={socialIcons[icon].url} target="_blank" rel="noopener noreferrer" className={icon}>
                <img src={socialIcons[icon].icon} alt={icon} />
              </a>
            )
          ))}
        </div>


        <div className="button">
          <button className="edit" onClick={() => navigate(`/edit/${id}`)}>Edit</button>
          <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );

}

export default ViewCreator;
