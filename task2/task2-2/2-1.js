// 实现nav中一个元素的下拉菜单
const about=document.getElementById("about");
const child_opts=document.getElementsByClassName("child-opts");
(function drop () {
    about.addEventListener("mouseover", function(){
        child_opts[0].style.display = "block"
    },false);
    about.addEventListener("mouseout", function(){
        child_opts[0].style.display = "none"
    },false);
})();
// 实现轮播图
const ro_items = document.getElementsByClassName("ro-items");
const ro_indicator = document.getElementsByClassName("ro-indicator");
const ro_content = document.getElementsByClassName("ro-content");
(function rotation () {
    var handle = setInterval(add, 2000);
    for(let i=0;i<ro_indicator.length;i++){
        ro_indicator[i].addEventListener("click",function(){
            // clearInterval(handle);
            deleteActive(i);
            clearInterval(handle);
            ro_items[0].style.left= -960*i + "px";
            handle = setInterval(add, 2000);
        },false);
    }
    function endTransition () {
        ro_items[0].style.transition = 'none';
        ro_items[0].style.left = '0';
    }
    function set() {
        // console.log('aa', ro_items[0].style.transition);
        ro_items[0].style.transition = 'none';
        ro_items[0].style.left = '0';
        // setTimeout(function(){
        //     ro_items[0].style.transition = 'left .5s ease';
        // }, 0);
    }
    // 到第三章之后2s，到第一张，怎样去掉
    function add() {
        let beforeMove = parseInt(getComputedStyle(ro_items[0], null).left);
        // if (beforeMove === 0) {
            ro_items[0].style.transition = 'left .5s ease';
        // }
        let afterMove = beforeMove - 960;
        deleteActive(Math.abs(afterMove/960)%3);
        ro_items[0].style.left = afterMove + 'px';
        if (afterMove === -2880) {
            setTimeout(set, 500);
        }
    }
    
    function deleteActive (item) {
        for (let i=0;i<ro_indicator.length;i++) {
            if (ro_indicator[i].classList.contains("ro-indicator-active")) {
                ro_indicator[i].className="ro-indicator";
            }
        }
        ro_indicator[item].classList.add("ro-indicator-active");
    }
})();

