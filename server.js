const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const countFilePath = path.join(__dirname, 'count.json');

// Ensure the count.json file exists
if (!fs.existsSync(countFilePath)) {
    fs.writeFileSync(countFilePath, JSON.stringify({ count: 0 }));
}

// Function to read the current count from file
const getCountFromFile = () => {
    const data = fs.readFileSync(countFilePath);
    return JSON.parse(data).count;
};

// Function to save the current count to file
const saveCountToFile = (count) => {
    fs.writeFileSync(countFilePath, JSON.stringify({ count }));
};

// Serve the index.html file from the root directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve static files from the root directory
app.use(express.static(__dirname));

// API endpoint to update and get the visit count
app.get('/api/visit', (req, res) => {
    let count = getCountFromFile();
    count += 1;
    saveCountToFile(count);
    res.json({ count });
});

// API endpoint to get the current visit count
app.get('/api/count', (req, res) => {
    const count = getCountFromFile();
    res.json({ count });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
