const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());

let contador = 0;
let estadoLed = "Apagado";

app.post('/datos', (req, res) => {
  const { contadorNuevo, estadoLedNuevo } = req.body;

  if (contadorNuevo !== undefined && estadoLedNuevo !== undefined) {
    contador = contadorNuevo;
    estadoLed = estadoLedNuevo;

    res.status(200).json({
      message: "Datos actualizados correctamente",
      contador: contador,
      estadoLed: estadoLed
    });
  } else {
    res.status(400).json({
      error: "Faltan datos en la solicitud"
    });
  }
});

app.get('/datos', (req, res) => {
  res.status(200).json({
    contador: contador,
    estadoLed: estadoLed
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

  console.log('Servidor API escuchando en el puerto 3000');
});
