const movieModel = require('../../models/movie')
const moment = require('moment')
// 处理影片列表获取
const getMovieItems = async (req, res, next) => {
    // 利用res或者req来进行路由中间件间的传参
    let data = await movieModel.getMovieItems()
    // 处理数据格式
    // 注意 item 不能直接改，_doc属性才是真正的数据
    res.responseData = data.map(item => {
        let state = (Date.now() - item.showTime) > 0 ? 'playing' : 'coming'
        let publishTime = moment(item.publishTime).format('YYYY-MM-DD')
        let showTime = moment(item.showTime).format('YYYY-MM-DD')
        return Object.assign({}, item._doc, {
            state, publishTime, showTime
        })
    })
    

    next('success') // 去响应 传参只能传一个
}

// 发布新电影
const postMovieItem = async (req, res, next) => {
    // title, star, description, showTime
    let { title, star, description, showTime } = req.body

    if ( title && star && description && showTime ) {
        try {
            showTime = new Date(moment(showTime)).getTime()
            let data = await movieModel.postMovieItem({
                title, star, description, showTime,
                publishTime: Date.now(),
                img: ''
            })
            next('success')
        } catch (e) {
            next('error')
        } 
    } else {
        next('miss param')
    }

    
}

module.exports = {
    getMovieItems,
    postMovieItem
}