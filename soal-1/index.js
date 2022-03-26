const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const hewan = [
    {id: 1, nama: 'Snowy', spesies: 'kucing'},
    {id: 2, nama: 'Blacki', spesies: 'anjing'},
    {id: 3, nama: 'Molly', spesies: 'kucing'},
    {id: 4, nama: 'Milo', spesies: 'kelinci'},
    {id: 5, nama: 'Rere', spesies: 'kucing'},
  ]

app.get('/hewan', (req, res) => {
  res.send(hewan)
})

app.get('/hewan/:id', (req, res) => {
    const id = req.params.id
    res.send(hewan.id)
  })

app.post('/hewan', (req, res) => {
    res.send('ini post')
  })

app.put('/hewan/:id', (req, res) => {
    const id = req.params.id
    hewan.filter(kewan =>{
        if (kewan.id == id) {
            kewan.id = id
            kewan.nama = req.body.nama
            kewan.spesies = req.body.spesies

            return kewan
        }
    })
    res.json(hewan)
  })

app.delete('/hewan/:id', (req, res) => {
    const id = req.params.id
    hewan = hewan.filter(kewan => kewan != id)
    res.send(hewan)
  })

app.listen(port, () => {
  console.log(`Success ${port}`)
})