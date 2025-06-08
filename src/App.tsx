import { useState } from 'react';
import './App.css';

const OPENAI_API_KEY = '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'; // 👈 Reemplaza con tu clave real

function App() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState('');

  const generateJoke = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setJoke('');
    console.log('🟡 Enviando petición a OpenAI con el tema:', input);

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a funny assistant.' },
            { role: 'user', content: `Make a small joke with: ${input}` },
          ],
          temperature: 0.7,
          max_tokens: 100, // 🔼 Más tokens por si hace falta
        }),
      });

      console.log('📨 Esperando respuesta...');
      const data = await res.json();
      console.log('✅ Respuesta recibida:', data);

      if (res.ok) {
        const message = data.choices?.[0]?.message?.content?.trim();
        setJoke(message || 'No joke received.');
      } else {
        console.error('❌ Error en respuesta:', data);
        setJoke('Error: ' + (data.error?.message || 'Unknown error.'));
      }
    } catch (error) {
      console.error('🔥 Error en la solicitud:', error);
      setJoke('Request failed. See console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <input
        type="text"
        value={input}
        placeholder="Type a topic"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={generateJoke}>Make me laugh!</button>

      {loading && <div className="loader" />}

      {joke && <div className="response">{joke}</div>}
    </div>
  );
}

export default App;
