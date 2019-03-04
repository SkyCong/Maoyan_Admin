
import appMoviePublish from '@views/routes/app-movie-publish.html'

import { postMovieItem } from '@models/movie-model'

const render = (req, res, next) => {
    res.render(appMoviePublish)
    // 初始化日历插件
    $('#datepicker').date_input()
    bindEvents() // 绑定各种事件
}

function bindEvents () {
    $('#publish-form').submit(async function(e){
        e.preventDefault()
        let title = $('#item-title').val()
        let description = $('#item-description').val()
        let star = $('#item-star').val()
        let showTime = $('#datepicker').val()
        console.log(title, description, star, showTime)

        let data = await postMovieItem({
            title, description, star, showTime
        })
        console.log(data)

    })
}

export default {
    render
}