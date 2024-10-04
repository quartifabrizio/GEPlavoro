const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Configurazione Body-Parser
app.use(bodyParser.json());

// Funzione per leggere gli utenti da utenti.json
const readUsersFromFile = () => {
  try {
    const data = fs.readFileSync('utenti.json'); // Leggi il file utenti.json
    return JSON.parse(data); // Converti in oggetto JavaScript
  } catch (err) {
    console.error('Errore nella lettura del file utenti.json:', err);
    return []; // Restituisci un array vuoto in caso di errore
  }
};

// Funzione per scrivere gli utenti su utenti.json
const writeUsersToFile = (users) => {
  try {
    fs.writeFileSync('utenti.json', JSON.stringify(users, null, 2)); // Scrivi i dati nel file utenti.json
  } catch (err) {
    console.error('Errore nella scrittura del file utenti.json:', err);
  }
};

// Registrazione dell'utente
app.post('/register', (req, res) => {
  const { username, password, email, sesso, ruolo } = req.body;
  const users = readUsersFromFile(); // Leggi gli utenti dal file

  // Controlla se l'utente esiste già
  const userExists = users.find((user) => user.username === username || user.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'Utente o email già registrati.' });
  }

  // Aggiungi il nuovo utente
  const newUser = {
    id: users.length + 1,
    username,
    password,
    email,
    sesso,  // M o F
    ruolo   // datore o lavoratore
  };

  users.push(newUser); // Aggiungi il nuovo utente alla lista
  writeUsersToFile(users); // Scrivi la lista aggiornata nel file utenti.json

  res.status(201).json({ message: 'Registrazione avvenuta con successo!' });
});

// Login dell'utente
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = readUsersFromFile(); // Leggi gli utenti dal file

  // Controlla le credenziali
  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Credenziali non valide.' });
  }

  // Restituisci anche id, sesso e ruolo dell'utente
  res.status(200).json({
    message: 'Login avvenuto con successo!',
    id: user.id,
    username: user.username,
    sesso: user.sesso,
    ruolo: user.ruolo
  });
});

// Endpoint di test per vedere tutti gli utenti (solo per debug)
app.get('/users', (req, res) => {
  const users = readUsersFromFile(); // Leggi gli utenti dal file
  res.status(200).json(users);
});

// Avvio del server
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});
