const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let contador = 0;
let estadoLed = "Apagado";

app.post('/datos', (req, res) => {
  const { contadorRecibido, estadoLedRecibido } = req.body;

  if (contadorRecibido !== undefined) contador = contadorRecibido;
  if (estadoLedRecibido !== undefined) estadoLed = estadoLedRecibido;

  console.log('Datos recibidos:', { contador, estadoLed });

  res.status(200).json({ message: 'Datos recibidos correctamente' });
});

app.get('/datos', (req, res) => {
  res.status(200).json({
    contador: contador,
    estadoLed: estadoLed
  });
});

app.listen(3000, () => {
  console.log('Servidor API escuchando en el puerto 3000');
});
