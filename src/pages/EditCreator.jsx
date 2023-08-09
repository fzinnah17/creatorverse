import React, { useState, useEffect } from "react";
import { supabase } from '../client.js';
import { useParams, useNavigate } from 'react-router-dom';

function EditCreator() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        url: '',
        description: '',
        imageURL: ''
    });

    // This hook returns a function that lets you navigate programmatically - React v6
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the creator data by ID
        (async () => {
            const { data, error } = await supabase.from('creators').select('*').eq('id', id);
            if (data && data.length > 0) {
                setFormData(data[0]);
            }
        })();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase.from('creators').update(formData).eq('id', id);
        if (data) {
            navigate('/');  // Redirect to the main page after successful update
        } else {
            console.error("Error updating data: ", error);
        }
    }

    const formFields = [
        { key: 'name', label: 'Name', type: 'text', elementType: 'input' },
        { key: 'url', label: 'URL', type: 'url', elementType: 'input' },
        { key: 'description', label: 'Description', type: 'text', elementType: 'textarea' },
        { key: 'imageURL', label: 'Image URL', type: 'url', elementType: 'input' }
    ];

    return (
        <div>
            <h1>Edit Creator</h1>
            <form onSubmit={handleSubmit}>
                {formFields.map(field => (
                    <label key={field.key}>
                        {field.label}:
                        {field.elementType === 'input' ? (
                            <input
                                type={field.type}
                                value={formData[field.key]}
                                onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                                required
                            />
                        ) : (
                            <textarea
                                value={formData[field.key]}
                                onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                                required
                            ></textarea>
                        )}
                    </label>
                ))}
                <button type="submit">Update Creator</button>
            </form>
        </div>
    );
}

export default EditCreator;
