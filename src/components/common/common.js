(function (doc, win) {
    var dpr = win.devicePixelRatio || 1; // 逻辑像素和物理像素比
    //   被iframe引用时，禁止缩放
    dpr = win.top === win.self ? dpr : 1
    var htmlDom = doc.documentElement //获取html
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function () {
        var htmlWidth = doc.documentElement.clientWidth || doc.body.clientWidth //获取屏幕宽度
        // console.log('htmlWidth', htmlWidth, doc.documentElement.clientWidth, doc.body.clientWidth)
        htmlDom.style.fontSize = 100 * (htmlWidth / 640) + 'px'; //设置html字体大小为屏幕的十分之一
        htmlDom.setAttribute('data-dpr', dpr);
    }
    win.addEventListener(resizeEvt, recalc, false);
    win.addEventListener('pageshow', recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
