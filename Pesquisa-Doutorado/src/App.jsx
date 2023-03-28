import firebase from 'firebase/app';
import 'firebase/firestore';
import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg';
import './App.css';
import { collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
const { getFirestore, addDoc } = firebase.firestore;
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

const MyForm = () => {
  const [profissao, setProfissao] = useState('');
  const [nivelFormacao, setNivelFormacao] = useState('');
  const [anoConclusao, setAnoConclusao] = useState('');
  const [naoConcluiu, setNaoConcluiu] = useState(false);
  const [states, setStates] = useState(['']);
  const [estadoAtua, setEstadoAtua] = useState('');

  useEffect(() => {
    const fetchStates = async () => {
      const response = await fetch('/api/states');
      const data = await response.json();
      setStates(data);
    };
    fetchStates();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'form'), {
        profissao,
        nivelFormacao,
        anoConclusao,
        naoConcluiu,
        estadoAtua,
        timestamp: serverTimestamp(),
      });
      console.log('Form submitted successfully!');
      setProfissao('');
      setNivelFormacao('');
      setAnoConclusao('');
      setNaoConcluiu(false);
      setEstadoAtua('');
    } catch (error) {
      console.error('Error submitting form: ', error);
    }
  };

  const handleAnoConclusaoChange = (e) => {
    setAnoConclusao(e.target.value);
    setNaoConcluiu(false);
  };
  const handleCheckboxChange = (e) => {
    setNaoConcluiu(e.target.checked);
    if (e.target.checked) {
      setAnoConclusao('');
    }
  };
  return (
    <div id="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="profissao">Profissão:</label>
        <select id="profissao" name="profissao" value={profissao} onChange={(e) => setProfissao(e.target.value)}>
          <option value="">Selecione uma opção</option>
          <option value="Enfermagem">Enfermagem</option>
          <option value="Farmácia">Farmácia</option>
          <option value="Fisioterapia">Fisioterapia</option>
          <option value="Medicina">Medicina</option>
          <option value="Nutrição">Nutrição</option>
          <option value="Odontologia">Odontologia</option>
          <option value="Psicologia">Psicologia</option>
        </select><br /><br />

        <label htmlFor="nivelFormacao">Nível de Formação:</label>
        <select id="nivelFormacao" name="nivelFormacao" value={nivelFormacao} onChange={(e) => setNivelFormacao(e.target.value)}>
          <option value="">Selecione uma opção</option>
          <option value="Superior Completo">Superior Completo</option>
          <option value="Pós-graduação lato senso (ex.: residência)">Pós-graduação lato senso (ex.: residência)</option>
          <option value="Mestrado">Mestrado</option>
          <option value="Doutorado">Doutorado</option>
          <option value="Pós-Doutorado">Pós-Doutorado</option>
        </select><br /><br />
        <div>
        <label htmlFor="anoConclusao">Em que ano concluiu seu curso superior:</label>
        <select id="anoConclusao" name="anoConclusao" value={anoConclusao} onChange={handleAnoConclusaoChange}>
          <option value="">Selecione</option>
          {Array.from({ length: 39 }, (_, i) => 2022 - i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <div>
          <label htmlFor="naoConcluiu">Marque se ainda não concluiu o curso:</label>
          <input
            type="checkbox"
            id="naoConcluiu"
            name="naoConcluiu"
            checked={naoConcluiu}
            onChange={handleCheckboxChange}
          />
          <br />
          <br />
        </div>
      </div>
        <label htmlFor="estadoAtua">Estado em que atua:</label>
  {states.length > 0 && (
    <select id="estadoAtua" name="estadoAtua">
      {states.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  )}

      <label htmlFor="municipioAtua">Principal município em que atua:</label>
      <input type="text" id="municipioAtua" name="municipioAtua" /> <br/><br/>



          <label htmlFor="sexo">Sexo:</label>
          <input type="radio" id="sexoFeminino" name="sexo" value="Feminino" />
          <label htmlFor="sexoFeminino">Feminino</label>
          <input type="radio" id="sexoMasculino" name="sexo" value="Masculino" />
          <label htmlFor="sexoMasculino">Masculino</label><br /><br />

          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input type="date" id="dataNascimento" name="dataNascimento"/><br/><br/>

          <label htmlFor="medico">Médico (atua em especialidade cirúrgica?):</label>
          <input type="checkbox" id="medico" name="medico" value="sim"/>
          <label htmlFor="medico">Sim</label>
          <input type="checkbox" id="medico" name="medico" value="nao"/>
          <label htmlFor="medico">Não</label><br/><br/>

          <label htmlFor="areaEspecialidade">Qual a área de especialidade?</label>
          <input type="text" id="areaEspecialidade" name="areaEspecialidade"/><br/><br/>

          <label htmlFor="cpf">4 primeiros dígitos do CPF:</label>
          <input type="text" id="cpf" name="cpf" maxLength="4"/><br/><br/>

          <input type="submit" value="Submit"/>

        <button type="submit">Enviar</button>
      </form>
      </div>
  );
}
