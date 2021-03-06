import React from 'react';
//import './styles/reset.scss';
import './styles/index';

import lunarCalendar from 'lunar-calendar';
export default class App extends React.Component{
    contructor(props){

    }

    render(){
        const date = new Date();
        const weekArr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        const lunarDate = lunarCalendar.solarToLunar(date.getFullYear(), date.getMonth() + 1, date.getDate())
        return(
            <div className="container">
                <div className="top-date clearfix">
                     <div className="left-container left">
                        {date.getMonth() + 1}月{date.getDate()}日<br/>
                        {weekArr[date.getDay()]}
                     </div>
                     <div className="right-container right">
                        农历<br/>
                        {lunarDate.lunarMonthName}月{lunarDate.lunarDayName}
                     </div>
                </div>
                <div className="center-date text-center">
                    {date.getDate()}
                    <hr className="hr-horizontal"/>
                </div>
                <div className="tip-content">
                    如果我不坚持我的信仰，我该如何活下去。
                </div>
                <div className="movie-content">
                    <p className="title">《神秘巨星》</p>
                    <div className="level">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAY1BMVEUAAAD/zgD/zgD/0AD/zwD/zgD/zwD/zgD/zgD/0AD/zgD/zgD/zgD/zgD/zgD/zgD/zgD/zgD/zwD/zgD/0AD/1gD/zgD/2wD/zgD/zgD/0AD/0QD/0AD/1AD/zgD/zwD/zQBo79T5AAAAIHRSTlMA/agxouV8c1wp7LCMgvbw2MpkViQOlwfRTUg3GxS4bVgWnCcAAAF7SURBVFjD1NDtCoJAEIXh2Z31o9RKoiQkOfd/lYWwrZaCnvnV838OLyP/oCtLMfJAEJMeb71YDHgbxEAxUuFVGFXmCEAtEcYMdXHCKR8RVXyEMcNjwgvh4DDhDmxE4rkIY0bAl0BG8BnPxwU/Lo+nbHDry8a3Z6w4t74p+9vKrV7z0B6xybEN+VVnS1plIGSDSpSBlMWFzoF06uJGDVIjH3dQ7pJwHbXM1PRC0tB/SHLsksuCAjsUsqigF5JXu/WWgjAQQwH0RvrQQad1Or5Kxbv/VQrC0Fo01wV4PkPITxKSh/En9sBXyUjNEhxbo2RbQNTQFYREIUEKdAVoHV0dpInCBGWkMEJp9WAqFYUKypHCEUqkECFkShm+G6UbfA2lRv42K3XNlQ18V765jsC4jsFnXOgHvAw9FwyuHWd1AopUc7aDZ2AR2gsWLm1gMcBzKCvdnLByarr5CMmGxP0dH9z3UbSknHg7T/hiOptctNzHTXYTqtBn/P1pT07QwU9ISJa1AAAAAElFTkSuQmCC" alt="star"/>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAY1BMVEUAAAD/zgD/zgD/0AD/zwD/zgD/zwD/zgD/zgD/0AD/zgD/zgD/zgD/zgD/zgD/zgD/zgD/zgD/zwD/zgD/0AD/1gD/zgD/2wD/zgD/zgD/0AD/0QD/0AD/1AD/zgD/zwD/zQBo79T5AAAAIHRSTlMA/agxouV8c1wp7LCMgvbw2MpkViQOlwfRTUg3GxS4bVgWnCcAAAF7SURBVFjD1NDtCoJAEIXh2Z31o9RKoiQkOfd/lYWwrZaCnvnV838OLyP/oCtLMfJAEJMeb71YDHgbxEAxUuFVGFXmCEAtEcYMdXHCKR8RVXyEMcNjwgvh4DDhDmxE4rkIY0bAl0BG8BnPxwU/Lo+nbHDry8a3Z6w4t74p+9vKrV7z0B6xybEN+VVnS1plIGSDSpSBlMWFzoF06uJGDVIjH3dQ7pJwHbXM1PRC0tB/SHLsksuCAjsUsqigF5JXu/WWgjAQQwH0RvrQQad1Or5Kxbv/VQrC0Fo01wV4PkPITxKSh/En9sBXyUjNEhxbo2RbQNTQFYREIUEKdAVoHV0dpInCBGWkMEJp9WAqFYUKypHCEUqkECFkShm+G6UbfA2lRv42K3XNlQ18V765jsC4jsFnXOgHvAw9FwyuHWd1AopUc7aDZ2AR2gsWLm1gMcBzKCvdnLByarr5CMmGxP0dH9z3UbSknHg7T/hiOptctNzHTXYTqtBn/P1pT07QwU9ISJa1AAAAAElFTkSuQmCC" alt="star"/>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAABOFBMVEUAAAD/wgD/ugCQkJCXl5eRkZGRkZGXlpCVlZWWlY7+xgGRkZGRkZGRkZGRkZGSkpKVlZWXl5e/rWqRkZGRkZGQkJCRkZGRkZGQkJCRkZHXtDWRkZGRkZGRkZHywRb8ugPxwhLvvhX0uQ/juyTyuRDoth7ftSrWtzXotR2RkZGRkZHntiDVszbOsUOTk5OWlpb3xgr7xgX/uQDvwBT2vQvutBfjtiTmvCLatjHVszXttxfcuS/buTHrthzVtTXWtTbLr0PXtjaRkZHlsiLksyXAqVLUsjr5wwbIqkfJrk31vBHpuiCTk5P5vgr/xwD/1QD7zAb4ygn6uwb5xAjyvRHtuhbMr0PksyHwvxLWsjbywBPAqVbgsSrTtDKiooD/vAD/vwD/xAD/xgD/wQD/yQD/yAD/zAD/ywAa+RRrAAAAX3RSTlMA/viCEfPsKBc2/uHYfF1WIg0G59HLxrmmoZ6JcGQc/v378u3t6d3AtayWal1USxsT/Pn18+rk4dTS0cjDwbSppZWQhnhyZlBJQTwyMSkiCf79/PXdw6+ijIh6ZWIpHmLgCRcAAAKCSURBVFjD7ZdpV9pAFIZvSAj7voOAIhWhVLRabV1ata22bt33JYGw/P9/4CAhM0lgriafPMfn23x5zjv3Ju9J4F6wvnpQcal4pKq1D64MJ6qqKq9dhiBsJV0Y2mODgsTAQxBHzbnhycSgKG8cK7aniprjEILqNsa2ZijqzgzvBE03EB47UqyQexiOuuMQ7mKsaBpzEeXZ3Q3vBXMK5a+DSdAUc2LgIYiDTVH13Ulw/mtprFA1JsXT8JofbsG/k+LezmawSxgr2It4YjnZm8mL0YAEM6m0j/Z3NjcGg16v173BehEPAEiBqJjPeOVsIRK7SJhehuVPo9GoT2AU3ek8FarQ8RNTM+1N5QIwZXE4HN4oBlQhdDX6dLIKxlROgU7yI1EwKXr0IvYULJLXqMTGkMAYbqlIZEV62CMp9JvQENZx2jJkW+xxX0+BbMRkyByDiQYdZ1eHfxF/ugQWGv0xxEDQL8LZCDGIYOOloTBSzFf4wxF6YByWcWrzL9IJL8BMXlHF2DE/RTxEDTYHNdhT8AyUoj4M7lJ9oTIAz0ENlr7wGIYocDnqm2ZhV/hSMUAoIk9ntgwoi9y+SMiAs8TtC8mLG/4H+X2R6qCKP0hf5NZQxSHSF8cLqOIFspFyAVUsI30RyOALQfoiga7EF8T6IhRHFG+xvsBXcoj2RSmCLQTti2geW4i5L4TVy8qPzybFRRp7ydi+EL5dTX5rqowiiawkEGRmsXtufDockE+U6SHs4y+ElufXM2C43K0W9G02+Z3zfaqon4KFs4jc8gNBFLmK5xPF1swPVakklySAWBNXfPk970+q05IjCZH/orWDvY2fvD/CeF5GxglXp+vwwAPX78Wg0D6c6pIAAAAASUVORK5CYII=" alt="star"/>
                        <span>4.7</span>
                    </div>
                    <p className="tip-text">
                        【本片于2018年1月30号上映，由阿米尔.汗主演】
                    </p>
                </div>
            </div>
        )
    }
}