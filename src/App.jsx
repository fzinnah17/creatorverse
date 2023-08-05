import { React, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import { supabase } from './client.js';
import './App.css'

function App() {
  const [creators, setCreators] = useState([]); // set the creators state to an empty array

  useEffect(() => {
    (async () => {
        let { data, error } = await supabase.from('creators').select('*');
        if (data) {
            setCreators(data);
        }
    })();
}, []);



// let { data: creators, error } = await supabase
// .from('creators')
// .select('*')


  return (
    <BrowserRouter>
      <div className="App">
        <h1>React CRUD App with Hooks</h1>
        <Routes>
          <Route path="/" element={<ShowCreators creators = {creators} />} />
          <Route path="/add-creator" element={<AddCreator />} />
          <Route path="/edit-creator/:id" element={<EditCreator />} />
          <Route path="/view-creator/:id" element={<ViewCreator />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
