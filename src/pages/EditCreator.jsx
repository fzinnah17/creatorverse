// import React, { useState, useEffect } from "react";
// import { supabase } from '../client.js';
// import { useParams, useNavigate } from 'react-router-dom';

// function EditCreator() {
//     const { id } = useParams();
//     const [formData, setFormData] = useState({
//         name: '',
//         url: '',
//         description: '',
//         imageURL: ''
//     });

//     // This hook returns a function that lets you navigate programmatically - React v6
//     const navigate = useNavigate();


//     // const { data, error } = await supabase
//     // .from('creators')
//     // .update({ other_column: 'otherValue' })
//     // .eq('some_column', 'someValue')
//     // .select()


//     useEffect(() => {
//         // // Fetch the content creator's data by the required ID 'name' and populate the form
//         (async () => {
//             const { data, error } = await supabase.from('creators').select('*').eq('id', id);
//             if (data && data.length > 0) {
//                 setFormData(data[0]); // Update the form data with the retrieved data
//             }
//         })();
//     }, [id]);

//     // Handle form submission to update content creator data
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log(formData);

//         const { data, error } = await supabase.from('creators').update(formData).eq('id', id);
//         if (!(error)) {
//             navigate('/');  // Redirect to the main page after successful update
//         }

//         // if (data) {
//         //     navigate('/');  // Redirect to the main page after successful update
//         // } else {
//         //     console.error("Error updating data: ", error);
//         // }
//     }

//     // Array of form fields with their details
//     const formFields = [
//         { key: 'name', label: 'Name', type: 'text', elementType: 'input' },
//         { key: 'url', label: 'URL', type: 'url', elementType: 'input' },
//         { key: 'description', label: 'Description', type: 'text', elementType: 'textarea' },
//         { key: 'imageURL', label: 'Image URL', type: 'url', elementType: 'input' }
//     ];

//     return (
//         <div>
//             <h1>Edit Creator</h1>
//             <form onSubmit={handleSubmit}>
//                 {formFields.map(field => (
//                     <label key={field.key}>
//                         {field.label}:
//                         {field.elementType === 'input' ? (
//                             <input
//                                 type={field.type}
//                                 value={formData[field.key]}
//                                 onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
//                                 required
//                             />
//                         ) : (
//                             <textarea
//                                 value={formData[field.key]}
//                                 onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
//                                 required
//                             ></textarea>
//                         )}
//                     </label>
//                 ))}
//                 <button type="submit">Update Creator</button>
//             </form>
//         </div>
//     );
// }

// export default EditCreator;



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
        imageURL: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
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
                        <fieldset>
                            <div className="editCreator_grid-35">
                                <label>Your Photo</label>
                            </div>
                            <div className="editCreator_grid-65">
                                <span className="editCreator_photo" title="Upload your Avatar!"></span>
                                <input type="text" placeholder="Image URL"
                                    value={formData.imageURL}
                                    onChange={e => setFormData({ ...formData, imageURL: e.target.value })}
                                    required />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="editCreator_grid-35">
                                <label>Name</label>
                            </div>
                            <div className="editCreator_grid-65">
                                <input type="text"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    required />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="editCreator_grid-35">
                                <label>URL</label>
                            </div>
                            <div className="editCreator_grid-65">
                                <input type="url"
                                    value={formData.url}
                                    onChange={e => setFormData({ ...formData, url: e.target.value })}
                                    required />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="editCreator_grid-35">
                                <label>Description</label>
                            </div>
                            <div className="editCreator_grid-65">
                                <textarea
                                    value={formData.description}
                                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                                    required></textarea>
                            </div>
                        </fieldset>
                        <fieldset>
                            <input type="button" className="editCreator_Btn editCreator_cancel" value="Cancel" />
                            <input type="submit" className="editCreator_Btn" value="Update Creator" />
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditCreator;
