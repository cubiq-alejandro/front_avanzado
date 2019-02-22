import express from 'express'
import bodyParser from 'body-parser'
import loki from 'lokijs'
import cors from 'cors'

let taskCollection;

const db = new loki('task.json', {
    autoload: true,
    autoloadCallback : databaseInitialize,
    autosave: true, 
    autosaveInterval: 4000
});

function databaseInitialize() {
  taskCollection = db.getCollection("task");
  if (taskCollection === null) {
    taskCollection = db.addCollection("task");
  }
}

const app = express()
app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 8080

app.post('/tasks', (req, res) => {   

    let request = req.body 
    let task = {
        title: request.title || '',
        responsible: request.responsible || '',
        description: request.description || '',
        priority: request.priority || ''
    }

    let element = taskCollection.insert(task)

    res.status(200).send({response: element});       
}); 


app.get('/tasks', (req, res) => {
    let tasks = taskCollection.chain().simplesort("$loki",true).data()
    res.status(200).send({response: tasks})
});

// 2 Borrar elemento
app.delete('/tasks/:id', (req, res) => {
    let id = req.params.id 
    let task = taskCollection.get(id)
    task && taskCollection.remove(task)
    res.status(200).send({response: task})
});


const server = app.listen(port, () => {
    console.log(`(info) Server is running in port ${port}`); 
});