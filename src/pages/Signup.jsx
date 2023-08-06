// //To be implemented later
// import React, { useState } from 'react';
// import { supabase } from '../client.js';

// function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

// const handleSignup = async (e) => {
//     e.preventDefault();
//     const { user, error } = await supabase.auth.signUp({
//       email,
//       password,
//       options: {
//         // Disable email confirmation
//         disableEmailConfirmation: true,
//       },
//     });
  
//     if (error) {
//       alert(error.message);
//     } else {
//       // Handle successful sign-up (e.g., redirect to a new page, show a success message, etc.)
//       console.log('User signed up successfully:', user);
//     }
//   };
  

//   return (
//     <div>
//       <form onSubmit={handleSignup}>
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
//         <button type="submit">Signup</button>
//       </form>
//       <button onClick={() => window.location.href = "/"}>Login</button>

//     </div>
//   );
// }

// export default Signup;
