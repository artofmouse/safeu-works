window.requestAnimFrame = (function (callback) { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60); }; })();
window.cancelAnimFrame = (function () { return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) { window.clearTimeout(id); }; })();

var front = {

  stage: { width: 0, height: 0, top: 0, ptop: 0, page: '' },
  btnTopFlag: false,

  init: function () {

    this.common.init();
    this.accordion.init();
    this.resize();
    this.scroll();
    this.form.init();
    this.pop.init();
  },

  ready: function () {

  },
  load: function () {

  },

  resize: function () {
    front.stage.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    front.stage.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    front.stage.top = window.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;
    front.common.resize();
    // console.log('resize');
  },
  scroll: function () {
    front.stage.top = window.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;
    front.common.scroll();
  },

  common: {

    header: null,
    gnb: null,
    footer: null,
    allMenu: null,
    allMenuCube: null,

    init: function () {
      var _this = this;
      this.header = ($('#dHead').length > 0) ? $('#dHead') : null;
      this.footer = ($('#dFoot').length > 0) ? $('#dFoot') : null;
      this.gnb = ($('#gnb').length > 0) ? $('#gnb') : null;
      this.allMenu = ($('#allMenu').length > 0) ? $('#allMenu') : null;
      //this.allMenuCube = ( this.allMenu ) ? cube.item({ element : $('#allMenuCube') , index : 0 }) : null ;

      front.stage.page = ($('.main-wrap').length > 0) ? 'main' : 'sub';


      effectData.init();

      // �곷떒 諛붾줈媛�湲� 踰꾪듉 �대┃ �대깽��
      $(document).on('click', '.btn-page-top', function () {
        if ($('.main-wrap').length > 0) {
          main.pageTopMove();
        } else {
          front.common.moveScroll(0, 400);
        };
      });

      // �명꽣 �⑤�由� 踰꾪듉
      $(document).on('click', '.btn-footer-family-label', function () {
        if ($(this).parents('.footer-family').hasClass('actived')) {
          $(this).parents('.footer-family').removeClass('actived');
        } else {
          $(this).parents('.footer-family').addClass('actived');
        };
      });

      //GNB 留덉슦�� �꾩썐			
      // $(document).on('mouseleave', '.gnb-list', function (e) {
      //   if (front.stage.width > 1024) {
      //     _this.header.removeClass('hover');
      //     _this.gnb.find('.gnb-list-cell').each(function () { $(this).removeClass('hover'); });
      //   };
      // });

      //GNB 留덉슦�� �ㅻ쾭
      // $(document).on('mouseenter', '.gnb-list-cell', function (e) {
      //   if (front.stage.width > 1024) {
      //     if (e.type == 'mouseenter') {
      //       //console.log(e.type + ' : ' + 'gnb hover');
      //       _this.header.addClass('hover');
      //       $(this).addClass('hover').siblings().removeClass('hover');
      //     }
      //   };
      // });

      if (this.gnb) this.gnb.find('.btn-gnb-nav').each(function () { $(this).attr('href', 'javascript:;'); });

      //GNB �꾩껜 硫붾돱 �좉�
      $(document).on('click', '.btn-all-menu-toogle-nav', function () {
        /*
        if($(window).width() > 1024){
          alert('以�鍮꾩쨷�낅땲��.');
          return false;
        };
        */
        if (_this.allMenu.hasClass('actived')) {
          _this.header.removeClass('all');
          _this.header.find('.btn-all-menu-toogle-nav').removeClass('actived');
          _this.allMenu.removeClass('actived');
          //_this.allMenuCube.autoStop();
          setTimeout(function () { $('html').removeClass('fix'); }, 600);
        } else {
          _this.header.addClass('all');
          _this.header.find('.btn-all-menu-toogle-nav').addClass('actived');
          _this.allMenu.addClass('actived');
          _this.allMenu.find('.all-menu-scroller').scrollTop(0);
          //_this.allMenuCube.autoPlay();
          $('html').addClass('fix');
        };
      });

      //�곷떒 1�곸뒪 硫붾돱 �곗씠�� �ㅼ젙
      if (this.allMenu) {
        this.allMenu.find('.all-menu-list-cell').each(function () {
          if ($(this).find('.snb-wrap').length > 0) {
            var $btn = $(this).find('.btn-all-menu-nav');
            $btn.attr('data-url', $btn.attr('href')).addClass('two-depth');
          };
        });
      };

      //�곷떒 1�곸뒪 硫붾돱 �대┃ �대깽��
      $(document).on('click', '.btn-all-menu-nav', function () {
        if (front.stage.width <= 1024) {
          var $parents = $(this).parents('.all-menu-list-cell');
          if ($parents.hasClass('show')) {
            $parents.removeClass('show');
          } else {
            $parents.addClass('show').siblings().removeClass('show');
          };
        };
      });

      if ($('.animation-view').length > 0) {
        setTimeout(function () {
          $('.animation-view').addClass('start');
        }, 500);
      }

      if ($('.intro-animation-item').length > 0) {
        setTimeout(function () {
          //$('.animation-view').addClass('start');

          var i = 0;
          $('.intro-animation-item').each(function () {
            var _delay = i * 0.5;
            $(this).addClass('actived').css({ 'transition-delay': _delay + 's' });
            i++;
          });
        }, 500);
      }


      if ($('.main-wrap').length > 0) main.init();
      $('#wrap').addClass('show');
    },

    scroll: function () {
      var _this = this;



      //�ㅻ뜑 �곸뿭 �ㅽ겕濡� 媛먯� �대깽��
      if (_this.header) {
        var _posY = 1;

        if (front.stage.top >= _posY) {
          _this.header.addClass('scroll');
        } else {
          _this.header.removeClass('scroll');
        }

        if (front.stage.top <= _posY) {
          _this.header.removeClass('up down');
        } else {
          if (_this.header.hasClass('scroll') || _this.header.hasClass('down')) {
            if (front.stage.ptop > front.stage.top) {
              _this.header.removeClass('down').addClass('up');
            }
          }

          if (_this.header.hasClass('scroll') || _this.header.hasClass('up')) {
            if (front.stage.ptop < front.stage.top) {
              if (!_this.header.hasClass('down')) {
                if (_this.header.hasClass('hover')) _this.header.removeClass('hover');
              };
              _this.header.removeClass('up').addClass('down');
            }
          }
        }
        front.stage.ptop = front.stage.top;
      };

      if (front.stage.page == 'sub') {
        if (this.footer) {
          if (front.stage.top >= this.footer.offset().top - 60) {
            if (!this.header.hasClass('white')) this.header.addClass('white');
          } else {
            if (this.header.hasClass('white')) this.header.removeClass('white');
          };
        };
      };

      //�섏씠吏� �섎떒 怨좎젙 踰꾪듉 �대깽��
      if ($('#page-ui').length > 0) {
        if (front.stage.top >= 100) {
          if (!front.btnTopFlag) {
            $('#page-ui').addClass('actived');
          }
          front.btnTopFlag = true;

        } else {
          if (front.btnTopFlag) {
            $('#page-ui').removeClass('actived');
          }
          front.btnTopFlag = false;
        }


        if (front.stage.top >= $('#dFoot').offset().top - front.stage.height) {
          $('#page-ui').addClass('bottom');
        } else {
          $('#page-ui').removeClass('bottom');
        };
      };

    },

    resize: function () {
      /*
      if(this.allMenu.hasClass('actived')){
        this.header.removeClass('all');
        this.header.find('.btn-all-menu-toogle-nav').removeClass('actived');
        this.allMenu.removeClass('actived');
        if($('html').hasClass('fix')) $('html').removeClass('fix');
      };
      */
      if (this.allMenu) {
        this.allMenu.find('.all-menu-list-cell').each(function () {
          if ($(this).find('.snb-wrap').length > 0) {
            var $btn = $(this).find('.btn-all-menu-nav');
            if (front.stage.width > 1024) {
              $btn.attr('href', $btn.attr('data-url'));
            } else {
              $btn.attr('href', 'javascript:;');
            };
          };
        });
      };

      if (front.stage.width > 1024) {

      } else {

      };
    },

    moveScroll: function (tgY, speed) {

      if (speed == null || speed == 'undefind') speed = 1000;
      $('html, body').stop().animate({ 'scrollTop': tgY }, { queue: false, duration: speed });

    }

  },

  form: {

    init: function () {

    },
    inputIsValid: function (_elem) {
      if (_elem.value.length > 0) {
        _elem.classList.add('fill');
      } else {
        _elem.classList.remove('fill');
      }
    },

    selectIsValid: function (_elem) {
      if (_elem.value != 0) {
        _elem.classList.add('fill');
      } else {
        _elem.classList.remove('fill');
      }
    },

    //�뚯씪 �낅줈�쒖쓽 寃쎈줈媛� �ㅼ젙
    fileRead: function (_elem) {
      if (_elem.nextElementSibling && _elem.nextElementSibling.classList.contains('read-file')) {
        if (_elem.value != '') {
          _elem.nextElementSibling.value = _elem.value;
        }
      } else {
        alert('援ъ“ �ы솗�� �꾩슂');
      };
    },

    //�뚯씪 洹몃９ 異붽�
    fileAdd: function (_elem) {
      var $html = '';
      $html += '<div class="form-file-cell">';
      $html += '	<div class="form-file-items">';
      $html += '		<div class="form-file-input">';
      $html += '			<input type="file" class="write-file" onchange="front.form.fileRead(this);">';
      $html += '			<input type="text" class="read-file" readonly>';
      $html += '			<button type="button" class="btn-basic btn-form-input btn-black">�뚯씪泥⑤�</button>';
      $html += '		</div>';
      $html += '		<div class="form-file-ui">';
      $html += '			<button type="button" class="btn-form-file-ui remove" onclick="front.form.fileRemove(this);"><span>��젣</span></button>';
      $html += '		</div>';
      $html += '	</div>';
      $html += '</div>';

      if ($DOM.closest(_elem, 'form-file-group')) {
        $DOM.closest(_elem, 'form-file-group').insertAdjacentHTML('beforeend', $html);
      } else {
        alert('而⑦뀗痢좉� �놁뒿�덈떎.');
      };

    },
    //�뚯씪 洹몃９ ��젣		
    fileRemove: function (_elem) {
      if ($DOM.closest(_elem, 'form-file-cell')) {
        $DOM.closest(_elem, 'form-file-cell').remove();
      } else {
        alert('而⑦뀗痢좉� �놁뒿�덈떎.');
      };
    }
  },

  pop: {

    toastPopElement: null,
    toastPopActive: false,
    toastPopTimer: null,
    prevElement: null,
    prevElements: [],
    activeElement: null,
    activeElements: [],
    isActive: false,
    zIndex: 999999,

    init: function () {

      var _this = this;

      document.body.addEventListener('click', function (e) {
        if (_this.isActive) {
          if (!_this.closest(e.target, 'pop-data')) {
            _this.close(e.target);
          };
        };
      });
    },

    open: function (_id, _item, _msg) {
      var _this = this;
      var $element = document.querySelector('#' + _id);

      if ($element) {
        this.zIndex++;
        this.isActive = true;
        this.prevElements.push(_item);
        this.activeElement = $element;
        this.activeElements.push($element);

        $element.classList.add('actived');
        $element.querySelector('.pop-data').setAttribute('tabindex', 0);

        if ($element.querySelector('#alertMsg')) {
          //console.log('硫붿꽭吏� �앹뾽 �뺤씤');
          if (_msg) {
            $element.querySelector('#alertMsg').innerHTML = _msg;
          } else {
            alert('�댁슜�� �놁뒿�덈떎.');
            return false;
          };
        };

        document.documentElement.classList.add('fix');
        $element.style['z-index'] = this.zIndex;
        setTimeout(function () {
          $element.querySelector('.pop-data').focus();
        }, 100);

      } else {
        alert('而⑦뀗痢좉� �놁뒿�덈떎.');
      };

    },

    close: function (_item) {
      var _this = this;
      var $element;

      if (typeof (_item) == 'string') {
        $element = document.querySelector('#' + _item);
      } else {
        $element = _this.closest(_item, 'layer-pop-wrap');
      };

      if ($element) {
        this.prevElement = this.prevElements[this.prevElements.length - 1];
        document.documentElement.classList.remove('fix');
        $element.classList.remove('actived');
        $element.querySelector('.pop-data').setAttribute('tabindex', -1);

        setTimeout(function () {
          if (_this.prevElement) {
            //_this.prevElement.focus();
          };
        }, 100);
        this.activeElements.pop();
        this.prevElements.pop();
        if (this.activeElements.length == 0) front.pop.isActive = false;
      };
    },

    closest: function (_el, _selector) {
      var el = $DOM.element(_el);
      var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
      var selector = '.' + _selector
      while (el) {
        if (matchesSelector.call(el, selector)) {
          return el;
        } else {
          el = el.parentElement;
        }
      }
      return null;
    },

    toastOpen: function (_id) {
      var _this = this;
      if (!_this.toastPopActive) {
        if (_this.toastPopTimer) clearTimeout(_this.toastPopTimer);
        _this.toastPopActive = true;
        _this.toastPopElement = document.querySelector('#' + _id);
        _this.toastPopElement.classList.add('actived');
        _this.toastPopTimer = setTimeout(function () {
          _this.toastPopElement.classList.remove('actived');
          _this.toastPopActive = false;
        }, 1500);
      }
    }
  },

  accordion: {
    init: function () {
      if ($('.accordion-list').length > 0) {
        $(document).on('click', '.btn-accordion-menu', function () {
          front.accordion.toggle($(this));
        });

        $('.accordion-list').each(function () {
          $(this).find('.accordion-cell').each(function () {
            if ($(this).hasClass('actived')) {
              $(this).find('.accordion-content').show();
            };
          });
        });
      }

    },
    toggle: function (_obj) {
      var parentsElement = _obj.parents('.accordion-list');
      parentsElement.find('.accordion-cell').each(function () {
        if ($(this).index() == _obj.parents('.accordion-cell').index()) {
          if ($(this).hasClass('actived')) {
            $(this).removeClass('actived').find('.accordion-content').stop(true).slideUp(250);
          } else {
            $(this).addClass('actived').find('.accordion-content').stop(true).slideDown(250);
          }
        } else {

        }
      });

    }
  }
};

