const express = require('express');
const Datastore = require('nedb');
const app = express();
app.listen(3000, () => console.log('listening on 3000'));
app.use(express.static('public'));
app.use(express.json());

const dbFlashcardList = new Datastore('flashcardList.db');
dbFlashcardList.loadDatabase();

dbFlashcardList.insert({
    test: 'testing insert'
})

app.post('/routeName', (request, response) => {
    console.log(request);
    response.json({
        status: 'send'
    })
})
