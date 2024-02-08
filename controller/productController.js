const db = require('../db/DBConnection');

const ProductsController = {

    getAllProducts: function (req, res, next) {
        try {

            const query = "SELECT * FROM Products";
            const allProducts = db.query(query, (err, result, fields) => {
                if (err) {
                    console.log("Error - " + err);
                } else {
                    console.log(result);
                    res.status(200).json(result);
                }
            });

        } catch (error) {
            res.status(500).json({
                error: "Something went wrong ! " + error
            });
        }
    },

    saveProduct: function (req, res, next) {

        try {

            const body = req.body;
            const query = "INSERT INTO Products (id, name, price) VALUES (?)";
            const values = [body.id, body.name, body.price];
            const product = db.query(query, [values], (err, result, fields) => {
                if (err) {
                    console.log("Error - " + err);
                } else {
                    console.log(result);
                    res.status(200).json(result);
                }
            });

        } catch (error) {
            res.status(500).json({
                error: "Something went wrong ! " + error
            });
        }
    },

    searchProduct: function (req, res, next) {

        try {

            const id = req.params.id;
            const query = "SELECT * FROM Products WHERE id= ? ";
            const product = db.query(query, [id], (err, result, fields) => {
                if (err) {
                    console.log("Error - " + err);
                } else {
                    console.log(result);
                    res.status(200).json(result);
                }
            });

        } catch (error) {
            res.status(500).json({
                error: "Something went wrong ! " + error
            });
        }
    },

    deleteProduct: function (req, res, next) {

        try {

            const id = req.params.id;
            const query = "DELETE FROM Products WHERE id=?"
            const product = db.query(query, [id], (err, result, fields) => {
                if (err) {
                    console.log("Error - " + err);
                } else {
                    console.log(result);
                    res.status(200).json(result);
                }
            });

        } catch (error) {
            res.status(500).json({
                error: "Something went wrong ! " + error
            });
        }
    },

    updateProduct: async function (req, res, next) {

        try {

            const id = req.params.id;
            const body = req.body;

            const query = "UPDATE Products set name=?,price=? WHERE id=?";
            const updatedProduct = db.query(query, [body.name, body.price, id], (err, result, fields) => {
                if (err) {
                    console.log("Error - " + err);
                } else {
                    console.log(result);
                    res.status(200).json(result);
                }
            });

        } catch (error) {
            res.status(500).json({
                error: "Something went wrong ! " + error
            });
        }
    }

}

module.exports = ProductsController;