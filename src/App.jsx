import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Hero from './Components/Hero/Hero';
import Layout from './Components/Layout/Layout';

function App() {
  const apikey =import.meta.env.VITE_API_KEY?.trim();
  console.log("api_key:",apikey);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (prompt) => {
    try {
      setLoading(true);

      // ✅ Recommended public model: CompVis/stable-diffusion-v1-4
   const response = await fetch(
  "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apikey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: prompt }),
  }
);



      if (!response.ok) {
        throw new Error(`Failed to generate image. Status: ${response.status}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob)
      setImageUrl(url);
    } catch (err) {
      alert('Error generating image: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Hero
                onGenerate={handleGenerate}
                imageUrl={imageUrl}
                loading={loading}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
