// script.js

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.querySelector('input[name="email"]').value;
    const pass = document.querySelector('input[name="pass"]').value;
  
    // Send the login credentials to the backend
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, pass })
    });
  
    const data = await response.json();
  
    if (response.ok) {
      alert('Login successful!');
      console.log(data);
    } else {
      alert('Login failed: ' + data.message);
    }
  });
  