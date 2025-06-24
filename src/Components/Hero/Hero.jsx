import React, { useState } from 'react';
import './Hero.css';

const Hero = ({ onGenerate, imageUrl, loading }) => {
  const [prompt, setprompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim() === '') {
      alert('Please enter a prompt');
      return;
    }
    onGenerate(prompt);
    setprompt('');
  }
  const handleDownload=()=>{
    const link=document.createElement("a");
    link.href=imageUrl;
    link.download='generate-image-png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>AI Image Generator 🧠🎨</h1>
        <p>Type a prompt and let our AI generate stunning images for you in seconds.</p>
        <form className="prompt-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="e.g., a futuristic city at sunset"
            value={prompt}
            onChange={(e) => setprompt(e.target.value)}
          />
          <button type="submit">Generate</button>
        </form>

        {loading && <p>⏳ Generating image...</p>}

        {imageUrl && (
          <div className="image-preview">
            <img src={imageUrl} alt="Generated AI" />
          </div>
        )}
        {imageUrl && <button onClick={handleDownload} className='Btn'>Download</button>}
      </div>
    </section>
  );
};

export default Hero;
