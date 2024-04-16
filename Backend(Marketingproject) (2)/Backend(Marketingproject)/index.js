var express = require('express');
var app = express();
const session = require("express-session");
var bodyParser = require('body-parser');
var db = require('./db.js');
const cors = require('cors');
// var bcrypt = require("bcrypt");
app.use(
    session({
        secret: "123qwe",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(cors());
app.use(express.json())
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
db.connect(function (err) {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }

    console.log('Connected to database');
});


app.get("/", function (req, res) {
    res.render('home')
});

app.get('/listuser',(req,res)=>{
    res.send({name:"Gautam Jindal",cls:"btech 3rd year", city:"Patiala"});
})
app.post('/register_users', (req, res) => {
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
        } else {
            console.log(result);
            res.send({ msg: "Data inserted successfully" });
        }
    });
});

app.post('/contactUS', (req, res) => {
    const data = req.body;
    const insertQuery = "INSERT INTO contactus (Email, Message) VALUES (?, ?)";
    const values = [

        data.Email,
        data.Message,

    ];

    db.query(insertQuery, values, function (err, result) {
        if (err) {
            console.error(err);
            return res.status(500).send({ msg: "Error inserting data into the database" });
        }
        if (req.headers.accept && req.headers.accept.includes("application/json")) {
            res.send(result);
        } else {
            console.log(result);
            res.send({ msg: "Data inserted successfully" });
        }
    });
});



app.post("/login",async (req, res) => {
    const { Email, Password } = req.body;

    db.query(
        "SELECT * FROM users WHERE Email = ? and Password=?", [Email,Password], (err, result) => {
            if (err) {
                console.error("Error querying database:", err);
                return res.send("error");
            }

            console.log(result.length)
            if (result.length > 0) {
                res.send({ message: "success" });
            }

            else {
                res.send({ message: "password dont match" });
            }
        }
    );
});






app.get('/listusers', function (req, res) {
    db.query('SELECT * FROM users', function (err, result) {
        if (err) {
            console.error('Error querying the database:', err);
            return;
        }

        res.render('listusers', { result: result });
    });
});



app.get('/addusers', function (req, res) {
    db.query("select * from users", function (err, user) {
        res.render('addusers', { User: user });
    })
});


app.post('/addusers_submit', function (req, res) {
    let { FirstName, LastName, UserId, Username, Email, Password, Address, Address2, City, State, Zip } = req.body;
    let sql = "INSERT INTO users ( FirstName, LastName, UserId, Username, Email, Password, Address, Address2, City, State, Zip) VALUES ('" + FirstName + "','" + LastName + "','" + UserId + "','" + Username + "','" + Email + "','" + Password + "','" + Address + "','" + Address2 + "','" + City + "','" + State + "','" + Zip + "')";

    db.query(sql, function (err, result) {
        // if (result.insertId > 0) {
        res.redirect('/listusers');
        // }
    });
});

app.get('/editusers', function (req, res) {
    let UserId = req.query.UserId;
    db.query("SELECT * FROM users WHERE UserId=" + UserId, function (err, Userdata) {
        res.render('editusers', { User: Userdata[0] });

    });
});

app.post('/editusers_submit', function (req, res) {
    let { FirstName, LastName, UserId, Username, Email, Password, Address, Address2, City, State, Zip } = req.body;
    let values = [FirstName, LastName, Username, Email, Password, Address, Address2, City, State, Zip, UserId];

    let sql = `UPDATE users SET FirstName=?, LastName=?, Username=?, Email=?, Password=?, Address=?, Address2=?, City=?, State=?, Zip=? where UserId=?`;

    db.query(sql, values, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/listusers');
    });
});




app.get('/deleteusers', function (req, res) {
    let UserId = req.query.UserId;
    db.query("DELETE FROM users WHERE UserId=" + UserId, function (err, result) {
        res.redirect('/listusers');

    });
});




















app.get('/listtestimonial', function (req, res) {
    db.query('SELECT * FROM testimonials', function (err, result) {
        if (err) {
            console.error('Error querying the database:', err);
            return;
        }

        res.render('listtestimonial', { result: result });
    });
});



app.get('/addtestimonials', function (req, res) {
    db.query("select * from testimonials", function (err, test) {
        res.render('addtestimonials', { test: test });
    })
});


