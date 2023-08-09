import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import { supabase } from './client.js';
import './App.css';

function App() {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        (async () => {
            const { data, error } = await supabase.from('creators').select('*');
            if (data) {
                setCreators(data);
            }
        })();
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <h1>React CRUD App with Hooks</h1>
                <Routes>
                    <Route path="/" element={<ShowCreators creators={creators} />} />
                    <Route path="/add-creator" element={<AddCreator />} />
                    <Route path="/edit-creator/:id" element={<EditCreator />} />
                    <Route path="/view-creator/:id" element={<ViewCreator />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;










// //to be implemented later after the submission to add user authentication

// import { React, useState, useEffect } from 'react'
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import AddCreator from './pages/AddCreator';
// import EditCreator from './pages/EditCreator';
// import ShowCreators from './pages/ShowCreators';
// import ViewCreator from './pages/ViewCreator';
// import { supabase } from './client.js';
// import './App.css'

// // function ProtectedRoute({ children }) {
// //   const user = supabase.auth.user();

// //   if (!user) return redirect("/login");

// //   return children;
// // }

// function ProtectedRoute({ children }) {
//   const navigate = useNavigate();
//   const user = supabase.auth.user();

//   if (!user) {
//     navigate("/login");
//     return null; // Render nothing while redirecting
//   }

//   return children;
// }

// function App() {
//   const [creators, setCreators] = useState([]); // set the creators state to an empty array

//   useEffect(() => {
//     (async () => {
//       let { data, error } = await supabase.from('creators').select('*');
//       if (data) {
//         setCreators(data);
//       }
//     })();
//   }, []);

//   useEffect(() => {
//     const authListener = supabase.auth.onAuthStateChange((event, session) => {
//       if (event === 'SIGNED_IN') {
//         // Handle user sign-in
//         // For instance, you might want to navigate the user to the /show-creators route
//         window.location.href = "/show-creators";
//       }
//       if (event === 'SIGNED_OUT') {
//         // Handle user sign-out
//         // You might navigate them back to the login page
//         window.location.href = "/";
//       }
//     });
  
//     return () => {
//       authListener; // Call the authListener to unsubscribe
//     };
//   }, []);

  
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <h1>React CRUD App with Hooks</h1>
//         {/* <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />

//           <Route path="/show-creators" element={<ShowCreators creators={creators} />} />
//           <Route path="/add-creator" element={<AddCreator />} />
//           <Route path="/edit-creator/:id" element={<EditCreator />} />
//           <Route path="/view-creator/:id" element={<ViewCreator />} />
//         </Routes> */}
//         <Routes>
//   <Route path="/" element={<Login />} />
//   <Route path="/signup" element={<Signup />} />

//   <Route path="/show-creators" element={
//     <ProtectedRoute>
//       <ShowCreators creators={creators} />
//     </ProtectedRoute>
//   } />

//   <Route path="/add-creator" element={
//     <ProtectedRoute>
//       <AddCreator />
//     </ProtectedRoute>
//   } />

//   <Route path="/edit-creator/:id" element={
//     <ProtectedRoute>
//       <EditCreator />
//     </ProtectedRoute>
//   } />

//   <Route path="/view-creator/:id" element={
//     <ProtectedRoute>
//       <ViewCreator />
//     </ProtectedRoute>
//   } />
// </Routes>

//       </div>
//     </BrowserRouter>
//   )
// }

// export default App

