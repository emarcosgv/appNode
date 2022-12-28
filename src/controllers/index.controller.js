const controller = {};

controller.index = (req, res) => {
    res.send("Hola Express")
};
controller.home = (req, res) => {
    res.render('home')
};

module.exports = controller;


//
// app.get('/', (req, res) => {
//     res.render('home');
// });
//
// app.listen(3000);