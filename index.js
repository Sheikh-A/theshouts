const server = require("./api/server.js");


//make port be assigned by the Server
//const port = 5000;
//Heroku will place the .PORT environment value on their server
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});


//On Package.json need to add this for Heroku:
// "start": "node index.js" 
