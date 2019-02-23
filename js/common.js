// NProgress.start();

// setTimeout(function () {
//     // 结束
//     NProgress.done();
// }, 2000);
$(document).ajaxStart(function () {
  // 开启进度条
  NProgress.start();
})

// 在全部的ajax完成时, 关闭进度条
$(document).ajaxStop(function () {
  // 模拟网络延迟
  setTimeout(function () {
    // 结束进度条
    NProgress.done();
  }, 500);
});

$('.icon_left').on('click', function () {
  $('.lt_aside').stop().toggleClass('hidemenu');
  $('.lt_main').stop().toggleClass('hidemenu');
})

$(function () {
  $('.category').on('click', function () {
    $('.child').stop().slideToggle()
  })
})


$('.icon_right').on('click', function () {
  $('#modal').modal('show');
})

$('#modal .closeBtn').on('click', function () {
  $.ajax({
    url: '/employee/employeeLogout',
    dataType: 'json',
    type: 'get',
    success: function (res) {
      if (res.success) {
        location.href = 'login.html';
      }
    }
  })
})