'use strict';
const zcatal = require('zcatalyst-sdk-node');
const express = require('express');

const expressapp = express();

expressapp.use(express.json())
expressapp.use(express.urlencoded({ extended: true }))

expressapp.get('/getdata', async (req, res) => {
    const catalystapp = zcatal.initialize(req);
    const ds = catalystapp.datastore();

    const table = ds.table('Expenses');
    const rows = await table.getAllRows();
    res.send(rows);
});
expressapp.post('/insert', async (req, res) => {
    const catalystapp = zcatal.initialize(req);
    const ds = catalystapp.datastore();

    const table = ds.table('Expenses')

    const body_data = req.body
    console.log(body_data)
    await table.insertRow(body_data).catch(err => console.log(err))

    res.send("Inserted Successfully")
});
expressapp.put('/update', async (req, res) => {
    const catalystapp = zcatal.initialize(req);
    const ds = catalystapp.datastore();

    const table = ds.table('Expenses')

    const body_data = req.body
    console.log("body_data", body_data)
    var respdata = {};

    // check for data existance
    const zcql = catalystapp.zcql();
    let extCount = await zcql.executeZCQLQuery(`Select count(ROWID) from Expenses where ROWID=${body_data.ROWID}`).catch((err) => {
        console.log("error on existance check", err);
    });

    console.log("extCount",extCount);
    

    await table.updateRow(body_data).then((resp) => {
        console.log("data update", resp);
        respdata = resp;
    }).catch(err => {
        console.log("update error", err);
        respdata = err
    })
    
    console.log(respdata)

    res.json(respdata)
});
module.exports = expressapp;
