$(function() {
  // Open the mobile toggle, All pages
  $('body').on('click', '#ml-toggle-filter', function(e) {
    e.preventDefault();
    $(".ml-filter-col-hidden").toggleClass("ml-filter-col-hidden--open");
    $(".ml-filter-label").toggleClass("ml-filter-label--open");
  });

  // Open the mobile toggle, All pages
  $('body').on('click', '#ml-toggle-rings', function(e) {
    e.preventDefault();
    $(".ml-main-category-rings").toggleClass("ml-main-category--active");
    $(".ml-main-category-collaborations").removeClass("ml-main-category--active");
    $(".ml-main-category-collections").removeClass("ml-main-category--active");
    $(".ml-main-category-bracelets").removeClass("ml-main-category--active");
    $(".ml-main-category-earrings").removeClass("ml-main-category--active");
    $(".ml-main-category-more").removeClass("ml-main-category--active");
    $(".ml-main-category-letters").removeClass("ml-main-category--active");
    $(".ml-main-category-necklaces").removeClass("ml-main-category--active");
    $(".ml-main-category-all").removeClass("ml-main-category--active");
    $(".ml-sub-category-rings").toggleClass("ml-sub-category--open");
    $(".ml-sub-category-more").removeClass("ml-sub-category--open");
    $(".ml-sub-category-collaborations").removeClass("ml-sub-category--open");
    $(".ml-sub-category-collections").removeClass("ml-sub-category--open");
    $(".ml-sub-category-bracelets").removeClass("ml-sub-category--open");
    $(".ml-sub-category-earrings").removeClass("ml-sub-category--open");
    $(".ml-sub-category-letters").removeClass("ml-sub-category--open");
    $(".ml-sub-category-necklaces").removeClass("ml-sub-category--open");
  });

  // Open the mobile toggle, All pages
  $('body').on('click', '#ml-toggle-earrings', function(e) {
    e.preventDefault();
    $(".ml-main-category-earrings").toggleClass("ml-main-category--active");
    $(".ml-main-category-collaborations").removeClass("ml-main-category--active");
    $(".ml-main-category-collections").removeClass("ml-main-category--active");
    $(".ml-main-category-bracelets").removeClass("ml-main-category--active");
    $(".ml-main-category-more").removeClass("ml-main-category--active");
    $(".ml-main-category-rings").removeClass("ml-main-category--active");
    $(".ml-main-category-letters").removeClass("ml-main-category--active");
    $(".ml-main-category-necklaces").removeClass("ml-main-category--active");
    $(".ml-main-category-all").removeClass("ml-main-category--active");
    $(".ml-sub-category-earrings").toggleClass("ml-sub-category--open");
    $(".ml-sub-category-more").removeClass("ml-sub-category--open");
    $(".ml-sub-category-collaborations").removeClass("ml-sub-category--open");
    $(".ml-sub-category-collections").removeClass("ml-sub-category--open");
    $(".ml-sub-category-bracelets").removeClass("ml-sub-category--open");
    $(".ml-sub-category-rings").removeClass("ml-sub-category--open");
    $(".ml-sub-category-letters").removeClass("ml-sub-category--open");
    $(".ml-sub-category-necklaces").removeClass("ml-sub-category--open");
  });

  // Open the mobile toggle, All pages
  $('body').on('click', '#ml-toggle-bracelets', function(e) {
    e.preventDefault();
    $(".ml-main-category-bracelets").toggleClass("ml-main-category--active");
    $(".ml-main-category-collaborations").removeClass("ml-main-category--active");
    $(".ml-main-category-collections").removeClass("ml-main-category--active");
    $(".ml-main-category-more").removeClass("ml-main-category--active");
    $(".ml-main-category-earrings").removeClass("ml-main-category--active");
    $(".ml-main-category-rings").removeClass("ml-main-category--active");
    $(".ml-main-category-letters").removeClass("ml-main-category--active");
    $(".ml-main-category-necklaces").removeClass("ml-main-category--active");
    $(".ml-main-category-all").removeClass("ml-main-category--active");
    $(".ml-sub-category-bracelets").toggleClass("ml-sub-category--open");
    $(".ml-sub-category-more").removeClass("ml-sub-category--open");
    $(".ml-sub-category-collaborations").removeClass("ml-sub-category--open");
    $(".ml-sub-category-collections").removeClass("ml-sub-category--open");
    $(".ml-sub-category-earrings").removeClass("ml-sub-category--open");
    $(".ml-sub-category-rings").removeClass("ml-sub-category--open");
    $(".ml-sub-category-letters").removeClass("ml-sub-category--open");
    $(".ml-sub-category-necklaces").removeClass("ml-sub-category--open");
  });

  // Open the mobile toggle, All pages
  $('body').on('click', '#ml-toggle-collections', function(e) {
    e.preventDefault();
    $(".ml-main-category-collections").toggleClass("ml-main-category--active");
    $(".ml-main-category-collaborations").removeClass("ml-main-category--active");
    $(".ml-main-category-more").removeClass("ml-main-category--active");
    $(".ml-main-category-bracelets").removeClass("ml-main-category--active");
    $(".ml-main-category-earrings").removeClass("ml-main-category--active");
    $(".ml-main-category-rings").removeClass("ml-main-category--active");
    $(".ml-main-category-letters").removeClass("ml-main-category--active");
    $(".ml-main-category-necklaces").removeClass("ml-main-category--active");
    $(".ml-main-category-all").removeClass("ml-main-category--active");
    $(".ml-sub-category-collections").toggleClass("ml-sub-category--open");
    $(".ml-sub-category-more").removeClass("ml-sub-category--open");
    $(".ml-sub-category-collaborations").removeClass("ml-sub-category--open");
    $(".ml-sub-category-bracelets").removeClass("ml-sub-category--open");
    $(".ml-sub-category-earrings").removeClass("ml-sub-category--open");
    $(".ml-sub-category-rings").removeClass("ml-sub-category--open");
    $(".ml-sub-category-letters").removeClass("ml-sub-category--open");
    $(".ml-sub-category-necklaces").removeClass("ml-sub-category--open");
  });

  // Open the mobile toggle, All pages
  $('body').on('click', '#ml-toggle-collaborations', function(e) {
    e.preventDefault();
    $(".ml-main-category-collaborations").toggleClass("ml-main-category--active");
    $(".ml-main-category-more").removeClass("ml-main-category--active");
    $(".ml-main-category-collections").removeClass("ml-main-category--active");
    $(".ml-main-category-bracelets").removeClass("ml-main-category--active");
    $(".ml-main-category-earrings").removeClass("ml-main-category--active");
    $(".ml-main-category-rings").removeClass("ml-main-category--active");
    $(".ml-main-category-letters").removeClass("ml-main-category--active");
    $(".ml-main-category-necklaces").removeClass("ml-main-category--active");
    $(".ml-main-category-all").removeClass("ml-main-category--active");
    $(".ml-sub-category-collaborations").toggleClass("ml-sub-category--open");
    $(".ml-sub-category-more").removeClass("ml-sub-category--open");
    $(".ml-sub-category-collections").removeClass("ml-sub-category--open");
    $(".ml-sub-category-bracelets").removeClass("ml-sub-category--open");
    $(".ml-sub-category-earrings").removeClass("ml-sub-category--open");
    $(".ml-sub-category-rings").removeClass("ml-sub-category--open");
    $(".ml-sub-category-letters").removeClass("ml-sub-category--open");
    $(".ml-sub-category-necklaces").removeClass("ml-sub-category--open");
  });

  // Open the mobile toggle, All pages
  $('body').on('click', '#ml-toggle-more', function(e) {
    e.preventDefault();
    $(".ml-main-category-more").toggleClass("ml-main-category--active");
    $(".ml-main-category-collaborations").removeClass("ml-main-category--active");
    $(".ml-main-category-collections").removeClass("ml-main-category--active");
    $(".ml-main-category-bracelets").removeClass("ml-main-category--active");
    $(".ml-main-category-earrings").removeClass("ml-main-category--active");
    $(".ml-main-category-rings").removeClass("ml-main-category--active");
    $(".ml-main-category-letters").removeClass("ml-main-category--active");
    $(".ml-main-category-necklaces").removeClass("ml-main-category--active");
    $(".ml-main-category-all").removeClass("ml-main-category--active");
    $(".ml-sub-category-more").toggleClass("ml-sub-category--open");
    $(".ml-sub-category-collaborations").removeClass("ml-sub-category--open");
    $(".ml-sub-category-collections").removeClass("ml-sub-category--open");
    $(".ml-sub-category-bracelets").removeClass("ml-sub-category--open");
    $(".ml-sub-category-earrings").removeClass("ml-sub-category--open");
    $(".ml-sub-category-rings").removeClass("ml-sub-category--open");
    $(".ml-sub-category-letters").removeClass("ml-sub-category--open");
    $(".ml-sub-category-necklaces").removeClass("ml-sub-category--open");
  });

  // Open the mobile toggle, All pages
  $('body').on('click', '#ml-toggle-letters', function(e) {
    e.preventDefault();
    $(".ml-main-category-letters").toggleClass("ml-main-category--active");
    $(".ml-main-category-collaborations").removeClass("ml-main-category--active");
    $(".ml-main-category-collections").removeClass("ml-main-category--active");
    $(".ml-main-category-bracelets").removeClass("ml-main-category--active");
    $(".ml-main-category-earrings").removeClass("ml-main-category--active");
    $(".ml-main-category-rings").removeClass("ml-main-category--active");
    $(".ml-main-category-necklaces").removeClass("ml-main-category--active");
    $(".ml-main-category-all").removeClass("ml-main-category--active");
    $(".ml-sub-category-letters").toggleClass("ml-sub-category--open");
    $(".ml-sub-category-collaborations").removeClass("ml-sub-category--open");
    $(".ml-sub-category-collections").removeClass("ml-sub-category--open");
    $(".ml-sub-category-bracelets").removeClass("ml-sub-category--open");
    $(".ml-sub-category-earrings").removeClass("ml-sub-category--open");
    $(".ml-sub-category-rings").removeClass("ml-sub-category--open");
    $(".ml-sub-category-necklaces").removeClass("ml-sub-category--open");
  });

  // Open the mobile toggle, All pages
  $('body').on('click', '#ml-toggle-necklaces', function(e) {
    e.preventDefault();
    $(".ml-main-category-necklaces").toggleClass("ml-main-category--active");
    $(".ml-main-category-collaborations").removeClass("ml-main-category--active");
    $(".ml-main-category-collections").removeClass("ml-main-category--active");
    $(".ml-main-category-bracelets").removeClass("ml-main-category--active");
    $(".ml-main-category-earrings").removeClass("ml-main-category--active");
    $(".ml-main-category-rings").removeClass("ml-main-category--active");
    $(".ml-main-category-letters").removeClass("ml-main-category--active");
    $(".ml-main-category-all").removeClass("ml-main-category--active");
    $(".ml-sub-category-necklaces").toggleClass("ml-sub-category--open");
    $(".ml-sub-category-collaborations").removeClass("ml-sub-category--open");
    $(".ml-sub-category-collections").removeClass("ml-sub-category--open");
    $(".ml-sub-category-bracelets").removeClass("ml-sub-category--open");
    $(".ml-sub-category-earrings").removeClass("ml-sub-category--open");
    $(".ml-sub-category-rings").removeClass("ml-sub-category--open");
    $(".ml-sub-category-letters").removeClass("ml-sub-category--open");
  });
});
