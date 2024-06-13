// const fs = require('fs');
// const path = require('path');

// const countFilePath = path.join(__dirname, 'count.json');

// // Ensure the count.json file exists
// if (!fs.existsSync(countFilePath)) {
//     fs.writeFileSync(countFilePath, JSON.stringify({ count: 0 }));
// }

// // Function to read the current count from file
// const getCountFromFile = () => {
//     const data = fs.readFileSync(countFilePath);
//     return JSON.parse(data).count;
// };

// module.exports = (req, res) => {
//     const count = getCountFromFile();
//     res.json({ count });
// };
