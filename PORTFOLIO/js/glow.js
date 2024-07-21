document.querySelectorAll('.box-e').forEach(item => {
    item.onmousemove =e =>{
        item.style.setProperty('--x',e.pageX - item.offsetLeft + 'px');
        item.style.setProperty('--y',e.pageY - item.offsetTop + 'px');
    };
});
document.querySelectorAll('.link2-1').forEach(item => {
    item.onmousemove =e =>{
        item.style.setProperty('--x',e.pageX - item.offsetLeft + 'px');
        item.style.setProperty('--y',e.pageY - item.offsetTop + 'px');
    };
});