import React, { useState } from "react";
import { supabase } from '../client.js';
import { useNavigate } from 'react-router-dom';

function AddCreator() {
// formData and setFormData: When creating forms in React, it's common to use a piece of state to keep track of the current form's input values. 
//                           This approach aligns well with the concept of controlled components in React, which is where the React component that 
//                           renders a form also controls what happens in that form on subsequent user input.

//  We initialize the state to represent the inputs of the form. This formData state will hold the current values of the form fields, allowing us to access them when the form is submitted. -> The current state & A function that updates the state.
    const [formData, setFormData] = useState({
        name: '',
        url: '',
        description: '',
        imageURL: ''
    });
// The useNavigate hook returns a function that lets you navigate programmatically - React v6
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Once the form is ready to be submitted, the formData state contains all the information the user entered. 
        // This makes it straightforward to send this data to Supabase, or any other back-end/database.
        // Here, we directly pass the formData to Supabase's insert method, which tries to add this data to the 'creators' table.
        const { data, error } = await supabase.from('creators').insert([formData]);
        if (data) {
            navigate('/');  // redirect to the main page after successful insert
        } else {
            console.error("Error inserting data: ", error);
        }
    }

    // An array of form fields and their configurations in order to use mapping to render the form fields. 
    // The formFields array provides a structured representation of the form inputs.
    const formFields = [
        { key: 'name', label: 'Name', type: 'text', elementType: 'input' },
        { key: 'url', label: 'URL', type: 'url', elementType: 'input' },
        { key: 'description', label: 'Description', type: 'text', elementType: 'textarea' },
        { key: 'imageURL', label: 'Image URL', type: 'url', elementType: 'input' }
    ];

    return (
        <div>
            <h1>Add Creators</h1>
            <form onSubmit={handleSubmit}>
                {formFields.map(field => (
                /* The map function then renders each form input based on the elementType. If it's an 'input', it renders an input field; if it's a 'textarea', it renders a textarea. */
                    <label key={field.key}>
                        {field.label}:
                        {field.elementType === 'input' ? (
                            /* Controlled Component: When we set the value prop of the form input to a state variable'key: name,url,description, imageURL', 
                            and also update that state when the input changes, we are creating a controlled component.
                            The value prop ensures the displayed value is always in sync with the formData.key state. 
                            The onChange prop captures changes and updates the state accordingly.
                            https://react.dev/reference/react-dom/components/input*/
                            <input
                                type={field.type}
                                value={formData[field.key]} // ...force the input's value to match the state variable...
                                onChange={e => setFormData({ ...formData, [field.key]: e.target.value })} //... and update the state variable on any edits!
                                required
                            />
                        ) : (
                            // https://react.dev/reference/react-dom/components/textarea
                            <textarea
                                value={formData[field.key]} // ...force the input's value to match the state variable...
                                onChange={e => setFormData({ ...formData, [field.key]: e.target.value })} // ... and update the state variable on any edits!
                                required
                            ></textarea>
                        )}
                    </label>
                ))}
                <button type="submit">Add Creator</button>
            </form>
        </div>
    );
}

export default AddCreator;
