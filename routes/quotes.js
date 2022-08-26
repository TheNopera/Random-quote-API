const { default: axios } = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const router = express.Router();
const Fonts = require('../fonts')

Fonts.forEach(Fonts => {
    axios.get(Fonts.adress)
        .then(res => {
            const html = res.data;
            const $ = cheerio.load(html);

            $(".quoteText").each(function (){
                const quote = $(this).contents().first().text().trim();
                const author = $(this).children('span').text().replace(/\n/g,'');
                
                quotes.push({
                 quote, 
                 author
                })
             })
        })
})

const quotes = [];

// Get all
router.get('/', async (req, res) => {
    try {
        res.status(200).json(quotes);
    } catch (error) {
        res.status(500).json({message: err.message});
    }
})
// Get one random
router.get('/randomQuote',(req, res) => {
    try {
        res.status(200).json(quotes[Math.floor(Math.random() * quotes.length)]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

// Delete one

module.exports = router;