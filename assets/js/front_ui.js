var front = {
  stage: {
    width: 0,
    height: 0,
    top: 0,
    ptop: 0,
    page: ''
  },
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
  },
  scroll: function () {
    front.stage.top = window.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;
    front.common.scroll();
  },

  common: {
    header: null,
    footer: null,

    init: function () {
      var _this = this;
      this.header = ($('#dHead').length > 0) ? $('#dHead') : null;
      this.footer = ($('#dFoot').length > 0) ? $('#dFoot') : null;
      front.stage.page = ($('.main-wrap').length > 0) ? 'main' : 'sub';
      effectData.init();

      $(document).on('click', '.btn-page-top', function () {
        if ($('.main-wrap').length > 0) {
          main.pageTopMove();
        } else {
          front.common.moveScroll(0, 400);
        };
      });

      if ($('.animation-view').length > 0) {
        setTimeout(function () {
          $('.animation-view').addClass('start');
        }, 500);
      }

      if ($('.intro-animation-item').length > 0) {
        setTimeout(function () {
          var i = 0;
          $('.intro-animation-item').each(function () {
            var _delay = i * 0.5;
            $(this).addClass('actived').css({
              'transition-delay': _delay + 's'
            });
            i++;
          });
        }, 500);
      }


      if ($('.main-wrap').length > 0) main.init();
      $('#wrap').addClass('show');
    },

    scroll: function () {
      var _this = this;

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
            // if (!this.header.hasClass('white')) this.header.addClass('white');
          } else {
            // if (this.header.hasClass('white')) this.header.removeClass('white');
          };
        };
      };

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
      $('html, body').stop().animate({
        'scrollTop': tgY
      }, {
        queue: false,
        duration: speed
      });

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

    fileRead: function (_elem) {
      if (_elem.nextElementSibling && _elem.nextElementSibling.classList.contains('read-file')) {
        if (_elem.value != '') {
          _elem.nextElementSibling.value = _elem.value;
        }
      } else {
        alert('援ъ“ �ы솗�� �꾩슂');
      };
    },

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
          if (_msg) {
            $element.querySelector('#alertMsg').innerHTML = _msg;
          } else {
            return false;
          };
        };

        document.documentElement.classList.add('fix');
        $element.style['z-index'] = this.zIndex;
        setTimeout(function () {
          $element.querySelector('.pop-data').focus();
        }, 100);

      } else { };

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
          if (_this.prevElement) { };
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
    var scenes = new ScrollMagic.Scene({
      triggerElement: $element,
      offset: 0,
      triggerHook: 1
    })
      .addTo($controller);
    scenes.on('leave', function () {
      $element.classList.remove('actived');
    });
    scenes.on('enter', function () {
      $element.classList.add('actived');
    });
  }
};

