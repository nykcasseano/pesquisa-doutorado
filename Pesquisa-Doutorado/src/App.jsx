import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*firebase code part*/
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyCLJfCkfrL2LL1nbuFOiaId8vBEscGAS68",
  authDomain: "pesquisa-doutorado.firebaseapp.com",
  projectId: "pesquisa-doutorado",
  storageBucket: "pesquisa-doutorado.appspot.com",
  messagingSenderId: "483890775800",
  appId: "1:483890775800:web:fb81c3262e3dbecfc79d0d"
};

const app = initializeApp(firebaseConfig);

export const App = () => {
  const [profissao, setProfissao] = useState("");
  const [nivelSuper, setnivelSuper] = useState("");
  const [curso, setCurso] = useState("");
  const [estado, setEstado] = useState("");
  const [sexo, setSexo] = useState("")
  const [nasc, setNasc] = useState("");
  const [medico, setMedico] = useState("");
  const [especial, setEspecial] = useState("");
  const [cpf, setCpf] = useState("");

  const db = getFirestore(firebaseApp);
  const userCollectionRef = collectionRef(db, "users");

  useEffect(() => {
    const getUsers = async (users) => {
      const data = await getDocs()
    }
  },[])

}