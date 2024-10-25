window.requestAnimFrame = (function (callback) { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60); }; })();
window.cancelAnimFrame = (function () { return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) { window.clearTimeout(id); }; })();


var include = {

  headerContainer: null,
  footerContainer: null,

  init: function () {
    this.headerContainer = document.getElementById('dHead');
    this.footerContainer = document.getElementById('dFoot');


    //if(this.headerContainer && this.headerContainer.children.length == 0) this.header();
    //if(this.footerContainer && this.footerContainer.children.length == 0) this.footer();
  },

  header: function () {
    var _html = '';
    _html += '<div class="header-outer"><div class="header-inner"><h1 class="logo"><a href="../page/index.html">泥쒖옱 AI</a></h1> <nav id="gnb"><div class="gnb-wrap"><ul class="gnb-list"><!-- gnb-list-cell �대옒�ㅼ뿉 actived�대옒�� 異붽��� �쒖꽦�� --><!--<li class="gnb-list-cell"><a href="#" class="btn-gnb-nav"><span class="txt">AIDT</span></a><div class="snb-wrap"><div class="snb-list-inner"><ul class="snb-list"><li class="snb-list-cell"><a href="../page/aidt-overview.html" class="btn-snb-nav">AIDT��?</a></li><li class="snb-list-cell"><a href="../page/aidt-company.html" class="btn-snb-nav">泥쒖옱AIDT �뚭컻</a></li><li class="snb-list-cell"><a href="../page/aidt-contents.html" class="btn-snb-nav">肄섑뀗痢� 援ъ꽦</a></li></ul></div></div></li>--><!--<li class="gnb-list-cell"><a href="#" class="btn-gnb-nav"><span class="txt">AIDT �쒖슜踰�</span></a><div class="snb-wrap"><div class="snb-list-inner"><ul class="snb-list"><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�쇰컲 �숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">嫄곌씀濡� �숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�꾨줈�앺듃 �숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">李쎌쓽 �쒕룞</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�됯� �쒖슜</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�⑥썝 �꾩꽦</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">媛쒕퀎 �숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�곸뼱 �곗뒿 吏���</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�섑븰 怨듯븰 �꾧뎄 �쒖슜</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�뺣낫 而댄벂�� �쒖슜</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�쇰컲 諛⑷낵�� �숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">諛⑷낵�� 蹂댁땐 �숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">諛⑷낵�� �ы솕 �숈뒿</a></li></ul></div></div></li>--><li class="gnb-list-cell"><a href="../page/ai-coswear.html" class="btn-gnb-nav"><span class="txt">AI 肄붿뒪�⑥뼱</span></a><div class="snb-wrap"><div class="snb-list-inner"><ul class="snb-list"><li class="snb-list-cell"><a href="../page/ai-coswear.html" class="btn-snb-nav disabled">�섏뾽以�鍮�</a></li><li class="snb-list-cell"><a href="../page/ai-coswear.html" class="btn-snb-nav disabled">留먰븯湲�/�곌린 �섏뾽</a></li><li class="snb-list-cell"><a href="../page/ai-coswear.html" class="btn-snb-nav disabled">�섑븰 �섏뾽</a></li><li class="snb-list-cell"><a href="../page/ai-coswear.html" class="btn-snb-nav disabled">肄붾뵫 �섏뾽</a></li><li class="snb-list-cell"><a href="../page/ai-coswear.html" class="btn-snb-nav disabled">�섏뾽 寃곌낵</a></li></ul></div></div></li><li class="gnb-list-cell"><a href="#" class="btn-gnb-nav"><span class="loop-word"><span class="loop-word-text">泥쒖옱 AI</span><span class="loop-word-frame"><span>泥쒖옱 AI</span><span>泥쒖옱 AI</span></span></span></a><div class="snb-wrap"><div class="snb-list-inner"><ul class="snb-list"><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�멸났吏���(AI)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">鍮낅뜲�댄꽣/ML</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�λ윭��(DL)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">AI 留욎땄�숈뒿</a></li><li class="snb-list-cell"><a href="../page/chunjae-ai-kt.html" class="btn-snb-nav">吏��앹텛��(KT)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�ъ링吏��앹텛��(DKT)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">異붿쿇�뚭퀬由ъ쬁(FM)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�ъ링異붿쿇(DeepFM)</a></li><li class="snb-list-cell"><a href="../page/chunjae-ai-irt.html" class="btn-snb-nav">臾명빆諛섏쓳�대줎(IRT)</a></li><li class="snb-list-cell"><a href="../page/chunjae-ai-cat.html" class="btn-snb-nav">留욎땄臾명빆 異붿쿇(CAT)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�뚯꽦�몄떇(STT)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�뚯꽦�됯�</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�먭��� �몄떇(CNN)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">臾몄옄�몄떇(OCR)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�덈㈃�몄떇(FRT)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">泥쒖옱GPT(LLM湲곕컲)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�좎궗�꾧린諛� 梨쀫큸</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�좎궗臾명빆 寃���</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�뺤옣�꾩떎(XR)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�쇱꽌</a></li></ul></div></div></li><li class="gnb-list-cell"><a href="#" class="btn-gnb-nav"><span class="txt">AI 泥댄뿕</span></a><div class="snb-wrap"><div class="snb-list-inner"><ul class="snb-list"><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">吏��앹텛��(KT)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�ъ링吏��앹텛��(DKT)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">異붿쿇�뚭퀬由ъ쬁(FM)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�ъ링異붿쿇(DeepFM)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">臾명빆諛섏쓳�대줎(IRT)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">留욎땄臾명빆 異붿쿇(CAT)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�뚯꽦�몄떇(STT)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�먭��� �몄떇(CNN)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">臾몄옄�몄떇(OCR)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�뚯꽦�됯�</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">泥쒖옱GPT(LLM湲곕컲)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�좎궗�꾧린諛� 梨쀫큸</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�좎궗臾명빆 寃���</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�뺤옣�꾩떎(XR)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�덈㈃�몄떇(FRT)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�쇱꽌</a></li></ul></div></div></li><li class="gnb-list-cell"><a href="#" class="btn-gnb-nav"><span class="txt">AI �뱁뿀</span></a><div class="snb-wrap"><div class="snb-list-inner"><ul class="snb-list"><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�멸났吏��μ뒪留덊듃肄붿묶</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">肄섑뀗痢� 援ъ“ �숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�숈뒿肄섑뀗痢� 異붿쿇諛⑸쾿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�숈뒿肄섑뀗痢� 異붿쿇�쒖뒪��</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�먭��� �좎븘�숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�먭��� �좎븘�숈뒿�쒖뒪��</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">梨쀫큸�쒖슜 �숈뒿�좊룄</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">梨쀫큸 �숈뒿�좊룄 �쒖뒪��</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�숈뒿�좊룄�� 梨쀫큸</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�먭��쎌씠�� �숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�먭��쎌씠�� �숈뒿�쒖뒪��</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�쒓뎅��/臾명솕 �ㅻ쭏�� 寃���</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">利앷컯/蹂듯빀�꾩떎 �뺣낫寃���</a></li></ul></div></div></li><!--<li class="gnb-list-cell"><a href="#" class="btn-gnb-nav"><span class="txt">湲곗닠 釉붾줈洹�</span></a><div class="snb-wrap"><div class="snb-list-inner"><ul class="snb-list"><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">鍮낅뜲�댄꽣/ML</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">AI 留욎땄�숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">吏��앹텛��(KT)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�ъ링吏��앹텛��(DKT)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">異붿쿇�뚭퀬由ъ쬁(FM)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�ъ링異붿쿇(DeepFM)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">臾명빆諛섏쓳�대줎(IRT)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">留욎땄臾명빆 異붿쿇(CAT)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�뚯꽦�몄떇(STT)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�뚯꽦�됯��먭��� �몄떇(CNN)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">臾몄옄�몄떇(OCR)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�덈㈃�몄떇(FRT)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">泥쒖옱GPT(LLM湲곕컲)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�좎궗�꾧린諛� 梨쀫큸</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�좎궗臾명빆 寃���</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�뺤옣�꾩떎(XR)</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�쇱꽌</a></li></ul></div></div></li>--><li class="gnb-list-cell"><a href="#" class="btn-gnb-nav"><span class="txt">ABOUT US</span></a><div class="snb-wrap"><div class="snb-list-inner"><ul class="snb-list"><li class="snb-list-cell"><a href="https://www.chunjae.co.kr/" target="_blank" class="btn-snb-nav">泥쒖옱援먯쑁 <em class="icon icon-link"></em></a></li><li class="snb-list-cell"><a href="https://www.chunjaetext.co.kr/" target="_blank" class="btn-snb-nav">泥쒖옱援먭낵�� <em class="icon icon-link"></em></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">怨듭� &amp; 湲곗궗</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�대찓�� 臾몄쓽</a></li></ul></div></div></li></ul></div></nav><div id="allMenu" class="all-menu-wrap"><div class="all-menu-scroller"><div class="all-menu-inner"><ul class="all-menu-list"><!--<li class="all-menu-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-all-menu-nav">AIDT</a><div class="snb-wrap"><ul class="snb-list"><li class="snb-list-cell"><a href="../page/aidt-overview.html" class="btn-snb-nav">泥쒖옱 AIDT</a></li><li class="snb-list-cell"><a href="../page/aidt-company.html" class="btn-snb-nav">泥쒖옱AIDT �뚭컻</a></li><li class="snb-list-cell"><a href="../page/aidt-contents.html" class="btn-snb-nav">肄섑뀗痢� 援ъ꽦</a></li></ul></div></li>--><!--<li class="all-menu-list-cell"><a href="#" class="btn-all-menu-nav">AIDT �쒖슜踰�</a><div class="snb-wrap"><ul class="snb-list"><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�쇰컲 �숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">嫄곌씀濡� �숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�꾨줈�앺듃 �숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">李쎌쓽 �쒕룞</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�됯� �쒖슜</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�⑥썝 �꾩꽦</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">媛쒕퀎 �숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�곸뼱 �곗뒿 吏���</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�섑븰 怨듯븰 �꾧뎄 �쒖슜</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�뺣낫 而댄벂�� �쒖슜</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">�쇰컲 諛⑷낵�� �숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">諛⑷낵�� 蹂댁땐 �숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav disabled">諛⑷낵�� �ы솕 �숈뒿</a></li></ul></div></li>--><li class="all-menu-list-cell"><a href="../page/ai-coswear.html" class="btn-all-menu-nav">AI 肄붿뒪�⑥뼱</a><div class="snb-wrap"><ul class="snb-list"><li class="snb-list-cell"><a href="../page/ai-coswear.html" class="btn-snb-nav disabled">�섏뾽以�鍮�</a></li><li class="snb-list-cell"><a href="../page/ai-coswear.html" class="btn-snb-nav disabled">留먰븯湲�/�곌린 �섏뾽</a></li><li class="snb-list-cell"><a href="../page/ai-coswear.html" class="btn-snb-nav disabled">�섑븰 �섏뾽</a></li><li class="snb-list-cell"><a href="../page/ai-coswear.html" class="btn-snb-nav disabled">肄붾뵫 �섏뾽</a></li><li class="snb-list-cell"><a href="../page/ai-coswear.html" class="btn-snb-nav disabled">�섏뾽 寃곌낵</a></li></ul></div></li><li class="all-menu-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-all-menu-nav">泥쒖옱 AI</a><div class="snb-wrap"><ul class="snb-list"><li class="snb-list-cell actived"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�멸났吏���<span>(AI)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">鍮낅뜲�댄꽣/ML</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�λ윭��<span>(DL)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">AI 留욎땄�숈뒿</a></li><li class="snb-list-cell"><a href="../page/chunjae-ai-kt.html" class="btn-snb-nav point">吏��앹텛��<span>(KT)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�ъ링吏��앹텛��<span>(DKT)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">異붿쿇�뚭퀬由ъ쬁<span>(FM)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�ъ링異붿쿇<span>(DeepFM)</span></a></li><li class="snb-list-cell"><a href="../page/chunjae-ai-irt.html" class="btn-snb-nav point">臾명빆諛섏쓳�대줎<span>(IRT)</span></a></li><li class="snb-list-cell"><a href="../page/chunjae-ai-cat.html" class="btn-snb-nav point">留욎땄臾명빆 異붿쿇<span>(CAT)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�뚯꽦�몄떇<span>(STT)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�뚯꽦�됯�</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�먭��� �몄떇<span>(CNN)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">臾몄옄�몄떇<span>(OCR)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�덈㈃�몄떇<span>(FRT)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">泥쒖옱GPT<span>(LLM湲곕컲)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�좎궗�꾧린諛� 梨쀫큸</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�좎궗臾명빆 寃���</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�뺤옣�꾩떎<span>(XR)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�쇱꽌</a></li></ul></div></li><li class="all-menu-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-all-menu-nav">AI 泥댄뿕</a><div class="snb-wrap"><ul class="snb-list"><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">吏��앹텛��<span>(KT)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�ъ링吏��앹텛��<span>(DKT)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">異붿쿇�뚭퀬由ъ쬁<span>(FM)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�ъ링異붿쿇<span>(DeepFM)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">臾명빆諛섏쓳�대줎<span>(IRT)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">留욎땄臾명빆 異붿쿇<span>(CAT)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�뚯꽦�몄떇<span>(STT)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�먭��� �몄떇<span>(CNN)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">臾몄옄�몄떇<span>(OCR)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�뚯꽦�됯�</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">泥쒖옱GPT<span>(LLM湲곕컲)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�좎궗�꾧린諛� 梨쀫큸</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�좎궗臾명빆 寃���</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�뺤옣�꾩떎<span>(XR)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�덈㈃�몄떇<span>(FRT)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�쇱꽌</a></li></ul></div></li><li class="all-menu-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-all-menu-nav">AI �뱁뿀</a><div class="snb-wrap"><ul class="snb-list"><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�멸났吏��μ뒪留덊듃肄붿묶</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">肄섑뀗痢� 援ъ“ �숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�숈뒿肄섑뀗痢� 異붿쿇諛⑸쾿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�숈뒿肄섑뀗痢� 異붿쿇�쒖뒪��</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�먭��� �좎븘�숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�먭��� �좎븘�숈뒿�쒖뒪��</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">梨쀫큸�쒖슜 �숈뒿�좊룄</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">梨쀫큸 �숈뒿�좊룄 �쒖뒪��</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�숈뒿�좊룄�� 梨쀫큸</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�먭��쎌씠�� �숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�먭��쎌씠�� �숈뒿�쒖뒪��</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�쒓뎅��/臾명솕 �ㅻ쭏�� 寃���</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">利앷컯/蹂듯빀�꾩떎 �뺣낫寃���</a></li></ul></div></li><!--<li class="all-menu-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-all-menu-nav">湲곗닠 釉붾줈洹�</a><div class="snb-wrap"><ul class="snb-list"><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">鍮낅뜲�댄꽣/ML</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">AI 留욎땄�숈뒿</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">吏��앹텛��<span>(KT)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�ъ링吏��앹텛��<span>(DKT)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">異붿쿇�뚭퀬由ъ쬁<span>(FM)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�ъ링異붿쿇<span>(DeepFM)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">臾명빆諛섏쓳�대줎<span>(IRT)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">留욎땄臾명빆 異붿쿇<span>(CAT)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�뚯꽦�몄떇<span>(STT)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�뚯꽦�됯��먭��� �몄떇<span>(CNN)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">臾몄옄�몄떇<span>(OCR)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�덈㈃�몄떇<span>(FRT)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">泥쒖옱GPT<span>(LLM湲곕컲)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�좎궗�꾧린諛� 梨쀫큸</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�좎궗臾명빆 寃���</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�뺤옣�꾩떎<span>(XR)</span></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�쇱꽌</a></li></ul></div></li>--><li class="all-menu-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-all-menu-nav">ABOUT US</a><div class="snb-wrap"><ul class="snb-list"><li class="snb-list-cell"><a href="https://www.chunjae.co.kr/" target="_blank" class="btn-snb-nav">泥쒖옱援먯쑁 <em class="icon icon-link"></em></a></li><li class="snb-list-cell"><a href="https://www.chunjaetext.co.kr/" target="_blank" class="btn-snb-nav">泥쒖옱援먭낵�� <em class="icon icon-link"></em></a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">怨듭� &amp; 湲곗궗</a></li><li class="snb-list-cell"><a href="javascript:alert(&quot;以�鍮꾩쨷�낅땲��.&quot);" class="btn-snb-nav">�대찓�� 臾몄쓽</a></li></ul></div></li></ul></div></div><div id="allMenuCube" class="all-menu-cube"></div></div><button type="button" class="btn-all-menu-toogle-nav"><span></span><span></span><span></span><span></span></button></div></div>';
    this.headerContainer.innerHTML = _html;
  },

  footer: function () {
    var _html = '';
    _html += '<div id="page-ui"><div class="page-ui-item"><button type="button" class="btn-page-top">�곷떒 �대룞</button></div>		</div>        <div class="footer-wrap">			<div class="footer-outer">				<div class="footer-inner">					<div class="footer-company-list">						<div class="footer-company-cell">							<div class="footer-company-items">								<h3 class="item-logo">																	<picture>										<source srcset="../common/images/common/footer-logo-1-m.png" width="125" media="(max-width: 1024px)">										<img src="../common/images/common/footer-logo-1.png" alt="泥쒖옱援먯쑁"/>									</picture>									</h3>								<div class="item-info">									<div class="item-txt"><em>����</em><p>媛뺥씗泥�</p></div>									<div class="item-txt"><em>二쇱냼</em><p>�쒖슱�� 湲덉쿇援� 媛��곕줈 9湲� 54</p></div>									<div class="item-txt"><em>�ъ뾽�먮벑濡앸쾲��</em><p>119-81-19350</p></div>									<div class="item-txt"><em>遺�媛��듭떊�ъ뾽�좉퀬踰덊샇</em><p>016712</p></div>									</div>							</div>						</div>						<div class="footer-company-cell">							<div class="footer-company-items">								<h3 class="item-logo">																	<picture>										<source srcset="../common/images/common/footer-logo-2-m.png" width="104" media="(max-width: 1024px)">										<img src="../common/images/common/footer-logo-2.png" alt="泥쒖옱援먭낵��"/>									</picture>									</h3>								<div class="item-info">									<div class="item-txt"><em>����</em><p>諛뺤젙怨�, �꾪삎吏�</p></div>									<div class="item-txt"><em>二쇱냼</em><p>�쒖슱�� 湲덉쿇援� 媛��곕뵒吏���1濡� 16, 2011��</p></div>									<div class="item-txt"><em>�ъ뾽�먮벑濡앸쾲��</em><p>119-81-70643</p></div>									</div>							</div>						</div>						<div class="footer-family">							<button type="button" class="btn-footer-family-label">FAMILY SITE</button>							<div class="footer-family-list">								<div class="footer-family-list-scroller">									<ul>										<li><a href="https://www.chunjaetext.co.kr/" target="_blank">泥쒖옱援먭낵��</a></li>										<li><a href="https://www.chunjae.co.kr/" target="_blank">泥쒖옱援먯쑁</a></li>										<li><a href="https://book.chunjae.co.kr/" target="_blank">泥쒖옱援먯쑁 援먯옱</a></li>										<li><a href="https://mall.chunjae.co.kr/" target="_blank">泥쒖옱援먯쑁 �쇳븨紐�</a></li>										<li><a href="https://i.milkt.co.kr/Main/frm_Main.aspx" target="_blank">諛��촖�꾩씠</a></li>										<li><a href="https://www.milkt.co.kr/Main/Main_new" target="_blank">諛��촖珥덈벑</a></li>										<li><a href="https://mid.milkt.co.kr/Main/frm_Main.aspx" target="_blank">諛��촖以묓븰</a></li>										<li><a href="https://high.milkt.co.kr/Main/frm_Main.aspx" target="_blank">諛��촖怨좊벑</a></li>										<li><a href="https://ele.tsherpa.co.kr/" target="_blank">�곗���</a></li>										<li><a href="https://mall.tsherpa.co.kr/" target="_blank">�곗��� �쇳븨紐�</a></li>										<li><a href="https://edutech.chunjae.co.kr/" target="_blank">�먮��뚰겕</a></li>										<li><a href="https://little.chunjae.co.kr/" target="_blank">由ы�泥쒖옱</a></li>										<li><a href="https://hme.chunjae.co.kr/hme/main.asp" target="_blank">HME</a></li>										<li><a href="https://www.edumon.co.kr/intro/index.asp" target="_blank">�먮�紐�</a></li>										<li><a href="https://www.smarthb-math.co.kr/" target="_blank">�ㅻ쭏�명빐踰뺤닔��</a></li>										<li><a href="https://www.smarthb-eng.co.kr/" target="_blank">�ㅻ쭏�명빐踰뺤쁺��</a></li>										<li><a href="https://www.hb-spclass.co.kr/" target="_blank">���뚯슦�깆깮援먯떎</a></li>										<li><a href="https://www.hb-baccal.co.kr/" target="_blank">�대쾿�낆꽌�쇱닠</a></li>										<li><a href="http://www.hbchinese.co.kr/main/default.aspx" target="_blank">�대쾿以묎뎅��</a></li>										<li><a href="https://www.hb-math.co.kr/" target="_blank">�대쾿�섑븰援먯떎</a></li>										<li><a href="https://www.drmath.co.kr/" target="_blank">�ν꽣留ㅼ벐</a></li>										<li><a href="https://www.pageshop.co.kr/#" target="_blank">PAGE SHOP</a></li>										<li><a href="https://www.genimarket.co.kr/member/login.php" target="_blank">吏��덈쭏耳�</a></li>										<li><a href="https://e-test.chunjae.co.kr/" target="_blank">�⑤씪�� �깆랬�� �됯�</a></li>										<li><a href="http://www.prinpia.co.kr/main/main.php" target="_blank">�꾨┛�쇱븘</a></li>									</ul>								</div>							</div>						</div>					</div>					<div class="footer-sns">						<ul>							<li><a href="https://www.facebook.com/milkt" target="_blank" class="btn-footer-sns facebook">�섏씠�ㅻ턿 諛붾줈媛�湲�</a></li>							<li><a href="https://www.instagram.com/milkt_official/" target="_blank" class="btn-footer-sns instargram">�몄뒪��洹몃옩 諛붾줈媛�湲�</a></li>							<li><a href="https://www.youtube.com/@chunjaeworld" target="_blank" class="btn-footer-sns youtube">�좏뒠釉� 諛붾줈媛�湲�</a></li>							<li><a href="https://blog.naver.com/chunjaetext" target="_blank" class="btn-footer-sns blog">�ㅼ씠踰� 釉붾줈洹� 諛붾줈媛�湲�</a></li>							<li><a href="https://cafe.naver.com/tunemom" target="_blank" class="btn-footer-sns cafe">�ㅼ씠踰� 移댄럹 諛붾줈媛�湲�</a></li>						</ul>					</div>					<div class="footer-copy">COPYRIGHT 2024. CHUNJAE CO.,LTD. ALL RIGHTS RESERVED.</div>					<button type="button" class="btn-footer-email" onclick="front.pop.open(&quot;emailRefusalPop&quot; , this);">�대찓�� 臾대떒 �섏쭛 嫄곕�</button>				</div>			</div>		</div>		<!-- �대찓�� 臾대떒 �섏쭛 嫄곕� �앹뾽 -->		<div id="emailRefusalPop" class="layer-pop-wrap contents-pop">			<div class="layer-pop-parent">				<div class="layer-pop-children">					<div class="pop-data">						<div class="pop-view-wrap small">							<div class="pop-view-header">								<h3 class="pop-view-title">�대찓�� 臾대떒 �섏쭛 嫄곕�</h3>							</div>							<div class="pop-view-body">								<div class="pop-view-detail">蹂� �ъ씠�몄뿉 寃뚯떆�� �대찓�� 二쇱냼媛� �꾩옄�고렪 �섏쭛 �꾨줈洹몃옩�대굹 洹� 諛뽰쓽 湲곗닠�� �μ튂瑜� �댁슜�섏뿬 臾대떒�쇰줈 �섏쭛�섎뒗 寃껋쓣 嫄곕��섎ŉ, �대� �꾨컲 �� �뺣낫�듭떊留앸쾿�� �섑빐 �뺤궗 泥섎쾶�⑥쓣 �좊뀗�섏뿬 二쇱떆湲� 諛붾엻�덈떎.</div>							</div>							<div class="pop-view-footer">								<div class="pop-view-ui">									<button type="button" class="btn-basic btn-black" onclick="front.pop.close(this);">�リ린</button>								</div>							</div>						</div>					</div>				</div>			</div>		</div>		<!-- //�대찓�� 臾대떒 �섏쭛 嫄곕� �앹뾽 -->';
    this.footerContainer.innerHTML = _html;
  }
};

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
    console.log('resize');
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
      $(document).on('mouseleave', '.gnb-list', function (e) {
        if (front.stage.width > 1024) {
          _this.header.removeClass('hover');
          _this.gnb.find('.gnb-list-cell').each(function () { $(this).removeClass('hover'); });
        };
      });

      //GNB 留덉슦�� �ㅻ쾭
      $(document).on('mouseenter', '.gnb-list-cell', function (e) {
        if (front.stage.width > 1024) {
          if (e.type == 'mouseenter') {
            //console.log(e.type + ' : ' + 'gnb hover');
            _this.header.addClass('hover');
            $(this).addClass('hover').siblings().removeClass('hover');
          }
        };
      });

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


        console.log('front.stage.top:::' + _posY);

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

    if ($('.main-ai').length > 0) {
      this.videos.ai = new video({
        el: $('.main-ai').find('.video-wrap'),
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

    if ($('.main-process').length > 0) {
      this.videos.process = new video({
        el: $('.main-process').find('.video-wrap'),
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

    if ($('.main-patent').length > 0) {
      this.videos.patent = new video({
        el: $('.main-patent').find('.video-wrap'),
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
      mainPatent.init();
    };

    if ($('.main-product').length > 0) {
      mainProduct.init();
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

    if ($('.main-experience').length > 0) mainExperience.init();
    if ($('.main-ai-coswear').length > 0) mainAiCoswear.init();
    if ($('.main-model').length > 0) mainModel.init();


    if ($('.main-headline').length > 0) {
      cube.init();
    };

    if ($('.main-overview').length > 0) {
      cube.init();
    };

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
    var $elementAI = ($('.main-ai').length > 0) ? $('.main-ai') : null;
    var $elementSlogan = ($('.main-slogan').length > 0) ? $('.main-slogan') : null;
    var $elementProcess = ($('.main-process').length > 0) ? $('.main-process') : null;
    var $elementProduct = ($('.main-product').length > 0) ? $('.main-product') : null;
    var $elementTechnology = ($('.main-technology').length > 0) ? $('.main-technology') : null;
    var $elementPatent = ($('.main-patent').length > 0) ? $('.main-patent') : null;
    var $elementFuture = ($('.main-future').length > 0) ? $('.main-future') : null;
    var $elementOverview = ($('.main-overview').length > 0) ? $('.main-overview') : null;
    var $elementEducation = ($('.main-education').length > 0) ? $('.main-education') : null;
    var $elementExperience = ($('.main-experience').length > 0) ? $('.main-experience') : null;
    var $elementModel = ($('.main-model').length > 0) ? $('.main-model') : null;
    var $elementSpecial = ($('.main-special').length > 0) ? $('.main-special') : null;
    var $elementAiCoswear = ($('.main-ai-coswear').length > 0) ? $('.main-ai-coswear') : null;

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

          //�섏씠吏� �섎떒 怨좎젙 踰꾪듉 �대깽��
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
      // overview
      ====================================================
      ====================================================*/
      if ($elementOverview) {
        $elementOverview.find('.item-1').attr('style', '');
        $elementOverview.find('.item-2').attr('style', '');
        $elementOverview.find('.item-3').attr('style', '');
        gsap.set($elementOverview.find('.item-1'), { alpha: 0, y: 40, scale: 1 });
        gsap.set($elementOverview.find('.item-2'), { alpha: 0, y: 40, scale: 1 });
        gsap.set($elementOverview.find('.item-3'), { alpha: 0, y: 40, scale: 1 });
        gsap.to($elementOverview.find('.item-1'), { duration: 0.6, delay: 0.5, alpha: 1, y: 0, scale: 1, ease: Quad.easeOut });
        gsap.to($elementOverview.find('.item-2'), { duration: 0.6, delay: 1.0, alpha: 1, y: 0, scale: 1, ease: Quad.easeOut });
        gsap.to($elementOverview.find('.item-3'), { duration: 0.6, delay: 1.5, alpha: 1, y: 0, scale: 1, ease: Quad.easeOut });

        this.scene.overviewheader = new ScrollMagic.Scene({
          triggerElement: $elementOverview[0],
          triggerHook: 0
        })
          //.addIndicators({name: "overviewheader"})
          .addTo(this.controller.pc);


        this.scene.overviewheader.offset(0);
        this.scene.overviewheader.duration($elementOverview.innerHeight());
        this.scene.overviewheader.on('enter', function () {
          $('#dHead').addClass('white');
        });

        this.scene.overviewVideo = new ScrollMagic.Scene({
          triggerElement: $elementOverview[0],
          triggerHook: 0
        })
          //.addIndicators({name: "overviewVideo"})
          .addTo(this.controller.pc);

        this.scene.overviewVideo.offset(0);
        this.scene.overviewVideo.duration($elementOverview.height());
        this.scene.overviewVideo.on('enter', function () {
          cube.play();
        });
        this.scene.overviewVideo.on('leave', function () {
          cube.pause();
        });


      };
      /* ====================================================
      ======================================================
      // education
      ====================================================
      ====================================================*/
      if ($elementEducation) {
        this.scene.educationheader = new ScrollMagic.Scene({
          triggerElement: $elementEducation[0],
          triggerHook: 0
        })
          //.addIndicators({name: "educationScroll"})
          .addTo(this.controller.pc);

        this.scene.educationheader.offset(0);
        this.scene.educationheader.duration($elementEducation.innerHeight());
        this.scene.educationheader.on('enter', function () {
          $('#dHead').removeClass('white');
        });

        this.scene.educationScroll = new ScrollMagic.Scene({
          triggerElement: $elementEducation[0],
          triggerHook: 1
        })
          //.addIndicators({name: "educationScroll"})
          .addTo(this.controller.pc);

        this.scene.educationScroll.offset(0);
        this.scene.educationScroll.duration($elementEducation.innerHeight());
        this.scene.educationScroll.on('enter', function () {
          $('#page-ui').removeClass('white');
        });
      };
      /* ====================================================
      ======================================================
      // Experience
      ====================================================
      ====================================================*/
      if ($elementExperience) {
        this.scene.experienceheader = new ScrollMagic.Scene({
          triggerElement: $elementExperience[0],
          triggerHook: 0
        })
          //.addIndicators({name: "educationScroll"})
          .addTo(this.controller.pc);

        this.scene.experienceheader.offset(0);
        this.scene.experienceheader.duration($elementExperience.innerHeight());
        this.scene.experienceheader.on('enter', function () {
          $('#dHead').removeClass('white');
        });

        this.scene.experienceScroll = new ScrollMagic.Scene({
          triggerElement: $elementExperience[0],
          triggerHook: 1
        })
          //.addIndicators({name: "educationScroll"})
          .addTo(this.controller.pc);

        this.scene.experienceScroll.offset(0);
        this.scene.experienceScroll.duration($elementExperience.innerHeight());
        this.scene.experienceScroll.on('enter', function () {
          $('#page-ui').removeClass('white');
        });
      };
      /* ====================================================
      ======================================================
      // model
      ====================================================
      ====================================================*/
      if ($elementModel) {
        this.scene.modelheader = new ScrollMagic.Scene({
          triggerElement: $elementModel[0],
          triggerHook: 0
        })
          //.addIndicators({name: "educationScroll"})
          .addTo(this.controller.pc);

        this.scene.modelheader.offset(0);
        this.scene.modelheader.duration($elementModel.innerHeight());
        this.scene.modelheader.on('enter', function () {
          $('#dHead').addClass('white');
        });

        this.scene.modelScroll = new ScrollMagic.Scene({
          triggerElement: $elementModel[0],
          triggerHook: 1
        })
          //.addIndicators({name: "educationScroll"})
          .addTo(this.controller.pc);

        this.scene.modelScroll.offset(0);
        this.scene.modelScroll.duration($elementModel.innerHeight());
        this.scene.modelScroll.on('enter', function () {
          $('#page-ui').addClass('white');
        });
      };
      /* ====================================================
      ======================================================
      // special
      ====================================================
      ====================================================*/
      if ($elementSpecial) {
        this.scene.specialSticky = new ScrollMagic.Scene({
          triggerElement: $elementSpecial[0],
          triggerHook: 0
        })
          //.addIndicators({name: "overviewSticky"})
          .setPin($elementSpecial.find('.main-sticky')[0])
          .addTo(this.controller.pc);

        this.scene.specialSticky.offset(0);
        this.scene.specialSticky.duration($elementSpecial.height() - stageH);

        this.scene.specialFade1 = new ScrollMagic.Scene({
          triggerElement: $elementSpecial[0],
          triggerHook: 0.5
        })
          //.addIndicators({name: "specialFade1"})
          .addTo(this.controller.pc);


        this.scene.specialFade1.offset(stageH * 0);
        this.scene.specialFade1.duration(stageH * 1);
        this.scene.specialFade1.on('enter', function () {
          $elementSpecial.find('.main-special-scene').eq(0).addClass('actived').siblings().removeClass('actived');
        });
        this.scene.specialFade1.on('leave', function (event) {
          if (event.state == 'BEFORE') $elementSpecial.find('.main-special-scene').removeClass('actived');
        });

        this.scene.specialFade2 = new ScrollMagic.Scene({
          triggerElement: $elementSpecial[0],
          triggerHook: 0.5
        })
          //.addIndicators({name: "specialFade2"})
          .addTo(this.controller.pc);


        this.scene.specialFade2.offset(stageH * 1.0);
        this.scene.specialFade2.duration(stageH * 0.5);
        this.scene.specialFade2.on('enter', function () {
          $elementSpecial.find('.main-special-scene').eq(1).addClass('actived').siblings().removeClass('actived');
        });

        this.scene.specialFade3 = new ScrollMagic.Scene({
          triggerElement: $elementSpecial[0],
          triggerHook: 0.5
        })
          //.addIndicators({name: "specialFade3"})
          .addTo(this.controller.pc);


        this.scene.specialFade3.offset(stageH * 1.5);
        this.scene.specialFade3.duration(stageH * 0.5);
        this.scene.specialFade3.on('enter', function () {
          $elementSpecial.find('.main-special-scene').eq(2).addClass('actived').siblings().removeClass('actived');
        });

        this.scene.specialFade4 = new ScrollMagic.Scene({
          triggerElement: $elementSpecial[0],
          triggerHook: 0.5
        })
          //.addIndicators({name: "specialFade4"})
          .addTo(this.controller.pc);


        this.scene.specialFade4.offset(stageH * 2.0);
        this.scene.specialFade4.duration(stageH * 0.5);
        this.scene.specialFade4.on('enter', function () {
          $elementSpecial.find('.main-special-scene').eq(3).addClass('actived').siblings().removeClass('actived');
        });

        this.scene.specialFade5 = new ScrollMagic.Scene({
          triggerElement: $elementSpecial[0],
          triggerHook: 0.5
        })
          //.addIndicators({name: "specialFade5"})
          .addTo(this.controller.pc);


        this.scene.specialFade5.offset(stageH * 2.5);
        this.scene.specialFade5.duration(stageH * 0.5);
        this.scene.specialFade5.on('enter', function () {
          $elementSpecial.find('.main-special-scene').eq(4).addClass('actived').siblings().removeClass('actived');
        });

        this.scene.specialBackground1 = new ScrollMagic.Scene({
          triggerElement: $elementSpecial[0],
          triggerHook: 0.5
        })
          //.addIndicators({name: "specialBackground1"})
          .addTo(this.controller.pc);

        this.scene.specialBackground1.offset(stageH * 0);
        this.scene.specialBackground1.duration(stageH * 1);
        this.scene.specialBackground1.on('enter', function () {
          $elementSpecial.removeClass('black');
          $('#dHead').removeClass('white');
          $('#page-ui').removeClass('white');
        });

        this.scene.specialBackground2 = new ScrollMagic.Scene({
          triggerElement: $elementSpecial[0],
          triggerHook: 0.5
        })
          //.addIndicators({name: "specialBackground2"})
          .addTo(this.controller.pc);

        this.scene.specialBackground2.offset(stageH * 1.0);
        this.scene.specialBackground2.duration(stageH * 1.5);
        this.scene.specialBackground2.on('enter', function () {
          $elementSpecial.addClass('black');
          $('#dHead').addClass('white');
          $('#page-ui').addClass('white');
        });

        this.scene.specialBackground3 = new ScrollMagic.Scene({
          triggerElement: $elementSpecial[0],
          triggerHook: 0.5
        })
          //.addIndicators({name: "specialBackground2"})
          .addTo(this.controller.pc);

        this.scene.specialBackground3.offset(stageH * 2.5);
        this.scene.specialBackground3.duration(stageH * 0.5);
        this.scene.specialBackground3.on('enter', function () {
          $elementSpecial.removeClass('black');
          $('#dHead').removeClass('white');
          $('#page-ui').removeClass('white');
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


        this.tweener.headlineTweener1 = gsap.timeline({});
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


        this.tweener.headlineTweener2 = gsap.timeline({});
        this.tweener.headlineTweener2.fromTo($elementHeadline.find('.headline-2 .front'), { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, { clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)', ease: Linear.easeNone }, 0);
        this.tweener.headlineTweener2.fromTo($elementHeadline.find('.headline-2 .back'), { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }, { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', ease: Linear.easeNone }, 0);
        this.tweener.headlineTweener2.fromTo($elementHeadline.find('.bg'), { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, { clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)', ease: Linear.easeNone }, 0);
        this.scene.headlineScene2 = new ScrollMagic.Scene({
          triggerElement: $elementHeadline[0],
          triggerHook: 0
        })
          //.addIndicators({name: "headlineScene 2"})
          .addTo(this.controller.pc);

        this.scene.headlineScene2.offset(stageH * 0.7);
        this.scene.headlineScene2.duration(stageH * 0.7);
        this.scene.headlineScene2.setTween(this.tweener.headlineTweener2);

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
          cube.play();
        });
        this.scene.headlineVideo.on('leave', function () {
          cube.pause();
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
          $('#dHead').removeClass('white');
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
          $('#dHead').addClass('white');
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

        this.scene.aiVideo = new ScrollMagic.Scene({
          triggerElement: $elementAI[0],
          triggerHook: 1
        })
          //.addIndicators({name: "aiVideo"})
          .addTo(this.controller.pc);

        this.scene.aiVideo.offset(0);
        this.scene.aiVideo.duration($elementAI.height() + stageH);
        this.scene.aiVideo.on('enter', function () {
          _this.videos.ai.play();
        });
        this.scene.aiVideo.on('leave', function () {
          _this.videos.ai.stop();
        });

        this.scene.aiScene0 = new ScrollMagic.Scene({
          triggerElement: $elementAI[0],
          triggerHook: 0
        })
          //.addIndicators({name: "aiVideo"})
          .addTo(this.controller.pc);

        this.scene.aiScene0.on('enter', function () {
          $elementAI.find('.title').addClass('actived');
        });
        this.scene.aiScene0.on('leave', function () {
          $elementAI.find('.title').removeClass('actived');
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
      // slogan
      ====================================================
      ====================================================*/
      if ($elementSlogan) {
        $elementSlogan.removeClass('actived');

        this.scene.sloganSticky = new ScrollMagic.Scene({
          triggerElement: $elementSlogan[0],
          triggerHook: 0
        })
          //.addIndicators({name: "aiSticky"})
          .setPin($elementSlogan.find('.main-sticky')[0])
          .addTo(this.controller.pc);

        this.scene.sloganSticky.offset(0);
        this.scene.sloganSticky.duration($elementSlogan.height() - stageH);

        this.tweener.sloganTweener1 = gsap.timeline({});
        this.tweener.sloganTweener1.fromTo($elementSlogan.find('.sentence-1 .cover'), { x: '0%' }, { x: '100%', ease: Linear.easeNone }, 0);
        this.scene.sloganScene1 = new ScrollMagic.Scene({
          triggerElement: $elementSlogan[0],
          triggerHook: 0
        })
          //.addIndicators({name: "sloganTweener1"})
          .addTo(this.controller.pc);

        this.scene.sloganScene1.offset(stageH * 0);
        this.scene.sloganScene1.duration(stageH * 0.5);
        this.scene.sloganScene1.setTween(this.tweener.sloganTweener1);

        this.tweener.sloganTweener2 = gsap.timeline({});
        this.tweener.sloganTweener2.fromTo($elementSlogan.find('.sentence-2 .word-row:eq(0) .cover'), { x: '0%' }, { x: '100%', ease: Linear.easeNone });
        this.tweener.sloganTweener2.fromTo($elementSlogan.find('.sentence-2 .word-row:eq(1) .cover'), { x: '0%' }, { x: '100%', ease: Linear.easeNone });
        this.scene.sloganScene2 = new ScrollMagic.Scene({
          triggerElement: $elementSlogan[0],
          triggerHook: 0
        })
          //.addIndicators({name: "sloganTweener2"})
          .addTo(this.controller.pc);

        this.scene.sloganScene2.offset(stageH * 0.5);
        this.scene.sloganScene2.duration(stageH * 0.5);
        this.scene.sloganScene2.setTween(this.tweener.sloganTweener2);

        this.tweener.sloganTweener3 = gsap.timeline({});
        this.tweener.sloganTweener3.fromTo($elementSlogan.find('.sentence-3 .cover'), { x: '0%' }, { x: '100%', ease: Linear.easeNone }, 0);
        this.scene.sloganScene3 = new ScrollMagic.Scene({
          triggerElement: $elementSlogan[0],
          triggerHook: 0
        })
          //.addIndicators({name: "sloganTweener3"})
          .addTo(this.controller.pc);

        this.scene.sloganScene3.offset(stageH * 1.0);
        this.scene.sloganScene3.duration(stageH * 0.5);
        this.scene.sloganScene3.setTween(this.tweener.sloganTweener3);

        this.tweener.sloganTweener4 = gsap.timeline({});
        this.tweener.sloganTweener4.fromTo($elementSlogan.find('.sentence-4 .word-row:eq(0) .cover'), { x: '0%' }, { x: '100%', ease: Linear.easeNone });
        this.tweener.sloganTweener4.fromTo($elementSlogan.find('.sentence-4 .word-row:eq(1) .cover'), { x: '0%' }, { x: '100%', ease: Linear.easeNone });
        this.scene.sloganScene4 = new ScrollMagic.Scene({
          triggerElement: $elementSlogan[0],
          triggerHook: 0
        })
          //.addIndicators({name: "sloganTweener4"})
          .addTo(this.controller.pc);

        this.scene.sloganScene4.offset(stageH * 1.5);
        this.scene.sloganScene4.duration(stageH * 0.5);
        this.scene.sloganScene4.setTween(this.tweener.sloganTweener4);


        this.scene.sloganScene5 = new ScrollMagic.Scene({
          triggerElement: $elementSlogan[0],
          triggerHook: 0
        })
          //.addIndicators({name: "sloganScene5"})
          .addTo(this.controller.pc);

        this.scene.sloganScene5.offset(stageH * 2.0);
        this.scene.sloganScene5.on('enter', function () {
          $elementSlogan.addClass('actived');
        });
        this.scene.sloganScene5.on('leave', function () {
          $elementSlogan.removeClass('actived');
        });


        this.scene.sloganHeader = new ScrollMagic.Scene({
          triggerElement: $elementSlogan[0],
          triggerHook: 0
        })
          //.addIndicators({name: "$elementSlogan"})
          .addTo(this.controller.pc);

        this.scene.sloganHeader.offset(0);
        this.scene.sloganHeader.duration($elementSlogan.height());
        this.scene.sloganHeader.on('enter', function () {
          $('#dHead').removeClass('white');
        });

        this.scene.sloganTop = new ScrollMagic.Scene({
          triggerElement: $elementSlogan[0],
          triggerHook: 1
        })
          //.addIndicators({name: "sloganTop"})
          .addTo(this.controller.pc);

        this.scene.sloganTop.offset(0);
        this.scene.sloganTop.duration($elementSlogan.height());
        this.scene.sloganTop.on('enter', function () {
          $('#page-ui').removeClass('white');
        });
      };
      /* ====================================================
      ======================================================
      // process
      ====================================================
      ====================================================*/
      if ($elementProcess) {
        this.scene.processSticky = new ScrollMagic.Scene({
          triggerElement: $elementProcess[0],
          triggerHook: 0
        })
          //.addIndicators({name: "aiSticky"})
          .setPin($elementProcess.find('.main-sticky')[0])
          .addTo(this.controller.pc);

        this.scene.processSticky.offset(0);
        this.scene.processSticky.duration($elementProcess.height() - stageH);

        this.scene.processVideo = new ScrollMagic.Scene({
          triggerElement: $elementProcess[0],
          triggerHook: 0
        })
          //.addIndicators({name: "processVideo"})
          .addTo(this.controller.pc);

        this.scene.processVideo.offset(0);
        this.scene.processVideo.duration($elementProcess.height());
        this.scene.processVideo.on('enter', function () {
          _this.videos.process.play();
        });
        this.scene.processVideo.on('leave', function () {
          _this.videos.process.stop();
        });

        this.tweener.processTweener1 = gsap.timeline({});
        this.tweener.processTweener1.fromTo($elementProcess.find('.sentence-1'), { alpha: 0 }, { alpha: 1, ease: Linear.easeNone }, 0);
        this.scene.processScene1 = new ScrollMagic.Scene({
          triggerElement: $elementProcess[0],
          triggerHook: 0
        })
          //.addIndicators({name: "headlineScene 1"})
          .addTo(this.controller.pc);

        this.scene.processScene1.offset(stageH * 1);
        this.scene.processScene1.duration(stageH * 0.5);
        this.scene.processScene1.setTween(this.tweener.processTweener1);

        this.tweener.processTweener2 = gsap.timeline({});
        this.tweener.processTweener2.fromTo($elementProcess.find('.sentence-2'), { alpha: 0 }, { alpha: 1, ease: Linear.easeNone }, 0);
        this.scene.processScene2 = new ScrollMagic.Scene({
          triggerElement: $elementProcess[0],
          triggerHook: 0
        })
          //.addIndicators({name: "headlineScene 1"})
          .addTo(this.controller.pc);

        this.scene.processScene2.offset(stageH * 1.5);
        this.scene.processScene2.duration(stageH * 0.5);
        this.scene.processScene2.setTween(this.tweener.processTweener2);

        this.scene.processHeader = new ScrollMagic.Scene({
          triggerElement: $elementProcess[0],
          triggerHook: 0
        })
          //.addIndicators({name: "$elementProcess"})
          .addTo(this.controller.pc);

        this.scene.processHeader.offset(stageH * 1);
        this.scene.processHeader.duration(stageH * 2.5);
        this.scene.processHeader.on('enter', function () {
          $('#dHead').addClass('white');
        });

        this.scene.processTop = new ScrollMagic.Scene({
          triggerElement: $elementProcess[0],
          triggerHook: 1
        })
          //.addIndicators({name: "processTop"})
          .addTo(this.controller.pc);

        this.scene.processTop.offset(stageH * 1);
        this.scene.processTop.duration(stageH * 2.5);
        this.scene.processTop.on('enter', function () {
          $('#page-ui').addClass('white');
        });
      };
      /* ====================================================
      ======================================================
      // product
      ====================================================
      ====================================================*/
      if ($elementProduct) {
        this.scene.productSticky = new ScrollMagic.Scene({
          triggerElement: $elementProduct[0],
          triggerHook: 0
        })
          //.addIndicators({name: "aiSticky"})
          .setPin($elementProduct.find('.main-sticky')[0])
          .addTo(this.controller.pc);

        this.scene.productSticky.offset(0);
        this.scene.productSticky.duration($elementProduct.height() - stageH);


        this.scene.productScene1 = new ScrollMagic.Scene({
          triggerElement: $elementProduct[0],
          triggerHook: 0
        })
          //.addIndicators({name: "$elementProduct 1"})
          .addTo(this.controller.pc);

        this.scene.productScene1.offset(0);
        this.scene.productScene1.duration(700);
        this.scene.productScene1.on('enter', function () {
          mainProduct.sort(0);
        });
        this.scene.productScene1.on('leave', function (event) {
          if (event.state == 'BEFORE') mainProduct.sort(-1);
        });

        this.scene.productScene2 = new ScrollMagic.Scene({
          triggerElement: $elementProduct[0],
          triggerHook: 0
        })
          //.addIndicators({name: "$elementProduct 2"})
          .addTo(this.controller.pc);

        this.scene.productScene2.offset(700);
        this.scene.productScene2.duration(700);
        this.scene.productScene2.on('enter', function () {
          mainProduct.sort(1);
        });

        this.scene.productScene3 = new ScrollMagic.Scene({
          triggerElement: $elementProduct[0],
          triggerHook: 0
        })
          //.addIndicators({name: "$elementProduct 3"})
          .addTo(this.controller.pc);

        this.scene.productScene3.offset(1400);
        this.scene.productScene3.duration(700);
        this.scene.productScene3.on('enter', function (event) {
          mainProduct.sort(2);
        });

        this.scene.productHeader = new ScrollMagic.Scene({
          triggerElement: $elementProduct[0],
          triggerHook: 0
        })
          //.addIndicators({name: "$elementProduct"})
          .addTo(this.controller.pc);

        this.scene.productHeader.offset(stageH * 0);
        this.scene.productHeader.duration(stageH + 2100);
        this.scene.productHeader.on('enter', function () {
          $('#dHead').addClass('white');
        });

        this.scene.productTop = new ScrollMagic.Scene({
          triggerElement: $elementProduct[0],
          triggerHook: 1
        })
          //.addIndicators({name: "productTop"})
          .addTo(this.controller.pc);

        this.scene.productTop.offset(stageH * 0);
        this.scene.productTop.duration(stageH + 2100);
        this.scene.productTop.on('enter', function () {
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

        this.scene.patentVideo = new ScrollMagic.Scene({
          triggerElement: $elementPatent[0],
          triggerHook: 1
        })
          //.addIndicators({name: "processVideo"})
          .addTo(this.controller.pc);

        this.scene.patentVideo.offset(0);
        this.scene.patentVideo.duration($elementPatent.height() + stageH);
        this.scene.patentVideo.on('enter', function () {
          _this.videos.patent.play();
        });
        this.scene.patentVideo.on('leave', function () {
          _this.videos.patent.stop();
        });

        this.tweener.patentTweener1 = gsap.timeline({});
        this.tweener.patentTweener1.fromTo($elementPatent.find('.title .sentence-1'), { x: '100vw' }, { x: '0vw', ease: Linear.easeNone }, 0);

        this.scene.patentScene1 = new ScrollMagic.Scene({
          triggerElement: $elementPatent[0],
          triggerHook: 0
        })
          //.addIndicators({name: "headlineScene 1"})
          .addTo(this.controller.pc);

        this.scene.patentScene1.offset(stageH * 0);
        this.scene.patentScene1.duration(stageH * 0.75);
        this.scene.patentScene1.setTween(this.tweener.patentTweener1);

        this.tweener.patentTweener2 = gsap.timeline({});
        this.tweener.patentTweener2.fromTo($elementPatent.find('.title .sentence-2'), { x: '100vw' }, { x: '0vw', ease: Linear.easeNone }, 0);

        this.scene.patentScene2 = new ScrollMagic.Scene({
          triggerElement: $elementPatent[0],
          triggerHook: 0
        })
          //.addIndicators({name: "headlineScene 1"})
          .addTo(this.controller.pc);

        this.scene.patentScene2.offset(stageH * 0.75);
        this.scene.patentScene2.duration(stageH * 0.75);
        this.scene.patentScene2.setTween(this.tweener.patentTweener2);

        this.tweener.patentTweener3 = gsap.timeline({});
        this.tweener.patentTweener3.fromTo($elementPatent.find('.list-inner'), { x: stageW }, { x: $elementPatent.find('.list').width() - $elementPatent.find('.list-inner').width(), ease: Linear.easeNone }, 0);

        this.scene.patentScene3 = new ScrollMagic.Scene({
          triggerElement: $elementPatent[0],
          triggerHook: 0
        })
          //.addIndicators({name: "headlineScene 1"})
          .addTo(this.controller.pc);

        this.scene.patentScene3.offset(stageH * 1.0);
        this.scene.patentScene3.duration(stageH * 5);
        this.scene.patentScene3.setTween(this.tweener.patentTweener3);



        $elementPatent.find('.list-inner .list-cell').each(function () {
          var $element = $(this);
          var $listItems = $(this).find('.list-items');
          var $index = $(this).index();
          _this.tweener['patentTweener4' + $index] = gsap.timeline({});
          if ($index % 2 == 0) {
            _this.tweener['patentTweener4' + $index].fromTo($listItems, { y: 0 }, { y: 70, ease: Linear.easeNone });
            _this.tweener['patentTweener4' + $index].to($listItems, { y: 0, ease: Linear.easeNone });
            _this.tweener['patentTweener4' + $index].to($listItems, { y: 70, ease: Linear.easeNone });
            _this.tweener['patentTweener4' + $index].to($listItems, { y: 0, ease: Linear.easeNone });
            _this.tweener['patentTweener4' + $index].to($listItems, { y: 70, ease: Linear.easeNone });
            _this.tweener['patentTweener4' + $index].to($listItems, { y: 0, ease: Linear.easeNone });
          } else {
            _this.tweener['patentTweener4' + $index].fromTo($listItems, { y: 70 }, { y: 0, ease: Linear.easeNone });
            _this.tweener['patentTweener4' + $index].to($listItems, { y: 70, ease: Linear.easeNone });
            _this.tweener['patentTweener4' + $index].to($listItems, { y: 0, ease: Linear.easeNone });
            _this.tweener['patentTweener4' + $index].to($listItems, { y: 70, ease: Linear.easeNone });
            _this.tweener['patentTweener4' + $index].to($listItems, { y: 0, ease: Linear.easeNone });
            _this.tweener['patentTweener4' + $index].to($listItems, { y: 70, ease: Linear.easeNone });
          };
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
      /* ====================================================
      ======================================================
      // future
      ====================================================
      ====================================================*/
      if ($elementFuture) {
        $elementFuture.find('.scene-1 .word-1').attr('style', '');
        $elementFuture.find('.scene-1 .word-2').attr('style', '');
        $elementFuture.find('.scene-1 .word-3').attr('style', '');
        $elementFuture.find('.scene-1 .word-4').attr('style', '');

        this.scene.futureSticky = new ScrollMagic.Scene({
          triggerElement: $elementFuture[0],
          triggerHook: 0
        })
          //.addIndicators({name: "aiSticky"})
          .setPin($elementFuture.find('.main-sticky')[0])
          .addTo(this.controller.pc);

        this.scene.futureSticky.offset(0);
        this.scene.futureSticky.duration($elementFuture.height() - stageH);

        this.tweener.futureTweener1 = gsap.timeline({});
        this.tweener.futureTweener1.fromTo($elementFuture.find('.scene-1 .word-2'), { width: 0, alpha: 0 }, { width: $elementFuture.find('.scene-1 .word-2 .txt').width(), alpha: 1, ease: Linear.easeNone });
        this.tweener.futureTweener1.fromTo($elementFuture.find('.scene-1 .word-3'), { width: 0, alpha: 0 }, { width: $elementFuture.find('.scene-1 .word-3 .txt').width(), alpha: 1, ease: Linear.easeNone });
        this.tweener.futureTweener1.fromTo($elementFuture.find('.scene-1 .word-4'), { width: 0, alpha: 0 }, { width: $elementFuture.find('.scene-1 .word-4 .txt').width(), alpha: 1, ease: Linear.easeNone });

        this.scene.futureScene1 = new ScrollMagic.Scene({
          triggerElement: $elementFuture[0],
          triggerHook: 0
        })
          //.addIndicators({name: "futureScene1"})
          .addTo(this.controller.pc);

        this.scene.futureScene1.offset(stageH * 0.25);
        this.scene.futureScene1.duration(stageH * 1);
        this.scene.futureScene1.setTween(this.tweener.futureTweener1);


        this.tweener.futureTweener3 = gsap.timeline({});
        this.tweener.futureTweener3.fromTo($elementFuture.find('.scene-1 .sentence'), { scale: 1 }, { scale: 30, ease: Linear.easeNone }, 0);

        this.scene.futureScene3 = new ScrollMagic.Scene({
          triggerElement: $elementFuture[0],
          triggerHook: 0
        })
          //.addIndicators({name: "futureScene1"})
          .addTo(this.controller.pc);

        this.scene.futureScene3.offset(stageH * 1.75);
        this.scene.futureScene3.duration(stageH * 2.0);
        this.scene.futureScene3.setTween(this.tweener.futureTweener3);

        this.tweener.futureTweener4 = gsap.timeline({});
        this.tweener.futureTweener4.fromTo($elementFuture.find('.scene-2'), { alpha: 0 }, { alpha: 1, ease: Linear.easeNone }, 0);

        this.scene.futureScene4 = new ScrollMagic.Scene({
          triggerElement: $elementFuture[0],
          triggerHook: 0
        })
          //.addIndicators({name: "futureScene1"})
          .addTo(this.controller.pc);

        this.scene.futureScene4.offset(stageH * 2.25);
        this.scene.futureScene4.duration(stageH * 0.5);
        this.scene.futureScene4.setTween(this.tweener.futureTweener4);


        this.tweener.futureTweener5 = gsap.timeline({});

        var k = 0;
        $elementFuture.find('.scene-2 .sentence-1 .word').each(function () {
          var $word = $(this);
          var $delay = k * 0.1;
          _this.tweener.futureTweener5.fromTo($word, { y: '50%', alpha: 0 }, { y: '0%', delay: $delay, alpha: 1, ease: Back.easeOut }, 0);
          k++;
        });

        this.scene.futureScene5 = new ScrollMagic.Scene({
          triggerElement: $elementFuture[0],
          triggerHook: 0
        })
          //.addIndicators({name: "futureScene1"})
          .addTo(this.controller.pc);

        this.scene.futureScene5.offset(stageH * 2.75);
        this.scene.futureScene5.duration(stageH * 1.0);
        this.scene.futureScene5.setTween(this.tweener.futureTweener5);

        this.tweener.futureTweener6 = gsap.timeline({});

        $elementFuture.find('.scene-2 .sentence-2 .word').each(function () {
          var $word = $(this);
          var $delay = $(this).index() * 0.1;
          _this.tweener.futureTweener6.fromTo($word, { y: '50%', alpha: 0 }, { y: '0%', delay: $delay, alpha: 1, ease: Back.easeOut }, 0);
        });

        this.tweener.futureTweener6.fromTo($elementFuture.find('.scene-2 .desc'), { alpha: 0 }, { alpha: 1, ease: Linear.easeNone }, 0);

        this.scene.futureScene6 = new ScrollMagic.Scene({
          triggerElement: $elementFuture[0],
          triggerHook: 0
        })
          //.addIndicators({name: "futureScene1"})
          .addTo(this.controller.pc);

        this.scene.futureScene6.offset(stageH * 3.75);
        this.scene.futureScene6.duration(stageH * 1.0);
        this.scene.futureScene6.setTween(this.tweener.futureTweener6);

        this.scene.futureHeader1 = new ScrollMagic.Scene({
          triggerElement: $elementFuture[0],
          triggerHook: 0
        })
          //.addIndicators({name: "futureHeader1"})
          .addTo(this.controller.pc);

        this.scene.futureHeader1.offset(stageH * 0);
        this.scene.futureHeader1.duration(stageH * 2.25);
        this.scene.futureHeader1.on('enter', function () {
          $('#dHead').addClass('white');
        });

        this.scene.futureHeader2 = new ScrollMagic.Scene({
          triggerElement: $elementFuture[0],
          triggerHook: 0
        })
          //.addIndicators({name: "futureHeader2"})
          .addTo(this.controller.pc);

        this.scene.futureHeader2.offset(stageH * 2.25);
        this.scene.futureHeader2.duration(stageH * 3.5);
        this.scene.futureHeader2.on('enter', function () {
          $('#dHead').removeClass('white');
        });

        this.scene.futureTop1 = new ScrollMagic.Scene({
          triggerElement: $elementFuture[0],
          triggerHook: 1
        })
          //.addIndicators({name: "futureTop1"})
          .addTo(this.controller.pc);

        this.scene.futureTop1.offset(stageH * 0);
        this.scene.futureTop1.duration(stageH * 2.25);
        this.scene.futureTop1.on('enter', function () {
          $('#page-ui').addClass('white');
        });

        this.scene.futureTop2 = new ScrollMagic.Scene({
          triggerElement: $elementFuture[0],
          triggerHook: 1
        })
          //.addIndicators({name: "futureTop2"})
          .addTo(this.controller.pc);

        this.scene.futureTop2.offset(stageH * 2.25);
        this.scene.futureTop2.duration(stageH * 3.5);
        this.scene.futureTop2.on('enter', function () {
          $('#page-ui').removeClass('white');
        });
      };

      /* ====================================================
      ======================================================
      // ai coswear
      ====================================================
      ====================================================*/
      if ($elementAiCoswear) {
        this.scene.aiCoswearheader = new ScrollMagic.Scene({
          triggerElement: $elementAiCoswear[0],
          triggerHook: 0
        })
          //.addIndicators({name: "aiCoswearScroll"})
          .addTo(this.controller.pc);

        this.scene.aiCoswearheader.offset(0);
        this.scene.aiCoswearheader.duration($elementAiCoswear.innerHeight());
        this.scene.aiCoswearheader.on('enter', function () {
          $('#dHead').removeClass('white');
        });

        this.scene.aiCoswearScroll = new ScrollMagic.Scene({
          triggerElement: $elementAiCoswear[0],
          triggerHook: 1
        })
          //.addIndicators({name: "aiCoswearScroll"})
          .addTo(this.controller.pc);

        this.scene.aiCoswearScroll.offset(0);
        this.scene.aiCoswearScroll.duration($elementAiCoswear.innerHeight());
        this.scene.aiCoswearScroll.on('enter', function () {
          $('#page-ui').removeClass('white');
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
        // overview
        ====================================================
        ====================================================*/
        if ($elementOverview) {
          $elementOverview.find('.item-1').attr('style', '');
          $elementOverview.find('.item-2').attr('style', '');
          $elementOverview.find('.item-3').attr('style', '');

          this.scene.overviewSticky = new ScrollMagic.Scene({
            triggerElement: $elementOverview[0],
            triggerHook: 0
          })
            //.addIndicators({name: "overviewSticky"})
            //.setPin($elementOverview.find('.main-sticky')[0])
            .addTo(this.controller.mobile);

          this.scene.overviewSticky.offset(0);
          this.scene.overviewSticky.duration($elementOverview.height() - stageH);
          this.scene.overviewSticky.on('enter', function () {
            $('#dHead').addClass('white');
          });
          gsap.set($elementOverview.find('.item-1'), { alpha: 0, y: 40, scale: 1 });
          gsap.set($elementOverview.find('.item-2'), { alpha: 0, y: 40, scale: 1 });
          gsap.set($elementOverview.find('.item-3'), { alpha: 0, y: 40, scale: 1 });
          gsap.to($elementOverview.find('.item-1'), { duration: 0.6, delay: 0.5, alpha: 1, y: 0, scale: 1, ease: Quad.easeOut });
          gsap.to($elementOverview.find('.item-2'), { duration: 0.6, delay: 1.0, alpha: 1, y: 0, scale: 1, ease: Quad.easeOut });
          gsap.to($elementOverview.find('.item-3'), { duration: 0.6, delay: 1.5, alpha: 1, y: 0, scale: 1, ease: Quad.easeOut });

          this.scene.overviewVideo = new ScrollMagic.Scene({
            triggerElement: $elementOverview[0],
            triggerHook: 0
          })
            //.addIndicators({name: "overviewheader"})
            .addTo(this.controller.mobile);

          this.scene.overviewVideo.offset(0);
          this.scene.overviewVideo.duration($elementOverview.height());
          this.scene.overviewVideo.on('enter', function () {
            cube.play();
          });
          this.scene.overviewVideo.on('leave', function () {
            cube.pause();
          });

        };
        /* ====================================================
        ======================================================
        // education
        ====================================================
        ====================================================*/
        if ($elementEducation) {

          this.scene.educationScroll = new ScrollMagic.Scene({
            triggerElement: $elementEducation[0],
            triggerHook: 1
          })
            //.addIndicators({name: "educationScroll"})
            .addTo(this.controller.mobile);

          this.scene.educationScroll.offset(0);
          this.scene.educationScroll.duration($elementEducation.innerHeight());
          this.scene.educationScroll.on('enter', function () {
            $('#page-ui').removeClass('white');
          });
        };
        /* ====================================================
        ======================================================
        // Experience
        ====================================================
        ====================================================*/
        if ($elementExperience) {
          this.scene.experienceScroll = new ScrollMagic.Scene({
            triggerElement: $elementExperience[0],
            triggerHook: 1
          })
            //.addIndicators({name: "educationScroll"})
            .addTo(this.controller.mobile);

          this.scene.experienceScroll.offset(0);
          this.scene.experienceScroll.duration($elementExperience.innerHeight());
          this.scene.experienceScroll.on('enter', function () {
            $('#page-ui').removeClass('white');
          });
        };
        /* ====================================================
        ======================================================
        // model
        ====================================================
        ====================================================*/
        if ($elementModel) {
          this.scene.modelheader = new ScrollMagic.Scene({
            triggerElement: $elementModel[0],
            triggerHook: 0
          })
            //.addIndicators({name: "educationScroll"})
            .addTo(this.controller.mobile);

          this.scene.modelheader.offset(0);
          this.scene.modelheader.duration($elementModel.innerHeight());
          this.scene.modelheader.on('enter', function () {
            $('#dHead').addClass('white');
          });

          this.scene.modelScroll = new ScrollMagic.Scene({
            triggerElement: $elementModel[0],
            triggerHook: 1
          })
            //.addIndicators({name: "educationScroll"})
            .addTo(this.controller.mobile);

          this.scene.modelScroll.offset(0);
          this.scene.modelScroll.duration($elementModel.innerHeight());
          this.scene.modelScroll.on('enter', function () {
            $('#page-ui').addClass('white');
          });
        };
        /* ====================================================
        ======================================================
        // special
        ====================================================
        ====================================================*/
        if ($elementSpecial) {
          this.scene.specialSticky = new ScrollMagic.Scene({
            triggerElement: $elementSpecial[0],
            triggerHook: 0
          })
            //.addIndicators({name: "overviewSticky"})
            .setPin($elementSpecial.find('.main-sticky')[0])
            .addTo(this.controller.mobile);

          this.scene.specialSticky.offset(0);
          this.scene.specialSticky.duration($elementSpecial.height() - stageH);

          this.scene.specialFade1 = new ScrollMagic.Scene({
            triggerElement: $elementSpecial[0],
            triggerHook: 0.5
          })
            //.addIndicators({name: "specialFade1"})
            .addTo(this.controller.mobile);


          this.scene.specialFade1.offset(stageH * 0);
          this.scene.specialFade1.duration(stageH * 1);
          this.scene.specialFade1.on('enter', function () {
            $elementSpecial.find('.main-special-scene').eq(0).addClass('actived').siblings().removeClass('actived');
          });
          this.scene.specialFade1.on('leave', function (event) {
            if (event.state == 'BEFORE') $elementSpecial.find('.main-special-scene').removeClass('actived');
          });

          this.scene.specialFade2 = new ScrollMagic.Scene({
            triggerElement: $elementSpecial[0],
            triggerHook: 0.5
          })
            //.addIndicators({name: "specialFade2"})
            .addTo(this.controller.mobile);


          this.scene.specialFade2.offset(stageH * 1.0);
          this.scene.specialFade2.duration(stageH * 0.5);
          this.scene.specialFade2.on('enter', function () {
            $elementSpecial.find('.main-special-scene').eq(1).addClass('actived').siblings().removeClass('actived');
          });

          this.scene.specialFade3 = new ScrollMagic.Scene({
            triggerElement: $elementSpecial[0],
            triggerHook: 0.5
          })
            //.addIndicators({name: "specialFade3"})
            .addTo(this.controller.mobile);


          this.scene.specialFade3.offset(stageH * 1.5);
          this.scene.specialFade3.duration(stageH * 0.5);
          this.scene.specialFade3.on('enter', function () {
            $elementSpecial.find('.main-special-scene').eq(2).addClass('actived').siblings().removeClass('actived');
          });

          this.scene.specialFade4 = new ScrollMagic.Scene({
            triggerElement: $elementSpecial[0],
            triggerHook: 0.5
          })
            //.addIndicators({name: "specialFade4"})
            .addTo(this.controller.mobile);


          this.scene.specialFade4.offset(stageH * 2.0);
          this.scene.specialFade4.duration(stageH * 0.5);
          this.scene.specialFade4.on('enter', function () {
            $elementSpecial.find('.main-special-scene').eq(3).addClass('actived').siblings().removeClass('actived');
          });

          this.scene.specialFade5 = new ScrollMagic.Scene({
            triggerElement: $elementSpecial[0],
            triggerHook: 0.5
          })
            //.addIndicators({name: "specialFade5"})
            .addTo(this.controller.mobile);


          this.scene.specialFade5.offset(stageH * 2.5);
          this.scene.specialFade5.duration(stageH * 0.5);
          this.scene.specialFade5.on('enter', function () {
            $elementSpecial.find('.main-special-scene').eq(4).addClass('actived').siblings().removeClass('actived');
          });

          this.scene.specialBackground1 = new ScrollMagic.Scene({
            triggerElement: $elementSpecial[0],
            triggerHook: 0.5
          })
            //.addIndicators({name: "specialBackground1"})
            .addTo(this.controller.mobile);

          this.scene.specialBackground1.offset(stageH * 0);
          this.scene.specialBackground1.duration(stageH * 1);
          this.scene.specialBackground1.on('enter', function () {
            $elementSpecial.removeClass('black');
            $('#dHead').removeClass('white');
            $('#page-ui').removeClass('white');
          });

          this.scene.specialBackground2 = new ScrollMagic.Scene({
            triggerElement: $elementSpecial[0],
            triggerHook: 0.5
          })
            //.addIndicators({name: "specialBackground2"})
            .addTo(this.controller.mobile);

          this.scene.specialBackground2.offset(stageH * 1.0);
          this.scene.specialBackground2.duration(stageH * 1.5);
          this.scene.specialBackground2.on('enter', function () {
            $elementSpecial.addClass('black');
            $('#dHead').addClass('white');
            $('#page-ui').addClass('white');
          });

          this.scene.specialBackground3 = new ScrollMagic.Scene({
            triggerElement: $elementSpecial[0],
            triggerHook: 0.5
          })
            //.addIndicators({name: "specialBackground2"})
            .addTo(this.controller.mobile);

          this.scene.specialBackground3.offset(stageH * 2.5);
          this.scene.specialBackground3.duration(stageH * 0.5);
          this.scene.specialBackground3.on('enter', function () {
            $elementSpecial.removeClass('black');
            $('#dHead').removeClass('white');
            $('#page-ui').removeClass('white');
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

          this.scene.aiVideo = new ScrollMagic.Scene({
            triggerElement: $elementAI[0],
            triggerHook: 1
          })
            //.addIndicators({name: "aiVideo"})
            .addTo(this.controller.mobile);

          this.scene.aiVideo.offset(0);
          this.scene.aiVideo.duration($elementAI.height() + stageH);
          this.scene.aiVideo.on('enter', function () {
            _this.videos.ai.play();
          });
          this.scene.aiVideo.on('leave', function () {
            _this.videos.ai.stop();
          });

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
        // slogan
        ====================================================
        ====================================================*/
        if ($elementSlogan) {
          $elementSlogan.removeClass('actived');

          this.tweener.sloganTweener1 = gsap.timeline({});
          this.tweener.sloganTweener1.fromTo($elementSlogan.find('.sentence-1 .cover'), { x: '0%' }, { x: '100%', ease: Linear.easeNone });
          this.tweener.sloganTweener1.fromTo($elementSlogan.find('.sentence-2 .word-row:eq(0) .cover'), { x: '0%' }, { x: '100%', ease: Linear.easeNone });
          this.tweener.sloganTweener1.fromTo($elementSlogan.find('.sentence-2 .word-row:eq(1) .cover'), { x: '0%' }, { x: '100%', ease: Linear.easeNone });
          this.tweener.sloganTweener1.fromTo($elementSlogan.find('.sentence-3 .cover'), { x: '0%' }, { x: '100%', ease: Linear.easeNone });
          this.tweener.sloganTweener1.fromTo($elementSlogan.find('.sentence-4 .word-row:eq(0) .cover'), { x: '0%' }, { x: '100%', ease: Linear.easeNone });
          this.tweener.sloganTweener1.fromTo($elementSlogan.find('.sentence-4 .word-row:eq(1) .cover'), { x: '0%' }, { x: '100%', ease: Linear.easeNone });
          this.scene.sloganScene1 = new ScrollMagic.Scene({
            triggerElement: $elementSlogan[0],
            triggerHook: 0
          })
            //.addIndicators({name: "sloganTweener1"})
            .addTo(this.controller.mobile);

          this.scene.sloganScene1.offset(stageH * 0);
          this.scene.sloganScene1.duration(stageH * 2.0);
          this.scene.sloganScene1.setTween(this.tweener.sloganTweener1);


          this.scene.sloganHeader = new ScrollMagic.Scene({
            triggerElement: $elementSlogan[0],
            triggerHook: 0
          })
            //.addIndicators({name: "sloganHeader"})
            .addTo(this.controller.mobile);

          this.scene.sloganScene5 = new ScrollMagic.Scene({
            triggerElement: $elementSlogan[0],
            triggerHook: 0
          })
            //.addIndicators({name: "sloganScene5"})
            .addTo(this.controller.mobile);

          this.scene.sloganScene5.offset(stageH * 2.0);
          this.scene.sloganScene5.on('enter', function () {
            $elementSlogan.addClass('actived');
          });
          this.scene.sloganScene5.on('leave', function () {
            $elementSlogan.removeClass('actived');
          });

          this.scene.sloganHeader.offset(0);
          this.scene.sloganHeader.duration($elementSlogan.height());
          this.scene.sloganHeader.on('enter', function () {
            $('#dHead').removeClass('white');
          });

          this.scene.sloganTop = new ScrollMagic.Scene({
            triggerElement: $elementSlogan[0],
            triggerHook: 1
          })
            //.addIndicators({name: "sloganTop"})
            .addTo(this.controller.mobile);

          this.scene.sloganTop.offset(0);
          this.scene.sloganTop.duration($elementSlogan.height());
          this.scene.sloganTop.on('enter', function () {
            $('#page-ui').removeClass('white');
          });
        };
        /* ====================================================
        ======================================================
        // process
        ====================================================
        ====================================================*/
        if ($elementProcess) {
          this.scene.processVideo = new ScrollMagic.Scene({
            triggerElement: $elementProcess[0],
            triggerHook: 0
          })
            //.addIndicators({name: "processVideo"})
            .addTo(this.controller.mobile);

          this.scene.processVideo.offset(0);
          this.scene.processVideo.duration($elementProcess.height());
          this.scene.processVideo.on('enter', function () {
            _this.videos.process.play();
          });
          this.scene.processVideo.on('leave', function () {
            _this.videos.process.stop();
          });

          this.tweener.processTweener1 = gsap.timeline({});
          this.tweener.processTweener1.fromTo($elementProcess.find('.sentence-1'), { alpha: 0 }, { alpha: 1, ease: Linear.easeNone }, 0);
          this.scene.processScene1 = new ScrollMagic.Scene({
            triggerElement: $elementProcess[0],
            triggerHook: 0
          })
            //.addIndicators({name: "headlineScene 1"})
            .addTo(this.controller.mobile);

          this.scene.processScene1.offset(stageH * 1);
          this.scene.processScene1.duration(stageH * 1);
          this.scene.processScene1.setTween(this.tweener.processTweener1);

          this.tweener.processTweener2 = gsap.timeline({});
          this.tweener.processTweener2.fromTo($elementProcess.find('.sentence-2'), { alpha: 0 }, { alpha: 1, ease: Linear.easeNone }, 0);
          this.scene.processScene2 = new ScrollMagic.Scene({
            triggerElement: $elementProcess[0],
            triggerHook: 0
          })
            //.addIndicators({name: "headlineScene 1"})
            .addTo(this.controller.mobile);

          this.scene.processScene2.offset(stageH * 1);
          this.scene.processScene2.duration(stageH * 1);
          this.scene.processScene2.setTween(this.tweener.processTweener2);

          this.scene.processHeader = new ScrollMagic.Scene({
            triggerElement: $elementProcess[0],
            triggerHook: 0
          })
            //.addIndicators({name: "processHeader"})
            .addTo(this.controller.mobile);

          this.scene.processHeader.offset(stageH * 1);
          this.scene.processHeader.duration($elementProcess.height());
          this.scene.processHeader.on('enter', function () {
            $('#dHead').addClass('white');
          });

          this.scene.processTop = new ScrollMagic.Scene({
            triggerElement: $elementProcess[0],
            triggerHook: 1
          })
            //.addIndicators({name: "processTop"})
            .addTo(this.controller.mobile);

          this.scene.processTop.offset(stageH * 1);
          this.scene.processTop.duration($elementProcess.height());
          this.scene.processTop.on('enter', function () {
            $('#page-ui').addClass('white');
          });
        };
        /* ====================================================
        ======================================================
        // product
        ====================================================
        ====================================================*/
        if ($elementProduct) {
          this.scene.productScene1 = new ScrollMagic.Scene({
            triggerElement: $elementProduct[0],
            triggerHook: 0
          })
            //.addIndicators({name: "$elementProduct 1"})
            .addTo(this.controller.mobile);

          this.scene.productScene1.offset(0);
          this.scene.productScene1.duration(stageH * 0.5);
          this.scene.productScene1.on('enter', function () {
            mainProduct.sort(0);
          });
          this.scene.productScene1.on('leave', function (event) {
            if (event.state == 'BEFORE') mainProduct.sort(-1);
          });

          this.scene.productScene2 = new ScrollMagic.Scene({
            triggerElement: $elementProduct[0],
            triggerHook: 0
          })
            //.addIndicators({name: "$elementProduct 2"})
            .addTo(this.controller.mobile);

          this.scene.productScene2.offset(stageH * 0.5);
          this.scene.productScene2.duration(stageH * 0.5);
          this.scene.productScene2.on('enter', function () {
            mainProduct.sort(1);
          });

          this.scene.productScene3 = new ScrollMagic.Scene({
            triggerElement: $elementProduct[0],
            triggerHook: 0
          })
            //.addIndicators({name: "$elementProduct 3"})
            .addTo(this.controller.mobile);

          this.scene.productScene3.offset(stageH * 1);
          this.scene.productScene3.duration(stageH * 0.5);
          this.scene.productScene3.on('enter', function (event) {
            mainProduct.sort(2);
          });

          this.scene.productHeader = new ScrollMagic.Scene({
            triggerElement: $elementProduct[0],
            triggerHook: 0
          })
            //.addIndicators({name: "productHeader"})
            .addTo(this.controller.mobile);

          this.scene.productHeader.offset(stageH * 0);
          this.scene.productHeader.duration($elementProduct.height());
          this.scene.productHeader.on('enter', function () {
            $('#dHead').addClass('white');
          });

          this.scene.productTop = new ScrollMagic.Scene({
            triggerElement: $elementProduct[0],
            triggerHook: 1
          })
            //.addIndicators({name: "productTop"})
            .addTo(this.controller.mobile);

          this.scene.productTop.offset(stageH * 0);
          this.scene.productTop.duration($elementProduct.height());
          this.scene.productTop.on('enter', function () {
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
        // future
        ====================================================
        ====================================================*/
        if ($elementFuture) {
          $elementFuture.find('.scene-1 .word-1').attr('style', '');
          $elementFuture.find('.scene-1 .word-2').attr('style', '');
          $elementFuture.find('.scene-1 .word-3').attr('style', '');
          $elementFuture.find('.scene-1 .word-4').attr('style', '');

          this.tweener.futureTweener1 = gsap.timeline({});
          this.tweener.futureTweener1.fromTo($elementFuture.find('.scene-1 .word-2'), { alpha: 0 }, { alpha: 1, ease: Linear.easeNone });
          this.tweener.futureTweener1.fromTo($elementFuture.find('.scene-1 .word-3'), { alpha: 0 }, { alpha: 1, ease: Linear.easeNone });
          this.tweener.futureTweener1.fromTo($elementFuture.find('.scene-1 .word-4'), { alpha: 0 }, { alpha: 1, ease: Linear.easeNone });

          this.scene.futureScene1 = new ScrollMagic.Scene({
            triggerElement: $elementFuture[0],
            triggerHook: 0
          })
            //.addIndicators({name: "futureScene1"})
            .addTo(this.controller.mobile);

          this.scene.futureScene1.offset(stageH * 0.25);
          this.scene.futureScene1.duration(stageH * 1);
          this.scene.futureScene1.setTween(this.tweener.futureTweener1);


          this.tweener.futureTweener4 = gsap.timeline({});
          this.tweener.futureTweener4.fromTo($elementFuture.find('.scene-2'), { alpha: 0 }, { alpha: 1, ease: Linear.easeNone }, 0);

          this.scene.futureScene4 = new ScrollMagic.Scene({
            triggerElement: $elementFuture[0],
            triggerHook: 0
          })
            //.addIndicators({name: "futureScene1"})
            .addTo(this.controller.mobile);

          this.scene.futureScene4.offset(stageH * 1.5);
          this.scene.futureScene4.duration(stageH * 1);
          this.scene.futureScene4.setTween(this.tweener.futureTweener4);


          this.tweener.futureTweener5 = gsap.timeline({});

          var k = 0;
          $elementFuture.find('.scene-2 .sentence-1 .word').each(function () {
            var $word = $(this);
            var $delay = k * 0.1;
            _this.tweener.futureTweener5.fromTo($word, { y: '50%', alpha: 0 }, { y: '0%', delay: $delay, alpha: 1, ease: Back.easeOut }, 0);
            k++;
          });

          this.scene.futureScene5 = new ScrollMagic.Scene({
            triggerElement: $elementFuture[0],
            triggerHook: 0
          })
            //.addIndicators({name: "futureScene1"})
            .addTo(this.controller.mobile);

          this.scene.futureScene5.offset(stageH * 2.5);
          this.scene.futureScene5.duration(stageH * 1.0);
          this.scene.futureScene5.setTween(this.tweener.futureTweener5);

          this.tweener.futureTweener6 = gsap.timeline({});

          $elementFuture.find('.scene-2 .sentence-2 .word').each(function () {
            var $word = $(this);
            var $delay = $(this).index() * 0.1;
            _this.tweener.futureTweener6.fromTo($word, { y: '50%', alpha: 0 }, { y: '0%', delay: $delay, alpha: 1, ease: Back.easeOut }, 0);
          });

          this.tweener.futureTweener6.fromTo($elementFuture.find('.scene-2 .desc'), { alpha: 0 }, { alpha: 1, ease: Linear.easeNone }, 0);

          this.scene.futureScene6 = new ScrollMagic.Scene({
            triggerElement: $elementFuture[0],
            triggerHook: 0
          })
            //.addIndicators({name: "futureScene1"})
            .addTo(this.controller.mobile);

          this.scene.futureScene6.offset(stageH * 3.5);
          this.scene.futureScene6.duration(stageH * 1.0);
          this.scene.futureScene6.setTween(this.tweener.futureTweener6);

          this.scene.futureHeader1 = new ScrollMagic.Scene({
            triggerElement: $elementFuture[0],
            triggerHook: 0
          })
            //.addIndicators({name: "futureHeader1"})
            .addTo(this.controller.mobile);



          this.scene.futureHeader1.offset(stageH * 0);
          this.scene.futureHeader1.duration(stageH * 2.5);
          this.scene.futureHeader1.on('enter', function () {
            $('#dHead').addClass('white');
          });

          this.scene.futureHeader2 = new ScrollMagic.Scene({
            triggerElement: $elementFuture[0],
            triggerHook: 0
          })
            //.addIndicators({name: "futureHeader2"})
            .addTo(this.controller.mobile);

          this.scene.futureHeader2.offset(stageH * 2.5);
          this.scene.futureHeader2.duration((stageH * 2.75) - 60);
          this.scene.futureHeader2.on('enter', function () {
            $('#dHead').removeClass('white');
          });

          this.scene.futureTop1 = new ScrollMagic.Scene({
            triggerElement: $elementFuture[0],
            triggerHook: 1
          })
            //.addIndicators({name: "futureTop1"})
            .addTo(this.controller.mobile);

          this.scene.futureTop1.offset(stageH * 0);
          this.scene.futureTop1.duration(stageH * 2.5);
          this.scene.futureTop1.on('enter', function () {
            $('#page-ui').addClass('white');
          });

          this.scene.futureTop2 = new ScrollMagic.Scene({
            triggerElement: $elementFuture[0],
            triggerHook: 1
          })
            //.addIndicators({name: "futureTop2"})
            .addTo(this.controller.mobile);

          this.scene.futureTop2.offset(stageH * 2.5);
          this.scene.futureTop2.duration(stageH * 2.75);
          this.scene.futureTop2.on('enter', function () {
            $('#page-ui').removeClass('white');
          });


          this.scene.footerHeader = new ScrollMagic.Scene({
            triggerElement: $('#dFoot')[0],
            triggerHook: 0
          })
            //.addIndicators({name: "footerHeader"})
            .addTo(this.controller.mobile);

          this.scene.footerHeader.offset(-60);
          this.scene.footerHeader.duration($('#dFoot').height());
          this.scene.footerHeader.on('enter', function () {
            $('#dHead').addClass('white');
          });
        };

        /* ====================================================
        ======================================================
        // ai coswear
        ====================================================
        ====================================================*/
        if ($elementAiCoswear) {

          this.scene.aiCoswearScroll = new ScrollMagic.Scene({
            triggerElement: $elementAiCoswear[0],
            triggerHook: 1
          })
            //.addIndicators({name: "aiCoswearScroll"})
            .addTo(this.controller.mobile);

          this.scene.aiCoswearScroll.offset(0);
          this.scene.aiCoswearScroll.duration($elementAiCoswear.innerHeight());
          this.scene.aiCoswearScroll.on('enter', function () {
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

var cube = {

  sequence: null,
  sequenceContainer: null,

  init: function () {

    this.sequenceContainer = ($('#mainHeadlineSequence').length > 0) ? $('#mainHeadlineSequence') : null;

    if (this.sequenceContainer) {
      this.sequence = new sequenceView({
        el: this.sequenceContainer[0],
        fps: 60,
        index: 0,
        imageUrl: this.sequenceContainer[0].getAttribute('data-url'),
        imageName: this.sequenceContainer[0].getAttribute('data-name'),
        imageType: this.sequenceContainer[0].getAttribute('data-type'),
        imageTotal: this.sequenceContainer[0].getAttribute('data-total'),
        onPlay: function (obj) {
          //console.log('sequence play');
        },
        onPause: function (obj) {
          //console.log('sequence pause');
        },
        onLoadStart: function (obj) {
          //console.log('sequence load start');
        },
        onLoadEnd: function (obj) {
          //console.log('sequence load end');
          //console.log('cate ::' + _this.idx + '   index :: ' + cur);
          if ($('.main-headline').hasClass('actived')) this.play();
        }
      });
      this.sequence.load();
    };
  },

  item: function (_options) {

    function item(_options) {

      var _this = this;
      var $element = _options.element;
      var $index = _options.index;
      var $posX, $posY, $speed, $timer;

      this.random = function () {
        var $w = $(window).width();
        var $h = $(window).height();
        //$posX = Math.random() * ( ( $w * 0.5 * -1 ) - ( $w * 0.25 * -1 )) + ( $w * 0.25 * -1  );
        //$posY = Math.random() * ( ( $h * 0.5 * -1 ) - ( $h * 0.5 )) + ( $h * 0.5 );
        $posX = $w * 0.8;
        $posY = $h * 0.7;
        $speed = 20;

        $element.css({ 'transform': 'translate(' + $posX + 'px , ' + $posY + 'px)', 'transition': 'none' });

      };

      this.start = function () {
        //this.random();
        //$posX = $posX * -1;
        //$posY = $posY * -1;
        var $w = $(window).width();
        var $h = $(window).height();
        //$posX = Math.random() * ( ( $w * 0.25 ) - ( $w * 0.5 )) + ( $w * 0.5 );
        //$posY = Math.random() * ( ( $h * 0.5 * -1 ) - ( $h * 0.5 )) + ( $h * 0.5 );
        $posX = 0;
        $posY = $h * 0.7;

        //console.log('-- start --');	
        //console.log('x : ' + $posX + '  y : ' + $posY + '  speed : ' + $speed);	
        $element.css({ 'transform': 'translate(' + $posX + 'px , ' + $posY + 'px)', 'transition': 'transform ' + $speed + 's 0s cubic-bezier(0.455, 0.030, 0.515, 0.955)' });

        $timer = setTimeout(function () {
          _this.end();
        }, $speed * 1000);
      };

      this.end = function () {
        //this.random();
        var $w = $(window).width();
        var $h = $(window).height();
        //$posX = Math.random() * ( ( $w * 0.5 * -1 ) - ( $w * 0.25 * -1 )) + ( $w * 0.25 * -1  );
        //$posY = Math.random() * ( ( $h * 0.5 * -1 ) - ( $h * 0.5 )) + ( $h * 0.5 );
        $posX = $w * 0.8;
        $posY = $h * 0.7;
        //console.log('-- end --');
        //console.log('x : ' + $posX + '  y : ' + $posY + '  speed : ' + $speed);
        //console.log('-- end --');				
        $element.css({ 'transform': 'translate(' + $posX + 'px , ' + $posY + 'px)', 'transition': 'transform ' + $speed + 's 0s cubic-bezier(0.455, 0.030, 0.515, 0.955)' });
        $timer = setTimeout(function () {
          _this.start();
        }, $speed * 1000);
      };

      this.autoLoop = function () {
        //console.log('auto loop');
        this.random();
        this.start();
      };

      this.autoPlay = function () {
        //console.log('auto play');
        if ($timer) clearTimeout($timer);
        this.autoLoop();
      };

      this.autoStop = function () {
        //console.log('auto stop');			
        if ($timer) clearTimeout($timer);
      };

      this.random();

      //this.reset();
    }

    return new item(_options);

  },

  play: function () {
    if (this.sequence) {
      if (this.sequence.animationStats == 'stop') this.sequence.play();
    }
  },

  pause: function () {
    if (this.sequence) this.sequence.stop();

  }
};

var mainProduct = {

  cur: -1,
  container: null,
  objArr: [],
  sequenceArr: [],

  init: function () {
    var _this = this;
    this.container = $('.main-product');
    this.txtAlign();

    this.container.find('.obj-group .obj').each(function () {
      var _effect = _this.obj({ element: $(this), index: $(this).index() })
      _this.objArr.push(_effect);
    });

    this.container.find('.sequence-wrap').each(function () {
      var _sequence = new sequenceView({
        el: $(this)[0],
        fps: 30,
        index: 0,
        imageUrl: $(this)[0].getAttribute('data-url'),
        imageName: $(this)[0].getAttribute('data-name'),
        imageType: $(this)[0].getAttribute('data-type'),
        imageTotal: $(this)[0].getAttribute('data-total'),
        onPlay: function (obj) {
          //console.log('sequence play');
        },
        onPause: function (obj) {
          //console.log('sequence pause');
        },
        onLoadStart: function (obj) {
          //console.log('sequence load start');
        },
        onLoadEnd: function (obj) {
          //console.log('sequence load end');
          //console.log(this);
          //console.log('cate ::' + _this.idx + '   index :: ' + cur);
        }
      });
      _sequence.load();
      _this.sequenceArr.push(_sequence);
    });



  },

  sort: function (_value) {
    this.cur = _value;
    this.txtAlign();
    this.objAlign();
  },

  txtAlign: function () {
    var _this = this;
    var _cur = this.cur;
    this.container.find('.txt-group-cell').each(function () {
      gsap.killTweensOf($(this));
      if (_cur == $(this).index()) {
        $(this).addClass('actived');
        //gsap.set($(this), { alpha : 0 });
        gsap.to($(this), { duration: 0.4, alpha: 1, delay: 0.2, ease: Power2.easeOut });
      } else {
        $(this).removeClass('actived');
        gsap.to($(this), { duration: 0.4, alpha: 0, y: 0, ease: Power2.easeOut });
      };
    });
  },

  obj: function (_options) {

    function obj(_options) {

      var _this = this;
      var $element = _options.element.find('.value');
      var $elementParent = _options.element;
      var $index = _options.index;
      var $posX, $posY, $speed, $timer;

      this.random = function () {
        var $w = ($elementParent.hasClass('actived')) ? 100 : 40;
        var $h = ($elementParent.hasClass('actived')) ? 100 : 40;

        //$posX = this.getRandomMinMax( $w * -1 , $w * 1 );
        //$posY = this.getRandomMinMax( $h * -1 , $h * 1 );
        //$posX = this.getRandomMinMax( 20 , 100 );
        //$posX = 0;
        $posX = this.getRandomMinMax(20, 100);
        $posY = this.getRandomMinMax(20, 100);
        $posX = (Math.round(Math.random()) == 1) ? $posX * -1 : $posX * 1;
        $posY = (Math.round(Math.random()) == 1) ? $posY * -1 : $posY * 1;
        //$speed = parseFloat(Math.random() * ( 3 - 5 ) + 5).toFixed(2);
        $speed = 5;
        //$speed = ($elementParent.hasClass('actived')) ? parseFloat(Math.random() * ( 4 - 6 ) + 6).toFixed(2) : parseFloat(Math.random() * ( 2 - 4 ) + 4).toFixed(2);
        //console.log('x : ' + $posX + '  y : ' + $posY + '  speed : ' + $speed);

      };

      this.start = function () {
        //this.random();
        //$posX = $posX * -1;
        //$posY = $posY * -1;		
        //console.log('-- start --');
        //console.log('x : ' + $posX + '  y : ' + $posY + '  speed : ' + $speed);

        $speed = 5;
        /*
        if($index == 0 ){
          $posX = this.getRandomMinMax( 20 , 50 );
          $posY = this.getRandomMinMax( 20 , 50 );	
        }else if($index == 1){
          $posX = this.getRandomMinMax( -20 , -50 );
          $posY = this.getRandomMinMax( 20 , 50 );					
        }else if($index == 2){
          $posX = this.getRandomMinMax( -20 , -50 );
          $posY = this.getRandomMinMax( -20 , -50 );						
        };
        */

        $posX = 0;
        $posY = -30;
        //console.log('-- start --');
        //console.log('x : ' + $posX + '  y : ' + $posY + '  speed : ' + $speed);



        $element.css({ 'transform': 'translate(' + $posX + 'px , ' + $posY + 'px)', 'transition': 'transform ' + $speed + 's 0s cubic-bezier(0.550, 0.085, 0.680, 0.530)' });

        $timer = setTimeout(function () {
          _this.end();
        }, $speed * 1000);
      };

      this.end = function () {
        //this.random();
        //$posX = $posX * -1;
        //$posY = $posY * -1;				
        //console.log('-- end --');
        //console.log('x : ' + $posX + '  y : ' + $posY + '  speed : ' + $speed);
        //console.log('-- end --');	

        $posX = 0;
        $posY = 30;
        $element.css({ 'transform': 'translate(' + $posX + 'px , ' + $posY + 'px)', 'transition': 'transform ' + $speed + 's 0s cubic-bezier(0.250, 0.460, 0.450, 0.940)' });
        $timer = setTimeout(function () {
          _this.start();
        }, $speed * 1000);
      };

      this.autoLoop = function () {
        //console.log('auto loop');
        //this.random();
        this.start();
      };

      this.autoPlay = function () {
        //console.log('auto play');
        if ($timer) clearTimeout($timer);
        this.autoLoop();
      };

      this.autoStop = function () {
        //console.log('auto stop');			
        if ($timer) clearTimeout($timer);

        $element.css({ 'transform': 'translate(' + getTranslateValues($element[0]).x + 'px , ' + getTranslateValues($element[0]).y + 'px)', 'transition': 'none' });
      };

      this.getRandomMinMax = function (min, max) {
        return (Math.random() * (max - min)) + min;
      };

      //this.reset();
    }

    return new obj(_options);

  },

  objAlign: function () {
    var _this = this;
    var _cur = this.cur;
    //console.log('obj align cur :: ' + _cur);
    this.container.find('.obj-group .obj').each(function () {
      if (_cur == $(this).index()) {
        $(this).addClass('actived');
        if (_this.sequenceArr[$(this).index()]) {
          if (_this.sequenceArr[$(this).index()].animationStats == 'stop') _this.sequenceArr[$(this).index()].play();

        };
        //_this.objArr[$(this).index()].autoPlay();
      } else {
        $(this).removeClass('actived');
        if (_this.sequenceArr[$(this).index()]) _this.sequenceArr[$(this).index()].stop();
        //_this.objArr[$(this).index()].autoStop();				
      };
    });
  },

  objPlay: function (_value) {
    for (var i = 0; i < this.objArr.length; i++) {
      //this.objArr[i].autoPlay();
    };
  },

  objPause: function () {
    for (var i = 0; i < this.objArr.length; i++) {
      //	this.objArr[i].autoStop();			
    };
  },

  objAllPause: function () {
    //console.log('obj all pause');
    for (var i = 0; i < this.objArr.length; i++) {
      this.objArr[i].autoStop();
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

var mainExperience = {

  container: null,
  swiperArr: [],
  cur: 0,

  init: function () {
    var _this = this;
    this.container = $('.main-experience');

    $(document).on('click', '.main-experience .btn-tab-nav', function () {
      _this.cur = $(this).index();
      _this.sort();
    });

    this.container.find('.list-view .list-swiper').each(function () {
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
          },
          breakpoints: {
            320: {
              spaceBetween: 18
            },
            769: {
              spaceBetween: 0
            }
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
    this.container.find('.list-view .list-cell').eq(this.cur).addClass('actived').siblings().removeClass('actived');
  }
};

var mainAiCoswear = {

  container: null,
  swiperArr: [],
  cur: 0,

  init: function () {
    var _this = this;
    this.container = $('.main-ai-coswear');

    $(document).on('click', '.main-ai-coswear .btn-tab-nav', function () {
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



var mainModel = {

  container: null,
  swiperArr: [],
  cur: 0,

  init: function () {
    var _this = this;
    this.container = $('.main-model');

    $(document).on('click', '.main-model .btn-tab-nav', function () {
      _this.cur = $(this).index();
      _this.sort();
    });


    this.resize();
    this.sort();
    window.addEventListener('resize', this.resize.bind(this));
  },
  sort: function () {
    if (this.swiperArr[this.cur]) this.swiperArr[this.cur].update();
    this.container.find('.list-tab .btn-tab-nav').eq(this.cur).addClass('actived').siblings().removeClass('actived');
    this.container.find('.list-view .list-cell').eq(this.cur).addClass('actived').siblings().removeClass('actived');
  },

  resize: function () {
    var _this = this;
    var $slidesPerView = 3;

    for (var i = 0; i < this.swiperArr.length; i++) {
      if (this.swiperArr[i] != null) this.swiperArr[i].destroy(true, true), this.swiperArr[i] = null;
    };
    this.swiperArr.length = 0;


    this.container.find('.list-view .list-swiper').each(function () {
      var swiper;
      var $element = $(this);
      if ($(window).width() > 1024) {
        $element.removeClass('actived');
        if ($(this).find('.swiper-slide').length > $slidesPerView) {
          swiper = new Swiper($element.find('.swiper')[0], {
            loop: false,
            simulateTouch: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 'auto',
            speed: 400,
            navigation: {
              nextEl: $element.find('.btn-swiper-slider-next')[0],
              prevEl: $element.find('.btn-swiper-slider-prev')[0]
            }
          });
          $(this).removeClass('none');
        } else {
          swiper = null;
          $(this).addClass('none');
        };

        _this.swiperArr.push(swiper);
      } else {
        if ($(this).find('.swiper-slide').length > $slidesPerView) {
          $(this).removeClass('none');
        } else {
          $(this).addClass('none');
        };
      };
    });


  },
  listMore: function (obj) {
    $(obj).parents('.list-cell').find('.list-swiper').addClass('actived');
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

  // Can either be 2d or 3d transform
  const matrixType = matrix.includes('3d') ? '3d' : '2d'
  const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')

  // 2d matrices have 6 values
  // Last 2 values are X and Y.
  // 2d matrices does not have Z value.
  if (matrixType === '2d') {
    return {
      x: matrixValues[4],
      y: matrixValues[5],
      z: 0
    }
  }

  // 3d matrices have 16 values
  // The 13th, 14th, and 15th values are X, Y, and Z
  if (matrixType === '3d') {
    return {
      x: matrixValues[12],
      y: matrixValues[13],
      z: matrixValues[14]
    }
  }
};

window.addEventListener('DOMContentLoaded', front.ready);
window.addEventListener('load', front.load);
window.addEventListener('resize', front.resize);
window.addEventListener('scroll', front.scroll);

(function () {
  include.init();
  front.init();
})();


