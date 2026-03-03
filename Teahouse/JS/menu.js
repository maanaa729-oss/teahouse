$(function () {
  const $scroll = $(".scroll");

  $scroll.on("wheel", function (e) {
    e.preventDefault();

    const deltaY = e.originalEvent.deltaY;

    $scroll.stop().animate(
      {
        scrollLeft: this.scrollLeft + deltaY
      },
      30
    );
  });
});