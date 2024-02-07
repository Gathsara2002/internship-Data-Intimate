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
                    console.log(query,values)
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

    searchProduct: async function (req, res, next) {

        try {

            const id = req.params.id;
            const product = await model.find({id: id});
            res.status(200).json(product);

        } catch (error) {
            res.status(500).json({
                error: "Something went wrong ! " + error
            });
        }
    },

    deleteProduct: async function (req, res, next) {

        try {

            const id = req.params.id;
            const product = await model.deleteOne({id: id});

            if (product.deletedCount === 0) {
                return res.status(404).json({
                    error: "Product not found !"
                });
            }

            res.status(200).json(product);

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

            const updatedProduct = await model.findOneAndUpdate({
                    id: id,
                }, body,
                {new: true}
            );

            if (!updatedProduct) {
                return res.status(404).json({
                    error: "Product not found !"
                });
            }

            res.status(200).json(updatedProduct);

        } catch (error) {
            res.status(500).json({
                error: "Something went wrong ! " + error
            });
        }
    }

}

module.exports = ProductsController;