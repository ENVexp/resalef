const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/teste', async (req, res)=>{
    try {
        const response = await axios.get(
            "http://opentx.online:8080/movie/Ronnyy/root@2424/990540.mp4",
            {
            responseType: 'stream'
        });

        res.setHeader('Content-Type', response.headers['content-type'] || 'application/octet-stream');
        res.setHeader('Content-Length', response.headers['content-length'] || undefined);

        response.data.pipe(res);
    } catch (error) {
        res.status(500).json({ error: 'Erro', details: error.message });
    }
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});