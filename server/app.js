const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());

// const dbURI= 'mongodb+srv://kolade:oluwashina1996@cluster0.qa2rl.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect('mongodb+srv://kolade:oluwashina@graphqltut.rpjcb39.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true

}))

app.listen(4000, () => {
    console.log('Listening on port 4000');
});