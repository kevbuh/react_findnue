import $ from "jquery";
import scroll from "jquery";
// import { MagnificPopup } from 'react-magnific-popup'

$(document).ready(function(){
  $(".goTop").click(function(){scroll(0,0)});


  $(".menu-toggler").click(function(){
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
  });

  // $(".works").MagnificPopup({
  //     delegate: 'a',
  //     type: 'image',
  //     gallery:{enabled:true}
  // });
});