app.post('/addtestimonials_submit', function (req, res) {
    let { Name, Remarks, stars } = req.body;
    let sql = "INSERT INTO testimonials ( Name, Remarks, stars) VALUES ('" + Name + "','" + Remarks + "','" + stars + "')";

    db.query(sql, function (err, result) {
        if (result.insertId > 0) {
            res.redirect('/listtestimonial');
        }
    });
});

app.get('/edittestimonials', function (req, res) {
    let UserID = req.query.UserID;
    db.query("SELECT * FROM testimonials WHERE UserID=" + UserID, function (err, testdata) {
        res.render('edittestimonials', { test: testdata[0] });

    });
});

app.post('/edittestimonials_submit', function (req, res) {
    let { UserID, Name, Remarks, stars } = req.body;
    let values = [Name, Remarks, stars, UserID];

    let sql = `UPDATE testimonials SET Name=?, Remarks=?, stars=? WHERE UserID=?`;

    db.query(sql, values, function (err, result) {
        res.redirect('/listtestimonial');
    });
});




app.get('/deletetestimonials', function (req, res) {
    let UserID = req.query.UserID;
    db.query("DELETE FROM testimonials WHERE UserID=" + UserID, function (err, result) {
        res.redirect('/listtestimonial');

    });
});

















app.get('/listproject', function (req, res) {
    db.query('SELECT * FROM projects', function (err, result) {
        if (err) {
            console.error('Error querying the database:', err);
            return;
        }

        res.render('listproject', { result: result });
    });
});



app.get('/addproject', function (req, res) {
    db.query("select * from projects", function (err, project) {
        res.render('addproject', { project: project });
    })
});


app.post('/addproject_submit', function (req, res) {
    let { projectId, category, price, dedicatedDays } = req.body;
    let sql = "INSERT INTO projects ( projectId, category, price, dedicatedDays) VALUES ('" + projectId + "','" + category + "','" + price + "','" + dedicatedDays + "')";

    db.query(sql, function (err, result) {
        // if (result.insertId > 0) {
        res.redirect('/listproject');
        // }
    });
});

// app.get('/editproject', function(req, res) {
//     let projectId = req.query.projectId;
//     db.query("SELECT * FROM projects WHERE projectId=" ,[projectId], function(err, projectdata) {
//             res.render('editproject', { project: projectdata[0]});

//     });
// });

// app.post('/editproject_submit', function(req, res) {
//     let { projectId, category, price, dedicatedDays} = req.body;
//     let values = [category, price, dedicatedDays, projectId];
//     let sql = `UPDATE projects SET category=?, price=?, dedicatedDays=? WHERE projectId=?`;

//     db.query(sql, values, function(err, result) {
//             res.redirect('/listproject');
//     });
// });

app.get('/editproject', function (req, res) {
    let projectId = req.query.projectId;
    db.query("SELECT * FROM projects WHERE projectId=?", [projectId], function (err, projectdata) {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching project data');
        } else {
            res.render('editproject', { project: projectdata[0] });
        }
    });
});

app.post('/editproject_submit', function (req, res) {
    let { projectId, category, price, dedicatedDays } = req.body;
    let values = [category, price, dedicatedDays, projectId];
    let sql = `UPDATE projects SET category=?, price=?, dedicatedDays=? WHERE projectId=?`;

    db.query(sql, values, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Error updating project');
        } else {
            res.redirect('/listproject');
        }
    });
});



app.get('/deleteproject', function (req, res) {
    let projectId = req.query.projectId;
    db.query("DELETE FROM projects WHERE projectId=" + projectId, function (err, result) {
        res.redirect('/listproject');

    });
});


















app.get('/listenrolments', function (req, res) {
    db.query('SELECT * FROM enrolments', function (err, result) {
        if (err) {
            console.error('Error querying the database:', err);
            return;
        }

        res.render('listenrolments', { result: result });
    });
});



app.get('/addenrolments', function (req, res) {
    db.query("SELECT * FROM enrolments",function(err,enrolments){
    res.render('addenrolments', { enrolments: enrolments });
})
});


