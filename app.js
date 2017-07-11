var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/fallinlovewithbanff/:thing', function (req, res) {
    var thing = req.params.thing;
    res.render('love', {
        thingVar: thing
    });
})

app.get('/posts', function (req, res) {
    var posts = [{
            title: 'post1',
            author: 'suzy'
        },
        {
            title: 'post2',
            author: 'suzan'
        },
        {
            title: 'post3',
            author: 'Julia'
        }
    ];
    res.render('posts', {
        posts: posts
    })
});

// friends 
var friends = ['tony', 'thea', 'suzan', 'julia'];
app.get('/friends', function (req, res) {

    res.render('friends', {
        friends: friends
    });
});

app.post('/addfriend', function (req, res) {
    console.log(req.body);
    friends.push(req.body.newfriend);
    res.redirect('friends')
});

var port = 3000;
app.listen(port, function () {
    console.log('Intermediate Express App is started!')
})