const express = require('express')
const bodyParser = require("body-parser");

const hostname = 'localhost'
const port = 3000

const app = express()
const router = express.Router()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

router.route('/rabbits')
  .get((req, res) => {
    res.json({message: 'Liste les plus mignons des lapins', methode: req.method})
  })
  .post((req, res) => {
    res.json({
      message: 'Ajoute le super lapin : '+ req.body.id,
      name: req.body.name,
      age: req.body.age,
      methode: req.method
    })
  })

router.route('/rabbits/:rabbit_id')
  .get((req, res) => {
    res.json({
      message: 'Affiche le super lapin : '+ req.params.rabbit_id,
      name: req.query.name,
      age: req.query.age,
      methode: req.method
    })
  })
  .patch((req, res) => {
    res.json({message: 'Mets à jour le lapin : '+ req.params.rabbit_id, methode: req.method})
  })
  .delete((req, res) => {
    res.json({message: 'Suprime le lapin : '+ req.params.rabbit_id, methode: req.method})
  })

router.route('/')
  .all((req, res) => {
    res.json({message: 'Welcome to my first api', methode: req.method})
  })


app.use(router)

app.listen(port, hostname, () => {
  console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n")
})