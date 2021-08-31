const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require("cors");
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const saltRounds = 10;

const jwt = require('jsonwebtoken');
const { access } = require('fs');


const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    key: "userId",
    secret: '343b88b40d4464bb66d2a',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    }
}));

let db = new sqlite3.Database('../users1.db3', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the users database.');
});

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    bcrypt.hash(password, saltRounds, (err, hash) => {

        if (err) {
            console.log(err)
        }

        db.all("INSERT INTO users1 (username, password) VALUES (?,?)",
            [username, hash],
            (err, result) => {
                console.log(err);

                if (res) {
                    res.send({ message: "Account Created!" })
                }
            })
    })
})

const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token']

    if (!token) {
        res.send("Not authenticated")
    } else {
        jwt.verify(token, "rocco022316", (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "you failed to authenticate" })
            } else {
                req.userId = decoded.id;
                next();
            }
        });
    }
};

app.get('/isUserAuth', verifyJWT, (req, res) => {
    res.send("Successful authentication")
})

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })
    } else {
        res.send({ loggedIn: false })
    }
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.all("SELECT * FROM users1 WHERE username = ?;",
        [username],
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        const id = result[0].id
                        const token = jwt.sign({ id }, "rocco022316", {
                            expiresIn: 300,
                        })
                        req.session.user = result;

                        res.json({ auth: true, token: token, result: result })
                    } else {
                        // res.send({ message: "Wrong username/password combination" 
                        res.json({ auth: false, message: "Wrong username/password combination" });
                    }
                })
            } else {
                res.json({ auth: false, message: "This user does not exist" });
                // res.send({ message: "User does not exist" });
            }
        }
    );
});

app.post('/donate', (req, res) => {
    const name = req.body.name;
    const amount = req.body.amount;
    const date = req.body.date;
    const organization = req.body.organization;

    db.all("INSERT INTO donation (name, amount, date, organization) VALUES (?,?,?,?)",

        [name, amount, date, organization],
        (err) => {
            console.log(err);

            if (res) {
                res.send({ message: "Thank you for your donation!" })
            }
        })
})

app.post('/adopt', (req, res) => {
    const dogName = req.body.dogName;
    const breed = req.body.breed;
    const age = req.body.age;
    const description = req.body.description;
    const type = req.body.type;

    db.all("INSERT INTO posts (dogName, breed, age, description, type) VALUES (?,?,?,?,?)",
        [dogName, breed, age, description, type],
        (err) => {
            console.log(err);

            if (res) {
                res.send({ message: "Thank you for your post!" })
            }
        })
})

app.listen(5000, () => {
    console.log('running server');
});