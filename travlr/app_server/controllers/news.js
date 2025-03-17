var fs = require('fs');
var newsData = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));
var latestNews = JSON.parse(fs.readFileSync('./data/latest_news.json', 'utf8'));
var vacationTips = JSON.parse(fs.readFileSync('./data/vacation_tips.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', { title: "Travlr Getaways", newsData, latestNews, vacationTips});
};

module.exports = {
    news
};