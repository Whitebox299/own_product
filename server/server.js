require('dotenv').config(); // Add this line at the top
const app = require('./white_box/Backend/app');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
