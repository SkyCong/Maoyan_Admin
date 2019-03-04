const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true });

// 电影item Schema （规定文档的格式）
var movieItemSchema = new mongoose.Schema({
    img: String,
    title:   String,
    star: String,
    showTime: Number,
    publishTime: Number,
    description: String
});
// 单数会自动加s （集合）
var Items = mongoose.model('item', movieItemSchema);



// 获取电影信息
const getMovieItems =  () => {
    return Items.find({}).exec() 
}

// 发布新电影
const postMovieItem =  (params) => {
    return Items.insertMany(params)
}

module.exports = { 
    getMovieItems,
    postMovieItem
}

// id , title, img, publishTime, showTime, description