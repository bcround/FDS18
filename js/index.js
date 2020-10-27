var section = $('.board section');
var tab = $('.board .tab a');
var item = $('.board li');

item.addClass('icon-dot-circled');

tab.click(function (event) {
  event.preventDefault(); //a tag의 default action이 href로 이동 하는 거니까 여기선 버튼으로 사용하고싶으니까 default action을 prevent한다.
  section.removeClass('is-active');
  $(this).parent().parent().addClass('is-active');
});