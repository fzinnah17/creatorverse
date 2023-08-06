//To be implemented later
// import React, { useState } from 'react';
// import { supabase } from '../client.js';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const { user, error } = await supabase.auth.signIn({
//       email,
//       password,
//     });
    
//     if (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//         <button onClick={() => window.location.href = "/signup"}>Signup</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
