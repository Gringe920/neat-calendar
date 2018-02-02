import http from 'http';
import cheerio from 'cheerio';

const getUrl ='https://cors-anywhere.herokuapp.com/'+'http://wufazhuce.com/';

let moviesData = '';
http.get(getUrl, (res) => {
    let html = '';

    //获取页面数据
    res.on('data', (data) => {
        html += data;
    });

    //获取数据结束
    res.on('end', () => {
        //moviesData = html;
        const hotGalleryMovieData = filterHotGalleryMovieData(html);
    })
})

//过滤信息
function filterHotGalleryMovieData(html) {
    if(html){
        const $ = cheerio.load(html);
        const hotGalleryList = $('#left-panel');
        hotGalleryList.find('li').each((item) => {
            const movie = $(this);
        })
        
    }else{
        console.log('暂时没数据哦~');
    }
}


export default moviesData;