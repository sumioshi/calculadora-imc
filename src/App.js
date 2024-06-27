import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();
    const alturaMetros = altura / 100;
    const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(imcCalculado);
    setClassificacao(getClassificacao(imcCalculado));
  };

  const getClassificacao = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';
    if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc <= 34.9) return 'Obesidade grau 1';
    if (imc >= 35 && imc <= 39.9) return 'Obesidade grau 2';
    return 'Obesidade grau 3';
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <div>
          <label>
            Altura (cm):
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Peso (kg):
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {imc && (
        <div>
          <h2>Seu IMC é: {imc}</h2>
          <h3>Classificação: {classificacao}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
