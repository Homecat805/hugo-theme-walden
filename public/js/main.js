(() => {
  // <stdin>
  $(function() {
    const menuToggle = $("#menuToggle");
    const menu = $("#menu");
    menuToggle.click(function() {
      menu.toggle(500);
    });
  });
})();
