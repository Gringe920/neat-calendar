import https from 'https';

const isProd = process.env.NODE_ENV === 'prod';

export function getMovieData(callback) {
    const prefix = isProd ? '' : 'https://cors-anywhere.herokuapp.com/';
    const getUrl = prefix + 'https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%B9%BF%E5%B7%9E';

    https.get(getUrl, (res) => {
        let moviesData = '';
        //获取页面数据
        res.on('data', (data) => {
            moviesData += data;
        });

        //获取数据结束
        res.on('end', () => {
            callback && callback(JSON.parse(moviesData));
        })


    })
};