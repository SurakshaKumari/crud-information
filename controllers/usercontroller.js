class usercontroller {
    static createDoc = (req,res) => {
        res.render("index")
    }
    static getAllDoc = (req,res) => {
        res.render("form")
    }
    static editDoc = (req,res) => {
        res.render("form")
    }
    static deletebyid = (req,res) => {
        res.redirect("/index")
    }

};
module.exports = usercontroller;