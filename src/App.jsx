import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import './App.css';

export const ThemeContext = React.createContext(); // Creating a React Context for Theme. This will allow child components to easily access and modify the theme.

function App() {
    // Idea:  We can flip this switch between 'light' and other settings (like 'dark'). When our website starts, it looks in the computer's memory (called "localStorage") to see if we saved a previous setting. If not, it just sets the switch to 'light'.
    // `ThemeContext` as a shared space where components can grab or change the theme without us having to explicitly pass the theme to every single component.
    // We're setting up a piece of memory (or "state") to remember the current theme. This as a switcher between dark mode and light mode. By default, it checks if we've previously set a theme and saved it in the browser's memory (localStorage). 
    // If not, it goes with the 'light' theme. The functions `theme` and `setTheme` allow us to read and change this value respectively.
    // Every time our theme changes, it ensures two things:
            // - It saves the current theme back into the browser's memory, so next time we open the app, it remembers our choice.
            // - It updates a setting (`data-theme`) on our webpage's body, which can be utilized by our styles (CSS) to adjust the look of the page according to the chosen theme.
    // This setup ensures that the theme preference is remembered and applied throughout the application, providing a consistent and personalized user experience.
    
    
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    // UseState hook to create a piece of state called 'theme'. This state will hold the current theme value.
    // We initialize this state with the theme from local storage, or default to 'light' if none is found.


    // UseEffect hook to run side-effects (in this case, to handle changes to the theme).
    useEffect(() => {
        localStorage.setItem('theme', theme); // When the theme changes, this effect will run and update the local storage with the new theme value.
        document.body.setAttribute('data-theme', theme); // It will also set a data attribute on the body element. This can be used in CSS to style based on the current theme.
    }, [theme]); // This effect will re-run whenever the 'theme' value changes.

    return (
        <BrowserRouter>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ShowCreators />} />
                        <Route path="/add" element={<AddCreator />} />
                        <Route path="/edit/:id" element={<EditCreator />} />
                        <Route path="/view/:id" element={<ViewCreator />} />
                    </Routes>
                </div>
            </ThemeContext.Provider>
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