// �щ씪�대뱶�� �댄럺��
var effectData = {

  controller: null,
  container: null,

  init: function () {
    this.container = document.querySelectorAll('.effect-data');
    if (this.container.length > 0) {
      this.controller = new ScrollMagic.Controller();
      for (var k = 0; k < this.container.length; k++) {
        var effects = new this.fadeEffect(this.container[k]);
      };
    };
  },
  fadeEffect: function (target) {
    var $controller = new ScrollMagic.Controller();
    var $element = target;
    var scenes = new ScrollMagic.Scene({ triggerElement: $element, offset: 0, triggerHook: 1 })
      //.addIndicators({name: "Fade In Effect scene"}) // add indicators (requires plugin)
      .addTo($controller);
    scenes.on('leave', function () {
      $element.classList.remove('actived');
    });
    scenes.on('enter', function () {
      $element.classList.add('actived');
    });
  }
};

// 硫붿씤
var main = {

  stage: { width: 0, height: 0 },
  controller: { pc: null, mobile: null },
  container: null,
  pageScroller: null,
  pageScrollerStatus: true,
  familyScroller: null,
  pageUI: null,
  pageUIStatus: false,
  deviceStatus: '',
  tweener: {},
  scene: {},
  videos: {},
  ptop: -1,

  init: function () {
    var _this = this;
    this.controller.pc = new ScrollMagic.Controller({ refreshInterval: 0 });
    this.controller.mobile = new ScrollMagic.Controller({});
    this.container = $('.main-wrap');
    this.pageUI = ($('#page-ui').length > 0) ? $('#page-ui') : null;
    $('#wrap').addClass('main');
    $('#dBody').addClass('main');

    this.pageScrollerStatus = ($(window).width() > 1024) ? true : false;
    this.deviceStatus = ($(window).width() > 1024) ? 'pc' : 'mobile';


    //$('html ,body').css({ 'width' : '100%' , 'height' : ' 100%' , 'overflow' : 'hidden' });		

    if ($('#dFoot').length > 0) {
      this.container.append($('#dFoot'));
      $('.footer-family-list-scroller').find('> ul').wrap('<div class="view"></div>');
    };
    if ($('.main-headline').length > 0) {
      this.videos.headline = new video({
        el: $('.main-headline').find('.video-wrap'),
        loop: true,
        autoPlay: false,
        resize: false,
        onPlay: function () {
          //console.log('intro video play');
        },
        onPause: function () {
          //console.log('intro video pause');
        },
        onEnd: function () {
          //console.log('intro video end');
        },
        onError: function () {
          //console.log('intro video error');
        },
        onInit: function () {
          //console.log('intro video init');						
        },
        onLoadedData: function () {
          //console.log('intro video onLoadedData');
          //console.log(this);
        }
      });
    };

    if ($('.main-technology').length > 0) {
      this.container.find('.main-technology .title .sentence .char-words').each(function () {

        var _target = $(this);
        // 湲��먮퀎 �섎닎
        var _text = _target.html().replace(/&amp;/, '&').split("");
        _target.html('');
        for (var i = 0; i < _text.length; i++) {
          var _char = (_text[i] == ' ') ? '&nbsp;' : _text[i];
          var charParentItem = document.createElement('span');
          charParentItem.setAttribute('class', 'char-parent');
          var charChildItem = document.createElement('span');
          charChildItem.setAttribute('class', 'char-child');
          charChildItem.innerHTML = _char;
          charParentItem.appendChild(charChildItem);
          _target[0].appendChild(charParentItem);
        }
        var charLineItem = document.createElement('span');
        charLineItem.setAttribute('class', 'char-line');
        _target[0].appendChild(charLineItem);
      });
    };

    if ($('.main-price').length > 0) mainPrice.init();

    $('#wrap').imagesLoaded({ background: true }).always(function () {
      _this.container.addClass('show');
      _this.introStart();
    });

    window.addEventListener('scroll', this.scroll.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
  },

  introReset: function () {
    var _this = this;

  },
  introStart: function () {
    var _this = this;


    _this.resize();
    _this.container.addClass('actived');
  },

  pageTopMove: function () {
    if (this.pageScroller) {
      this.pageScroller.scrollTo(0, 0, 400);
    } else {
      front.common.moveScroll(0, 400);
    };
  },

  scroll: function () {
    var _this = this;
  },

  resize: function () {
    var _this = this;

    //this.pageScroller.destroy();
    //console.log(this.pageScroller)
    var pW = this.stage.width;
    var pH = this.stage.height;
    var stageW = $(window).outerWidth();
    var stageH = $(window).outerHeight();
    this.stage.width = $(window).outerWidth();
    this.stage.height = $(window).outerHeight();
    //var stageW = this.container.height();
    //var stageH = this.container.height();		
    document.documentElement.style.setProperty("--vh", (stageH + 'px'));
    //console.log('stage Width :: ' + stageW + '   stage Height :: ' + stageH);
    //$('#trace').append('<div>' + stageH + '</div>').height($(window).outerHeight());

    var $elementHeadline = ($('.main-headline').length > 0) ? $('.main-headline') : null;
    var $elementTechnology = ($('.main-technology').length > 0) ? $('.main-technology') : null;
    var $elementAI = ($('.main-ai').length > 0) ? $('.main-ai') : null;
    var $elementPrice = ($('.main-price').length > 0) ? $('.main-price') : null;
    var $elementPatent = ($('.main-patent').length > 0) ? $('.main-patent') : null;


    gsap.config({ force3D: false })

    if (stageW > 1024) {
      this.sceneReset();
      if (!this.pageScroller) {
        // console.log('pc page scroller enbled');
        this.pageScroller = Scrollbar.init(this.container[0], {
          damping: 0.1,
          alwaysShowTracks: true,
          renderByPixels: false,
          continuousScrolling: true
        });
        this.pageScroller.addListener(function (status) {

          var scrollTop = status.offset.y;
          _this.pageScroller.contentEl.setAttribute('style', 'transform:none;left:0;top:' + status.offset.y * -1 + 'px;');
          for (var scene in _this.scene) {
            if (_this.scene[scene]) {
              //console.log(scene , _this.scene[scene]);	
              _this.scene[scene].refresh();
            };
          };

          if (front.common.header) {
            var _posY = 1;

            if (scrollTop >= _posY) {
              front.common.header.addClass('scroll');
            } else {
              front.common.header.removeClass('scroll');
            }

            if (scrollTop <= _posY) {
              front.common.header.removeClass('up down');
            } else {
              if (front.common.header.hasClass('scroll') || front.common.header.hasClass('down')) {
                if (_this.ptop > scrollTop) {
                  front.common.header.removeClass('down').addClass('up');
                }
              }

              if (front.common.header.hasClass('scroll') || front.common.header.hasClass('up')) {
                if (_this.ptop < scrollTop) {
                  if (!front.common.header.hasClass('down')) {
                    if (front.common.header.hasClass('hover')) front.common.header.removeClass('hover');
                  };
                  front.common.header.removeClass('up').addClass('down');
                }
              }
            }
            _this.ptop = scrollTop;
          };
          /*
          if(front.common.footer){
            if(scrollTop >= front.common.footer.offset().top){
              if(!front.common.header.hasClass('white')) front.common.header.addClass('white');
            };
          };
          */

          if (_this.pageUI) {
            if (scrollTop >= 100) {
              if (!_this.pageUIStatus) {
                _this.pageUI.addClass('actived');
              }
              _this.pageUIStatus = true;

            } else {
              if (_this.pageUIStatus) {
                _this.pageUI.removeClass('actived');
              }
              _this.pageUIStatus = false;
            }



            if ($('#dFoot').offset().top <= front.stage.height) {
              _this.pageUI.addClass('bottom');
            } else {
              _this.pageUI.removeClass('bottom');
            };
          };

        });
        this.pageScroller.update();
        this.pageScroller.track.xAxis.hide();
        this.familyScroller = Scrollbar.init($('.footer-family-list-scroller').find('.view')[0], {
          damping: 1,
          alwaysShowTracks: true,
          renderByPixels: false,
          continuousScrolling: true
        });

      };
      /* ====================================================
      ======================================================
      // headline
      ====================================================
      ====================================================*/
      if ($elementHeadline) {
        this.scene.headlineSticky = new ScrollMagic.Scene({
          triggerElement: $elementHeadline[0],
          triggerHook: 0
        })
          //.addIndicators({name: "headlineSticky"})
          .setPin($elementHeadline.find('.main-sticky')[0])
          .addTo(this.controller.pc);

        this.scene.headlineSticky.offset(0);
        this.scene.headlineSticky.duration($elementHeadline.height());
        this.scene.headlineSticky.on('enter', function () {
          $elementHeadline.addClass('actived');
        });
        this.scene.headlineSticky.on('leave', function () {
          $elementHeadline.removeClass('actived');
        });

        console.log('headline');
        this.tweener.headlineTweener1 = gsap.timeline({});
        // this.tweener.headlineTweener1.fromTo($elementHeadline.find('.headline-1'), { x: '0vw' }, { x: '-100vw', ease: Linear.easeNone }, 0);
        this.tweener.headlineTweener1.fromTo($elementHeadline.find('.headline-1'), { y: '0vh' }, { y: '-100vh', ease: Linear.easeNone }, 0);

        this.tweener.headlineTweener1.fromTo($elementHeadline.find('.headline-2'), { y: '100vh' }, { y: '0vh', ease: Linear.easeNone }, 0);
        this.scene.headlineScene1 = new ScrollMagic.Scene({
          triggerElement: $elementHeadline[0],
          triggerHook: 0
        })
          //.addIndicators({name: "headlineScene 1"})
          .addTo(this.controller.pc);

        this.scene.headlineScene1.offset(stageH * 0);
        this.scene.headlineScene1.duration(stageH * 0.7);
        this.scene.headlineScene1.setTween(this.tweener.headlineTweener1);



        this.scene.headlineScene21 = new ScrollMagic.Scene({
          triggerElement: $elementHeadline[0],
          triggerHook: 0
        })
          //.addIndicators({name: "headlineScene 2"})
          .addTo(this.controller.pc);

        this.scene.headlineScene21.offset(stageH * 0.7 + 70);
        this.scene.headlineScene21.duration(stageH * 0.7);
        this.scene.headlineScene21.on('enter', function () {
          $elementHeadline.find('.footnote-desc').addClass('actived');
        });
        this.scene.headlineScene21.on('leave', function (event) {
          if (event.state == 'BEFORE') $elementHeadline.find('.footnote-desc').removeClass('actived');
        });

        this.scene.headlineVideo = new ScrollMagic.Scene({
          triggerElement: $elementHeadline[0],
          triggerHook: 0
        })
          //.addIndicators({name: "headlineVideo"})
          .addTo(this.controller.pc);

        this.scene.headlineVideo.offset(0);
        this.scene.headlineVideo.duration($elementHeadline.height() - stageH);
        this.scene.headlineVideo.on('enter', function () {
          _this.videos.headline.play();
        });
        this.scene.headlineVideo.on('leave', function () {
          _this.videos.headline.stop();
        });

        this.scene.headlineHeader1 = new ScrollMagic.Scene({
          triggerElement: $elementHeadline[0],
          triggerHook: 0
        })
          //.addIndicators({name: "headlineHeader2"})
          .addTo(this.controller.pc);

        this.scene.headlineHeader1.offset(stageH * 0);
        this.scene.headlineHeader1.duration(stageH * 1.4);
        this.scene.headlineHeader1.on('enter', function () {
          $('#dHead').addClass('white');
        });

        this.scene.headlineHeader2 = new ScrollMagic.Scene({
          triggerElement: $elementHeadline[0],
          triggerHook: 0
        })
          //.addIndicators({name: "headlineHeader2"})
          .addTo(this.controller.pc);

        this.scene.headlineHeader2.offset(stageH * 1.4);
        this.scene.headlineHeader2.duration(stageH * 1.25);
        this.scene.headlineHeader2.on('enter', function () {
          $('#dHead').removeClass('white');
        });

        this.scene.headlineTop = new ScrollMagic.Scene({
          triggerElement: $elementHeadline[0],
          triggerHook: 1
        })
          //.addIndicators({name: "headlineTop"})
          .addTo(this.controller.pc);

        this.scene.headlineTop.offset(stageH * 1.65);
        this.scene.headlineTop.duration(stageH * 1);
        this.scene.headlineTop.on('enter', function () {
          $('#page-ui').addClass('white');
        });
        this.scene.headlineTop.on('leave', function (event) {
          if (event.state == 'BEFORE') $('#page-ui').removeClass('white');
        });
      };
      /* ====================================================
     ======================================================
     // Technology
     ====================================================
     ====================================================*/
      if ($elementTechnology) {
        this.scene.technologySticky = new ScrollMagic.Scene({
          triggerElement: $elementTechnology[0],
          triggerHook: 0
        })
          //.addIndicators({name: "aiSticky"})
          .setPin($elementTechnology.find('.main-sticky')[0])
          .addTo(this.controller.pc);

        this.scene.technologySticky.offset(0);
        this.scene.technologySticky.duration($elementTechnology.height() - stageH);
        this.scene.technologySticky.on('enter', function () {
          $elementTechnology.find('h2').addClass('actived');
        });
        this.scene.technologySticky.on('leave', function () {
          $elementTechnology.find('h2').removeClass('actived');
        });

        this.tweener.technologyTweener1 = gsap.timeline({});
        var i = 0;
        _this.tweener.technologyTweener1.fromTo($elementTechnology.find('.sentence-1 .char-line'), { display: 'none' }, { display: 'block' }, i);
        $elementTechnology.find('.sentence-1 .char-words > .char-parent').each(function () {
          var $element = $(this);
          var $word = $(this).find('.char-child');
          _this.tweener.technologyTweener1.fromTo($element, { display: 'none' }, { display: 'block' }, i);
          _this.tweener.technologyTweener1.fromTo($word, { alpha: 0 }, { alpha: 1, ease: Linear.easeNone }, i);
          i++;
        });
        _this.tweener.technologyTweener1.fromTo($elementTechnology.find('.sentence-1 .char-line'), { display: 'block' }, { display: 'none' }, i);

        this.scene.technologyScene1 = new ScrollMagic.Scene({
          triggerElement: $elementTechnology[0],
          triggerHook: 0.5
        })
          //.addIndicators({name: "headlineScene 1"})
          .addTo(this.controller.pc);

        this.scene.technologyScene1.offset(stageH * 0);
        this.scene.technologyScene1.duration(stageH * 1);
        this.scene.technologyScene1.setTween(this.tweener.technologyTweener1);

        this.tweener.technologyTweener2 = gsap.timeline({});
        var i = 0;
        _this.tweener.technologyTweener2.fromTo($elementTechnology.find('.sentence-2 .char-line'), { display: 'none' }, { display: 'block' }, i);
        $elementTechnology.find('.sentence-2 .char-words > .char-parent').each(function () {
          var $element = $(this);
          var $word = $(this).find('.char-child');
          _this.tweener.technologyTweener2.fromTo($element, { display: 'none' }, { display: 'block', ease: Linear.easeNone }, i);
          _this.tweener.technologyTweener2.fromTo($word, { alpha: 0 }, { alpha: 1 }, i);
          i++;
        });
        _this.tweener.technologyTweener2.fromTo($elementTechnology.find('.sentence-2 .char-line'), { display: 'block' }, { display: 'none' }, i);

        this.scene.technologyScene2 = new ScrollMagic.Scene({
          triggerElement: $elementTechnology[0],
          triggerHook: 0.5
        })
          //.addIndicators({name: "headlineScene 1"})
          .addTo(this.controller.pc);

        this.scene.technologyScene2.offset(stageH * 1);
        this.scene.technologyScene2.duration(stageH * 1);
        this.scene.technologyScene2.setTween(this.tweener.technologyTweener2);

        this.scene.technologyScene3 = new ScrollMagic.Scene({
          triggerElement: $elementTechnology[0],
          triggerHook: 0.5
        })
          //.addIndicators({name: "headlineScene 1"})
          .addTo(this.controller.pc);

        gsap.set($elementTechnology.find('.desc'), { y: 40, alpha: 0 });
        gsap.set($elementTechnology.find('.btns'), { y: 40, alpha: 0 });

        this.scene.technologyScene3.offset(stageH * 2.0);
        this.scene.technologyScene3.on('enter', function () {
          gsap.to($elementTechnology.find('.desc'), { delay: 0, duration: 0.6, y: 0, alpha: 1, ease: Back.easeOut });
          gsap.to($elementTechnology.find('.btns'), { delay: 0.1, duration: 0.6, y: 0, alpha: 1, ease: Back.easeOut });
        });

        this.scene.technologyScene3.on('leave', function () {
          gsap.to($elementTechnology.find('.desc'), { delay: 0, duration: 0.6, y: 40, alpha: 0, ease: Back.easeOut });
          gsap.to($elementTechnology.find('.btns'), { delay: 0, duration: 0.6, y: 40, alpha: 0, ease: Back.easeOut });
        });

        this.scene.technologyHeader = new ScrollMagic.Scene({
          triggerElement: $elementTechnology[0],
          triggerHook: 0
        })
          //.addIndicators({name: "$elementTechnology"})
          .addTo(this.controller.pc);

        this.scene.technologyHeader.offset(stageH * 0);
        this.scene.technologyHeader.duration(stageH * 3.0);
        this.scene.technologyHeader.on('enter', function () {
          $('#dHead').removeClass('white');
        });

        this.scene.technologyTop = new ScrollMagic.Scene({
          triggerElement: $elementTechnology[0],
          triggerHook: 1
        })
          //.addIndicators({name: "technologyTop"})
          .addTo(this.controller.pc);

        this.scene.technologyTop.offset(stageH * 0);
        this.scene.technologyTop.duration(stageH * 3.0);
        this.scene.technologyTop.on('enter', function () {
          $('#page-ui').removeClass('white');
        });
      };
      /* ====================================================
      ======================================================
      // AI
      ====================================================
      ====================================================*/
      if ($elementAI) {
        $elementAI.find('.title').attr('style', '');
        $elementAI.find('.list-item').eq(0).attr('style', '');
        $elementAI.find('.list-item').eq(1).attr('style', '');
        $elementAI.find('.list-item').eq(2).attr('style', '');

        this.scene.aiSticky = new ScrollMagic.Scene({
          triggerElement: $elementAI[0],
          triggerHook: 0
        })
          //.addIndicators({name: "aiSticky"})
          .setPin($elementAI.find('.main-sticky')[0])
          .addTo(this.controller.pc);

        this.scene.aiSticky.offset(0);
        this.scene.aiSticky.duration($elementAI.height() - stageH);

        // this.scene.aiVideo = new ScrollMagic.Scene({
        //   triggerElement: $elementAI[0],
        //   triggerHook: 1
        // })
        //   //.addIndicators({name: "aiVideo"})
        //   .addTo(this.controller.pc);

        // this.scene.aiVideo.offset(0);
        // this.scene.aiVideo.duration($elementAI.height() + stageH);
        // this.scene.aiVideo.on('enter', function () {
        //   _this.videos.ai.play();
        // });
        // this.scene.aiVideo.on('leave', function () {
        //   _this.videos.ai.stop();
        // });

        this.scene.aiScene0 = new ScrollMagic.Scene({
          triggerElement: $elementAI[0],
          triggerHook: 0
        })
          //.addIndicators({name: "aiVideo"})
          .addTo(this.controller.pc);

        this.scene.aiScene0.on('enter', function () {
          $elementAI.find('.title').addClass('actived');
          $elementAI.find('h2').addClass('actived');
        });
        this.scene.aiScene0.on('leave', function () {
          $elementAI.find('.title').removeClass('actived');
          $elementAI.find('h2').removeClass('actived');
        });


        this.tweener.aiTweener1 = gsap.timeline({});
        this.tweener.aiTweener1.fromTo($elementAI.find('.title'), { alpha: 0 }, { alpha: 1, ease: Linear.easeNone }, 0);
        this.tweener.aiTweener1.fromTo($elementAI.find('.list-inner'), { x: '100vw' }, { x: '0vw', ease: Linear.easeNone }, 0);
        //this.tweener.aiTweener1.fromTo($elementAI.find('.main-sticky-inner') , { y : '25vh' } , { y : '0vh' , ease:Linear.easeNone} , 0);
        this.scene.aiScene1 = new ScrollMagic.Scene({
          triggerElement: $elementAI[0],
          triggerHook: 1
        })
          //.addIndicators({name: "headlineScene 1"})
          .addTo(this.controller.pc);

        this.scene.aiScene1.offset(stageH * 0);
        this.scene.aiScene1.duration(stageH * 1);
        this.scene.aiScene1.setTween(this.tweener.aiTweener1);

        var aiCardWidth = 0;
        if (stageW > 1440) {
          aiCardWidth = 80;
        } else {
          aiCardWidth = 60;
        };

        this.tweener.aiTweener2 = gsap.timeline({});
        this.tweener.aiTweener2.fromTo($elementAI.find('.list-item').eq(0), { width: $elementAI.find('.list-item:eq(0) .item-inner').innerWidth() }, { width: aiCardWidth, ease: Linear.easeNone }, 0);
        this.scene.aiScene2 = new ScrollMagic.Scene({
          triggerElement: $elementAI[0],
          triggerHook: 0
        })
          //.addIndicators({name: "headlineScene 1"})
          .addTo(this.controller.pc);

        this.scene.aiScene2.on('enter', function () {
          $elementAI.find('.list-item').eq(0).removeClass('actived');
        });
        this.scene.aiScene2.on('leave', function (event) {
          //console.log(event.state);
          if (event.state == 'AFTER') $elementAI.find('.list-item').eq(0).addClass('actived');
        });


        this.scene.aiScene2.offset(stageH * 0.25);
        this.scene.aiScene2.duration(stageH * 0.7);
        this.scene.aiScene2.setTween(this.tweener.aiTweener2);

        this.tweener.aiTweener3 = gsap.timeline({});
        this.tweener.aiTweener3.fromTo($elementAI.find('.list-item').eq(1), { width: $elementAI.find('.list-item:eq(1) .item-inner').innerWidth() }, { width: aiCardWidth, ease: Linear.easeNone }, 0);
        this.scene.aiScene3 = new ScrollMagic.Scene({
          triggerElement: $elementAI[0],
          triggerHook: 0
        })
          //.addIndicators({name: "headlineScene 1"})
          .addTo(this.controller.pc);

        this.scene.aiScene3.offset(stageH * 0.95);
        this.scene.aiScene3.duration(stageH * 0.7);
        this.scene.aiScene3.setTween(this.tweener.aiTweener3);

        this.scene.aiScene3.on('enter', function () {
          $elementAI.find('.list-item').eq(1).removeClass('actived');
        });
        this.scene.aiScene3.on('leave', function (event) {
          //console.log(event.state);
          if (event.state == 'AFTER') $elementAI.find('.list-item').eq(1).addClass('actived');
        });

        this.scene.aiHeader = new ScrollMagic.Scene({
          triggerElement: $elementAI[0],
          triggerHook: 0
        })
          //.addIndicators({name: "aiHeader"})
          .addTo(this.controller.pc);

        this.scene.aiHeader.offset(0);
        this.scene.aiHeader.duration($elementAI.height());
        this.scene.aiHeader.on('enter', function () {
          $('#dHead').addClass('white');
        });

        this.scene.aiTop = new ScrollMagic.Scene({
          triggerElement: $elementAI[0],
          triggerHook: 1
        })
          //.addIndicators({name: "aiTop"})
          .addTo(this.controller.pc);

        this.scene.aiTop.offset(0);
        this.scene.aiTop.duration($elementAI.height());
        this.scene.aiTop.on('enter', function () {
          $('#page-ui').addClass('white');
        });
      };
      /* ====================================================
      ======================================================
      // ai coswear
      ====================================================
      ====================================================*/
      if ($elementPrice) {
        this.scene.priceSticky = new ScrollMagic.Scene({
          triggerElement: $elementPrice[0],
          triggerHook: 0
        })
          //.addIndicators({name: "aiSticky"})
          .setPin($elementPrice.find('.main-sticky')[0])
          .addTo(this.controller.pc);

        this.scene.priceSticky.offset(0);
        this.scene.priceSticky.duration($elementPrice.height() - stageH);
        this.scene.priceSticky.on('enter', function () {
          $('#dHead').removeClass('white');
          $elementPrice.find('h2').addClass('actived');
        });
        this.scene.priceSticky.on('leave', function () {
          $elementPrice.find('h2').removeClass('actived');
        });

        this.tweener.priceTweener1 = gsap.timeline({});
        this.tweener.priceTweener1.fromTo($elementPrice.find('.inner-bottom em'), { alpha: '0' }, { alpha: '1', ease: Linear.easeNone }, 0);
        this.tweener.priceTweener1.fromTo($elementPrice.find('.inner-bottom em'), { y: '200px' }, { y: '0', ease: Linear.easeNone }, 0);
        this.scene.priceScene1 = new ScrollMagic.Scene({
          triggerElement: $elementPrice[0],
          triggerHook: 1
        })
          //.addIndicators({name: "headlineScene 1"})
          .addTo(this.controller.pc);

        this.scene.priceScene1.offset(stageH * 1);
        this.scene.priceScene1.duration(stageH * 1);
        this.scene.priceScene1.setTween(this.tweener.priceTweener1);




        this.scene.priceHeader = new ScrollMagic.Scene({
          triggerElement: $elementPrice[0],
          triggerHook: 0
        })
          //.addIndicators({name: "$elementPrice"})
          .addTo(this.controller.pc);

        this.scene.priceHeader.offset(stageH * 1);
        this.scene.priceHeader.duration(stageH * 2.5);
        this.scene.priceHeader.on('enter', function () {
          $('#dHead').removeClass('white');
        });


        this.scene.priceTop = new ScrollMagic.Scene({
          triggerElement: $elementPrice[0],
          triggerHook: 1
        })
          //.addIndicators({name: "priceTop"})
          .addTo(this.controller.pc);

        this.scene.priceTop.offset(stageH * 1);
        this.scene.priceTop.duration(stageH * 2.5);
        this.scene.priceTop.on('enter', function () {
          $('#page-ui').remove('white');
        });
      };
      /* ====================================================
      ======================================================
      // patent
      ====================================================
      ====================================================*/
      if ($elementPatent) {
        $elementPatent.find('.cate').attr('style', '');
        $elementPatent.find('.title').attr('style', '');
        $elementPatent.find('.list-inner').attr('style', '');
        $elementPatent.find('.title .sentence-1').attr('style', '');
        $elementPatent.find('.title .sentence-2').attr('style', '');
        $elementPatent.find('.list-inner .list-cell').each(function () { $(this).find('.list-items').attr('style', ''); });
        if ($elementPatent.hasClass('board')) $elementPatent.removeClass('board complete');

        this.scene.patentSticky = new ScrollMagic.Scene({
          triggerElement: $elementPatent[0],
          triggerHook: 0
        })
          //.addIndicators({name: "aiSticky"})
          .setPin($elementPatent.find('.main-sticky')[0])
          .addTo(this.controller.pc);

        this.scene.patentSticky.offset(0);
        this.scene.patentSticky.duration($elementPatent.height() - stageH);
        this.scene.patentSticky.on('enter', function () {
          $elementPatent.find('h2').addClass('actived');
        });
        this.scene.patentSticky.on('leave', function () {
          $elementPatent.find('h2').removeClass('actived');
        });

        this.tweener.patentTweener1 = gsap.timeline({});
        this.tweener.patentTweener1.fromTo($elementPatent.find('.cate'), { alpha: '0' }, { alpha: '1', ease: Linear.easeNone }, 0);

        this.scene.patentScene1 = new ScrollMagic.Scene({
          triggerElement: $elementPatent[0],
          triggerHook: 0
        })
          //.addIndicators({name: "headlineScene 1"})
          .addTo(this.controller.pc);

        this.scene.patentScene1.offset(stageH * 0);
        this.scene.patentScene1.duration(stageH * 0.2);
        this.scene.patentScene1.setTween(this.tweener.patentTweener1);

        this.scene.patentScene1.on('enter', function () {
          $elementPatent.find('h2').addClass('actived');
          $('#dHead').removeClass('white');
        });
        this.scene.aiScene0.on('leave', function () {
          $elementPatent.find('h2').removeClass('actived');
        });

        this.tweener.patentTweener3 = gsap.timeline({});
        this.tweener.patentTweener3.fromTo($elementPatent.find('.list-inner'), { x: '0' }, { x: $elementPatent.find('.list').width() - $elementPatent.find('.list-inner').width(), ease: Linear.easeNone }, 0);

        this.scene.patentScene3 = new ScrollMagic.Scene({
          triggerElement: $elementPatent[0],
          triggerHook: 0
        })
          //.addIndicators({name: "headlineScene 1"})
          .addTo(this.controller.pc);

        this.scene.patentScene3.offset(stageH * 0.5);
        this.scene.patentScene3.duration(stageH);
        this.scene.patentScene3.setTween(this.tweener.patentTweener3);
        this.scene.patentScene3.on('enter', function () {
          $('#dHead').removeClass('white');
        });

        $elementPatent.find('.list-inner .list-cell').each(function () {
          var $element = $(this);
          var $listItems = $(this).find('.list-items');
          var $index = $(this).index();
          _this.tweener['patentTweener4' + $index] = gsap.timeline({});

          _this.tweener['patentTweener4' + $index].fromTo($listItems, { y: 0 }, { y: 0, ease: Linear.easeNone });
          _this.tweener['patentTweener4' + $index].to($listItems, { y: 0, ease: Linear.easeNone });

          _this.scene['patentScene4' + $index] = new ScrollMagic.Scene({
            triggerElement: $elementPatent[0],
            triggerHook: 0
          })
            //.addIndicators({name: "headlineScene 1"})
            .addTo(_this.controller.pc);

          _this.scene['patentScene4' + $index].offset(stageH * 1);
          _this.scene['patentScene4' + $index].duration(stageH * 5);
          _this.scene['patentScene4' + $index].setTween(_this.tweener['patentTweener4' + $index]);

        });

        this.scene.patentHeader = new ScrollMagic.Scene({
          triggerElement: $elementPatent[0],
          triggerHook: 0
        })
          //.addIndicators({name: "patentHeader"})
          .addTo(this.controller.pc);

        this.scene.patentHeader.offset(stageH * 0);
        this.scene.patentHeader.duration(stageH * 7.0);
        this.scene.patentHeader.on('enter', function () {
          $('#dHead').addClass('white');
        });

        this.scene.patentTop = new ScrollMagic.Scene({
          triggerElement: $elementPatent[0],
          triggerHook: 1
        })
          //.addIndicators({name: "patentTop"})
          .addTo(this.controller.pc);

        this.scene.patentTop.offset(stageH * 0);
        this.scene.patentTop.duration(stageH * 7.0);
        this.scene.patentTop.on('enter', function () {
          $('#page-ui').addClass('white');
        });
      };
    } else {
      if (this.pageScroller) {
        console.log('pc page scroller disabled');
        this.pageScroller.destroy();
        this.pageScroller = null;
        this.familyScroller.destroy();
        this.familyScroller = null;
      };
      if (pW != this.stage.width) {
        this.sceneReset();
        /* ====================================================
        ======================================================
        // headline
        ====================================================
        ====================================================*/
        if ($elementHeadline) {
          this.scene.headlineSticky = new ScrollMagic.Scene({
            triggerElement: $elementHeadline[0],
            triggerHook: 0
          })
            //.addIndicators({name: "headlineSticky"})
            //.setPin($elementHeadline.find('.main-sticky')[0])
            .addTo(this.controller.mobile);

          this.scene.headlineSticky.offset(0);
          this.scene.headlineSticky.duration($elementHeadline.height());
          this.scene.headlineSticky.on('enter', function () {
            $elementHeadline.addClass('actived');
          });
          this.scene.headlineSticky.on('leave', function () {
            $elementHeadline.removeClass('actived');
          });

          this.tweener.headlineTweener1 = gsap.timeline({});
          this.tweener.headlineTweener1.fromTo($elementHeadline.find('.headline-1'), { y: '0vh' }, { y: '-100vh', ease: Linear.easeNone }, 0);
          this.tweener.headlineTweener1.fromTo($elementHeadline.find('.headline-2'), { y: '100vh' }, { y: '0vh', ease: Linear.easeNone }, 0);
          this.scene.headlineScene1 = new ScrollMagic.Scene({
            triggerElement: $elementHeadline[0],
            triggerHook: 0
          })
            //.addIndicators({name: "headlineScene 1"})
            .addTo(this.controller.mobile);

          this.scene.headlineScene1.offset(stageH * 0);
          this.scene.headlineScene1.duration(stageH * 1);
          this.scene.headlineScene1.setTween(this.tweener.headlineTweener1);


          this.tweener.headlineTweener2 = gsap.timeline({});
          this.tweener.headlineTweener2.fromTo($elementHeadline.find('.headline-2 .front'), { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, { clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)', ease: Linear.easeNone }, 0);
          this.tweener.headlineTweener2.fromTo($elementHeadline.find('.headline-2 .back'), { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }, { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', ease: Linear.easeNone }, 0);
          this.tweener.headlineTweener2.fromTo($elementHeadline.find('.bg'), { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, { clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)', ease: Linear.easeNone }, 0);
          this.scene.headlineScene2 = new ScrollMagic.Scene({
            triggerElement: $elementHeadline[0],
            triggerHook: 0
          })
            //.addIndicators({name: "headlineScene 2"})
            .addTo(this.controller.mobile);

          this.scene.headlineScene2.offset(stageH * 1);
          this.scene.headlineScene2.duration(stageH * 1);
          this.scene.headlineScene2.setTween(this.tweener.headlineTweener2);



          this.scene.headlineScene21 = new ScrollMagic.Scene({
            triggerElement: $elementHeadline[0],
            triggerHook: 0
          })
            //.addIndicators({name: "headlineScene 2"})
            .addTo(this.controller.mobile);

          this.scene.headlineScene21.offset(stageH * 0.7 + 300);
          this.scene.headlineScene21.duration(stageH * 0.7);
          this.scene.headlineScene21.on('enter', function () {
            $elementHeadline.find('.footnote-desc').addClass('actived');
          });
          this.scene.headlineScene21.on('leave', function (event) {
            if (event.state == 'BEFORE') $elementHeadline.find('.footnote-desc').removeClass('actived');
          });


          this.scene.headlineVideo = new ScrollMagic.Scene({
            triggerElement: $elementHeadline[0],
            triggerHook: 0
          })
            //.addIndicators({name: "headlineVideo"})
            .addTo(this.controller.mobile);

          this.scene.headlineVideo.offset(0);
          this.scene.headlineVideo.duration($elementHeadline.height() - stageH);
          this.scene.headlineVideo.on('enter', function () {
            cube.play();
          });
          this.scene.headlineVideo.on('leave', function () {
            cube.pause();
          });

          this.scene.headlineHeader = new ScrollMagic.Scene({
            triggerElement: $elementHeadline[0],
            triggerHook: 0
          })
            //.addIndicators({name: "headlineHeader"})
            .addTo(this.controller.mobile);

          this.scene.headlineHeader.offset(stageH * 2);
          this.scene.headlineHeader.duration(stageH * 1.25);
          this.scene.headlineHeader.on('enter', function () {
            $('#dHead').addClass('white');
          });
          this.scene.headlineHeader.on('leave', function (event) {
            if (event.state == 'BEFORE') $('#dHead').removeClass('white');
          });

          this.scene.headlineTop = new ScrollMagic.Scene({
            triggerElement: $elementHeadline[0],
            triggerHook: 1
          })
            //.addIndicators({name: "headlineTop"})
            .addTo(this.controller.mobile);

          this.scene.headlineTop.offset(stageH * 2);
          this.scene.headlineTop.duration(stageH * 1.25);
          this.scene.headlineTop.on('enter', function () {
            $('#page-ui').addClass('white');
          });
          this.scene.headlineTop.on('leave', function (event) {
            if (event.state == 'BEFORE') $('#page-ui').removeClass('white');
          });
        };
        /* ====================================================
        ======================================================
        // AI
        ====================================================
        ====================================================*/
        if ($elementAI) {
          $elementAI.find('.title').attr('style', '');
          $elementAI.find('.list-inner').attr('style', '');
          $elementAI.find('.list-item').eq(0).attr('style', '').removeClass('actived');
          $elementAI.find('.list-item').eq(1).attr('style', '').removeClass('actived');

          this.tweener.aiTweener1 = gsap.timeline({});
          this.tweener.aiTweener1.fromTo($elementAI.find('.title'), { alpha: 0, y: 40 }, { duration: 0.6, y: 0, alpha: 1, ease: Power3.easeOut }, 0);

          this.scene.aiScene0 = new ScrollMagic.Scene({
            triggerElement: $elementAI.find('.title')[0],
            triggerHook: 1
          })
            //.addIndicators({name: "aiScene0"})
            .addTo(this.controller.mobile);

          this.scene.aiScene0.on('enter', function () {
            $elementAI.find('.title').addClass('actived');
          });
          this.scene.aiScene0.on('leave', function () {
            $elementAI.find('.title').removeClass('actived');
          });
          this.scene.aiScene0.setTween(this.tweener.aiTweener1);

          $elementAI.find('.list-item').each(function () {
            _this.tweener['aiTweener' + $(this).index()] = gsap.timeline({});
            _this.tweener['aiTweener' + $(this).index()].fromTo($(this), { alpha: 0, y: 40 }, { duration: 0.6, y: 0, alpha: 1, ease: Power3.easeOut }, 0);

            _this.scene.aiScene0 = new ScrollMagic.Scene({
              triggerElement: $(this)[0],
              triggerHook: 1
            })
              //.addIndicators({name: "aiTweener"})
              .addTo(_this.controller.mobile);
            _this.scene.aiScene0.setTween(_this.tweener['aiTweener' + $(this).index()]);
          });

          // this.scene.aiVideo = new ScrollMagic.Scene({
          //   triggerElement: $elementAI[0],
          //   triggerHook: 1
          // })
          //   //.addIndicators({name: "aiVideo"})
          //   .addTo(this.controller.mobile);

          // this.scene.aiVideo.offset(0);
          // this.scene.aiVideo.duration($elementAI.height() + stageH);
          // this.scene.aiVideo.on('enter', function () {
          //   _this.videos.ai.play();
          // });
          // this.scene.aiVideo.on('leave', function () {
          //   _this.videos.ai.stop();
          // });

          this.scene.aiHeader = new ScrollMagic.Scene({
            triggerElement: $elementAI[0],
            triggerHook: 0
          })
            //.addIndicators({name: "aiHeader"})
            .addTo(this.controller.mobile);

          this.scene.aiHeader.offset(0);
          this.scene.aiHeader.duration($elementAI.height());
          this.scene.aiHeader.on('enter', function () {
            $('#dHead').addClass('white');
          });

          this.scene.aiTop = new ScrollMagic.Scene({
            triggerElement: $elementAI[0],
            triggerHook: 1
          })
            //.addIndicators({name: "aiTop"})
            .addTo(this.controller.mobile);

          this.scene.aiTop.offset(0);
          this.scene.aiTop.duration($elementAI.height());
          this.scene.aiTop.on('enter', function () {
            $('#page-ui').addClass('white');
          });
        };
        /* ====================================================
        ======================================================
        // Technology
        ====================================================
        ====================================================*/
        if ($elementTechnology) {
          this.tweener.technologyTweener1 = gsap.timeline({});
          var i = 0;
          _this.tweener.technologyTweener1.fromTo($elementTechnology.find('.sentence-1 .char-line'), { display: 'none' }, { display: 'block' }, i);
          $elementTechnology.find('.sentence-1 .char-words > .char-parent').each(function () {
            var $element = $(this);
            var $word = $(this).find('.char-child');
            _this.tweener.technologyTweener1.fromTo($element, { display: 'none' }, { display: 'block' }, i);
            _this.tweener.technologyTweener1.fromTo($word, { alpha: 0 }, { alpha: 1, ease: Linear.easeNone }, i);
            i++;
          });
          _this.tweener.technologyTweener1.fromTo($elementTechnology.find('.sentence-1 .char-line'), { display: 'block' }, { display: 'none' }, i);

          this.scene.technologyScene1 = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0.5
          })
            //.addIndicators({name: "headlineScene 1"})
            .addTo(this.controller.mobile);

          this.scene.technologyScene1.offset(stageH * 0);
          this.scene.technologyScene1.duration(stageH * 1);
          this.scene.technologyScene1.setTween(this.tweener.technologyTweener1);

          this.tweener.technologyTweener2 = gsap.timeline({});
          var i = 0;
          _this.tweener.technologyTweener2.fromTo($elementTechnology.find('.sentence-2 .char-line'), { display: 'none' }, { display: 'block' }, i);
          $elementTechnology.find('.sentence-2 .char-words > .char-parent').each(function () {
            var $element = $(this);
            var $word = $(this).find('.char-child');
            _this.tweener.technologyTweener2.fromTo($element, { display: 'none' }, { display: 'block', ease: Linear.easeNone }, i);
            _this.tweener.technologyTweener2.fromTo($word, { alpha: 0 }, { alpha: 1 }, i);
            i++;
          });
          _this.tweener.technologyTweener2.fromTo($elementTechnology.find('.sentence-2 .char-line'), { display: 'block' }, { display: 'none' }, i);

          this.scene.technologyScene2 = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0.5
          })
            //.addIndicators({name: "headlineScene 1"})
            .addTo(this.controller.mobile);

          this.scene.technologyScene2.offset(stageH * 1);
          this.scene.technologyScene2.duration(stageH * 1);
          this.scene.technologyScene2.setTween(this.tweener.technologyTweener2);

          this.scene.technologyScene3 = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0.5
          })
            //.addIndicators({name: "headlineScene 1"})
            .addTo(this.controller.mobile);

          gsap.set($elementTechnology.find('.desc'), { y: 40, alpha: 0 });
          gsap.set($elementTechnology.find('.btns'), { y: 40, alpha: 0 });

          this.scene.technologyScene3.offset(stageH * 2.0);
          this.scene.technologyScene3.on('enter', function () {
            gsap.to($elementTechnology.find('.desc'), { delay: 0, duration: 0.6, y: 0, alpha: 1, ease: Back.easeOut });
            gsap.to($elementTechnology.find('.btns'), { delay: 0.1, duration: 0.6, y: 0, alpha: 1, ease: Back.easeOut });
          });

          this.scene.technologyScene3.on('leave', function () {
            gsap.to($elementTechnology.find('.desc'), { delay: 0, duration: 0.6, y: 40, alpha: 0, ease: Back.easeOut });
            gsap.to($elementTechnology.find('.btns'), { delay: 0, duration: 0.6, y: 40, alpha: 0, ease: Back.easeOut });
          });

          this.scene.technologyHeader = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0
          })
            //.addIndicators({name: "technologyHeader"})
            .addTo(this.controller.mobile);

          this.scene.technologyHeader.offset(stageH * 0);
          this.scene.technologyHeader.duration($elementTechnology.height());
          this.scene.technologyHeader.on('enter', function () {
            $('#dHead').removeClass('white');
          });

          this.scene.technologyTop = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 1
          })
            //.addIndicators({name: "technologyTop"})
            .addTo(this.controller.mobile);

          this.scene.technologyTop.offset(stageH * 0);
          this.scene.technologyTop.duration($elementTechnology.height());
          this.scene.technologyTop.on('enter', function () {
            $('#page-ui').removeClass('white');
          });
        };
        /* ====================================================
        ======================================================
        // patent
        ====================================================
        ====================================================*/
        if ($elementPatent) {
          $elementPatent.find('.cate').attr('style', '');
          $elementPatent.find('.title').attr('style', '');
          $elementPatent.find('.list-inner').attr('style', '');
          $elementPatent.find('.title .sentence-1').attr('style', '');
          $elementPatent.find('.title .sentence-2').attr('style', '');
          $elementPatent.find('.list-inner .list-cell').each(function () { $(this).find('.list-items').attr('style', ''); });


          if (!$elementPatent.hasClass('board')) {
            $elementPatent.addClass('board').removeClass('complete');
            mainPatent.reset();
          };


          this.tweener.patentTweener0 = gsap.timeline({});
          this.tweener.patentTweener0.fromTo($elementPatent.find('.cate'), { alpha: 0, y: 40 }, { duration: 0.6, y: 0, alpha: 1, ease: Power3.easeOut }, 0);

          this.scene.patentScene0 = new ScrollMagic.Scene({
            triggerElement: $elementPatent.find('.cate')[0],
            triggerHook: 1
          })
            //.addIndicators({name: "patentScene0"})
            .addTo(this.controller.mobile);

          this.scene.patentScene0.setTween(this.tweener.patentTweener0);

          this.tweener.patentTweener1 = gsap.timeline({});
          this.tweener.patentTweener1.fromTo($elementPatent.find('.title'), { alpha: 0, y: 40 }, { duration: 0.6, y: 0, alpha: 1, ease: Power3.easeOut }, 0);

          this.scene.patentScene1 = new ScrollMagic.Scene({
            triggerElement: $elementPatent.find('.title')[0],
            triggerHook: 1
          })
            //.addIndicators({name: "patentScene1"})
            .addTo(this.controller.mobile);

          this.scene.patentScene1.setTween(this.tweener.patentTweener1);

          this.tweener.patentTweener2 = gsap.timeline({});
          this.tweener.patentTweener2.fromTo($elementPatent.find('.list-inner'), { alpha: 0, y: 40, x: 0 }, { duration: 0.6, y: 0, x: 0, alpha: 1, ease: Power3.easeOut }, 0);

          this.scene.patentScene2 = new ScrollMagic.Scene({
            triggerElement: $elementPatent.find('.list-inner')[0],
            triggerHook: 1
          })
            //.addIndicators({name: "patentScene2"})
            .addTo(this.controller.mobile);

          this.scene.patentScene2.setTween(this.tweener.patentTweener2);



          this.scene.patentVideo = new ScrollMagic.Scene({
            triggerElement: $elementPatent[0],
            triggerHook: 1
          })
            //.addIndicators({name: "patentVideo"})
            .addTo(this.controller.mobile);

          this.scene.patentVideo.offset(0);
          this.scene.patentVideo.duration($elementPatent.height() + stageH);
          this.scene.patentVideo.on('enter', function () {
            _this.videos.patent.play();
          });
          this.scene.patentVideo.on('leave', function () {
            _this.videos.patent.stop();
          });

          this.scene.patentHeader = new ScrollMagic.Scene({
            triggerElement: $elementPatent[0],
            triggerHook: 0
          })
            //.addIndicators({name: "patentHeader"})
            .addTo(this.controller.mobile);

          this.scene.patentHeader.offset(stageH * 0);
          this.scene.patentHeader.duration($elementPatent.height());
          this.scene.patentHeader.on('enter', function () {
            $('#dHead').addClass('white');
          });

          this.scene.patentTop = new ScrollMagic.Scene({
            triggerElement: $elementPatent[0],
            triggerHook: 1
          })
            //.addIndicators({name: "patentTop"})
            .addTo(this.controller.mobile);

          this.scene.patentTop.offset(stageH * 0);
          this.scene.patentTop.duration($elementPatent.height());
          this.scene.patentTop.on('enter', function () {
            $('#page-ui').addClass('white');
          });
        };
        /* ====================================================
        ======================================================
        // ai coswear
        ====================================================
        ====================================================*/
        if ($elementPrice) {

          this.scene.priceScroll = new ScrollMagic.Scene({
            triggerElement: $elementPrice[0],
            triggerHook: 1
          })
            //.addIndicators({name: "priceScroll"})
            .addTo(this.controller.mobile);

          this.scene.priceScroll.offset(0);
          this.scene.priceScroll.duration($elementPrice.innerHeight());
          this.scene.priceScroll.on('enter', function () {
            $('#page-ui').removeClass('white');
          });
        };
      };
    };
  },

  pageScrollerInit: function () {
    var _this = this;
    if (this.pageScrollerStatus) {
      if (!this.pageScroller) {
        //console.log('page scroller enbled');

      };
    };
  },
  pageScrollerDestory: function () {
    if (!this.pageScrollerStatus) {
      if (this.pageScroller) {
        //console.log('page scroller disabled');
      }
    };
  },

  sceneReset: function () {
    for (var scene in this.scene) {
      if (this.scene[scene]) {
        this.scene[scene].destroy(true);
        this.scene[scene] = null;
      };
      delete this.scene[scene];
    };
    gsap.globalTimeline.clear()

    for (var tweener in this.tweener) {
      if (this.tweener[tweener]) {
        this.tweener[tweener] = null;
      }
      delete this.tweener[tweener];
    };
  },

  sceneUpdate: function () {
    for (var scene in this.scene) {
      //console.log(scene , this.scene[scene]);
      //this.scene[scene].refresh();
      //this.scene[scene].update(true);
    };
  }
};

