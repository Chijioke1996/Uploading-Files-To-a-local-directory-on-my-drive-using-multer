const express = require("express")
const multer = require("multer")
const path = require("path")
const ejs = require('ejs')
const port = 6003

// Initialize App
const app = express()

// Set EJS

app.set("view engine", "ejs")

// Set public folder
app.use(express.static("./public"))


// SET STORAGE ENGINE
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {

        // Error is set to null
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb)
    }
}).single("myPhoto")



// CHECK FILE TYPE

function checkFileType(file, cb) {
    // ALLOWED FILE TYPES
    const fileTypes = /jpeg|jpg|png|gif/

    // CHECK THE ALLOWED TYPE OF FILES TO SEE IF THEIR EXTENTIONS CORRESPONDS 
    const photoExtention = fileTypes.test(path.extname(file.originalname).toLowerCase())

    // CHECKING THE MIMETYPE OF THE UPLOADEDD IMAGE
    const mimetype = fileTypes.test(file.mimetype)

    if (mimetype && photoExtention) {
        return cb(null, true)
    }
    else {
        cb('Error: Images Only!')
    }
}

// ROUTES

app.get("/", (req, res) => {
    res.render("index")

})

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render('index', {
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.render('index', {
                    msg: 'Error: No File Selected!'
                });
            } else {
                res.render('index', {
                    msg: 'File Uploaded successfully!',
                    file: `uploads/${req.file.filename}`
                    
                })
                console.log(req.file);
            }
        }
    });
});




app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`App listening on port ${port}`);
    }
})



