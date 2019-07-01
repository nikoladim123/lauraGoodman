/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/sidebar-menu.js */ \"./src/js/modules/sidebar-menu.js\");\n\n__webpack_require__(/*! ./modules/service-button.js */ \"./src/js/modules/service-button.js\");\n\n__webpack_require__(/*! ./modules/top-bottom-link.js */ \"./src/js/modules/top-bottom-link.js\");\n\n__webpack_require__(/*! ./modules/swiper-slider.js */ \"./src/js/modules/swiper-slider.js\");\n\n__webpack_require__(/*! ./modules/custom-scroll.js */ \"./src/js/modules/custom-scroll.js\");\n\n__webpack_require__(/*! ./modules/scroll-animation.js */ \"./src/js/modules/scroll-animation.js\");\n\n__webpack_require__(/*! ./modules/blog-slider.js */ \"./src/js/modules/blog-slider.js\");\n\n__webpack_require__(/*! ./modules/tst-slider.js */ \"./src/js/modules/tst-slider.js\");\n\n__webpack_require__(/*! ./modules/services-img.js */ \"./src/js/modules/services-img.js\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/blog-slider.js":
/*!***************************************!*\
  !*** ./src/js/modules/blog-slider.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $(function () {\n    var $blogSlideCont = $(\".blog-slide\");\n    $blogSlideCont.css({ \"z-index\": \"0\" });\n    $blogSlideCont.first().css({ \"z-index\": \"1\" }).addClass(\"blog-slide-progress blog-slide-textIn\");\n    var blogRectSize = $blogSlideCont.first().find(\".blog-slide_txt_line1\").outerWidth();\n    $blogSlideCont.find(\".blog-slide_txt_line1\").css({\n      \"clip\": \"rect(auto, \" + blogRectSize + \"px, auto, auto)\"\n    });\n    var blogSlide = {\n      speed: 1600,\n      requireKlasses: 'blog-slide-progress blog-slide-textIn',\n      index: 0,\n      is_anime: false,\n      classMove: function classMove() {},\n      goTo: function goTo(number) {},\n\n      next: function next() {\n        if (this.is_anime) {\n          return;\n        } else {\n          this.is_anime = true;\n        }\n        var that = this;\n        var slide_height = $(\".blog-slider\").height();\n        var slide_width = $(\".blog-slider\").width();\n        if (this.index < $blogSlideCont.length - 1) {\n          $blogSlideCont.eq(that.index + 1).find(\".blog-slide_txt_line1\").css({\n            \"clip\": \"rect(auto, 0, auto, auto)\"\n          });\n          $blogSlideCont.eq(this.index + 1).css({ \"z-index\": \"2\" }).stop().animate({ fx: slide_width }, {\n            duration: this.speed,\n            step: function step(now, fx) {\n              $blogSlideCont.eq(that.index + 1).css({ \"clip\": \"rect(0px, \" + now + \"px,\" + slide_height + \"px, 0px)\" });\n            },\n            complete: function complete() {\n\n              $blogSlideCont.eq(that.index).css({ \"z-index\": \"0\" }).removeClass(that.requireKlasses).stop().animate({ fx: 0 }, {\n                duration: 1,\n                complete: function complete() {\n                  $blogSlideCont.eq(that.index + 1).css({ \"z-index\": \"1\" }).addClass(that.requireKlasses);\n                  var blogRectSize = $blogSlideCont.eq(that.index + 1).find(\".blog-slide_txt_line1\").outerWidth();\n                  $blogSlideCont.eq(that.index + 1).find(\".blog-slide_txt_line1\").css({\n                    \"clip\": \"rect(auto, \" + blogRectSize + \"px, auto, auto)\"\n                  });\n                  that.is_anime = false;\n                  that.index++;\n                }\n              });\n            }\n          });\n        } else {\n          $blogSlideCont.first().find(\".blog-slide_txt_line1\").css({\n            \"clip\": \"rect(auto, 0, auto, auto)\"\n          });\n          $blogSlideCont.first().css({ \"z-index\": \"2\" }).stop().animate({\n            fx: slide_width\n          }, {\n            duration: this.speed,\n            step: function step(now, fx) {\n              $blogSlideCont.first().css({ \"clip\": \"rect(0px, \" + now + \"px,\" + slide_height + \"px, 0px)\" });\n            },\n            complete: function complete() {\n              $blogSlideCont.eq(that.index).css({ \"z-index\": \"0\" }).removeClass(that.requireKlasses).stop().animate({\n                fx: 0\n              }, {\n                duration: 1,\n                complete: function complete() {\n                  $blogSlideCont.first().css({ \"z-index\": \"1\" }).addClass(that.requireKlasses);\n                  var blogRectSize = $blogSlideCont.first().find(\".blog-slide_txt_line1\").outerWidth();\n                  $blogSlideCont.first().find(\".blog-slide_txt_line1\").css({\n                    \"clip\": \"rect(auto, \" + blogRectSize + \"px, auto, auto)\"\n                  });\n                  that.is_anime = false;\n                  that.index = 0;\n                }\n              });\n            }\n          });\n        }\n      },\n      prev: function prev() {\n        if (this.is_anime) {\n          return;\n        } else {\n          this.is_anime = true;\n        }\n        var that = this;\n        var slide_height = $(\".blog-slider\").height();\n        var slide_width = $(\".blog-slider\").width();\n        if (this.index > 0) {\n          $blogSlideCont.eq(this.index - 1).find(\".blog-slide_txt_line1\").css({\n            \"clip\": \"rect(auto, 0, auto, auto)\"\n          });\n          $blogSlideCont.eq(this.index - 1).css({ \"z-index\": \"2\" }).stop().animate({\n            fx: slide_width\n          }, {\n            duration: this.speed,\n            step: function step(now, fx) {\n              var n_now = slide_width - now;\n              $blogSlideCont.eq(that.index - 1).css({ \"clip\": \"rect(0px, \" + slide_width + \"px,\" + slide_height + \"px,\" + n_now + \"px)\" });\n            },\n            complete: function complete() {\n              $blogSlideCont.eq(that.index).css({ \"z-index\": \"0\" }).removeClass(that.requireKlasses).stop().animate({\n                fx: 0\n              }, {\n                duration: 1,\n                complete: function complete() {\n                  $blogSlideCont.eq(that.index - 1).css({ \"z-index\": \"1\" }).addClass(that.requireKlasses);\n                  var blogRectSize = $blogSlideCont.eq(that.index - 1).find(\".blog-slide_txt_line1\").outerWidth();\n                  $blogSlideCont.eq(that.index - 1).find(\".blog-slide_txt_line1\").css({\n                    \"clip\": \"rect(auto, \" + blogRectSize + \"px, auto, auto)\"\n                  });\n                  that.is_anime = false;\n                  that.index--;\n                }\n              });\n            }\n          });\n        } else {\n          $blogSlideCont.last().find(\".blog-slide_txt_line1\").css({\n            \"clip\": \"rect(auto, 0, auto, auto)\"\n          });\n          $blogSlideCont.last().css({ \"z-index\": \"2\" }).stop().animate({\n            fx: slide_width\n          }, {\n            duration: this.speed,\n            step: function step(now, fx) {\n              var n_now = slide_width - now;\n              $blogSlideCont.last().css({ \"clip\": \"rect(0px, \" + slide_width + \"px,\" + slide_height + \"px,\" + n_now + \"px)\" });\n            },\n            complete: function complete() {\n              $blogSlideCont.eq(that.index).css({ \"z-index\": \"0\" }).removeClass(that.requireKlasses).stop().animate({\n                fx: 0\n              }, {\n                duration: 1,\n                complete: function complete() {\n                  $blogSlideCont.last().css({ \"z-index\": \"1\" }).addClass(that.requireKlasses);\n                  var blogRectSize = $blogSlideCont.last().find(\".blog-slide_txt_line1\").outerWidth();\n                  $blogSlideCont.last().find(\".blog-slide_txt_line1\").css({\n                    \"clip\": \"rect(auto, \" + blogRectSize + \"px, auto, auto)\"\n                  });\n                  that.is_anime = false;\n                  that.index = $blogSlideCont.length - 1;\n                }\n              });\n            }\n          });\n        }\n      }\n    };\n    var autoplay = true;\n    //var autoplay = false;  \n    var duration = 5000;\n    if (autoplay) {\n      var timerId = setInterval(function () {\n        blogSlide.next();\n      }, duration);\n    }\n    $(\".js-blog-arrow-left\").on(\"click\", function () {\n      if (autoplay) {\n        clearInterval(timerId);\n      }\n      blogSlide.prev();\n      if (autoplay) {\n        timerId = setInterval(function () {\n          blogSlide.next();\n        }, duration);\n      }\n    });\n    $(\".js-blog-arrow-right\").on(\"click\", function () {\n      if (autoplay) {\n        clearInterval(timerId);\n      }\n      blogSlide.next();\n      if (autoplay) {\n        timerId = setInterval(function () {\n          blogSlide.next();\n        }, duration);\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/blog-slider.js?");

/***/ }),

