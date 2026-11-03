document.addEventListener('DOMContentLoaded', function() {
  // 1. Sticky Header & Back to Top
  var header = document.getElementById('siteHeader');
  var btnTop = document.getElementById('btnTop');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (window.scrollY > 350) {
      btnTop.classList.add('show');
    } else {
      btnTop.classList.remove('show');
    }
  });

  if (btnTop) {
    btnTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 2. Mobile Drawer Navigation
  var menuToggle = document.getElementById('menuToggle');
  var closeDrawer = document.getElementById('closeDrawer');
  var mobileDrawer = document.getElementById('mobileDrawer');
  var drawerOverlay = document.getElementById('drawerOverlay');
  var drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawerMenu() {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (closeDrawer) closeDrawer.addEventListener('click', closeDrawerMenu);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawerMenu);

  drawerLinks.forEach(function(link) {
    link.addEventListener('click', closeDrawerMenu);
  });
});

// 3. Online Inquiry Submit Handler
function handleInquirySubmit() {
  var name = document.getElementById('inqName').value.trim();
  var phone = document.getElementById('inqPhone').value.trim();
  var cat = document.getElementById('inqCategory');
  var catText = cat.options[cat.selectedIndex].text;

  if (!name || !phone) {
    alert('성함과 연락처를 입력해 주세요.');
    return;
  }

  var toastBox = document.getElementById('toastBox');
  var toastMsg = document.getElementById('toastMsg');
  toastMsg.textContent = name + ' 님의 [' + catText.substring(0, 15) + '...] 문의가 정상 접수되었습니다. 최대용 대표가 신속히 연락드리겠습니다!';
  toastBox.classList.add('show');

  document.getElementById('inquiryForm').reset();

  setTimeout(function() {
    toastBox.classList.remove('show');
  }, 4500);
}
