import React, { useState } from 'react';

function RandomPassword() {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const passwordLength = 12;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(password);
  };

  return (
    <div>
      <button onClick={generatePassword}>Generate Random Password</button>
      <p>The random password is: {password}</p>
    </div>
  );
}

export default RandomPassword