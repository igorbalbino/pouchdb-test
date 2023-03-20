const app = require('./server');


let date = new Date().toJSON().substring(0,19).replace('T',' ');
// starting the server
app.listen(3001, () => {
    console.log('Date now: ', date);
    console.log('Server listening. Port: 3001\n\n');
});