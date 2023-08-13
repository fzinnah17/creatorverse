import React, { useState, useEffect } from "react";
import { supabase } from '../client.js';
import { useParams, useNavigate } from 'react-router-dom';
import "./EditCreator.css"


function EditCreator() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        url: '',
        description: '',
        imageURL: '',
        instagram: '',
        twitter: '',
        linkedin: '',
        facebook: ''
    });

    const socialMediaFields = [
        { key: 'instagram', label: 'Instagram URL' },
        { key: 'twitter', label: 'Twitter URL' },
        { key: 'linkedin', label: 'LinkedIn URL' },
        { key: 'facebook', label: 'Facebook URL' }
    ];



    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const { data, error } = await supabase.from('creators').select('*').eq('id', id);
            if (data && data.length > 0) {
                console.log(data[0]);
                // Ensure that fields that might be null or undefined are set to an empty string
                const updatedData = Object.keys(formData).reduce((acc, key) => {
                    acc[key] = data[0][key] || '';  // Here's the crucial part. If data[0][key] is null or undefined, use empty string
                    return acc;
                }, {});

                setFormData(updatedData);
            }
        })();
    }, [id]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase.from('creators').update(formData).eq('id', id);
        if (!(error)) {
            navigate('/');
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
                                    onChange={e => setFormData({ ...formData, imageURL: e.target.value 
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
