const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Serve static files from the 'page' folder
app.use(express.static(path.join(__dirname, 'page')));
// Serve static files from the 'public' folder
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

// Route for serving the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'page', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