var $WINDOW = {
  // 釉뚮씪�곗� 湲곕낯 �ㅽ겕濡ㅻ컮 �쒖꽦��
  // $WINDOW.addFix();
  addFix: function () {
    $DOM.addClass(document.documentElement, 'fix');
  },
  // 釉뚮씪�곗� 湲곕낯 �ㅽ겕濡ㅻ컮 鍮꾪솢�깊솕
  // $WINDOW.removeFix();
  removeFix: function () {
    $DOM.removeClass(document.documentElement, 'fix');
  },
  // 釉뚮씪�곗� 湲곕낯 �ㅽ겕濡ㅻ컮 �ш린
  // $WINDOW.getScrollBarWidth();
  getScrollBarWidth: function () {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);

    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);

    return (w1 - w2);
  },
  // 留곹겕 �뚮씪硫뷀� 媛� 媛��몄삤湲�
  // $WINDOW.getParameter(value);
  getParameter: function (key) {
    var url = location.href;
    var spoint = url.indexOf("?");
    var query = url.substring(spoint, url.length);
    var keys = new Array;
    var values = new Array;
    var nextStartPoint = 0;
    while (query.indexOf("&", (nextStartPoint + 1)) > -1) {
      var item = query.substring(nextStartPoint, query.indexOf("&", (nextStartPoint + 1)));
      var p = item.indexOf("=");
      keys[keys.length] = item.substring(1, p);
      values[values.length] = item.substring(p + 1, item.length);
      nextStartPoint = query.indexOf("&", (nextStartPoint + 1));
    }
    item = query.substring(nextStartPoint, query.length);
    p = item.indexOf("=");
    keys[keys.length] = item.substring(1, p);
    values[values.length] = item.substring(p + 1, item.length);
    var value = "";
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] == key) {
        value = values[i];
      }
    }
    return value;
  },
  // 留곹겕 �댁떆�쒓렇 媛��몄삤湲�
  // $WINDOW.getHash();
  getHash: function () {
    var url = window.location.href;
    return url.substring(url.indexOf('#') + 1);
  },
  // 紐⑤컮�� �щ� 泥댄겕
  // $WINDOW.isMobile();
  isMobile: function () {
    return (navigator.userAgent.match(/iPhone|iPad|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || navigator.userAgent.match(/LG|SAMSUNG|Samsung/) != null);
  },
  // �꾩씠�⑤뱶 �꾨줈 泥댄겕
  // $WINDOW.isIpadPro();
  isIpadPro: function () {
    return (/iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) && !window.MSStream;
  },
  // �듭뒪 援щ쾭�� 泥댄겕
  // $WINDOW.isIE();
  isIE: function () {
    return (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (navigator.userAgent.toLowerCase().indexOf('msie') != -1);
  }
};

var $DOM = {
  // �섎━癒쇳듃 �붿냼 �뺤씤
  //	$DOM.element( Dom Element )
  element: function (_el) {
    if (_el) {
      if (_el.length > 0) {
        return _el[0];
      } else {
        return _el;
      };
    } else {
      console.log('Not Element');
    };
  },
  // �대옒�� 異붽�
  //	$DOM.addClass( Dom Element , Target Class )
  addClass: function (_el, _class) {
    $DOM.element(_el).classList.add(_class);
  },
  // �대옒�� 媛먯�
  //	$DOM.hasClass( Dom Element , Target Class )
  hasClass: function (_el, _class) {
    return $DOM.element(_el).classList.contains(_class);
  },
  // �대옒�� ��젣
  //	$DOM.removeClass( Dom Element , Target Class )
  removeClass: function (_el, _class) {
    $DOM.element(_el).classList.remove(_class);
  },
  // �곸쐞 �대옒�� 李얘린
  //	$DOM.closest( Dom Element , + Target Class )
  closest: function (_el, _selector) {
    var el = $DOM.element(_el);
    var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    var selector = '.' + _selector
    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      } else {
        el = el.parentElement;
      }
    }
    return null;
  },
  // �곸쐞 �대옒�� �꾩껜 李얘린
  //	$DOM.closestAll( Dom Element , + Target Class ) return array;
  closestAll: function (_el, _selector) {
    var arr = [];
    var el = $DOM.element(_el);
    while (el) {
      if (el && el.classList.contains(_selector)) {
        arr.push(el);
      };
      el = el.parentElement;
    };
    return arr;

  },
  // 媛숈� �곸뒪�� �ㅻⅨ �섎━癒쇳듃 李얘린
  // $DOM.siblings( DOM Element , Target Class )
  siblings: function (_el, _selector) {
    var el = $DOM.element(_el);
    return Array.from(el.parentNode.children).filter(function (sibling) {
      if (_selector) {
        if (sibling !== el && $DOM.hasClass(sibling, _selector)) return sibling;
      } else {
        return sibling !== el;
      };
    });
  },
  // 諛붾줈 �꾨옒 �먯떇 �섎━癒쇳듃�� 李얘린
  child: function (_el, _selector) {
    var el = $DOM.element(_el);
    if (el.children.length > 0) {
      return Array.from(el.children).filter(function (sibling) {
        if (_selector) {
          if (sibling !== el && $DOM.hasClass(sibling, _selector)) return sibling;
        } else {
          return sibling !== el;
        };
      });
    } else {
      console.log('Not Element');
    };
  },
  // 媛숈� �곸뒪�� �ㅼ쓬 �섎━癒쇳듃 李얘린
  // $DOM.next( DOM Element )
  next: function (_el) {
    return $DOM.element(_el).nextElementSibling;
  },
  // 媛숈� �곸뒪�� �댁쟾 �섎━癒쇳듃 李얘린
  // $DOM.prev( DOM Element )
  prev: function (_el) {
    return $DOM.element(_el).previousElementSibling;
  },
  // 遺�紐� �섎━癒쇳듃 李얘린
  // $DOM.parent( DOM Element )
  parent: function (_el) {
    return $DOM.element(_el).parentNode;
  },
  // attribute 媛� 媛��몄삤湲�
  // $DOM.getAttr( Dom Element , Attribute Name )
  getAttr: function (_el, _attr) {
    return $DOM.element(_el).getAttribute(_attr);
  },
  // attribute 媛� �ㅼ젙�섍린
  // $DOM.setAttr( Dom Element , Attribute Name , Value )
  setAttr: function (_el, _attr, _value) {
    $DOM.element(_el).setAttribute(_attr, _value);
  },
  // attribute 媛� �뺤씤�섍린
  // $DOM.hasAttr( Dom Element , Attribute Name )
  hasAttr: function (_el, _attr) {
    return $DOM.element(_el).hasAttribute(_attr);
  },
  // Element �몃뜳�ㅺ컪 媛��몄삤湲�
  // $DOM.index( Dom Element )
  getIndex: function (_el) {
    return Array.prototype.slice.call($DOM.element(_el).parentElement.children).indexOf($DOM.element(_el));
  },
  // Element Html 媛� 媛��몄삤湲�
  // $DOM.getHtml( Dom Element )
  getHtml: function (_el) {
    return $DOM.element(_el).innerHTML;
  },
  // Element Html 媛� �ㅼ젙�섍린
  // $DOM.setHtml( Dom Element , Html Text )
  // DOM TREE RESET
  setHtml: function (_el, _html) {
    $DOM.element(_el).innerHTML = _html;
  },
  // Element Html 媛� �ㅼ젙�섍린
  // $DOM.setAdjacentHtml( Dom Element , Position , Html Text )
  // <!-- beforebegin -->
  // <body>
  //	<!-- afterbegin -->
  //	<div></div>
  //	<!-- beforeend -->
  // </body>
  // <!-- afterend -->
  setAdjacentHtml: function (_el, _position, _html) {
    $DOM.element(_el).insertAdjacentHTML(_position, _html);
  }
};

