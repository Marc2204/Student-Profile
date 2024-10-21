import './App.css';
import { useState } from 'react';

function App() {
  const [section, setSection] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleButtonClick = (newSection) => {
    setSection(newSection);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    const { name, email, message } = formData;
    if (name && email && message) {
      alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="container text-center mt-5">
      <header className="mb-4 p-4" style={{ backgroundColor: 'pink', color: 'white', borderRadius: '10px' }}>
        <h1 className="display-4">WELCOME TO MY PROFILE!!</h1>
        <p>I'm Czernycrille Abellera...</p>
      </header>

      <div className="d-flex justify-content-center mb-5">
        <button
          className="btn btn-lg mx-3"
          style={{ backgroundColor: 'pink', color: 'white', border: 'none' }}
          onClick={() => handleButtonClick('About')}
        >
          About
        </button>
        <button
          className="btn btn-lg mx-3"
          style={{ backgroundColor: 'pink', color: 'white', border: 'none' }}
          onClick={() => handleButtonClick('Skills')}
        >
          Skills
        </button>
        <button
          className="btn btn-lg mx-3"
          style={{ backgroundColor: 'pink', color: 'white', border: 'none' }}
          onClick={() => handleButtonClick('Contact')}
        >
          Contact
        </button>
      </div>

      <div className="p-4 border rounded">
        {section === 'About' && (
          <div className="animated-section">
            <h2>About Me</h2>
            <p>
              I'm a developer from Pamantasan ng Cabuyao (PNC). I'm currently a 3rd year CS student. Nothing special about me, I'm just a normal student programmer. My favorite language is Java.
            </p>
          </div>
        )}
        {section === 'Skills' && (
          <div className="animated-section">
            <h2>My Skills</h2>
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript & React</li>
              <li>PHP & Laravel</li>
            </ul>
          </div>
        )}
        {section === 'Contact' && (
          <div className="animated-section">
            <h2>Contact Me</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <button
              type="button"
              style={{ backgroundColor: 'pink', color: 'white', border: 'none', padding: '10px 20px', marginTop: '10px' }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
