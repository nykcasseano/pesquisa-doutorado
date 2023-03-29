import React, { useState } from 'react';

const questions = [
  { question: 'É importante para ele nunca irritar alguém.' },
  { question: 'É importante para ele ser humilde.' },
  { question: 'É importante para ele estar satisfeito com o que ele tem e não querer mais.' },
  { question: 'É importante para ele que as pessoas que ele conhece tenham total confiança nele.' },
  { question: 'É importante para ele que todos os seus amigos e família possam acreditar nele completamente.' },
  { question: 'É importante para ele cuidar das pessoas das quais ele se sente próxima.' },
  { question: 'É importante para ele se preocupar com todas as necessidades das suas pessoas queridas.' },
  { question: 'É importante para ele que todas as pessoas no mundo tenham oportunidades iguais na vida.' },
  { question: 'É importante para ele que todos sejam tratados com justiça, mesmo pessoas que ele não conhece.' },
  { question: 'É importante para ele tomar parte nas atividades que defendam a natureza.' },
  { question: 'É importante para ele proteger o ambiente natural da destruição ou poluição.' },
  { question: 'É importante para ele ouvir e compreender as pessoas que são diferentes dele.' },
  { question: 'É importante para ele aceitar as pessoas como elas são, mesmo quando ele discorda delas.' },
];

const options = [
  { text: 'Não se parece nada comigo', value: 1 },
  { text: 'Se parece pouco comigo', value: 2 },
  { text: 'Se parece mais ou menos comigo', value: 3 },
  { text: 'Se parece comigo', value: 4 },
  { text: 'Se parece muito comigo', value: 5 },
];

function App() {
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));

  function handleOptionClick(questionIndex, optionValue) {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionValue;
    setAnswers(newAnswers);
  }

  return (
    <div>
      {questions.map((q, i) => (
        <div key={i}>
          <span>{q.question}</span>
          {options.map((o, j) => (
            <label key={j}>
              <input
                type="radio"
                name={`question-${i}`}
                value={o.value}
                checked={answers[i] === o.value}
                onChange={() => handleOptionClick(i, o.value)}
              />
              {o.text}
            </label>
          ))}
        </div>
      ))}
      <button onClick={() => console.log(answers)}>Enviar respostas</button>
    </div>
  );
}

export default App;
