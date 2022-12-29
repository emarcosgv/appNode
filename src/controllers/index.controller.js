const controller = {};

controller.index = (req, res) => {
    res.send("Hola Express")
};
controller.home = (req, res) => {
    res.render('main',{layout:'home'});
};

module.exports = controller;