var mainPatent = {

  container: null,
  listConatiner: null,
  cur: 1,
  len: 4,

  init: function () {
    var _this = this;
    this.container = $('.main-patent');
    this.listContainer = this.container.find('.list');
    $(document).on('click', '.btn-patent-more', function () {
      _this.more();
    });
  },

  more: function () {
    var _this = this;
    if (this.cur <= this.len - 1) {
      var i = 0;
      this.container.find('.list-cell').each(function () {
        if ($(this).index() >= (_this.cur * 4) && $(this).index() < ((_this.cur * 4) + 4)) {
          var _delay = i * 0.1;
          $(this).show();
          gsap.killTweensOf($(this).find('.list-items'));
          gsap.set($(this).find('.list-items'), { alpha: 0, y: 40 });
          gsap.to($(this).find('.list-items'), { duration: 0.4, delay: _delay, alpha: 1, y: 0, ease: Power2.easeOut });
          i++;
        };
      });
      if (this.cur == this.len - 1) this.container.addClass('complete').find('.btn-ui').hide();
      this.cur++;

    };


  },

  reset: function () {
    this.cur = 1;
    this.container.find('.list-cell').each(function () {
      $(this).attr('style', '');
      $(this).find('.list-items').attr('style', '');
    });
    this.container.find('.btn-ui').show();
  }
};