/***/ "./src/js/modules/custom-scroll.js":
/*!*****************************************!*\
  !*** ./src/js/modules/custom-scroll.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $('.custom-scroll').niceScroll({\n    cursorwidth: 0,\n    //cursorwidth:3,\n    cursoropacitymin: 0.4,\n    cursorcolor: '#aaaaaa',\n    cursorborder: 'none',\n    cursorborderradius: 4,\n    autohidemode: 'leave'\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/custom-scroll.js?");

/***/ }),

/***/ "./src/js/modules/scroll-animation.js":
/*!********************************************!*\
  !*** ./src/js/modules/scroll-animation.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    $(window).on('scroll', function () {\n        if ($('.flicker-section h1').hasClass('go') || $('.flicker-section h2').hasClass('go')) {\n            $('.flicker-section').addClass('black-bg');\n        } else {\n            $('.flicker-section').removeClass('black-bg');\n        }\n\n        if ($('.instagram-section h1').hasClass('go') || $('.instagram-section h2').hasClass('go')) {\n            $('.instagram-section').addClass('black-bg');\n        } else {\n            $('.instagram-section').removeClass('black-bg');\n        }\n    });\n});\n\n//# sourceURL=webpack:///./src/js/modules/scroll-animation.js?");

/***/ }),

/***/ "./src/js/modules/service-button.js":
/*!******************************************!*\
  !*** ./src/js/modules/service-button.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $('.service-button-js').on('click', function () {\n    $(this).parents('.services-img').find('.service-description').toggleClass('show-des');\n  });\n  $('.service-close').on('click', function () {\n    $(this).parents('.service-description').removeClass('show-des');\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/service-button.js?");

/***/ }),

