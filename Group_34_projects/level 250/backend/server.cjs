const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

let contacts = [
    { id: 1, name: "gia", tel: 123456789 },
]

//^ GET -- /, /:id
//^ POST -- /
//^ PUT -- /:id
//^ DELETE -- /, /:id

app.get('/', (req, res) => {
    res.json({ data: contacts, success: true });
})

app.get('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    const contact = contacts.find(el => el.id = id); 
    res.json({ data: contact, success: true });
})

app.post('/', (req, res) => {
    contacts.push({ id: contacts.length+1, name: req.body.name, tel: req.body.tel });
    res.status(201).json({ data: contacts, success: true });
})

app.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = contacts.find(el => el.id == id);
    contacts = contacts.filter(el => el.id == id);
    res.json({ data: deleted, success: true });
})

app.listen(PORT, () => console.log("server is running!"));