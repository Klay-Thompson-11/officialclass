const box = document.querySelector('.body');
const lis = box.querySelectorAll('li');
const head = document.querySelector('.head');
/*
    
    findIndex(callback)
        找到回调函数中return后符合条件的索引值，找不到为-1
    callback(数组每项,索引,all)


    问题:
        当滚轮的时候，window.onscroll触发的次数非常多
        如果是触底去请求服务器，那么会在同一时间请求若干次
        这样大大增加了服务器的压力，也降低了用户的体验


        解决这个问题的方案有2个
        第一个:（停下来才触发）  防抖
            事件触发的频率很高，但是只要停下来再加载
        第二个:（降频率） 节流
            每隔固定时间再加载图片
*/

function minEle(lis){
    let ary = [...lis].map(ele=>ele.scrollHeight); //ary就是每个li的被内容撑开的高度
    let min = Math.min(...ary); //找到li高度最短的值
    let index = ary.findIndex(item=>item === min); //根据最短的值，对应的索引，有了这个索引就能对应li
    return {
        ele:lis[index],
        index,
        min
    }  //返回了3个值  ele:最短的元素,index:最短的索引,min:最短的值
}
//防抖
function debounce(cb,time){
    let timer;
    return function(...arg){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            cb.call(this,...arg);
        }, time);
    }
}

//节流
function throttling(cb,time){
    let prevtime = 0,
    timer;
    return function(...arg){
        let nowTime = +new Date;
        if(nowTime - prevtime > time){
            cb.call(this,...arg);
        }else{
            clearInterval(timer);
            timer = setTimeout(() => {
                if(+new Date - prevtime > time){
                    cb.call(this,...arg);
                }
            }, time);
        }
        prevtime = nowTime;
    }
}

function render(){
    fetch('./data.json')
    .then(d=>d.json())
    .then(data=>{
        data.forEach((item,i)=>{//在循环数组的过程当中去计算每个li的高度，找到最短的li
            let {ele} = minEle(lis);
            //怼结构
            let div = document.createElement('div');
            div.className = 'img_box';
            let img = document.createElement('img');
            img.src = item.pic;
            
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            p1.className = 'desc';
            p1.innerText = item.desc;
            p2.className = 'author';
            p2.innerText = item.author;
            div.append(img);
            div.append(p1);
            div.append(p2);
            ele.append(div);
            setTimeout(() => {
                img.style.opacity = 1;
            });
        });
    });
}
render();


//滚轮的时候判断触底
let iH = window.innerHeight; //可视区的高度
window.onscroll = debounce(fn,200);

function fn(){
    //判断ul的高度是否比可视区要大，如果小于可视区高度，那么就终止加载代码执行
    if(box.scrollHeight < iH)return;

    let {min} = minEle(lis);  //最短的距离
    let scroll = window.pageYOffset; //滚动条的距离
  
    if(iH + scroll >= min+head.offsetHeight){
        render();
    }

}