/***/ "./src/js/modules/services-img.js":
/*!****************************************!*\
  !*** ./src/js/modules/services-img.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  //FUC... JQuery \n  // $('.serv-click-js').on('click',function(){\n  //   $(this).toggleClass('active'); \n  //   if( $('.serv-click-js').hasClass('active') ){\n  //     $('.serv-click-js').removeClass('active')\n  //   }\n  // });  \n\n  // Vanilla JS\n  // const servImage = document.querySelectorAll(\".serv-click-js\");\n  // servImage && servImage.forEach(servImg => {\n  //   servImg.addEventListener(\"click\", servImgOpen);              \n  // });\n  // function servImgOpen(e){ \n  //   e.target.classList.toggle(\"active\");\n  //   servImage.forEach(x => {      \n  //     if(x !== e.target)\n  //       x.classList.remove(\"active\");              \n  //   }); \n  // }  \n\n  //ES6\n  var servImage = [].concat(_toConsumableArray(document.querySelectorAll(\".serv-click-js\")));\n  servImage && servImage.map(function (s) {\n    s.addEventListener(\"click\", servImgOpen);\n  });\n  function servImgOpen(e) {\n    e.target.closest('.serv-click-js').classList.toggle(\"active\");\n    servImage.filter(function (item) {\n      return item !== e.target.closest('.serv-click-js');\n    }).map(function (img) {\n      img.classList.remove(\"active\");\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/services-img.js?");

/***/ }),

