var Todos = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/setupTodos', function(req, res){
        var starterTodos = [
            {
                username : "user1",
                todo:"Buy Milk",
                isDone:false,
                hasAttachment:false
            },
            {
                username : "user2",
                todo:"Car wash",
                isDone:true,
                hasAttachment:false
            },
            {
                username : "user3",
                todo:"Pay Bills",
                isDone:false,
                hasAttachment:false
            }
        ];

        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });
    });
}