app.post('/addenrolments_submit', function (req, res) {
    let {  Email, status } = req.body;
    let sql = "INSERT INTO enrolments ( Email, status) VALUES ('" + Email + "','" + status + "')";

    db.query(sql, function (err, result) {
        if(err) throw err;
        // if (result.insertId > 0) {
            res.redirect('/listenrolments');
        // }
    });
});

app.get('/editenrolments', function (req, res) {
    let enr_id = req.query.enr_id;
    db.query("SELECT * FROM enrolments WHERE enr_id=" + enr_id, function (err, enrolments) {
        res.render('editenrolments', { enrolments: enrolments[0] });

    });
});

app.post('/editenrolments_submit', function (req, res) {
    let { enr_id,Email, status } = req.body;
    let values = [Email, status,enr_id];

    let sql = `UPDATE enrolments SET Email=? , status=? WHERE enr_id=?`;

    db.query(sql, values, function (err, result) {
        res.redirect('/listenrolments');
    });
});




app.get('/deleteenrolments', function (req, res) {
    let enr_id = req.query.enr_id;
    db.query("DELETE FROM enrolments WHERE enr_id=" + enr_id, function (err, result) {
        res.redirect('/listenrolments');

    });
});


















app.get('/listemployees', function (req, res) {
    db.query('SELECT * FROM employees', function (err, result) {
        if (err) {
            console.error('Error querying the database:', err);
            return;
        }

        res.render('listemployees', { result: result });
    });
});



app.get('/addemployees', function (req, res) {
    db.query("select * from employees", function (err, employees) {
        db.query("select * from projects", function (err, projects) {

        res.render('addemployees', { employees: employees ,projects: projects});
    })
});
});


app.post('/addemployees_submit', function (req, res) {
    let {  empName, empMail, Salary, DateOfBirth, projectId } = req.body;
    let sql = "INSERT INTO employees (  empName, empMail, Salary, DateOfBirth, projectId) VALUES ('" + empName + "','" + empMail + "','" + Salary + "','" + DateOfBirth + "','" + projectId + "')";

    db.query(sql, function (err, result) {
        if(err) throw err;
        // if (result.insertId > 0) {
            res.redirect('/listemployees');
        // }
    });
});

app.get('/editemployees', function (req, res) {
    let empId = req.query.empId;
    db.query("SELECT * FROM employees WHERE empId=" + empId, function (err, employees) {
        res.render('editemployees', { employees: employees[0] });

    });
});

app.post('/editemployees_submit', function (req, res) {
    let { empId, empName, empMail, Salary } = req.body;
    let values = [ empName, empMail, Salary,empId];

    let sql = `UPDATE employees SET empName=?, empMail=?, Salary=? WHERE empId=?`;

    db.query(sql, values, function (err, result) {
        if(err) throw err;
        res.redirect('/listemployees');
    });
});




app.get('/deleteemployees', function (req, res) {
    let empId = req.query.empId;
    db.query("DELETE FROM employees WHERE empId=" + empId, function (err, result) {
        res.redirect('/listemployees');
    });
});


















app.get('/listcontactus', function (req, res) {
    db.query('SELECT * FROM contactus', function (err, result) {
        if (err) {
            console.error('Error querying the database:', err);
            return;
        }

        res.render('listcontactus', { result: result });
    });
});



















app.get('/listabout', function (req, res) {
    db.query('SELECT * FROM about', function (err, result) {
        if (err) {
            console.error('Error querying the database:', err);
            return;
        }

        if (req.headers.accept && req.headers.accept.includes("application/json")) {
            res.send(result);
        }
        else{
        res.render('listabout', { result: result });
        }
    });
});
app.get('/editabout', function (req, res) {
    let aboutid = req.query.aboutid;
    db.query("SELECT * FROM about WHERE aboutid=" + aboutid, function (err, testdata) {
        res.render('editabout', { about: testdata[0] });

    });
});

app.post('/editabout_submit', function (req, res) {
    let { aboutid, aboutus } = req.body;
    let values = [ aboutus,aboutid];

    let sql = `UPDATE about SET aboutus=? WHERE aboutid=?`;

    db.query(sql, values, function (err, result) {
        res.redirect('/listabout');
    });
});


app.listen(8000, function () { console.log("Server is running at port 8000"); });