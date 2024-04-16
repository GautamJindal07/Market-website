var express= require('express');
var session= require('express-session');
var bodyParser= require('body-parser');
var cors= require('cors');
var db= require('./db.js');

app=express();

app.use(cors());
app.use(session({secret:"Gaut@2003"}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.get('/',function(req,res){
    res.send("Hello welcome to rest api class");
});

app.get('/listuser',(req,res)=>{
    res.send({name:"Gautam Jindal",cls:"btech 3rd year", city:"Patiala"});
})
app.post('/register_users', (req, res) => {
    console.log('Received request:', req.body);
    const data = req.body;
    const insertQuery = "INSERT INTO users (FirstName, LastName, Username, Email, Password, Address, Address2, City, State, Zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        data.FirstName,
        data.LastName,
        data.Username,
        data.Email,
        data.Password,
        data.Address,
        data.Address2,
        data.City,
        data.State,
        data.Zip,
    ];

    db.query(insertQuery, values, function (err, result) {
        if (err) {
            console.error(err);
            return res.status(500).send({ msg: "Error inserting data into the database" });
        }
        if (req.headers.accept && req.headers.accept.includes("application/json")) {
            res.send(result);
        }
        console.log(result);
        res.send({ msg: "Data inserted successfully" });
    });
    console.log('Sending response:', result);
});
app.listen(8000,()=>console.log("Server running at port no 8000"));