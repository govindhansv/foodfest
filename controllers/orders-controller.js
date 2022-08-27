 
    const { ObjectId } = require('mongodb');
        const db = require('../connection');

        const getAllOrders = async function (req, res) {
        let data = await db.get().collection('orders').find().toArray()
        res.render('pages/allorders',{data});
        }

        const getOrderAddform = async function (req, res) {
        res.render('forms/addorder');
        }

        const addOrder = async function (req, res) {
        let data = req.body
        await db.get().collection('orders').insertOne(data)
        res.render('pages/order', { data })
        }

        const getOrderEditform = async function (req, res) {
        let id = req.params.id
        let data = await db.get().collection('orders').findOne({ _id: ObjectId(id) })
        res.render('forms/editorder', { data });
        }

        const editOrder = async function (req, res) {
        let newdata = req.body
        let query = { _id: ObjectId(req.body.id) }
        var newvalues = { $set: { name: newdata.name,} };
        await db.get().collection('orders').updateOne(query, newvalues)
        res.redirect(`/orders/${req.body.id}`)
        }

        const deleteOrder = async function (req, res) {
        let id = req.params.id
        await db.get().collection('orders').deleteOne({ _id: ObjectId(id) })
        res.redirect('back')
        }

        const getOrderById = async function (req, res) {
        let id = req.params.id
        let data = await db.get().collection('orders').findOne({ _id: ObjectId(id) })
        res.render('pages/order', { data });
        }

        exports.getAllOrders = getAllOrders;
        exports.getOrderAddform = getOrderAddform;
        exports.addOrder = addOrder;
        exports.getOrderEditform = getOrderEditform;
        exports.editOrder = editOrder;
        exports.deleteOrder = deleteOrder;
        exports.getOrderById = getOrderById;
    