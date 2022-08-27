 
    const { ObjectId } = require('mongodb');
        const db = require('../connection');

        const getAllPayments = async function (req, res) {
        let data = await db.get().collection('payments').find().toArray()
        res.render('pages/allpayments',{data});
        }

        const getPaymentAddform = async function (req, res) {
        res.render('forms/addpayment');
        }

        const addPayment = async function (req, res) {
        let data = req.body
        await db.get().collection('payments').insertOne(data)
        res.render('pages/payment', { data })
        }

        const getPaymentEditform = async function (req, res) {
        let id = req.params.id
        let data = await db.get().collection('payments').findOne({ _id: ObjectId(id) })
        res.render('forms/editpayment', { data });
        }

        const editPayment = async function (req, res) {
        let newdata = req.body
        let query = { _id: ObjectId(req.body.id) }
        var newvalues = { $set: { name: newdata.name,} };
        await db.get().collection('payments').updateOne(query, newvalues)
        res.redirect(`/payments/${req.body.id}`)
        }

        const deletePayment = async function (req, res) {
        let id = req.params.id
        await db.get().collection('payments').deleteOne({ _id: ObjectId(id) })
        res.redirect('back')
        }

        const getPaymentById = async function (req, res) {
        let id = req.params.id
        let data = await db.get().collection('payments').findOne({ _id: ObjectId(id) })
        res.render('pages/payment', { data });
        }

        exports.getAllPayments = getAllPayments;
        exports.getPaymentAddform = getPaymentAddform;
        exports.addPayment = addPayment;
        exports.getPaymentEditform = getPaymentEditform;
        exports.editPayment = editPayment;
        exports.deletePayment = deletePayment;
        exports.getPaymentById = getPaymentById;
    