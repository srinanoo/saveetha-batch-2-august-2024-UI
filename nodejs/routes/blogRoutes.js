// const express = require('express');
// const router = express.Router();

const router = require('express').Router();

router.get("/getAllBlogPosts", (req, res) => {
    let qry = req.query;
    res.send(`GET ROUTE : ${qry.id}, ${qry.name}`);
});
router.post("/createBlogPost", (req, res) => {
    let qry = req.body;
    res.send(`POST ROUTE : ${qry.id}, ${qry.name}`);
});
router.put("/updateBlogPost", (req, res) => {
    let qry = req.body;
    res.send(`PUT ROUTE : ${qry.id}, ${qry.title}, ${qry.description}, ${qry.active}`);
});
router.delete("/deleteBlogPost", (req, res) => {
    res.send(`DELETE ROUTE : ${req.params.id}, ${req.params.name}`);
});

module.exports = router;