var main = {
  stage: {
    width: 0,
    height: 0
  },
  controller: {
    pc: null,
    mobile: null
  },
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
    this.controller.pc = new ScrollMagic.Controller({
      refreshInterval: 0
    });
    this.controller.mobile = new ScrollMagic.Controller({});
    this.container = $('.main-wrap');
    this.pageUI = ($('#page-ui').length > 0) ? $('#page-ui') : null;
    $('#wrap').addClass('main');
    $('#dBody').addClass('main');

    this.pageScrollerStatus = ($(window).width() > 1024) ? true : false;
    this.deviceStatus = ($(window).width() > 1024) ? 'pc' : 'mobile';

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

    // if ($('.main-price').length > 0) mainPrice.init();

    $('#wrap').imagesLoaded({
      background: true
    }).always(function () {
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
    var pW = this.stage.width;
    var pH = this.stage.height;
    var stageW = $(window).outerWidth();
    var stageH = $(window).outerHeight();
    this.stage.width = $(window).outerWidth();
    this.stage.height = $(window).outerHeight();
    document.documentElement.style.setProperty("--vh", (stageH + 'px'));
    var $elementHeadline = ($('.main-headline').length > 0) ? $('.main-headline') : null;
    var $elementTechnology = ($('.main-technology').length > 0) ? $('.main-technology') : null;
    var $elementAI = ($('.main-ai').length > 0) ? $('.main-ai') : null;
    var $elementAI2 = ($('.main-ai2').length > 0) ? $('.main-ai2') : null;
    var $elementPrice = ($('.main-price').length > 0) ? $('.main-price') : null;
    var $elementPatent = ($('.main-patent').length > 0) ? $('.main-patent') : null;
    var $elementSQA = ($('.main-sqa').length > 0) ? $('.main-sqa') : null;

    gsap.config({
      force3D: false
    })

    if (stageW > 1024) {
      this.sceneReset();
      if (!this.pageScroller) {
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
          // if ($('#dFoot').offset().top <= front.stage.height || $elementAI.offset().top > front.stage.height) {
          if ($('#dFoot').offset().top <= front.stage.height || $elementTechnology.offset().top > '0') {
            // console.log('floating hide');
            $('.bottom-floating').removeClass('actived');
          } else {
            // console.log('floating show');
            $('.bottom-floating').addClass('actived');
          };
        });
        this.pageScroller.update();
        this.pageScroller.track.xAxis.hide();
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
          $('#dHead').removeClass('white');
          $elementHeadline.addClass('actived');
          $elementHeadline.find('.bg').addClass('actived');
          $('.indicator ul li').removeClass('actived');
          $('.indicator ul li:eq(0)').addClass('actived');
          $('.indicator ul li').removeClass('white');

        });

        this.scene.headlineSticky.on('leave', function () {
          $elementHeadline.removeClass('actived');
          $elementHeadline.find('.bg').removeClass('actived');
        });

        this.tweener.headlineTweener1 = gsap.timeline({});
        this.tweener.headlineTweener1.fromTo($elementHeadline.find('.headline-1'), {
          y: '0vh'
        }, {
          y: '-100vh',
          ease: Linear.easeNone
        }, 0);

        this.scene.headlineScene1 = new ScrollMagic.Scene({
          triggerElement: $elementHeadline[0],
          triggerHook: 0
        })
          .addTo(this.controller.pc);

        this.scene.headlineScene1.offset(stageH * 0);
        this.scene.headlineScene1.duration(stageH * 0.7);
        this.scene.headlineScene1.setTween(this.tweener.headlineTweener1);

        this.scene.headlineScene21 = new ScrollMagic.Scene({
          triggerElement: $elementHeadline[0],
          triggerHook: 0
        })
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
          .addTo(this.controller.pc);

        this.scene.headlineVideo.offset(0);
        this.scene.headlineVideo.duration($elementHeadline.height() - stageH);

        this.scene.headlineHeader1 = new ScrollMagic.Scene({
          triggerElement: $elementHeadline[0],
          triggerHook: 0
        })
          .addTo(this.controller.pc);

        this.scene.headlineHeader1.offset(stageH * 0);
        this.scene.headlineHeader1.duration(stageH * 1.4);


        this.scene.headlineHeader2 = new ScrollMagic.Scene({
          triggerElement: $elementHeadline[0],
          triggerHook: 0
        })
          .addTo(this.controller.pc);

        this.scene.headlineHeader2.offset(stageH * 1.4);
        this.scene.headlineHeader2.duration(stageH * 1.25);

        this.scene.headlineTop = new ScrollMagic.Scene({
          triggerElement: $elementHeadline[0],
          triggerHook: 1
        })
          .addTo(this.controller.pc);

        this.scene.headlineTop.offset(stageH * 1.65);
        this.scene.headlineTop.duration(stageH * 1);
        this.scene.headlineTop.on('enter', function () {
          $('#page-ui').addClass('white');
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
          $('#dHead').addClass('white');
          $('.indicator ul li').removeClass('actived');
          $('.indicator ul li:eq(1)').addClass('actived');
          $('.indicator ul li').addClass('white');
        });

        this.tweener.technologyTweener1 = gsap.timeline({});
        var i = 0;
        _this.tweener.technologyTweener1.fromTo($elementTechnology.find('.sentence-1 .char-line'), {
          display: 'none'
        }, {
          display: 'block'
        }, i);
        $elementTechnology.find('.sentence-1 .char-words > .char-parent').each(function () {
          var $element = $(this);
          var $word = $(this).find('.char-child');
          _this.tweener.technologyTweener1.fromTo($element, {
            display: 'none'
          }, {
            display: 'block'
          }, i);
          _this.tweener.technologyTweener1.fromTo($word, {
            alpha: 0
          }, {
            alpha: 1,
            ease: Linear.easeNone
          }, i);
          i++;
        });
        _this.tweener.technologyTweener1.fromTo($elementTechnology.find('.sentence-1 .char-line'), {
          display: 'block'
        }, {
          display: 'none'
        }, i);

        this.scene.technologyScene1 = new ScrollMagic.Scene({
          triggerElement: $elementTechnology[0],
          triggerHook: 0.5
        })

          .addTo(this.controller.pc);

        this.scene.technologyScene1.offset(stageH * 0.1);
        this.scene.technologyScene1.duration(stageH * 1.2);
        this.scene.technologyScene1.setTween(this.tweener.technologyTweener1);

        this.tweener.technologyTweener2 = gsap.timeline({});
        var i = 0;
        _this.tweener.technologyTweener2.fromTo($elementTechnology.find('.sentence-2 .char-line'), {
          display: 'none'
        }, {
          display: 'block'
        }, i);
        $elementTechnology.find('.sentence-2 .char-words > .char-parent').each(function () {
          var $element = $(this);
          var $word = $(this).find('.char-child');
          _this.tweener.technologyTweener2.fromTo($element, {
            display: 'none'
          }, {
            display: 'block',
            ease: Linear.easeNone
          }, i);
          _this.tweener.technologyTweener2.fromTo($word, {
            alpha: 0
          }, {
            alpha: 1
          }, i);
          i++;
        });
        _this.tweener.technologyTweener2.fromTo($elementTechnology.find('.sentence-2 .char-line'), {
          display: 'block'
        }, {
          display: 'none'
        }, i);

        this.scene.technologyScene2 = new ScrollMagic.Scene({
          triggerElement: $elementTechnology[0],
          triggerHook: 0.5
        })

          .addTo(this.controller.pc);

        this.scene.technologyScene2.offset(stageH * 1.3);
        this.scene.technologyScene2.duration(stageH * 1);
        this.scene.technologyScene2.setTween(this.tweener.technologyTweener2);

        this.scene.technologyScene3 = new ScrollMagic.Scene({
          triggerElement: $elementTechnology[0],
          triggerHook: 0.5
        })

          .addTo(this.controller.pc);

        gsap.set($elementTechnology.find('.desc'), {
          y: 40,
          alpha: 0
        });
        gsap.set($elementTechnology.find('.btns'), {
          y: 40,
          alpha: 0
        });

        this.scene.technologyScene3.offset(stageH * 2.3);
        this.scene.technologyScene3.on('enter', function () {
          gsap.to($elementTechnology.find('.desc'), {
            delay: 0,
            duration: 0.6,
            y: 0,
            alpha: 1,
            ease: Back.ease
          });
        });

        this.scene.technologyScene3.on('leave', function () {
          gsap.to($elementTechnology.find('.desc'), {
            delay: 0,
            duration: 0.6,
            y: 40,
            alpha: 0,
            ease: Back.ease
          });
        });

        this.scene.technologyHeader = new ScrollMagic.Scene({
          triggerElement: $elementTechnology[0],
          triggerHook: 0
        })
          .addTo(this.controller.pc);

        this.scene.technologyHeader.offset(stageH * 0);
        this.scene.technologyHeader.duration(stageH * 3.0);
        this.scene.technologyHeader.on('enter', function () {
          $('#dHead').addClass('white');
        });

        this.scene.technologyTop = new ScrollMagic.Scene({
          triggerElement: $elementTechnology[0],
          triggerHook: 1
        })
          .addTo(this.controller.pc);

        this.scene.technologyTop.offset(stageH * 0);
        this.scene.technologyTop.duration(stageH * 3.0);
        this.scene.technologyTop.on('enter', function () {
          // $('#page-ui').removeClass('white');
          $('#dHead').addClass('white');
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

        this.tweener.aiTweener0 = gsap.timeline({});
        this.tweener.aiTweener0.fromTo($elementAI.find('.list-item:eq(1) .item-inner'), {
          width: 0
        }, {
          width: 0,
          ease: Linear.easeNone
        }, 0);
        this.tweener.aiTweener0.fromTo($elementAI.find('.list-item:eq(1)'), {
          width: 80
        }, {
          width: 80,
          ease: Linear.easeNone
        }, 0);

        this.scene.aiSticky = new ScrollMagic.Scene({
          triggerElement: $elementAI[0],
          triggerHook: 0
        })
          .setPin($elementAI.find('.main-sticky')[0])
          .addTo(this.controller.pc);

        this.scene.aiSticky.offset(0);
        this.scene.aiSticky.duration($elementAI.height() - stageH);


        this.scene.aiSticky.on('enter', function () {
          $('#dHead').removeClass('white');
          $('.indicator ul li').removeClass('actived');
          $('.indicator ul li:eq(2)').addClass('actived');
          $('.indicator ul li').removeClass('white');
        });

        this.scene.aiScene0 = new ScrollMagic.Scene({
          triggerElement: $elementAI[0],
          triggerHook: 0
        })
          .addTo(this.controller.pc);
        this.scene.aiScene0.on('enter', function () {
          $elementAI.find('.title').addClass('actived');
        });
        this.scene.aiScene0.on('leave', function () {
          $elementAI.find('.title').removeClass('actived');
        });

        //ai1 #################################################################################
        this.tweener.aiTweener1 = gsap.timeline({});
        this.tweener.aiTweener1.fromTo($elementAI.find('.title'), {
          alpha: 0
        }, {
          alpha: 1,
          ease: Linear.easeNone
        }, 0);

        this.scene.aiScene1 = new ScrollMagic.Scene({
          triggerElement: $elementAI[0],
          triggerHook: 1
        })

          .addTo(this.controller.pc);

        this.scene.aiScene1.offset(stageH * 0);
        this.scene.aiScene1.duration(stageH * 0.7)
        this.scene.aiScene1.setTween(this.tweener.aiTweener1);

        // STEP1
        this.tweener.aiTweener2 = gsap.timeline({});
        this.tweener.aiTweener2.fromTo($elementAI.find('.list-item:eq(0) .item-inner'), {
          width: 980,
          alpha: 1
        }, {
          width: 0,
          alpha: 0,
          ease: Linear.easeNone
        }, 0);
        this.tweener.aiTweener2.fromTo($elementAI.find('.list-item:eq(0)'), {
          width: 1080,
        }, {
          width: 80,
          ease: Linear.easeNone
        }, 0);
        this.tweener.aiTweener2.fromTo($elementAI.find('.list-item:eq(1) .item-inner'), {
          width: 0,
          alpha: 0
        }, {
          width: 980,
          alpha: 1,
          ease: Linear.easeNone
        }, 0);

        this.tweener.aiTweener2.fromTo($elementAI.find('.list-item:eq(1)'), {
          width: 80,
        }, {
          width: 1080,
          ease: Linear.easeNone
        }, 0);
        this.tweener.aiTweener2.fromTo($elementAI.find('.list-item:eq(2) .item-inner'), {
          width: 0
        }, {
          width: 0,
          ease: Linear.easeNone
        }, 0);
        this.tweener.aiTweener2.fromTo($elementAI.find('.list-item:eq(2)'), {
          width: 80,
        }, {
          width: 80,
          ease: Linear.easeNone
        }, 0);

        this.scene.aiScene2 = new ScrollMagic.Scene({
          triggerElement: $elementAI[0],
          triggerHook: 0
        })

          .addTo(this.controller.pc);

        this.scene.aiScene2.offset(stageH * 0.5);
        this.scene.aiScene2.duration(stageH * 0.3);
        this.scene.aiScene2.setTween(this.tweener.aiTweener2);


        // STEP2
        this.tweener.aiTweener3 = gsap.timeline({});
        this.tweener.aiTweener3.fromTo($elementAI.find('.list-item:eq(1) .item-inner'), {
          width: 980,
          alpha: 1
        }, {
          width: 0,
          alpha: 0,
          ease: Linear.easeNone
        }, 0);
        this.tweener.aiTweener3.fromTo($elementAI.find('.list-item:eq(1)'), {
          width: 1080
        }, {
          width: 80,
          ease: Linear.easeNone
        }, 0);

        this.tweener.aiTweener3.fromTo($elementAI.find('.list-item:eq(2) .item-inner'), {
          width: 0,
          alpha: 0
        }, {
          width: 980,
          alpha: 1,
          ease: Linear.easeNone
        }, 0);
        this.tweener.aiTweener3.fromTo($elementAI.find('.list-item:eq(2)'), {
          width: 80,
        }, {
          width: 1080,
          ease: Linear.easeNone
        }, 0);

        this.scene.aiScene3 = new ScrollMagic.Scene({
          triggerElement: $elementAI[0],
          triggerHook: 0
        })

          .addTo(this.controller.pc);

        this.scene.aiScene3.offset(stageH * 1.5);
        this.scene.aiScene3.duration(stageH * 0.3);
        this.scene.aiScene3.setTween(this.tweener.aiTweener3);
      };
      /* ====================================================
      ======================================================
      // AI2
      ====================================================
      ====================================================*/
      if ($elementAI2) {
        $elementAI2.find('.title').attr('style', '');
        $elementAI2.find('.list-item').eq(0).attr('style', '');
        $elementAI2.find('.list-item').eq(1).attr('style', '');

        this.scene.ai2Sticky = new ScrollMagic.Scene({
          triggerElement: $elementAI2[0],
          triggerHook: 0
        })
          .setPin($elementAI2.find('.main-sticky')[0])
          .addTo(this.controller.pc);

        this.scene.ai2Sticky.offset(0);
        this.scene.ai2Sticky.duration($elementAI2.height() - stageH);


        this.scene.ai2Sticky.on('enter', function () {
          $('#dHead').removeClass('white');
          $('.indicator ul li').removeClass('actived');
          $('.indicator ul li:eq(3)').addClass('actived');
          $('.indicator ul li').removeClass('white');
        });

        this.scene.ai2Scene0 = new ScrollMagic.Scene({
          triggerElement: $elementAI2[0],
          triggerHook: 0
        })
          .addTo(this.controller.pc);
        this.scene.ai2Scene0.on('enter', function () {
          $elementAI2.find('.title').addClass('actived');
        });
        this.scene.ai2Scene0.on('leave', function () {
          $elementAI2.find('.title').removeClass('actived');
          $('.main-ai .bg').removeClass('actived');
        });

        //ai2 #################################################################################
        this.tweener.ai2Tweener1 = gsap.timeline({});
        this.tweener.ai2Tweener1.fromTo($elementAI2.find('.title'), {
          alpha: 0
        }, {
          alpha: 1,
          ease: Linear.easeNone
        }, 0);

        this.scene.ai2Scene1 = new ScrollMagic.Scene({
          triggerElement: $elementAI2[0],
          triggerHook: 1
        })

          .addTo(this.controller.pc);

        this.scene.ai2Scene1.offset(stageH * 0);
        this.scene.ai2Scene1.duration(stageH * 1);
        this.scene.ai2Scene1.setTween(this.tweener.ai2Tweener1);

        this.tweener.ai2Tweener2 = gsap.timeline({});
        this.tweener.ai2Tweener2.fromTo($elementAI2.find('.list-item:eq(0) .item-inner'), {
          width: 980,
          alpha: 1
        }, {
          width: 0,
          alpha: 0,
          ease: Linear.easeNone
        }, 0);
        this.tweener.ai2Tweener2.fromTo($elementAI2.find('.list-item:eq(0)'), {
          width: 1080
        }, {
          width: 80,
          ease: Linear.easeNone
        }, 0);
        this.tweener.ai2Tweener2.fromTo($elementAI2.find('.list-item:eq(1) .item-inner'), {
          width: 0,
          alpha: 0
        }, {
          width: 980,
          alpha: 1,
          ease: Linear.easeNone
        }, 0);
        this.tweener.ai2Tweener2.fromTo($elementAI2.find('.list-item:eq(1)'), {
          width: 80
        }, {
          width: 1080,
          ease: Linear.easeNone
        }, 0);

        this.scene.ai2Scene2 = new ScrollMagic.Scene({
          triggerElement: $elementAI2[0],
          triggerHook: 0
        })

          .addTo(this.controller.pc);

        this.scene.ai2Scene2.offset(stageH * 0.25);
        this.scene.ai2Scene2.duration(stageH * 0.2);
        this.scene.ai2Scene2.setTween(this.tweener.ai2Tweener2);
      };
      /* ====================================================
      ======================================================
      // Price
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
          $('#dHead').addClass('white');

          counterUp();
        });
        this.scene.priceSticky.on('enter', function () {
          $('.indicator ul li').removeClass('actived');
          $('.indicator ul li:eq(4)').addClass('actived');
          $('.indicator ul li').addClass('white');
        });

        this.tweener.priceTweener1 = gsap.timeline({});
        this.tweener.priceTweener1.fromTo($elementPrice.find('.inner-bottom em'), {
          alpha: '0'
        }, {
          alpha: '1',
          ease: Linear.easeNone
        }, 0);
        this.tweener.priceTweener1.fromTo($elementPrice.find('.inner-bottom em'), {
          y: '60px'
        }, {
          y: '0',
          ease: Linear.easeNone
        }, 0);
        this.scene.priceScene1 = new ScrollMagic.Scene({
          triggerElement: $elementPrice[0],
          triggerHook: 1
        })

          .addTo(this.controller.pc);

        this.scene.priceScene1.offset(stageH * 0);
        this.scene.priceScene1.duration(stageH * 1);
        this.scene.priceScene1.setTween(this.tweener.priceTweener1);

        this.scene.priceHeader = new ScrollMagic.Scene({
          triggerElement: $elementPrice[0],
          triggerHook: 0
        })
          .addTo(this.controller.pc);

        this.scene.priceHeader.offset(stageH * 1);
        this.scene.priceHeader.duration(stageH * 2.5);

        this.scene.priceTop = new ScrollMagic.Scene({
          triggerElement: $elementPrice[0],
          triggerHook: 1
        })
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
        $elementPatent.find('.list-inner .list-cell').each(function () {
          $(this).find('.list-items').attr('style', '');
        });
        if ($elementPatent.hasClass('board')) $elementPatent.removeClass('board complete');

        this.scene.patentSticky = new ScrollMagic.Scene({
          triggerElement: $elementPatent[0],
          triggerHook: 0
        })
          .setPin($elementPatent.find('.main-sticky')[0])
          .addTo(this.controller.pc);

        this.scene.patentSticky.offset(0);
        this.scene.patentSticky.duration($elementPatent.height() - stageH);

        this.scene.patentSticky.on('enter', function () {
          $('.indicator ul li').removeClass('actived');
          $('.indicator ul li:eq(5)').addClass('actived');
          $('.indicator ul li').addClass('white');
        });

        this.tweener.patentTweener1 = gsap.timeline({});
        this.tweener.patentTweener1.fromTo($elementPatent.find('.cate'), {
          alpha: '0'
        }, {
          alpha: '1',
          ease: Linear.easeNone
        }, 0);

        this.scene.patentScene1 = new ScrollMagic.Scene({
          triggerElement: $elementPatent[0],
          triggerHook: 0
        })

          .addTo(this.controller.pc);

        this.scene.patentScene1.offset(stageH * 0);
        this.scene.patentScene1.duration(stageH * 0.2);
        this.scene.patentScene1.setTween(this.tweener.patentTweener1);

        this.tweener.patentTweener3 = gsap.timeline({});
        this.tweener.patentTweener3.fromTo($elementPatent.find('.list-inner'), {
          x: '0'
        }, {
          x: $elementPatent.find('.list').width() - $elementPatent.find('.list-inner').width(),
          ease: Linear.easeNone
        }, 0);

        this.scene.patentScene3 = new ScrollMagic.Scene({
          triggerElement: $elementPatent[0],
          triggerHook: 0
        })

          .addTo(this.controller.pc);

        this.scene.patentScene3.offset(stageH * 0.5);
        this.scene.patentScene3.duration(stageH);
        this.scene.patentScene3.setTween(this.tweener.patentTweener3);

        $elementPatent.find('.list-inner .list-cell').each(function () {
          var $element = $(this);
          var $listItems = $(this).find('.list-items');
          var $index = $(this).index();
          _this.tweener['patentTweener4' + $index] = gsap.timeline({});

          _this.tweener['patentTweener4' + $index].fromTo($listItems, {
            y: 0
          }, {
            y: 0,
            ease: Linear.easeNone
          });
          _this.tweener['patentTweener4' + $index].to($listItems, {
            y: 0,
            ease: Linear.easeNone
          });

          _this.scene['patentScene4' + $index] = new ScrollMagic.Scene({
            triggerElement: $elementPatent[0],
            triggerHook: 0
          })

            .addTo(_this.controller.pc);

          _this.scene['patentScene4' + $index].offset(stageH * 1);
          _this.scene['patentScene4' + $index].duration(stageH * 5);
          _this.scene['patentScene4' + $index].setTween(_this.tweener['patentTweener4' + $index]);

        });

        this.scene.patentHeader = new ScrollMagic.Scene({
          triggerElement: $elementPatent[0],
          triggerHook: 0
        })
          .addTo(this.controller.pc);

        this.scene.patentHeader.offset(stageH * 0);
        this.scene.patentHeader.duration(stageH * 7.0);

        this.scene.patentTop = new ScrollMagic.Scene({
          triggerElement: $elementPatent[0],
          triggerHook: 1
        })
          .addTo(this.controller.pc);

        this.scene.patentTop.offset(stageH * 0);
        this.scene.patentTop.duration(stageH * 7.0);
        this.scene.patentTop.on('enter', function () {
          $('#page-ui').addClass('white');
        });
      };
      /* ====================================================
      ======================================================
      // SQA
      ====================================================
      ====================================================*/
      if ($elementSQA) {
        this.scene.sqaTop = new ScrollMagic.Scene({
          triggerElement: $elementSQA[0],
          triggerHook: 1
        })
          .addTo(this.controller.pc);

        this.scene.sqaTop.offset(stageH * 1);
        this.scene.sqaTop.duration(stageH * 2.5);
        this.scene.sqaTop.on('enter', function () {
          $('#page-ui').remove('white');
          $('.indicator ul li').removeClass('actived');
          $('.indicator ul li:eq(6)').addClass('actived');
          $('.indicator ul li').addClass('white');
        });
      };
    } else if (stageW > 768) {
      if (this.pageScroller) {
        console.log('pc page scroller disabled');
        this.pageScroller.destroy();
        this.pageScroller = null;
        // this.familyScroller.destroy();
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
            $('#dHead').removeClass('white');
            $elementHeadline.addClass('actived');
            $elementHeadline.find('.bg').addClass('actived');
          });

          this.tweener.headlineTweener1 = gsap.timeline({});
          this.tweener.headlineTweener1.fromTo($elementHeadline.find('.headline-1'), {
            y: '0vh'
          }, {
            y: '-100vh',
            ease: Linear.easeNone
          }, 0);
          this.tweener.headlineTweener1.fromTo($elementHeadline.find('.headline-2'), {
            y: '100vh'
          }, {
            y: '0vh',
            ease: Linear.easeNone
          }, 0);
          this.scene.headlineScene1 = new ScrollMagic.Scene({
            triggerElement: $elementHeadline[0],
            triggerHook: 0
          })

            .addTo(this.controller.mobile);

          this.scene.headlineScene1.offset(stageH * 0);
          this.scene.headlineScene1.duration(stageH * 1);
          this.scene.headlineScene1.setTween(this.tweener.headlineTweener1);


          this.scene.headlineScene21 = new ScrollMagic.Scene({
            triggerElement: $elementHeadline[0],
            triggerHook: 0
          })
            .addTo(this.controller.mobile);

          this.scene.headlineScene21.offset(stageH * 0.7 + 300);
          this.scene.headlineScene21.duration(stageH * 0.7);
          this.scene.headlineScene21.on('enter', function () {
            $elementHeadline.find('.footnote-desc').addClass('actived');
          });
          this.scene.headlineScene21.on('leave', function (event) {
            if (event.state == 'BEFORE') $elementHeadline.find('.footnote-desc').removeClass('actived');
          });

          this.scene.headlineHeader = new ScrollMagic.Scene({
            triggerElement: $elementHeadline[0],
            triggerHook: 0
          })
            .addTo(this.controller.mobile);

          this.scene.headlineHeader.offset(stageH * 2);
          this.scene.headlineHeader.duration(stageH * 1.25);

          this.scene.headlineTop = new ScrollMagic.Scene({
            triggerElement: $elementHeadline[0],
            triggerHook: 1
          })
            //.addIndicators({name: "headlineTop"})
            .addTo(this.controller.mobile);

          this.scene.headlineTop.offset(stageH * 2);
          this.scene.headlineTop.duration(stageH * 1.25);
          this.scene.headlineTop.on('enter', function () {
            // $('#page-ui').addClass('white');
          });
          this.scene.headlineTop.on('leave', function (event) {
            // if (event.state == 'BEFORE') $('#page-ui').removeClass('white');
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
            $('#dHead').addClass('white');
          });


          // 1번라인
          this.tweener.technologyTweener1 = gsap.timeline({});
          var i = 0;
          _this.tweener.technologyTweener1.fromTo($elementTechnology.find('.sentence-1 .char-line'), {
            display: 'none'
          }, {
            display: 'block'
          }, i);
          $elementTechnology.find('.sentence-1 .char-words > .char-parent').each(function () {
            var $element = $(this);
            var $word = $(this).find('.char-child');
            _this.tweener.technologyTweener1.fromTo($element, {
              display: 'none'
            }, {
              display: 'block'
            }, i);
            _this.tweener.technologyTweener1.fromTo($word, {
              alpha: 0
            }, {
              alpha: 1,
              ease: Linear.easeNone
            }, i);
            i++;
          });
          _this.tweener.technologyTweener1.fromTo($elementTechnology.find('.sentence-1 .char-line'), {
            display: 'block'
          }, {
            display: 'none'
          }, i);

          this.scene.technologyScene1 = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0.5
          })

            .addTo(this.controller.mobile);

          this.scene.technologyScene1.offset(stageH * 0);
          this.scene.technologyScene1.duration(stageH * 0.7);
          this.scene.technologyScene1.setTween(this.tweener.technologyTweener1);


          // 2번라인
          this.tweener.technologyTweener2 = gsap.timeline({});
          var i = 0;
          _this.tweener.technologyTweener2.fromTo($elementTechnology.find('.sentence-2 .char-line'), {
            display: 'none'
          }, {
            display: 'block'
          }, i);
          $elementTechnology.find('.sentence-2 .char-words > .char-parent').each(function () {
            var $element = $(this);
            var $word = $(this).find('.char-child');
            _this.tweener.technologyTweener2.fromTo($element, {
              display: 'none'
            }, {
              display: 'block',
              ease: Linear.easeNone
            }, i);
            _this.tweener.technologyTweener2.fromTo($word, {
              alpha: 0
            }, {
              alpha: 1
            }, i);
            i++;
          });
          _this.tweener.technologyTweener2.fromTo($elementTechnology.find('.sentence-2 .char-line'), {
            display: 'block'
          }, {
            display: 'none'
          }, i);

          this.scene.technologyScene2 = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0.5
          })

            .addTo(this.controller.mobile);

          this.scene.technologyScene2.offset(stageH * 0.2);
          this.scene.technologyScene2.duration(stageH * 1);
          this.scene.technologyScene2.setTween(this.tweener.technologyTweener2);



          // 3번라인
          this.tweener.technologyTweener1_2 = gsap.timeline({});
          var i = 0;
          _this.tweener.technologyTweener1_2.fromTo($elementTechnology.find('.sentence-3 .char-line'), {
            display: 'none'
          }, {
            display: 'block'
          }, i);
          $elementTechnology.find('.sentence-3 .char-words > .char-parent').each(function () {
            var $element = $(this);
            var $word = $(this).find('.char-child');
            _this.tweener.technologyTweener1_2.fromTo($element, {
              display: 'none'
            }, {
              display: 'block'
            }, i);
            _this.tweener.technologyTweener1_2.fromTo($word, {
              alpha: 0
            }, {
              alpha: 1,
              ease: Linear.easeNone
            }, i);
            i++;
          });
          _this.tweener.technologyTweener1_2.fromTo($elementTechnology.find('.sentence-3 .char-line'), {
            display: 'block'
          }, {
            display: 'none'
          }, i);

          this.scene.technologyScene1_2 = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0.5
          })

            .addTo(this.controller.mobile);

          this.scene.technologyScene1_2.offset(stageH * 1.2);
          this.scene.technologyScene1_2.duration(stageH * 0.8);
          this.scene.technologyScene1_2.setTween(this.tweener.technologyTweener1_2);



          // 4번라인
          this.tweener.technologyTweener2_2 = gsap.timeline({});
          var i = 0;
          _this.tweener.technologyTweener2_2.fromTo($elementTechnology.find('.sentence-4 .char-line'), {
            display: 'none'
          }, {
            display: 'block'
          }, i);
          $elementTechnology.find('.sentence-4 .char-words > .char-parent').each(function () {
            var $element = $(this);
            var $word = $(this).find('.char-child');
            _this.tweener.technologyTweener2_2.fromTo($element, {
              display: 'none'
            }, {
              display: 'block',
              ease: Linear.easeNone
            }, i);
            _this.tweener.technologyTweener2_2.fromTo($word, {
              alpha: 0
            }, {
              alpha: 1
            }, i);
            i++;
          });
          _this.tweener.technologyTweener2_2.fromTo($elementTechnology.find('.sentence-4 .char-line'), {
            display: 'block'
          }, {
            display: 'none'
          }, i);

          this.scene.technologyScene2_2 = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0.5
          })

            .addTo(this.controller.mobile);

          this.scene.technologyScene2_2.offset(stageH * 2);
          this.scene.technologyScene2_2.duration(stageH * 1);
          this.scene.technologyScene2_2.setTween(this.tweener.technologyTweener2_2);

          // 5번라인
          this.tweener.technologyTweener2_3 = gsap.timeline({});
          var i = 0;
          _this.tweener.technologyTweener2_3.fromTo($elementTechnology.find('.sentence-5 .char-line'), {
            display: 'none'
          }, {
            display: 'block'
          }, i);
          $elementTechnology.find('.sentence-5 .char-words > .char-parent').each(function () {
            var $element = $(this);
            var $word = $(this).find('.char-child');
            _this.tweener.technologyTweener2_3.fromTo($element, {
              display: 'none'
            }, {
              display: 'block',
              ease: Linear.easeNone
            }, i);
            _this.tweener.technologyTweener2_3.fromTo($word, {
              alpha: 0
            }, {
              alpha: 1
            }, i);
            i++;
          });
          _this.tweener.technologyTweener2_3.fromTo($elementTechnology.find('.sentence-5 .char-line'), {
            display: 'block'
          }, {
            display: 'none'
          }, i);

          this.scene.technologyScene2_3 = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0.5
          })

            .addTo(this.controller.mobile);

          this.scene.technologyScene2_3.offset(stageH * 2.5);
          this.scene.technologyScene2_3.duration(stageH * 1);
          this.scene.technologyScene2_3.setTween(this.tweener.technologyTweener2_3);



          this.scene.technologyScene3 = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0.5
          })

            .addTo(this.controller.mobile);

          gsap.set($elementTechnology.find('.desc'), {
            y: 40,
            alpha: 0
          });

          this.scene.technologyScene3.offset(stageH * 2.9);
          this.scene.technologyScene3.on('enter', function () {
            gsap.to($elementTechnology.find('.desc'), {
              delay: 0,
              duration: 0.7,
              y: 0,
              alpha: 1,
              ease: Back.easeOut
            });
          });

          this.scene.technologyScene3.on('leave', function () {
            gsap.to($elementTechnology.find('.desc'), {
              delay: 0,
              duration: 0.7,
              y: 40,
              alpha: 0,
              ease: Back.easeOut
            });
          });

          this.scene.technologyHeader = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0
          })
            .addTo(this.controller.mobile);

          this.scene.technologyHeader.offset(stageH * 0);
          this.scene.technologyHeader.duration($elementTechnology.height());

          this.scene.technologyTop = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.technologyTop.offset(stageH * 0);
          this.scene.technologyTop.duration($elementTechnology.height());
          this.scene.technologyTop.on('enter', function () {
            $('#page-ui').addClass('white');
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

          this.tweener.aiTweener0 = gsap.timeline({});
          this.tweener.aiTweener0.fromTo($elementAI.find('.list-item .item-inner'), {
            width: 'auto',
            alpha: 1
          }, {
            width: 'auto',
            alpha: 1,
            ease: Linear.easeNone
          }, 0);
          this.tweener.aiTweener0.fromTo($elementAI.find('.list-item'), {
            width: 'auto',
            alpha: 1
          }, {
            width: 'auto',
            alpha: 1,
            ease: Linear.easeNone
          }, 0);

          this.tweener.aiTweener1 = gsap.timeline({});
          this.tweener.aiTweener1.fromTo($elementAI.find('.title'), {
            alpha: 0,
            y: 40
          }, {
            duration: 0.6,
            y: 0,
            alpha: 1,
            ease: Power3.easeOut
          }, 0);

          this.scene.aiScene0 = new ScrollMagic.Scene({
            triggerElement: $elementAI.find('.title')[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.aiScene0.on('enter', function () {
            $elementAI.find('.title').addClass('actived');
          });
          this.scene.aiScene0.on('leave', function () {
            $elementAI.find('.title').removeClass('actived');
          });
          this.scene.aiScene0.setTween(this.tweener.aiTweener1);

          //middle #################################################################################
          this.tweener.ai2Tweener1 = gsap.timeline({});
          this.tweener.ai2Tweener1.fromTo($elementAI.find('.data'), {
            y: '0vh'
          }, {
            y: '0vh',
            ease: Linear.easeNone
          }, 0);
          this.tweener.ai2Tweener1.fromTo($elementAI.find('.data2'), {
            y: '0vh'
          }, {
            y: '0vh',
            ease: Linear.easeNone
          }, 0);
          this.scene.ai2Scene1 = new ScrollMagic.Scene({
            triggerElement: $elementAI[0],
            triggerHook: 0
          })
            .addTo(this.controller.pc);

          this.scene.ai2Scene1.setTween(this.tweener.ai2Tweener1);

          $elementAI.find('.list-item').each(function () {
            _this.tweener['aiTweener' + $(this).index()] = gsap.timeline({});
            _this.tweener['aiTweener' + $(this).index()].fromTo($(this), {
              alpha: 0,
              y: 60
            }, {
              duration: 0.6,
              y: 0,
              alpha: 1,
              ease: Power3.easeOut
            }, 0);

            _this.scene.aiScene0 = new ScrollMagic.Scene({
              triggerElement: $(this)[0],
              triggerHook: 1
            })
              .addTo(_this.controller.mobile);
            _this.scene.aiScene0.setTween(_this.tweener['aiTweener' + $(this).index()]);
          });

          this.scene.aiHeader = new ScrollMagic.Scene({
            triggerElement: $elementAI[0],
            triggerHook: 0
          })
            .addTo(this.controller.mobile);

          this.scene.aiHeader.offset(0);
          this.scene.aiHeader.duration($elementAI.height());
          this.scene.aiHeader.on('enter', function () {
            $('#dHead').removeClass('white');
          });

          this.scene.aiTop = new ScrollMagic.Scene({
            triggerElement: $elementAI[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.aiTop.offset(0);
          this.scene.aiTop.duration($elementAI.height());
          this.scene.aiTop.on('enter', function () {
            // $('#page-ui').addClass('white');
          });
        };
        /* ====================================================
       ======================================================
       // AI2
       ====================================================
       ====================================================*/
        if ($elementAI2) {
          $elementAI2.find('.title').attr('style', '');
          $elementAI2.find('.list-inner').attr('style', '');
          $elementAI2.find('.list-item').eq(0).attr('style', '').removeClass('actived');

          this.tweener.aiTweener0 = gsap.timeline({});
          this.tweener.aiTweener0.fromTo($elementAI2.find('.list-item .item-inner'), {
            width: 'auto',
            alpha: 1
          }, {
            width: 'auto',
            alpha: 1,
            ease: Linear.easeNone
          }, 0);
          this.tweener.aiTweener0.fromTo($elementAI2.find('.list-item'), {
            width: 'auto',
            alpha: 1
          }, {
            width: 'auto',
            alpha: 1,
            ease: Linear.easeNone
          }, 0);

          this.tweener.aiTweener1 = gsap.timeline({});
          this.tweener.aiTweener1.fromTo($elementAI2.find('.title'), {
            alpha: 0,
            y: 40
          }, {
            duration: 0.6,
            y: 0,
            alpha: 1,
            ease: Power3.easeOut
          }, 0);

          this.scene.aiScene0 = new ScrollMagic.Scene({
            triggerElement: $elementAI2.find('.title')[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.aiScene0.on('enter', function () {
            $elementAI2.find('.title').addClass('actived');
          });
          this.scene.aiScene0.on('leave', function () {
            $elementAI2.find('.title').removeClass('actived');
          });
          this.scene.aiScene0.setTween(this.tweener.aiTweener1);

          //middle #################################################################################
          this.tweener.ai2Tweener1 = gsap.timeline({});
          this.tweener.ai2Tweener1.fromTo($elementAI2.find('.data'), {
            y: '0vh'
          }, {
            y: '0vh',
            ease: Linear.easeNone
          }, 0);
          this.tweener.ai2Tweener1.fromTo($elementAI2.find('.data2'), {
            y: '0vh'
          }, {
            y: '0vh',
            ease: Linear.easeNone
          }, 0);
          this.scene.ai2Scene1 = new ScrollMagic.Scene({
            triggerElement: $elementAI2[0],
            triggerHook: 0
          })
            .addTo(this.controller.pc);

          this.scene.ai2Scene1.setTween(this.tweener.ai2Tweener1);

          $elementAI2.find('.list-item').each(function () {
            _this.tweener['aiTweener' + $(this).index()] = gsap.timeline({});
            _this.tweener['aiTweener' + $(this).index()].fromTo($(this), {
              alpha: 0,
              y: 60
            }, {
              duration: 0.6,
              y: 0,
              alpha: 1,
              ease: Power3.easeOut
            }, 0);

            _this.scene.aiScene0 = new ScrollMagic.Scene({
              triggerElement: $(this)[0],
              triggerHook: 1
            })
              .addTo(_this.controller.mobile);
            _this.scene.aiScene0.setTween(_this.tweener['aiTweener' + $(this).index()]);
          });

          this.scene.ai2Header = new ScrollMagic.Scene({
            triggerElement: $elementAI2[0],
            triggerHook: 0
          })
            .addTo(this.controller.mobile);

          this.scene.ai2Header.offset(0);
          this.scene.ai2Header.duration($elementAI2.height());
          this.scene.ai2Header.on('enter', function () {
            $('#dHead').removeClass('white');
          });

          this.scene.ai2Top = new ScrollMagic.Scene({
            triggerElement: $elementAI2[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.ai2Top.offset(0);
          this.scene.ai2Top.duration($elementAI2.height());
          this.scene.ai2Top.on('enter', function () {
            $('#page-ui').addClass('white');
          });
        };
        /* ====================================================
       ======================================================
       // Price
       ====================================================
       ====================================================*/
        if ($elementPrice) {
          this.scene.priceHeader = new ScrollMagic.Scene({
            triggerElement: $elementPrice[0],
            triggerHook: 0
          })
            .addTo(this.controller.pc);

          this.scene.priceHeader.offset(0);
          this.scene.priceHeader.duration(stageH * 2.5);
          this.scene.priceHeader.on('enter', function () {
            $('#dHead').addClass('white');
          });

          this.scene.priceScroll = new ScrollMagic.Scene({
            triggerElement: $elementPrice[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.priceScroll.offset(0);
          this.scene.priceScroll.duration($elementPrice.innerHeight());
          this.scene.priceScroll.on('enter', function () {
            $('#page-ui').removeClass('white');
            counterUp();
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
          $elementPatent.find('.list-inner .list-cell').each(function () {
            $(this).find('.list-items').attr('style', '');
          });

          if (!$elementPatent.hasClass('board')) {
            $elementPatent.addClass('board').removeClass('complete');
            mainPatent.reset();
          };

          this.tweener.patentTweener0 = gsap.timeline({});
          this.tweener.patentTweener0.fromTo($elementPatent.find('.cate'), {
            alpha: 0,
            y: 40
          }, {
            duration: 0.6,
            y: 0,
            alpha: 1,
            ease: Power3.easeOut
          }, 0);

          this.scene.patentScene0 = new ScrollMagic.Scene({
            triggerElement: $elementPatent.find('.cate')[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.patentScene0.setTween(this.tweener.patentTweener0);

          this.tweener.patentTweener1 = gsap.timeline({});
          this.tweener.patentTweener1.fromTo($elementPatent.find('.title'), {
            alpha: 0,
            y: 40
          }, {
            duration: 0.6,
            y: 0,
            alpha: 1,
            ease: Power3.easeOut
          }, 0);

          this.scene.patentScene1 = new ScrollMagic.Scene({
            triggerElement: $elementPatent.find('.title')[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.patentScene1.setTween(this.tweener.patentTweener1);

          this.tweener.patentTweener2 = gsap.timeline({});
          this.tweener.patentTweener2.fromTo($elementPatent.find('.list-inner'), {
            alpha: 0,
            y: 40,
            x: 0
          }, {
            duration: 0.6,
            y: 0,
            x: 0,
            alpha: 1,
            ease: Power3.easeOut
          }, 0);

          this.scene.patentScene2 = new ScrollMagic.Scene({
            triggerElement: $elementPatent.find('.list-inner')[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.patentScene2.setTween(this.tweener.patentTweener2);

          this.scene.patentHeader = new ScrollMagic.Scene({
            triggerElement: $elementPatent[0],
            triggerHook: 0
          })
            .addTo(this.controller.mobile);

          this.scene.patentHeader.offset(stageH * 0);
          this.scene.patentHeader.duration($elementPatent.height());

          this.scene.patentTop = new ScrollMagic.Scene({
            triggerElement: $elementPatent[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.patentTop.offset(stageH * 0);
          this.scene.patentTop.duration($elementPatent.height());
          this.scene.patentTop.on('enter', function () {
            $('#page-ui').addClass('white');
          });
        };
      };
    } else {
      if (this.pageScroller) {
        console.log('pc page scroller disabled');
        this.pageScroller.destroy();
        this.pageScroller = null;
        // this.familyScroller.destroy();
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
            .addTo(this.controller.mobile);

          this.scene.headlineSticky.offset(0);
          this.scene.headlineSticky.duration($elementHeadline.height());
          this.scene.headlineSticky.on('enter', function () {
            $('#dHead').removeClass('white');
            $elementHeadline.addClass('actived');
            $elementHeadline.find('.bg').addClass('actived');
          });

          this.scene.headlineSticky.on('leave', function () {
            $elementHeadline.removeClass('actived');
            $elementHeadline.find('.bg').removeClass('actived');
          });

          this.tweener.headlineTweener1 = gsap.timeline({});
          this.tweener.headlineTweener1.fromTo($elementHeadline.find('.headline-1'), {
            y: '0vh'
          }, {
            y: '-100vh',
            ease: Linear.easeNone
          }, 0);
          this.tweener.headlineTweener1.fromTo($elementHeadline.find('.headline-2'), {
            y: '100vh'
          }, {
            y: '0vh',
            ease: Linear.easeNone
          }, 0);
          this.scene.headlineScene1 = new ScrollMagic.Scene({
            triggerElement: $elementHeadline[0],
            triggerHook: 0
          })

            .addTo(this.controller.mobile);

          this.scene.headlineScene1.offset(stageH * 0);
          this.scene.headlineScene1.duration(stageH * 1);
          this.scene.headlineScene1.setTween(this.tweener.headlineTweener1);


          this.tweener.headlineTweener2 = gsap.timeline({});
          this.tweener.headlineTweener2.fromTo($elementHeadline.find('.headline-2 .front'), {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          }, {
            clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)',
            ease: Linear.easeNone
          }, 0);
          this.tweener.headlineTweener2.fromTo($elementHeadline.find('.headline-2 .back'), {
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
          }, {
            clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
            ease: Linear.easeNone
          }, 0);
          this.tweener.headlineTweener2.fromTo($elementHeadline.find('.bg'), {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          }, {
            clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)',
            ease: Linear.easeNone
          }, 0);
          this.scene.headlineScene2 = new ScrollMagic.Scene({
            triggerElement: $elementHeadline[0],
            triggerHook: 0
          })
            .addTo(this.controller.mobile);

          this.scene.headlineScene2.offset(stageH * 1);
          this.scene.headlineScene2.duration(stageH * 1);
          this.scene.headlineScene2.setTween(this.tweener.headlineTweener2);

          this.scene.headlineScene21 = new ScrollMagic.Scene({
            triggerElement: $elementHeadline[0],
            triggerHook: 0
          })
            .addTo(this.controller.mobile);

          this.scene.headlineScene21.offset(stageH * 0.7 + 300);
          this.scene.headlineScene21.duration(stageH * 0.7);
          this.scene.headlineScene21.on('enter', function () {
            $elementHeadline.find('.footnote-desc').addClass('actived');
          });
          this.scene.headlineScene21.on('leave', function (event) {
            if (event.state == 'BEFORE') $elementHeadline.find('.footnote-desc').removeClass('actived');
          });

          this.scene.headlineHeader = new ScrollMagic.Scene({
            triggerElement: $elementHeadline[0],
            triggerHook: 0
          })
            .addTo(this.controller.mobile);

          this.scene.headlineHeader.offset(stageH * 2);
          this.scene.headlineHeader.duration(stageH * 1.25);

          this.scene.headlineTop = new ScrollMagic.Scene({
            triggerElement: $elementHeadline[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.headlineTop.offset(stageH * 2);
          this.scene.headlineTop.duration(stageH * 1.25);
          this.scene.headlineTop.on('enter', function () {
            // $('#page-ui').addClass('white');
          });
          this.scene.headlineTop.on('leave', function (event) {
            // if (event.state == 'BEFORE') $('#page-ui').removeClass('white');
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
            $('#dHead').addClass('white');
          });

          // 1번라인
          this.tweener.technologyTweener1 = gsap.timeline({});
          var i = 0;
          _this.tweener.technologyTweener1.fromTo($elementTechnology.find('.sentence-1 .char-line'), {
            display: 'none'
          }, {
            display: 'block'
          }, i);
          $elementTechnology.find('.sentence-1 .char-words > .char-parent').each(function () {
            var $element = $(this);
            var $word = $(this).find('.char-child');
            _this.tweener.technologyTweener1.fromTo($element, {
              display: 'none'
            }, {
              display: 'block'
            }, i);
            _this.tweener.technologyTweener1.fromTo($word, {
              alpha: 0
            }, {
              alpha: 1,
              ease: Linear.easeNone
            }, i);
            i++;
          });
          _this.tweener.technologyTweener1.fromTo($elementTechnology.find('.sentence-1 .char-line'), {
            display: 'block'
          }, {
            display: 'none'
          }, i);

          this.scene.technologyScene1 = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0.5
          })

            .addTo(this.controller.mobile);

          this.scene.technologyScene1.offset(stageH * 0);
          this.scene.technologyScene1.duration(stageH * 0.7);
          this.scene.technologyScene1.setTween(this.tweener.technologyTweener1);


          // 2번라인
          this.tweener.technologyTweener2 = gsap.timeline({});
          var i = 0;
          _this.tweener.technologyTweener2.fromTo($elementTechnology.find('.sentence-2 .char-line'), {
            display: 'none'
          }, {
            display: 'block'
          }, i);
          $elementTechnology.find('.sentence-2 .char-words > .char-parent').each(function () {
            var $element = $(this);
            var $word = $(this).find('.char-child');
            _this.tweener.technologyTweener2.fromTo($element, {
              display: 'none'
            }, {
              display: 'block',
              ease: Linear.easeNone
            }, i);
            _this.tweener.technologyTweener2.fromTo($word, {
              alpha: 0
            }, {
              alpha: 1
            }, i);
            i++;
          });
          _this.tweener.technologyTweener2.fromTo($elementTechnology.find('.sentence-2 .char-line'), {
            display: 'block'
          }, {
            display: 'none'
          }, i);

          this.scene.technologyScene2 = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0.5
          })

            .addTo(this.controller.mobile);

          this.scene.technologyScene2.offset(stageH * 0.2);
          this.scene.technologyScene2.duration(stageH * 0.7);
          this.scene.technologyScene2.setTween(this.tweener.technologyTweener2);



          // 3번라인
          this.tweener.technologyTweener1_2 = gsap.timeline({});
          var i = 0;
          _this.tweener.technologyTweener1_2.fromTo($elementTechnology.find('.sentence-3 .char-line'), {
            display: 'none'
          }, {
            display: 'block'
          }, i);
          $elementTechnology.find('.sentence-3 .char-words > .char-parent').each(function () {
            var $element = $(this);
            var $word = $(this).find('.char-child');
            _this.tweener.technologyTweener1_2.fromTo($element, {
              display: 'none'
            }, {
              display: 'block'
            }, i);
            _this.tweener.technologyTweener1_2.fromTo($word, {
              alpha: 0
            }, {
              alpha: 1,
              ease: Linear.easeNone
            }, i);
            i++;
          });
          _this.tweener.technologyTweener1_2.fromTo($elementTechnology.find('.sentence-3 .char-line'), {
            display: 'block'
          }, {
            display: 'none'
          }, i);

          this.scene.technologyScene1_2 = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0.5
          })

            .addTo(this.controller.mobile);

          this.scene.technologyScene1_2.offset(stageH * 0.6);
          this.scene.technologyScene1_2.duration(stageH * 0.7);
          this.scene.technologyScene1_2.setTween(this.tweener.technologyTweener1_2);



          // 4번라인
          this.tweener.technologyTweener2_2 = gsap.timeline({});
          var i = 0;
          _this.tweener.technologyTweener2_2.fromTo($elementTechnology.find('.sentence-4 .char-line'), {
            display: 'none'
          }, {
            display: 'block'
          }, i);
          $elementTechnology.find('.sentence-4 .char-words > .char-parent').each(function () {
            var $element = $(this);
            var $word = $(this).find('.char-child');
            _this.tweener.technologyTweener2_2.fromTo($element, {
              display: 'none'
            }, {
              display: 'block',
              ease: Linear.easeNone
            }, i);
            _this.tweener.technologyTweener2_2.fromTo($word, {
              alpha: 0
            }, {
              alpha: 1
            }, i);
            i++;
          });
          _this.tweener.technologyTweener2_2.fromTo($elementTechnology.find('.sentence-4 .char-line'), {
            display: 'block'
          }, {
            display: 'none'
          }, i);

          this.scene.technologyScene2_2 = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0.5
          })

            .addTo(this.controller.mobile);

          this.scene.technologyScene2_2.offset(stageH * 1.1);
          this.scene.technologyScene2_2.duration(stageH * 0.7);
          this.scene.technologyScene2_2.setTween(this.tweener.technologyTweener2_2);

          // 5번라인
          this.tweener.technologyTweener2_3 = gsap.timeline({});
          var i = 0;
          _this.tweener.technologyTweener2_3.fromTo($elementTechnology.find('.sentence-5 .char-line'), {
            display: 'none'
          }, {
            display: 'block'
          }, i);
          $elementTechnology.find('.sentence-5 .char-words > .char-parent').each(function () {
            var $element = $(this);
            var $word = $(this).find('.char-child');
            _this.tweener.technologyTweener2_3.fromTo($element, {
              display: 'none'
            }, {
              display: 'block',
              ease: Linear.easeNone
            }, i);
            _this.tweener.technologyTweener2_3.fromTo($word, {
              alpha: 0
            }, {
              alpha: 1
            }, i);
            i++;
          });
          _this.tweener.technologyTweener2_3.fromTo($elementTechnology.find('.sentence-5 .char-line'), {
            display: 'block'
          }, {
            display: 'none'
          }, i);

          this.scene.technologyScene2_3 = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0.5
          })

            .addTo(this.controller.mobile);

          this.scene.technologyScene2_3.offset(stageH * 2);
          this.scene.technologyScene2_3.duration(stageH * 1);
          this.scene.technologyScene2_3.setTween(this.tweener.technologyTweener2_3);

          this.scene.technologyScene3 = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0.5
          })

            .addTo(this.controller.mobile);

          gsap.set($elementTechnology.find('.desc'), {
            y: 40,
            alpha: 0
          });

          this.scene.technologyScene3.offset(stageH * 3);
          this.scene.technologyScene3.on('enter', function () {
            gsap.to($elementTechnology.find('.desc'), {
              delay: 0,
              duration: 0.7,
              y: 0,
              alpha: 1,
              ease: Back.easeOut
            });
          });

          this.scene.technologyScene3.on('leave', function () {
            gsap.to($elementTechnology.find('.desc'), {
              delay: 0,
              duration: 0.7,
              y: 40,
              alpha: 0,
              ease: Back.easeOut
            });
          });

          this.scene.technologyHeader = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 0
          })
            .addTo(this.controller.mobile);

          this.scene.technologyHeader.offset(stageH * 0);
          this.scene.technologyHeader.duration($elementTechnology.height());

          this.scene.technologyTop = new ScrollMagic.Scene({
            triggerElement: $elementTechnology[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.technologyTop.offset(stageH * 0);
          this.scene.technologyTop.duration($elementTechnology.height());
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
          $elementAI.find('.list-inner').attr('style', '');
          $elementAI.find('.list-item').eq(0).attr('style', '').removeClass('actived');
          $elementAI.find('.list-item').eq(1).attr('style', '').removeClass('actived');

          this.tweener.aiTweener0 = gsap.timeline({});
          this.tweener.aiTweener0.fromTo($elementAI.find('.list-item .item-inner'), {
            width: 'auto',
            alpha: 1
          }, {
            width: 'auto',
            alpha: 1,
            ease: Linear.easeNone
          }, 0);
          this.tweener.aiTweener0.fromTo($elementAI.find('.list-item'), {
            width: 'auto',
            alpha: 1
          }, {
            width: 'auto',
            alpha: 1,
            ease: Linear.easeNone
          }, 0);



          this.tweener.aiTweener1 = gsap.timeline({});
          this.tweener.aiTweener1.fromTo($elementAI.find('.title'), {
            alpha: 0,
            y: 40
          }, {
            duration: 0.6,
            y: 0,
            alpha: 1,
            ease: Power3.easeOut
          }, 0);

          this.scene.aiScene0 = new ScrollMagic.Scene({
            triggerElement: $elementAI.find('.title')[0],
            triggerHook: 1
          })
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
            _this.tweener['aiTweener' + $(this).index()].fromTo($(this), {
              alpha: 0,
              y: 60
            }, {
              duration: 0.6,
              y: 0,
              alpha: 1,
              ease: Power3.easeOut
            }, 0);

            _this.scene.aiScene0 = new ScrollMagic.Scene({
              triggerElement: $(this)[0],
              triggerHook: 1
            })
              .addTo(_this.controller.mobile);
            _this.scene.aiScene0.setTween(_this.tweener['aiTweener' + $(this).index()]);
          });

          this.scene.aiHeader = new ScrollMagic.Scene({
            triggerElement: $elementAI[0],
            triggerHook: 0
          })
            .addTo(this.controller.mobile);

          this.scene.aiHeader.offset(0);
          this.scene.aiHeader.duration($elementAI.height());
          this.scene.aiHeader.on('enter', function () {
            $('#dHead').removeClass('white')
          });

          this.scene.aiTop = new ScrollMagic.Scene({
            triggerElement: $elementAI[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.aiTop.offset(0);
          this.scene.aiTop.duration($elementAI.height());
          this.scene.aiTop.on('enter', function () {
            // $('#page-ui').addClass('white');
          });
        };
        /* ====================================================
       ======================================================
       // AI2
       ====================================================
       ====================================================*/
        if ($elementAI2) {
          $elementAI2.find('.title').attr('style', '');
          $elementAI2.find('.list-inner').attr('style', '');
          $elementAI2.find('.list-item').eq(0).attr('style', '').removeClass('actived');

          this.tweener.aiTweener0 = gsap.timeline({});
          this.tweener.aiTweener0.fromTo($elementAI2.find('.list-item .item-inner'), {
            width: 'auto',
            alpha: 1
          }, {
            width: 'auto',
            alpha: 1,
            ease: Linear.easeNone
          }, 0);
          this.tweener.aiTweener0.fromTo($elementAI2.find('.list-item'), {
            width: 'auto',
            alpha: 1
          }, {
            width: 'auto',
            alpha: 1,
            ease: Linear.easeNone
          }, 0);

          this.tweener.aiTweener1 = gsap.timeline({});
          this.tweener.aiTweener1.fromTo($elementAI2.find('.title'), {
            alpha: 0,
            y: 40
          }, {
            duration: 0.6,
            y: 0,
            alpha: 1,
            ease: Power3.easeOut
          }, 0);

          this.scene.aiScene0 = new ScrollMagic.Scene({
            triggerElement: $elementAI2.find('.title')[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.aiScene0.on('enter', function () {
            $elementAI2.find('.title').addClass('actived');
          });
          this.scene.aiScene0.on('leave', function () {
            $elementAI2.find('.title').removeClass('actived');
          });
          this.scene.aiScene0.setTween(this.tweener.aiTweener1);

          $elementAI2.find('.list-item').each(function () {
            _this.tweener['aiTweener' + $(this).index()] = gsap.timeline({});
            _this.tweener['aiTweener' + $(this).index()].fromTo($(this), {
              alpha: 0,
              y: 60
            }, {
              duration: 0.6,
              y: 0,
              alpha: 1,
              ease: Power3.easeOut
            }, 0);

            _this.scene.aiScene0 = new ScrollMagic.Scene({
              triggerElement: $(this)[0],
              triggerHook: 1
            })
              .addTo(_this.controller.mobile);
            _this.scene.aiScene0.setTween(_this.tweener['aiTweener' + $(this).index()]);
          });

          this.scene.ai2Header = new ScrollMagic.Scene({
            triggerElement: $elementAI2[0],
            triggerHook: 0
          })
            .addTo(this.controller.mobile);

          this.scene.ai2Header.offset(0);
          this.scene.ai2Header.duration($elementAI2.height());
          this.scene.ai2Header.on('enter', function () {
            $('#dHead').removeClass('white')
          });

          this.scene.aiTop = new ScrollMagic.Scene({
            triggerElement: $elementAI2[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.aiTop.offset(0);
          this.scene.aiTop.duration($elementAI2.height());
          this.scene.aiTop.on('enter', function () {
            // $('#page-ui').addClass('white');
          });
        };
        /* ====================================================
       ======================================================
       // Price
       ====================================================
       ====================================================*/
        if ($elementPrice) {
          this.scene.priceHeader = new ScrollMagic.Scene({
            triggerElement: $elementPrice[0],
            triggerHook: 0
          })
            .addTo(this.controller.pc);

          this.scene.priceHeader.offset(0);
          this.scene.priceHeader.duration(stageH * 2.5);
          this.scene.priceHeader.on('enter', function () {
            $('#dHead').addClass('white');
          });

          this.scene.priceScroll = new ScrollMagic.Scene({
            triggerElement: $elementPrice[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.priceScroll.offset(0);
          this.scene.priceScroll.duration($elementPrice.innerHeight());
          this.scene.priceScroll.on('enter', function () {
            $('#page-ui').addClass('white');
            // counterUp();
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
          $elementPatent.find('.list-inner .list-cell').each(function () {
            $(this).find('.list-items').attr('style', '');
          });


          if (!$elementPatent.hasClass('board')) {
            $elementPatent.addClass('board').removeClass('complete');
            mainPatent.reset();
          };


          this.tweener.patentTweener0 = gsap.timeline({});
          this.tweener.patentTweener0.fromTo($elementPatent.find('.cate'), {
            alpha: 0,
            y: 40
          }, {
            duration: 0.6,
            y: 0,
            alpha: 1,
            ease: Power3.easeOut
          }, 0);

          this.scene.patentScene0 = new ScrollMagic.Scene({
            triggerElement: $elementPatent.find('.cate')[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.patentScene0.setTween(this.tweener.patentTweener0);

          this.tweener.patentTweener1 = gsap.timeline({});
          this.tweener.patentTweener1.fromTo($elementPatent.find('.title'), {
            alpha: 0,
            y: 40
          }, {
            duration: 0.6,
            y: 0,
            alpha: 1,
            ease: Power3.easeOut
          }, 0);

          this.scene.patentScene1 = new ScrollMagic.Scene({
            triggerElement: $elementPatent.find('.title')[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.patentScene1.setTween(this.tweener.patentTweener1);

          this.tweener.patentTweener2 = gsap.timeline({});
          this.tweener.patentTweener2.fromTo($elementPatent.find('.list-inner'), {
            alpha: 0,
            y: 40,
            x: 0
          }, {
            duration: 0.6,
            y: 0,
            x: 0,
            alpha: 1,
            ease: Power3.easeOut
          }, 0);

          this.scene.patentScene2 = new ScrollMagic.Scene({
            triggerElement: $elementPatent.find('.list-inner')[0],
            triggerHook: 1
          })
            .addTo(this.controller.mobile);

          this.scene.patentScene2.setTween(this.tweener.patentTweener2);

          this.scene.patentHeader = new ScrollMagic.Scene({
            triggerElement: $elementPatent[0],
            triggerHook: 0
          })
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
            .addTo(this.controller.mobile);

          this.scene.patentTop.offset(stageH * 0);
          this.scene.patentTop.duration($elementPatent.height());
          this.scene.patentTop.on('enter', function () {
            $('#page-ui').addClass('white');
          });
        };
      };
    };
  },

  pageScrollerInit: function () {
    var _this = this;
    if (this.pageScrollerStatus) {
      if (!this.pageScroller) {

      };
    };
  },
  pageScrollerDestory: function () {
    if (!this.pageScrollerStatus) {
      if (this.pageScroller) { }
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

    };
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
          gsap.set($(this).find('.list-items'), {
            alpha: 0,
            y: 40
          });
          gsap.to($(this).find('.list-items'), {
            duration: 0.4,
            delay: _delay,
            alpha: 1,
            y: 0,
            ease: Power2.easeOut
          });
          i++;
        };
      });
      if (this.cur == this.len - 1) this.container.addClass('complete').find('.btn-ui').hide();
      this.cur++;
    };
  },

  reset: function () {
    this.cur = 1;
  }
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
  this.target = this;
  this.first = false;
  this.idx = options.idx;
};

// GNB 사용자정보
$(document).on('click', '.gnb-userIinfo', function () {
  $(".info-layer").toggle();
});
$(document).on('click', '.info-layer-inner ul li', function () {
  $(".info-layer").hide();
});

//3자리마다 , 찍기
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// 숫자카운터
function counterUp() {
  var memberCountConTxt = 100000;

  $({
    val: 0
  }).animate({
    val: memberCountConTxt
  }, {
    duration: 1300,
    step: function () {
      var num = numberWithCommas(Math.floor(this.val));
      $(".counter").text(num);
    },
    complete: function () {
      var num = numberWithCommas(Math.floor(this.val));
      $(".counter").text(num);
    }
  });
}

var $DOM = {
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
  //	$DOM.addClass( Dom Element , Target Class )
  addClass: function (_el, _class) {
    $DOM.element(_el).classList.add(_class);
  },
  //	$DOM.hasClass( Dom Element , Target Class )
  hasClass: function (_el, _class) {
    return $DOM.element(_el).classList.contains(_class);
  },
  //	$DOM.removeClass( Dom Element , Target Class )
  removeClass: function (_el, _class) {
    $DOM.element(_el).classList.remove(_class);
  },
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
  // $DOM.next( DOM Element )
  next: function (_el) {
    return $DOM.element(_el).nextElementSibling;
  },
  // $DOM.prev( DOM Element )
  prev: function (_el) {
    return $DOM.element(_el).previousElementSibling;
  },
  // $DOM.parent( DOM Element )
  parent: function (_el) {
    return $DOM.element(_el).parentNode;
  },
  // $DOM.getAttr( Dom Element , Attribute Name )
  getAttr: function (_el, _attr) {
    return $DOM.element(_el).getAttribute(_attr);
  },
  // $DOM.setAttr( Dom Element , Attribute Name , Value )
  setAttr: function (_el, _attr, _value) {
    $DOM.element(_el).setAttribute(_attr, _value);
  },
  // $DOM.hasAttr( Dom Element , Attribute Name )
  hasAttr: function (_el, _attr) {
    return $DOM.element(_el).hasAttribute(_attr);
  },
  // $DOM.index( Dom Element )
  getIndex: function (_el) {
    return Array.prototype.slice.call($DOM.element(_el).parentElement.children).indexOf($DOM.element(_el));
  },
  // $DOM.getHtml( Dom Element )
  getHtml: function (_el) {
    return $DOM.element(_el).innerHTML;
  },
  // $DOM.setHtml( Dom Element , Html Text )
  // DOM TREE RESET
  setHtml: function (_el, _html) {
    $DOM.element(_el).innerHTML = _html;
  },
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
window.addEventListener('DOMContentLoaded', front.ready);
window.addEventListener('load', front.load);
window.addEventListener('resize', front.resize);
window.addEventListener('scroll', front.scroll);


// $(".indicator ul li").click(function (param) {
//   let num = $(".indicator ul li").index(this) + 1;
//   console.log('num:::' + num);

//   let sectionTop = $("#section" + num).offset().top
//   // location.href = "#section" + num

//   $('html, body').animate({
//     scrollTop: sectionTop
//   }, 1000); // 1초 동안 스크롤



//   // window.scrollTo({
//   //   top: sectionTop,
//   //   behavior: "smooth",
//   // });

//   console.log('sectionTop:::' + sectionTop);
// });


var controller = new ScrollMagic.Controller();
var indicator = $('.indicator ul li a');

// 각 섹션에 대한 ScrollMagic 장면 생성
$('.main-group').each(function () {
  var section = $(this);

  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5 // 화면 중앙에서 트리거
  })
    .on("enter", function () {
      // 인디케이터 업데이트
      // indicator.text(section.attr('id'));
    })
    .addTo(controller);
});

// ScrollTo 애니메이션 설정
$('.indicator ul li a').on('click', function (e) {
  e.preventDefault();
  var target = $(this).attr('href');
  console.log(target);
  window.scrollTo(target, {
    duration: 1000, // 1초 동안 스크롤
    easing: 'swing'
  });
});

(function () {
  front.init();
})();