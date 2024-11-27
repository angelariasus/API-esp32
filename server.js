const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let contador = 0;
let estadoLed = "Apagado";
let estadoLedB = "Encendido";

app.get('/datos', (req, res) => {
  res.json({
    contador: contador,
    estadoLed: estadoLed,
    estadoLedB: estadoLedB
  });
});

app.post('/actualizar', (req, res) => {
  const { contadorNuevo, estadoLedNuevo, estadoLedBNuevo } = req.body;

  if (contadorNuevo !== undefined) contador = contadorNuevo;
  if (estadoLedNuevo !== undefined) estadoLed = estadoLedNuevo;
  if (estadoLedBNuevo !== undefined) estadoLedB = estadoLedBNuevo;

  res.status(200).json({
    mensaje: "Datos actualizados correctamente",
    contador: contador,
    estadoLed: estadoLed,
    estadoLedB: estadoLedB
  });
});

const port = 80;
app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
