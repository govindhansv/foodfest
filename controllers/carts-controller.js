 
    const { ObjectId } = require('mongodb');
        const db = require('../connection');

        const getAllCarts = async function (req, res) {
        let data = await db.get().collection('carts').find().toArray()
        res.render('pages/allcarts',{data});
        }

        const getCartAddform = async function (req, res) {
        res.render('forms/addcart');
        }

        const addCart = async function (req, res) {
        let data = req.body
        await db.get().collection('carts').insertOne(data)
        res.render('pages/cart', { data })
        }

        const getCartEditform = async function (req, res) {
        let id = req.params.id
        let data = await db.get().collection('carts').findOne({ _id: ObjectId(id) })
        res.render('forms/editcart', { data });
        }

        const editCart = async function (req, res) {
        let newdata = req.body
        let query = { _id: ObjectId(req.body.id) }
        var newvalues = { $set: { name: newdata.name,} };
        await db.get().collection('carts').updateOne(query, newvalues)
        res.redirect(`/carts/${req.body.id}`)
        }

        const deleteCart = async function (req, res) {
        let id = req.params.id
        await db.get().collection('carts').deleteOne({ _id: ObjectId(id) })
        res.redirect('back')
        }

        const getCartById = async function (req, res) {
        let id = req.params.id
        let data = await db.get().collection('carts').findOne({ _id: ObjectId(id) })
        res.render('pages/cart', { data });
        }

        exports.getAllCarts = getAllCarts;
        exports.getCartAddform = getCartAddform;
        exports.addCart = addCart;
        exports.getCartEditform = getCartEditform;
        exports.editCart = editCart;
        exports.deleteCart = deleteCart;
        exports.getCartById = getCartById;
    