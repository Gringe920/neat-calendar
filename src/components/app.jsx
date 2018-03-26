import React from 'react';
//import './styles/reset.scss';
import './styles/index';

import lunarCalendar from 'lunar-calendar';
import { getMovieData } from './../modules/movies-data';
import {STAR_FULL, STAR_HALF_FULL} from './../modules/const';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieData: '',
            isPcNav: ''
        }
    }

    componentDidMount() {
        getMovieData((respData) => {
            this.setState({
                movieData: respData
            })
        })
        this.setState({
            isPcNav: !(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
        })
        const that = this;
        window.addEventListener('resize',function(){
            that.setState({
                isPcNav: !(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
            })
        });
        
    }

    render() {
        const date = new Date();
        const weekArrIndex = ['日', '一', '二', '三', '四', '五', '六'];
        const lunarDate = lunarCalendar.solarToLunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
        const choseMovieData = this.state.movieData && this.state.movieData.subjects[1];
        return (
            <div>
                {
                    this.state.isPcNav ? 
                    <div className="pc-container clearfix">
                        <div className="date left">
                            {date.getDate()}
                        </div>
                        <div className="vertical-line">
                        </div>
                        <div className="main-container right">
                            <div className="content text-center">
                                <p>{date.getFullYear()}年{date.getMonth() + 1}月{date.getDate()}日</p>
                                <p>{lunarDate.lunarMonthName}{lunarDate.lunarDayName}</p>
                                <p>星期{weekArrIndex[date.getDay()]}</p>
                            </div>
                            <div className="movie-content">
                                <p className="title">院线热映：</p>
                                <p className="title">{choseMovieData.title ? `《${choseMovieData.title}》` : '----'}</p>
                                <p className="title">主演：{choseMovieData.directors ? choseMovieData.directors[0].name : '----'}</p>
                                <p className="level">评分：{choseMovieData.rating ? choseMovieData.rating.average : '---'}</p>
                                {
                                    choseMovieData.images && 
                                    <img className="movie-photo" src={choseMovieData.images.small} alt=""/>
                                }
                            </div>
                        </div>
                    </div> :
                    <div className="container">
                        <div className="top-date clearfix">
                            <div className="left-container left">
                                {date.getMonth() + 1}月{date.getDate()}日<br />
                                星期{weekArrIndex[date.getDay()]}
                            </div>
                            <div className="right-container right">
                                农历<br />
                                {lunarDate.lunarMonthName}{lunarDate.lunarDayName}
                            </div>
                        </div>
                        <div className="center-date text-center">
                            {date.getDate()}
                            <hr className="hr-horizontal" />
                        </div>
                        <div>
                            <div className="movie-content">
                                <p className="title">院线热映：</p>
                                <p className="title">{choseMovieData.title ? `《${choseMovieData.title}》` : '----'}</p>
                                <p className="title">主演：{choseMovieData.directors ? choseMovieData.directors[0].name : '----'}</p>
                                <p className="level">评分：{choseMovieData.rating ? choseMovieData.rating.average : '---'}</p>
                                {
                                    choseMovieData.images && 
                                    <img className="movie-photo" src={choseMovieData.images.small} alt=""/>
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
            
        )
    }
}