var mainPrice = {

  container: null,
  swiperArr: [],
  cur: 0,

  init: function () {
    var _this = this;
    this.container = $('.main-price');

    $(document).on('click', '.main-price .btn-tab-nav', function () {
      _this.cur = $(this).index();
      _this.sort();
    });

    this.container.find('.list-view .list-cell').each(function () {
      var swiper;
      var $element = $(this);
      if ($(this).find('.swiper-slide').length > 1) {
        swiper = new Swiper($element.find('.swiper')[0], {
          loop: false,
          simulateTouch: true,
          observeParents: true,
          observeSlideChildren: true,
          speed: 400,
          navigation: {
            nextEl: $element.find('.btn-swiper-slider-next')[0],
            prevEl: $element.find('.btn-swiper-slider-prev')[0]
          }
        });
      } else {
        swiper = null;
        $(this).addClass('none');
      };

      _this.swiperArr.push(swiper);
    });


    this.sort();

  },
  sort: function () {
    if (this.swiperArr[this.cur]) this.swiperArr[this.cur].update();
    this.container.find('.list-tab .btn-tab-nav').eq(this.cur).addClass('actived').siblings().removeClass('actived');
    this.container.find('.list-view .list-cell').eq(this.cur).addClass('actived').siblings().removeClass('actived').addClass('hide');
  }
};


