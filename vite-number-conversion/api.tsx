import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post('/api/buttonpress', (req, res) => {
  const { isPressed } = req.body;
  console.log(`Button press status: ${isPressed}`);

  // You can perform additional logic here with the button press data

  res.status(200).send('Button press received');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});