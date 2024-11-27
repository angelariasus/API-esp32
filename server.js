const express = require('express');
const cors = require('cors');

// Crear la aplicación Express
const app = express();

// Configurar CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Middleware para analizar JSON
app.use(express.json());

// Variables para almacenar el contador y los estados de los LEDs
let contador = 0;
let estadoLed = "Apagado";
let estadoLedB = "Encendido";

// Ruta GET para devolver los datos actuales
app.get('/datos', (req, res) => {
  res.json({
    contador: contador,
    estadoLed: estadoLed,
    estadoLedB: estadoLedB
  });
});

// Ruta POST para actualizar los datos
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

// Iniciar el servidor en el puerto 80
const port = 80;
app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
