import './AccountCreationPage.css';
import ProfileCreation from '../ProfileCreation/ProfileCreation';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const InputField = ({ label, type = 'text' }) => (
  <>
    <label htmlFor={label.toLowerCase()} className="input-label">{label}</label>
    <input type={type} id={label.toLowerCase()} className="input-field" />
  </>
);

const AccountCreationPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');

  const handleBack = () => {
    navigate(-1);
  };

  function handleProfileCreation(event) {
    event.preventDefault();

    (async () => {
      //encrypt password before sending info to Lambda via API endpoint
      const bucket = 'heartzonedb';
      const file = 'test/filename.txt';
      const method = 'PUT';
      const body = { name, email, password, date };
      const url = `https://t4fh12f682.execute-api.us-east-2.amazonaws.com/v1/${bucket}?file=${file}&method=${method}`;

      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(body),
      };
      
      fetch(url, requestOptions)
        .then(response => {
          console.log('Response Status:', response.status); // Log response status code
          console.log('Response Status Text:', response.statusText); // Log response status text
          response.headers.forEach((value, key) => {
            console.log(`${key}: ${value}`); // Log each header
          });
          if (!response.ok) {
            throw new Error('Failed to create account');
          }
          return response.text();
        })
        .then(data => {
          console.log('Account created successfully');
          navigate('/ProfileCreation');
        })
        .catch(error =>{
          console.error('Error creating account:', error);
        });
    })();
  }

  return (
    <section className="signup-section-account">
      <header className="images-header">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1768e2983050c9c5cd8f815fcacc75eeee06121531f87c96613fde70f191d83?apiKey=872a26b640bf4d309e24a74b10b52b7f&" alt="" className="icon" onClick={handleBack}/>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f5798c23f51c89fa83f6ea25c71b05be94b27b9aba4c6f5624bf8b32a6d20e0?apiKey=872a26b640bf4d309e24a74b10b52b7f&" alt="" className="logo" />
      </header>
      <article className="form-container-account">
        <h1>Create a New Account</h1>
        <p>Already registered? <a href = '/LoginPage'>Log in here.</a></p>
        <form id="contact-form" onSubmit={handleProfileCreation}>
         <InputField label="NAME" value={name} onChange={(e) => {
            const input = e.target.value;
            const sanitizedInput = input.replace(/[^A-Za-z]/ig, ''); // Remove non-alphabetic characters
              setName(sanitizedInput);
          }}
          />
          <InputField label="EMAIL" type="email" value={email} onChange={(e) => setName(e.target.value)}/>
          <InputField label="PASSWORD" type="password" value={password} onChange={(e) => setName(e.target.value)}/>
          <InputField label="DATE OF BIRTH" type="date" value={date} onChange={(e) => setName(e.target.value)}/>
        </form>
        <div className="signup-div-account">
          <button className="signup-button-account" onClick={handleProfileCreation}>Sign Up</button>
        </div>
      </article>
    </section>
  );
}

export default AccountCreationPage;