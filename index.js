
const express = require('express'); 
const app = express()
app.use(express.json()) 
const dbConnect = require("./db/dbConnect");
const test1 = require("./models/AffectSujet") 
const test3 = require("./models/AffectJury")
const Admin = require("./models/test") 
const cors = require('cors')
const Sup = require("./models/AffectSup") 
const jwt = require('./auth')
app.use(cors())
dbConnect();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session) 

const bcrypt = require('bcryptjs')

const MAX_AGE = 1000 * 60 * 60 * 3 // 3hrs

// setting up connect-mongodb-session store
const mongoDBstore = new MongoDBStore({
  uri: process.env.DATABASE_CONNECTION_STRING,
  collection: 'mySessions',
})





 

app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    title: 'Apis'
  });
});

app.get('/cors', (req, res) => {
res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
res.send({ "msg": "This has CORS enabled 🎈" })
})

app.post('/login', async (req, res) => {
   const token = jwt.login(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id
      });
    const { email, password , role} = req.body
    console.log(email)
    console.log(password)
	  
  
   Admin.findOne({ email: req.body.email })
   .then((user)=> {
    if (user.password === req.body.password) {
       res.send("password matche").status(200)
          
          

     }
     else {
       res.send("password wrong").status(404)

     }
   } ) 
   .catch((e)=> {
     console.log(e)
   } ) 
   
        
   
}) 

app.post("/AffectSujet", (req, res) => { 
  const sujet = new test1({
    ...req.body
  }); 
  sujet.save()
  .then(() => res.status(201).json({ message: 'Donnèes bien enregistrées '}))
  .catch(error => console.log(error));
  console.log(sujet)
  
  
}) 

app.post("/AffectSup",(req, res) => { 
  const {nomEtud , emailSup, ident} = req.body
  console.log("bien ")
  const aaaa = new Sup({
    ...req.body
  }); 
  const salt = bcrypt.genSalt(10);
      aaaa.ident = bcrypt.hash(ident, salt);
      aaaa.save();

      // return jwt
      const payload = {
        aaaa: {
          id: aaaa.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '7 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      
  
  
  console.log(aaaa)
  var aux = emailSup + "@ensi-uma.tn"
  const yousr = new Admin({ email: aux , password:ident, role:"superviseur" })
  yousr.save()
  })
    
app.post("/AffectJury", (req, res) => { 
  const jury = new test3({
    ...req.body
  }); 
  jury.save()
  .then(() => res.status(201).json({ message: 'Donnèes bien enregistrées'}))
  .catch(error => res.status(400).json({ error }));
  console.log(jury)
})





// free endpoint
app.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", (request, response) => {
  response.json({ message: "You are authorized to access me" });
});
app.listen(3001, () => {
    console.log(" server running on port 3001 ");
}); 