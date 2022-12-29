const controller = {};

controller.index = (req, res) => {
    res.send("Hola Express")
};
controller.home = (req, res) => {
    res.render('main',{layout:'home'});
    // res.render('home');

};

module.exports = controller;