function sequenceView(options) {
  var _this = this;
  this.impetus = null;
  this.wrapper = options.el;
  this.idx = options.index;
  this.container = this.wrapper.querySelector('.sequence-view');
  this.viewer = this.wrapper.querySelector('.sequence-data');
  this.image = {};
  this.image.data = [];
  this.image.state = 'loading';
  this.image.url = options.imageUrl;
  this.image.name = options.imageName;
  this.image.type = options.imageType;
  this.image.total = options.imageTotal;
  this.image.count = 0;
  this.frameIndex = 0;
  this.frameTotal = this.image.total;
  this.canvas = this.viewer.querySelector('canvas');
  this.ctx = this.canvas.getContext('2d');
  this.animationFrame = null;
  this.animationFrameStats = false;
  this.animationCur = 0;
  this.animationStats = 'stop';
  this.fpsValue = options.fps || 60;
  this.fps = 1000 / this.fpsValue;
  this.then = Date.now();
  this.startTime = this.then;
  this.now = 0;
  this.elapsed = 0;
  this.fpsCount = 0;

  //console.log(this.fpsValue);

  var $call = {
    onPlay: options.onPlay || false,
    onPause: options.onPause || false,
    onLoadStart: options.onLoadStart || false,
    onLoadEnd: options.onLoadEnd || false
  };

  this.init = function () {
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
  };

  this.draw = function (_index) {
    this.frameIndex = _index;
    //console.log(this.frameIndex);
    this.ctx.clearRect(0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight);
    if (this.image.data[this.frameIndex] && this.image.data[this.frameIndex].img && this.image.data[this.frameIndex].state == 'complete') {
      this.ctx.drawImage(this.image.data[this.frameIndex].img, 0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight);
    }
  };

  this.set = function () {
    for (var i = 0; i < this.image.total; i++) {
      var item = new this.img(i, this.image);
      this.image.data.push(item);
    };
  };

  this.img = function (_index, _options) {
    var index = _index,
      option = _options;

    this.imageLoadComplete = function () {
      this.state = 'complete';
      _this.image.count += 1;
      this.imageDraw();
    };

    this.imageLoadError = function () {
      this.state = 'error';
      _this.image.count += 1;
      this.imageDraw();
      console.log('load Error Index :: ' + index + '   ' + this.img.src + '  width : ' + this.img.naturalWidth);
    };

    this.imageDraw = function () {
      if (_this.image.total == _this.image.count) {
        //console.log('all Load Complete');
        _this.ready();
        _this.draw(_this.frameIndex);
        if ($call.onLoadEnd) $call.onLoadEnd.call(_this);
      };
    };

    this.img = new Image();
    this.img.addEventListener('load', this.imageLoadComplete.bind(this));
    this.img.addEventListener('error', this.imageLoadError.bind(this));

    //var _index = (index < 10) ? "0" + String(index) : String(index) ;
    var _index = String(index);
    this.img.src = _this.image.url + _this.image.name + (_index) + '.' + _this.image.type;


    //console.log(this.index);

  };

  this.ready = function () {
    this.wrapper.classList.add('ready');
  };

  this.reset = function (_options) {
    if (this.animationStats == 'play') this.stop();
    this.image.url = _options.url;
    this.image.name = _options.name;
    this.image.type = _options.type;
    this.image.total = parseFloat(_options.total);
    this.image.count = 0;
    this.frameIndex = 0;
    this.frameTotal = this.image.total;
    this.animationStats = 'stop';
    this.animationFrameStats = false;
    if (this.image.data && this.image.data.length > 0) this.image.data.length = 0;
    this.wrapper.classList.remove('ready');

    this.set();
  };

  this.resize = function () {
    this.canvas.style.width = this.container.offsetWidth + 'px';
    this.canvas.style.height = this.container.offsetHeight + 'px';
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
    this.draw(this.frameIndex);
  };

  this.render = function () {
    var _this = this;
    this.animationFrame = window.requestAnimFrame(function () {
      _this.render();
    });

    this.now = Date.now();
    this.elapsed = _this.now - _this.then;

    if (this.elapsed > this.fps) {

      this.then = this.now - (this.elapsed % this.fps);

      //	var sinceStart = this.now - this.startTime;
      //var currentFps = Math.round(1000 / (sinceStart / ++this.fpsCount) * 100) / 100;
      //console.log("Elapsed time= " + Math.round(sinceStart / 1000 * 100) / 100 + " secs @ " + currentFps + " fps.");					
      //$('#trace').html("Elapsed time= " + Math.round(sinceStart / 1000 * 100) / 100 + " secs @ " + currentFps + " fps.");			
      this.animationCur = (this.animationCur >= this.frameTotal - 1) ? 0 : this.animationCur = this.animationCur + 1;
      this.draw(this.animationCur);
      //$('#trace').html('cur :: ' + this.animationCur + '  len :: ' + this.frameTotal );			
    };
  };

  this.play = function () {
    //console.log('---- animation play --- ');		
    if (!this.animationFrameStats) {
      var _this = this;
      this.animationStats = 'play';
      this.animationFrame = window.requestAnimFrame(function () {
        _this.render();
      });
      this.animationFrameStats = true;
      if ($call.onPlay) $call.onPlay.call(_this);
    };
  };

  this.stop = function () {
    //console.log('---- animation stop --- ');
    this.animationStats = 'stop';
    if (this.animationFrame) window.cancelAnimFrame(this.animationFrame);
    this.animationFrameStats = false;
    if ($call.onPause) $call.onPause.call(_this);
  };

  this.setValue = function (value) {
    if (this.animationStats != 'play') {
      this.animationCur = value;
      this.draw(this.animationCur);
    };
  };

  this.load = function () {
    this.reset(this.image);
    if ($call.onLoadStart) $call.onLoadStart.call(_this);
  };

  this.init();
};

