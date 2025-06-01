import express from 'express';
import ldapLogin from './ldap.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const result = await ldapLogin(username, password);
  if (result.success) {
    res.status(200).send({ message: 'Autenticación correcta' });
  } else {
    res.status(401).send({ message: 'Autenticación fallida' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor backend en puerto ${PORT}`));
