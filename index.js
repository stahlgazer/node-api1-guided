const express = require("express"); //npm i express
const shortid = require("shortid");

const server = express();
let hubs = [];
let lessons = [];
server.use(express.json()); // add this line

server.get('/', (req, res) => {
    res.status(200).json({api: 'running...'})
})

// write a /hello endpoint that returns an object like so: { hello: "Web 27" }

server.get('/hello', (req, res) => {
res.status(200).json({ hello: "Web 27" })
})

// write an endpoint to create lessons
server.post('/api/lessons', (req, res) => {
    const lessonInfo = req.body;
    lessonInfo.id=shortid.generate();
    lessons.push(lessonInfo)
    res.status(201).json({lessonInfo})
})

server.post('/api/hubs', (req, res) => {
    const hubInfo = req.body;
    // validate that the hubInfo is correct before saving
    hubInfo.id=shortid.generate();
    hubs.push(hubInfo)
    res.status(201).json(hubInfo);
})

// get request for hubs
server.get('/api/lessons', (req, res) => {
    res.status(201).json(lessons);
})

const PORT = 5000;
server.listen(PORT, () =>
console.log(`\n** API on http://localhost:${PORT} **\n`))

// to run the serve use node index.js