/***/ "./src/js/modules/sidebar-menu.js":
/*!****************************************!*\
  !*** ./src/js/modules/sidebar-menu.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $('.menu-icon').on('click', function () {\n    $(this).toggleClass('active');\n    $('.sidebar-menu').toggleClass('active');\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/sidebar-menu.js?");

/***/ }),

/***/ "./src/js/modules/swiper-slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/swiper-slider.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var swiper = new Swiper('.js-portfolio-sliders', {\n    slidesPerView: 'auto',\n    paginationClickable: true,\n    spaceBetween: 0,\n    freeMode: true,\n    nextButton: '.js-portfolio-swiper-button-next',\n    prevButton: '.js-portfolio-swiper-button-prev',\n    mousewheelControl: false,\n    loopAdditionalSlides: 3,\n    loop: true\n  });\n  // var swiper2 = new Swiper('.js-blog-slider', {\n  //   pagination: '.js-blog-swiper-pagination',\n  //   paginationClickable: true,\n  //   loopAdditionalSlides: 3,    \n  //   loop: true,\n  // });  \n  // var swiper4 = new Swiper('.js-testimonials-text-slider', {\n  //   pagination: '.js-t-swiper-pagination',\n  //   paginationClickable: true,\n  //   nextButton: '.js-t-swiper-button-next',\n  //   prevButton: '.js-t-swiper-button-prev',    \n  //   loop: true,\n  // });\n  // var swiper5 = new Swiper('.js-testimonials-img-slider', {\n  //   pagination: '.js-t-swiper-pagination',    \n  //   paginationClickable: true,\n  //   nextButton: '.js-t-swiper-button-next',\n  //   prevButton: '.js-t-swiper-button-prev', \n  //   loop: true,    \n  // });    \n});\n\n//# sourceURL=webpack:///./src/js/modules/swiper-slider.js?");

/***/ }),

/***/ "./src/js/modules/top-bottom-link.js":
/*!*******************************************!*\
  !*** ./src/js/modules/top-bottom-link.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    // $('body').scroll(function() {  \n    //   console.log(\"scroll 100\");\n    //   var scroll = $('body').scrollTop();\n    //   if (scroll >= 100) {\n    //     console.log(\"scroll 100\");\n    //       $(\".top-bottom-link-container\").addClass(\"show-link\");\n    //   } else {\n    //       $(\".top-bottom-link-container\").removeClass(\"show-link\");\n    //   }\n    // });\n    $(window).on('scroll', function () {\n        var scroll = $(window).scrollTop();\n\n        if (scroll >= 100) {\n            $(\".top-bottom-link-container\").addClass(\"show-link\");\n        } else {\n            $(\".top-bottom-link-container\").removeClass(\"show-link\");\n        }\n    });\n\n    $('.top-bottom-link-container').on(\"click\", function () {\n        $('html, body').animate({ scrollTop: 0 }, 'slow');\n    });\n});\n\n//# sourceURL=webpack:///./src/js/modules/top-bottom-link.js?");

/***/ }),

