$(function(){

    // 当屏幕宽度小于断点 sm 时 菜单按钮显示并在点击后动作 ---- Start
    const menuToggle = $("#menuToggle");
    const menu = $("#menu");
    menuToggle.click(function(){
        menu.toggle(500);
    });
    // -------------------------------------------------- end
  
 });