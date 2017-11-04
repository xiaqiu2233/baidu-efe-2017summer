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
const ro_pic = document.getElementsByClassName("ro-pic");
(function rotation () {
    var handle = setInterval(add, 2000);
    for(let i=0;i<ro_indicator.length;i++){
        ro_indicator[i].addEventListener("click",function(){
            clearInterval(handle);
            deleteActive(i);
            ro_items[0].style.left= -960*i + "px";
            ro_content[i].style.opacity = 1;
            handle = setInterval(add, 2000);
        },false);
    }
    function add() {
        let left_val = parseInt(getComputedStyle(ro_items[0], null).left);
        switch (left_val) {
            case 0:
                deleteActive(1);
                ro_items[0].style.left= left_val - 960 + "px";
                ro_content[0].style.opacity = 0;
                ro_content[1].style.opacity = 1;
                break;
            case -960:
                deleteActive(2);
                ro_items[0].style.left= left_val - 960 + "px";
                ro_content[1].style.opacity = 0;
                ro_content[2].style.opacity = 1;
                break;
            case -1920:
                deleteActive(0);
                ro_items[0].style.left = 0;
                ro_content[2].style.opacity = 0;
                ro_content[0].style.opacity = 1;
                break;
            default:
                break;
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
    function removeRoContent () {

    }
})();

const tab = document.getElementsByClassName("tab");
const tab_content = document.getElementsByClassName("content");
// 实现tab切换
(function tabSwitch () {
    for (let i=0;i<tab.length;i++){
        tab[i].addEventListener("click", () => {
            switchActive(i);
        }, false);
    }
    function switchActive(i){
       for(let j=0;j<tab.length;j++){
            if (tab[j].classList.contains("active-tab")) {
                tab[j].className="tab";
                tab_content[j].style.display = "none";
            }
       }
       tab[i].classList.add("active-tab");
       tab_content[i].style.display = "block";
    }
})();
// 实现下拉框
const form = document.getElementsByClassName("form-item")[0];
const select = document.getElementsByClassName("select");
// const ul_select = document.getElementsByClassName("ul-select");
const body = document.getElementsByTagName("body")[0];
const country = document.getElementById("country");
const li_country = country.getElementsByTagName("li");
const country_name = document.getElementById("country-name");
const city = document.getElementById("city");
const li_city = city.getElementsByTagName("li");
const city_name = document.getElementById("city-name");
const list = {
    "无": ['无'],
    "中国": ['北京','上海','南京'],
    "美国": ['纽约','华盛顿'],
    "英国": ['伦敦','爱丁堡']
};
(function dropDowndMenu () {
    form.addEventListener("click", clickForm, false);
    function clickForm(e) {
        switch (e.target.id) {
            case "country-name": 
                country.classList.remove("dn");
                break;
            case "city-name":
                city.classList.remove("dn");
                break;
            default: 
                break;
        }
        switch (e.target.className){
            case "li-country":
                country_name.value = e.target.textContent;
                city_name.value = list[country_name.value][0];
                let cityContent="";
                city.innerHTML = cityContent;
                for(let item of list[country_name.value]) {
                    cityContent+=`<li class="li-city">${item}</li>`;
                }
                city.innerHTML = cityContent;
                break;
            case "li-city":
                city_name.value = e.target.textContent;
                break;
        }
    }
    body.addEventListener("click", function(){
        country.classList.add("dn");
        city.classList.add("dn");
    },true);
})()