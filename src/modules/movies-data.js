import http from 'http';

export function getMovieData(callback){
    const getUrl ='https://cors-anywhere.herokuapp.com/'+'https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%B9%BF%E5%B7%9E';

    http.get(getUrl, (res) => {

        //获取页面数据
        res.on('data', (data) => {
            moviesData += data;
        });

        //获取数据结束
        res.on('end', () => {
            return JSON.parse(moviesData);
        })

        callback && callback(res);
    })
};