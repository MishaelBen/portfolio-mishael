import { useState } from 'react'; // ✅ Correct casing: useState, not usestate

export default function UserForm() {
  const [name, setName] = useState('');   // ✅ useState instead of usestate
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {           // ✅ handleSubmit instead of handlesubmit (naming is flexible but keep consistent)
    e.preventDefault();
    console.log("Submitted:", { name, email });
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nam">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
     
 
      <button type="submit">Submit</button>
    </form>
  );
}
