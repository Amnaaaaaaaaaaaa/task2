const express = require('express');
const app = express();
const todoRoutes = require('./routes/todos');

app.use(express.json());
app.use('/todos', todoRoutes);

module.exports = app;

// Run only if not imported (for local testing)
if (require.main === module) {
  app.listen(3000, () => console.log('✅ Server running on port 3000'));
}
