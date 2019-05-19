window.onload = function () {

    // 获取节点
    var itemNode = document.querySelector(".item");
    var itemLi = document.querySelectorAll(".item > li");

    // 控制点
    var dotLi = document.querySelectorAll(".dot > li");

    // 左右控制点
    var prevNode = document.querySelector(".prev");
    var nextNode = document.querySelector(".next");

    // item 的索引
    var index = 0;

    // 自动播放的索引
    var autoIndex = 0;

    // 自动播放的定时器
    var timer = 0;

    // 上一屏
    prevNode.onclick = function () {
        clearInterval(timer);
        index--;
        if (index < 0) {
            index = itemLi.length - 1;
        }
        itemNode.style.left = index * -600 + "px";
        dotCut(index);
    }

    // 下一屏
    nextNode.onclick = function () {
        clearInterval(timer);
        index++;
        if (index > itemLi.length - 1) {
            index = 0;
        }
        itemNode.style.left = index * -600 + "px";
        dotCut(index);
    }

    // 控制点的切换
    function dotCut(index) {
        // 清除所有样式
        for (var i = 0; i < dotLi.length; i++) {

            dotLi[i].classList.remove("active");
        }
        // 把当前屏的样式设置为选中状态
        dotLi[index].classList.add("active");
    }

    autoplay();
    // 自动播放
    function autoplay() {
        clearInterval(timer);
        timer = setInterval(function () {
            autoIndex++;
            // 同步 index
            index = autoIndex;
            if (autoIndex > itemLi.length - 1) {
                autoIndex = 0;
            }
            itemNode.style.left = autoIndex * -600 + "px";
            dotCut(autoIndex);
        }, 1000);
    }


    // 鼠标移动上去时，清除定时器
    itemNode.onmouseenter = function () {
        clearInterval(timer);
    }

    // 鼠标移开时 继续自动播
    itemNode.onmouseleave = function () {
        autoplay();
    }

}