function video(options) {
  var _this = this;
  var $parentElement = options.el;
  var $auto = options.autoPlay || false;
  var $loop = options.loop || false;
  var $video = $parentElement.find('video')[0];
  var $videoState = true;
  var $resize = options.resize;
  var $call = {
    onPlay: options.onPlay || false,
    onPause: options.onPause || false,
    onEnd: options.onEnd || false,
    onError: options.onError || false,
    onInit: options.onInit || false,
    onLoadedData: options.onLoadedData || false
  };


  var $progress = options.progress;
  var $progressEl = options.progressEl;

  /*
  if($video.currentSrc == ''){
    $videoState = false;
  };
  */

  this.target = this;
  this.first = false;
  this.idx = options.idx;

  $video.onplay = function () {
    //console.log('intro video play');
    //console.log( _this.idx + ' video play');
    if ($videoState) {
      $parentElement.addClass('actived');
      if ($call.onPlay) $call.onPlay.call(_this);
      if ($progress && $progressEl) {
        //if($video.duration) gsap.to($progressEl , { duration : $video.duration , width : '100%' , ease:Linear.easeNone });
      };
      if (!_this.first) {
        _this.first = true;
      };
    };
  };
  $video.onplaying = function () {
    //console.log('intro video playing');
    //console.log( _this.idx + ' video playing');
    if ($videoState) $parentElement.addClass('actived');
    if ($progress && $progressEl) {
      //if($video.duration) gsap.to($progressEl , { duration : $video.duration , width : '100%' , ease:Linear.easeNone });
    };
  };
  $video.onpause = function () {
    //console.log( _this.idx + ' video pause');
    if ($videoState) {
      if ($call.onPause) $call.onPause.call(_this);
      if ($progress && $progressEl) {
        //console.log( _this.idx + ' video pause');
        //gsap.killTweensOf($progressEl);
        //gsap.set($progressEl , { width : 0 });
      };
    };
  };
  $video.onended = function () {
    //console.log('intro video ended');
    if ($videoState) {
      if ($loop) this.play();
      if ($call.onEnd) $call.onEnd.call(_this);
      if ($progress && $progressEl) {
        gsap.set($progressEl, { width: 0 });
      };
    }
  };

  $video.onloadeddata = function () {
    //console.log('intro video loadeddata ::' + $video.duration + ' : ' + _this.idx);
    if ($progress && $progressEl) {
      //console.log('intro video loadeddata ::' + $video.duration + ' : ' + _this.idx);
    }
    //if($auto) this.play();
    //$loadComState = true;
    $video.currentTime = 0;
    if ($call.onLoadedData) $call.onLoadedData.call(_this);
    if ($call.onInit) $call.onInit.call(_this);
  };
  $video.onerror = function () {
    //console.log('intro video error');
    if ($call.onError) $call.onError(_this);
    $videoState = false;
  };
  $video.onunload = function () {
    //console.log('intro video unload');
    $videoState = false;
  };

  this.play = function () {
    if ($videoState) $video.play();
  };

  this.stop = function () {
    if ($videoState) $video.pause();
  };

  this.reset = function () {
    if ($videoState) $video.currentTime = 0, $video.play();
  };

  this.seekTo = function (index) {
    if ($videoState) $video.currentTime = index;
  };

  this.volumn = function (number) {
    if ($videoState) $video.volumn = number;
  };

  this.muted = function (flag) {
    if ($videoState) $video.muted = flag;
  };

  this.controls = function (flag) {
    if ($videoState) $video.controls = flag;
  };

  this.resize = function () {
    //console.log($resize);
    if ($resize == false || $resize == undefined) return false;
    if ($videoState) {
      var videoParentTarget = $($video).parent();
      var videoTarget = $($video);
      var ratio = 16 / 9;

      var width = videoParentTarget.width(),
        pWidth, // player width, to be defined
        height = videoParentTarget.height(),
        pHeight; // player height, tbd
      // when screen aspect ratio differs from video, video must center and underlay one dimension
      if (width / ratio < height) { // if new video height < window height (gap underneath)
        pWidth = Math.ceil(height * ratio); // get new player width
        videoTarget.width(pWidth).height(height).css({ left: (width - pWidth) / 2, top: 0 }); // player width is greater, offset left; reset top
      } else { // new video width < window width (gap to right)
        pHeight = Math.ceil(width / ratio); // get new player height
        videoTarget.width(width).height(pHeight).css({ left: 0, top: (height - pHeight) / 2 }); // player height is greater, offset top; reset left
        //videoTarget.width(width).height(pHeight).css({left: 0, top: 0}); // player height is greater, offset top; reset left
      }


    }
    //console.log('intro resize');
  };

  this.getVideoDuration = function () {
    return $video.duration;
  };

  this.resize();
  window.addEventListener('resize', _this.resize);

  if ($auto) this.play();

};

function getTranslateValues(element) {
  const style = window.getComputedStyle(element)
  const matrix = style.transform || style.webkitTransform || style.mozTransform

  // No transform property. Simply return 0 values.
  if (matrix === 'none') {
    return {
      x: 0,
      y: 0,
      z: 0
    }
  }
};

window.addEventListener('DOMContentLoaded', front.ready);
window.addEventListener('load', front.load);
window.addEventListener('resize', front.resize);
window.addEventListener('scroll', front.scroll);

(function () {
  front.init();
})();


