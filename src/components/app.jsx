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
            movieData: ''
        }
    }

    componentDidMount() {
        getMovieData((respData) => {
            this.setState({
                movieData: respData
            })
        })
    }

    render() {
        const date = new Date();
        const weekArrIndex = ['日', '一', '二', '三', '四', '五', '六'];
        const lunarDate = lunarCalendar.solarToLunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
        const choseMovieData = this.state.movieData && this.state.movieData.subjects[1];
        return (
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
                {

                    choseMovieData &&
                    <div>
                        <div className="tip-content">
                            {}
                        </div>
                        <div className="movie-content">
                            <p className="title">《{choseMovieData.title}》</p>
                            <div className="level">
                                {/*<img src={STAR_FULL} alt="star" />
                                <img src={STAR_FULL} alt="star" />
                                <img src={STAR_HALF_FULL} alt="star" />*/}
                                  综合评分：
                                <span>{choseMovieData.rating.average}</span>
                            </div>
                            <p className="tip-text">
                                【本片于{choseMovieData.mainland_pubdate}上映】
                            </p>
                        </div>
                    </div>
                }


            </div>
        )
    }
}