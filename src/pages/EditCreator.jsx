import React, { useState, useEffect } from "react";
import { supabase } from '../client.js';
import { useParams, useNavigate } from 'react-router-dom';
import "./EditCreator.css"


function EditCreator() {
    const { id } = useParams(); // Using the useParams hook to get the 'id' from the URL, this is typically the id of the creator to edit.
    const [formData, setFormData] = useState({ // Initializing the state for the form data.
        name: '',
        url: '',
        description: '',
        imageURL: '',
        instagram: '',
        twitter: '',
        linkedin: '',
        facebook: ''
    }); // All the fields in your form, initialized to empty strings.

    // static array, which represents the social media fields in the edit form. 
    const socialMediaFields = [
        { key: 'instagram', label: 'Instagram URL' },
        { key: 'twitter', label: 'Twitter URL' },
        { key: 'linkedin', label: 'LinkedIn URL' },
        { key: 'facebook', label: 'Facebook URL' }
    ]; // Each object has a 'key' representing its name and a 'label' for display purposes.



    const navigate = useNavigate();
    useEffect(() => { // This is an immediately invoked asynchronous function to use async/await inside the useEffect hook.
        (async () => {
            // Fetching the creator data from Supabase based on the ID.
            const { data, error } = await supabase.from('creators').select('*').eq('id', id);
            // If data is fetched and it's not empty.
            if (data && data.length > 0) {
                // Ensure that fields that might be null or undefined are set to an empty string
                const updatedData = Object.keys(formData).reduce((acc, key) => {
                    acc[key] = data[0][key] || '';  // Here's the crucial part. If data[0][key] is null or undefined, use empty string
                    return acc;
                }, {});
                // Updating the formData state with the fetched data.
                setFormData(updatedData);
            }
        })();
    }, [id]); // This effect will rerun whenever 'id' changes.


    // Handler function for form submission.
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior.
        // Update the creator data in Supabase using the form data.
        const { data, error } = await supabase.from('creators').update(formData).eq('id', id);
        if (!(error)) {
            navigate('/'); // If the update is successful, navigate back to the main page.
        }
    }

    return (
        <div className="editCreator_wrapper">
            <div className="editCreator_profile">
                <div className="editCreator_content">
                    <h1>Edit Creator</h1>
                    <form onSubmit={handleSubmit}>
                        {/* Photo Field */}
                        <fieldset>
                            <div className="editCreator_grid-35">
                                <label>Paste imageURL</label>
                            </div>
                            <div className="editCreator_grid-65">
                                <span className="editCreator_photo" title="Upload your Avatar!" style={{ backgroundImage: `url(${formData.imageURL})` }}
                                ></span>
                                <input type="text" placeholder="Image URL"
                                    value={formData.imageURL}
                                    onChange={e => setFormData({
                                        ...formData, imageURL: e.target.value
                                    })}
                                    required />
                            </div>
                        </fieldset>

                        {/* Name, URL, and Description Fields */}
                        {[
                            { key: 'name', label: 'Name', type: 'text' },
                            { key: 'url', label: 'URL', type: 'text' },
                            { key: 'description', label: 'Description', type: 'textarea' }
                        ].map(field => (
                            <fieldset key={field.key}>
                                <div className="editCreator_grid-35">
                                    <label>{field.label}</label>
                                </div>
                                <div className="editCreator_grid-65">
                                    {field.type === 'textarea' ? (
                                        <textarea
                                            value={formData[field.key]}
                                            onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                                            style={{ resize: "none" }}
                                        />
                                    ) : (
                                        <input type={field.type}
                                            value={formData[field.key]}
                                            onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                                        />
                                    )}
                                </div>
                            </fieldset>
                        ))}

                        {/* Social Media Fields */}
                        {socialMediaFields.map(field => (
                            <fieldset key={field.key}>
                                <div className="editCreator_grid-35">
                                    <label>{field.label}</label>
                                </div>
                                <div className="editCreator_grid-65">
                                    <input type="url"
                                        value={formData[field.key]}
                                        onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                                    />
                                </div>
                            </fieldset>
                        ))}

                        {/* Buttons */}
                        <div className="editCreator_buttons">
                            <input type="button" className="editCreator_Btn editCreator_cancel" value="Cancel" onClick={() => navigate('/')} />
                            <input type="submit" className="editCreator_Btn" value="Update Creator" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );

}

export default EditCreator;