/***/ "./src/js/modules/tst-slider.js":
/*!**************************************!*\
  !*** ./src/js/modules/tst-slider.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $(function () {\n    var $tstSlideCont = $(\".tst-slide\");\n    $tstSlideCont.css({ \"z-index\": \"0\" });\n    $tstSlideCont.first().css({ \"z-index\": \"1\" }).addClass(\"tst-slide-progress tst-slide-textIn\");\n    var tstRectSize = $tstSlideCont.first().find(\".tst-slide_txt_line1\").outerWidth();\n    $tstSlideCont.find(\".tst-slide_txt_line1\").css({\n      \"clip\": \"rect(auto, \" + tstRectSize + \"px, auto, auto)\"\n    });\n    var tstSlide = {\n      speed: 1600,\n      requireKlasses: 'tst-slide-progress tst-slide-textIn',\n      index: 0,\n      is_anime: false,\n      classMove: function classMove() {},\n      goTo: function goTo(number) {},\n\n      next: function next() {\n        if (this.is_anime) {\n          return;\n        } else {\n          this.is_anime = true;\n        }\n        var that = this;\n        var slide_height = $(\".tst-slider\").height();\n        var slide_width = $(\".tst-slider\").width();\n        if (this.index < $tstSlideCont.length - 1) {\n          $tstSlideCont.eq(that.index + 1).find(\".tst-slide_txt_line1\").css({\n            \"clip\": \"rect(auto, 0, auto, auto)\"\n          });\n          $tstSlideCont.eq(this.index + 1).css({ \"z-index\": \"2\" }).stop().animate({ fx: slide_width }, {\n            duration: this.speed,\n            step: function step(now, fx) {\n              $tstSlideCont.eq(that.index + 1).css({ \"clip\": \"rect(0px, \" + now + \"px,\" + slide_height + \"px, 0px)\" });\n            },\n            complete: function complete() {\n\n              $tstSlideCont.eq(that.index).css({ \"z-index\": \"0\" }).removeClass(that.requireKlasses).stop().animate({ fx: 0 }, {\n                duration: 1,\n                complete: function complete() {\n                  $tstSlideCont.eq(that.index + 1).css({ \"z-index\": \"1\" }).addClass(that.requireKlasses);\n                  var tstRectSize = $tstSlideCont.eq(that.index + 1).find(\".tst-slide_txt_line1\").outerWidth();\n                  $tstSlideCont.eq(that.index + 1).find(\".tst-slide_txt_line1\").css({\n                    \"clip\": \"rect(auto, \" + tstRectSize + \"px, auto, auto)\"\n                  });\n                  that.is_anime = false;\n                  that.index++;\n                }\n              });\n            }\n          });\n        } else {\n          $tstSlideCont.first().find(\".tst-slide_txt_line1\").css({\n            \"clip\": \"rect(auto, 0, auto, auto)\"\n          });\n          $tstSlideCont.first().css({ \"z-index\": \"2\" }).stop().animate({\n            fx: slide_width\n          }, {\n            duration: this.speed,\n            step: function step(now, fx) {\n              $tstSlideCont.first().css({ \"clip\": \"rect(0px, \" + now + \"px,\" + slide_height + \"px, 0px)\" });\n            },\n            complete: function complete() {\n              $tstSlideCont.eq(that.index).css({ \"z-index\": \"0\" }).removeClass(that.requireKlasses).stop().animate({\n                fx: 0\n              }, {\n                duration: 1,\n                complete: function complete() {\n                  $tstSlideCont.first().css({ \"z-index\": \"1\" }).addClass(that.requireKlasses);\n                  var tstRectSize = $tstSlideCont.first().find(\".tst-slide_txt_line1\").outerWidth();\n                  $tstSlideCont.first().find(\".tst-slide_txt_line1\").css({\n                    \"clip\": \"rect(auto, \" + tstRectSize + \"px, auto, auto)\"\n                  });\n                  that.is_anime = false;\n                  that.index = 0;\n                }\n              });\n            }\n          });\n        }\n      },\n      prev: function prev() {\n        if (this.is_anime) {\n          return;\n        } else {\n          this.is_anime = true;\n        }\n        var that = this;\n        var slide_height = $(\".tst-slider\").height();\n        var slide_width = $(\".tst-slider\").width();\n        if (this.index > 0) {\n          $tstSlideCont.eq(this.index - 1).find(\".tst-slide_txt_line1\").css({\n            \"clip\": \"rect(auto, 0, auto, auto)\"\n          });\n          $tstSlideCont.eq(this.index - 1).css({ \"z-index\": \"2\" }).stop().animate({\n            fx: slide_width\n          }, {\n            duration: this.speed,\n            step: function step(now, fx) {\n              var n_now = slide_width - now;\n              $tstSlideCont.eq(that.index - 1).css({ \"clip\": \"rect(0px, \" + slide_width + \"px,\" + slide_height + \"px,\" + n_now + \"px)\" });\n            },\n            complete: function complete() {\n              $tstSlideCont.eq(that.index).css({ \"z-index\": \"0\" }).removeClass(that.requireKlasses).stop().animate({\n                fx: 0\n              }, {\n                duration: 1,\n                complete: function complete() {\n                  $tstSlideCont.eq(that.index - 1).css({ \"z-index\": \"1\" }).addClass(that.requireKlasses);\n                  var tstRectSize = $tstSlideCont.eq(that.index - 1).find(\".tst-slide_txt_line1\").outerWidth();\n                  $tstSlideCont.eq(that.index - 1).find(\".tst-slide_txt_line1\").css({\n                    \"clip\": \"rect(auto, \" + tstRectSize + \"px, auto, auto)\"\n                  });\n                  that.is_anime = false;\n                  that.index--;\n                }\n              });\n            }\n          });\n        } else {\n          $tstSlideCont.last().find(\".tst-slide_txt_line1\").css({\n            \"clip\": \"rect(auto, 0, auto, auto)\"\n          });\n          $tstSlideCont.last().css({ \"z-index\": \"2\" }).stop().animate({\n            fx: slide_width\n          }, {\n            duration: this.speed,\n            step: function step(now, fx) {\n              var n_now = slide_width - now;\n              $tstSlideCont.last().css({ \"clip\": \"rect(0px, \" + slide_width + \"px,\" + slide_height + \"px,\" + n_now + \"px)\" });\n            },\n            complete: function complete() {\n              $tstSlideCont.eq(that.index).css({ \"z-index\": \"0\" }).removeClass(that.requireKlasses).stop().animate({\n                fx: 0\n              }, {\n                duration: 1,\n                complete: function complete() {\n                  $tstSlideCont.last().css({ \"z-index\": \"1\" }).addClass(that.requireKlasses);\n                  var tstRectSize = $tstSlideCont.last().find(\".tst-slide_txt_line1\").outerWidth();\n                  $tstSlideCont.last().find(\".tst-slide_txt_line1\").css({\n                    \"clip\": \"rect(auto, \" + tstRectSize + \"px, auto, auto)\"\n                  });\n                  that.is_anime = false;\n                  that.index = $tstSlideCont.length - 1;\n                }\n              });\n            }\n          });\n        }\n      }\n    };\n    var autoplay = true;\n    //var autoplay = false;  \n    var duration = 5000;\n    if (autoplay) {\n      var timerId = setInterval(function () {\n        tstSlide.next();\n      }, duration);\n    }\n    $(\".js-tst-arrow-left\").on(\"click\", function () {\n      if (autoplay) {\n        clearInterval(timerId);\n      }\n      tstSlide.prev();\n      if (autoplay) {\n        timerId = setInterval(function () {\n          tstSlide.next();\n        }, duration);\n      }\n    });\n    $(\".js-tst-arrow-right\").on(\"click\", function () {\n      if (autoplay) {\n        clearInterval(timerId);\n      }\n      tstSlide.next();\n      if (autoplay) {\n        timerId = setInterval(function () {\n          tstSlide.next();\n        }, duration);\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/tst-slider.js?");

/***/ })

/******/ });