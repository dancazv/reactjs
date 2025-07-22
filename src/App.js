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
    const calculo = peso / (alturaMetros * alturaMetros);
    const imcCalculado = calculo.toFixed(2);
    
    setImc(imcCalculado);
    
    // Classificação do IMC
    if (imcCalculado < 18.5) {
      setClassificacao('Magreza');
    } else if (imcCalculado >= 18.5 && imcCalculado < 25) {
      setClassificacao('Normal');
    } else if (imcCalculado >= 25 && imcCalculado < 30) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado >= 30 && imcCalculado < 40) {
      setClassificacao('Obesidade');
    } else {
      setClassificacao('Obesidade Grave');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de IMC</h1>
        <form onSubmit={calcularIMC} className="form-container">
          <div className="form-group">
            <label htmlFor="altura">Altura (cm):</label>
            <input
              type="number"
              id="altura"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="peso">Peso (kg):</label>
            <input
              type="number"
              id="peso"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="calc-button">Calcular IMC</button>
        </form>

        {imc && (
          <div className="resultado">
            <h2>Resultado</h2>
            <p>Seu IMC: <strong>{imc}</strong></p>
            <p>Classificação: <strong>{classificacao}</strong></p>
            
            <div className="tabela-imc">
              <h3>Tabela de Classificação</h3>
              <table>
                <thead>
                  <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={classificacao === 'Magreza' ? 'destaque' : ''}>
                    <td>Abaixo de 18,5</td>
                    <td>Magreza</td>
                  </tr>
                  <tr className={classificacao === 'Normal' ? 'destaque' : ''}>
                    <td>18,5 a 24,9</td>
                    <td>Normal</td>
                  </tr>
                  <tr className={classificacao === 'Sobrepeso' ? 'destaque' : ''}>
                    <td>25 a 29,9</td>
                    <td>Sobrepeso</td>
                  </tr>
                  <tr className={classificacao === 'Obesidade' ? 'destaque' : ''}>
                    <td>30 a 39,9</td>
                    <td>Obesidade</td>
                  </tr>
                  <tr className={classificacao === 'Obesidade Grave' ? 'destaque' : ''}>
                    <td>Acima de 40</td>
                    <td>Obesidade Grave</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App; 