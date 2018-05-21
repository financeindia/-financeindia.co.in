$(document).on('ready', function() {


  var randomnumber = Math.floor(Math.random() * 3 + 0);
  var gyanArr = ["It's not about timing the market but letting your investment spend time in market for growth.", "Insurance is best gift that you can buy for your family to secure there future.", "Health insurance/ mediclaim is a parachute one must have for Just in case scenario's"]

  $("#randomText").html('<p>' + gyanArr[randomnumber] + '</p>');

  $('#projectLoanLink,.aboutUsLink,.contactLink,.dropdown-menu a').on('click', function() {
    if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible")) {
      $('.navbar-collapse').collapse('toggle');
    }
  });

  var isNriBtnClicked = false;
  $(".shortIcon").mouseenter(function() {

    if (!isNriBtnClicked) {
      $(".shortIcon").fadeTo(0, 0.25);
    } else {
      $(".propertyIcon, .investmentIcon").fadeTo(0, 0.25);
    }
    $(this).fadeTo(0, 1);

  }).mouseleave(function() {
    if (!isNriBtnClicked) {
      $(".shortIcon").fadeTo(0, 1);
    } else {
      $(".propertyIcon,.investmentIcon").fadeTo(0, 1);
    }
  });

  setInterval(function() {

    $("#flashContent").animate({
      opacity: 0.2
    });
    $("#flashContent").animate({
      opacity: 1
    });
  }, 3000);

  $('.navbar-brand, .backBtnContainer').on('click', function() {
    $('.tab-content').hide();
    isNriBtnClicked = false;
    $("#homeContent , .iconContainer").slideDown("slow")
    $(".backBtnContainer,.mainContent,.aboutUs,.contactInfo").slideUp("slow");
    $('.loanIcon,.projectLoanIcon,.itrIcon,.insuranceIcon,.insuranceLink,.loanLink,.nriBtn,.contactForm,.rates').show();
    $('.investmentIcon').removeClass('col-md-offset-3');
  })

  $('.aboutUsLink').on('click', function() {
    $("#source").val('ABOUT US');
    $("#homeContent,.iconContainer,.mainContent ,  .contactForm,.contactInfo").slideUp("slow");
    $(".backBtnContainer,.aboutUs").slideDown("slow");
  })

  $('.contactLink').on('click', function() {
    $("#source").val('CONTACT US');
    $("#homeContent,.iconContainer , .aboutUs,.mainContent ,  .contactForm,.contactInfo, .rates").slideUp("slow");
    $(".backBtnContainer,.contactInfo").slideDown("slow");
  })

  $('.loanLink li, .loanIcon').on('click', function() {
    $("#source").val('LOAN');
    $("#homeContent,.iconContainer,.mainContent, .aboutUs,.contactInfo,.contactForm").slideUp("slow")
    $(".loanContent,.backBtnContainer").slideDown("slow");
    var href = $(this).children().attr('href');
    if (href !== undefined) {
      $('.loanContent > ul > li').removeClass('active');
      var id = href + "Tab";
      //  $(id).parent().addClass('active');
      $('.loanContent > .tab-content > div').removeClass('in active');
      //  $(href).addClass('in active');
      $("#source").val('LOAN' + ' > ' + id.replace("#", ""));
    }
  })

  $('.insuranceLink li, .insuranceIcon').on('click', function() {
    $("#source").val('INSURANCE');
    $("#homeContent,.iconContainer,.mainContent, .aboutUs,.contactInfo,.contactForm").slideUp("slow")
    $(".insuranceContent,.backBtnContainer").slideDown("slow");
    var href = $(this).children().attr('href');
    if (href !== undefined) {
      if (href == '#lifeInsurance') {
        $('.contactForm').hide();
      }
      $('.insuranceContent > ul > li').removeClass('active');
      var id = href + "Tab";
      //$(id).parent().addClass('active');
      $('.insuranceContent > .tab-content > div').removeClass('in active');
      //$(href).addClass('in active');
      $("#source").val('INSURANCE' + ' > ' + id.replace("#", ""));
    }
  })

  $('.propertyLink li, .propertyIcon').on('click', function() {
    $("#source").val('PROPERTY');
    $("#homeContent,.iconContainer,.mainContent, .aboutUs,.contactInfo,.contactForm").slideUp("slow")
    $(".propertyContent,.backBtnContainer").slideDown("slow");
    var href = $(this).children().attr('href');
    if (href !== undefined) {
      $('.propertyContent > ul > li').removeClass('active');
      var id = href + "Tab";
      //$(id).parent().addClass('active');
      $('.propertyContent > .tab-content > div').removeClass('in active');
      //$(href).addClass('in active');
      $("#source").val('PROPERTY' + ' > ' + id.replace("#", ""));
    }
  })

  $('.nav-tabs > li> a').on('click', function() {
    $('.tab-content').show();
    $('li').removeClass('active');
    $('.contactForm').show();
    $('#nameInput').focus();
    $("#source").val($(this).attr('id'));
  })

  $('#residentialPropertyTab,#commercialPropertyTab,#lifeInsuranceTab,.insuranceIcon').on('click', function() {
    $('.contactForm').hide();
  })

  $('.investmentLink li, .investmentIcon').on('click', function() {
    $("#source").val('INVESTMENT');
    $("#homeContent,.iconContainer,.mainContent, .aboutUs,.contactInfo,.contactForm").slideUp("slow")
    $(".investmentContent,.backBtnContainer").slideDown("slow");
    var href = $(this).children().attr('href');
    if (href !== undefined) {
      $('.investmentContent > ul > li').removeClass('active');
      var id = href + "Tab";
      //$(id).parent().addClass('active');
      $('.investmentContent > .tab-content > div').removeClass('in active');
      //$(href).addClass('in active');
      $("#source").val('INVESTMENT' + ' > ' + id.replace("#", ""));
    }
  })

  $('.itrIcon').on('click', function() {
    $("#source").val('ITR');
    $("#homeContent,.iconContainer,.mainContent, .aboutUs,.contactInfo,.contactForm").slideUp("slow")
    $(".itrContent,.backBtnContainer, .contactForm").slideDown("slow",function(){
      $('#nameInput').focus();
    });
  })
  
  $('#projectLoanLink,.projectLoanIcon').on('click', function() {
    $("#source").val('PROJECT LOAN');
    $("#homeContent,.iconContainer,.mainContent, .aboutUs,.contactInfo,.contactForm").slideUp("slow")
    $(".projectLoanContent,.backBtnContainer, .contactForm").slideDown("slow",function(){
      $('#nameInput').focus();
    });
  })

  $('.referBtn').on('click', function() {
    $("#source").val('ITR');
    $("#homeContent,.iconContainer,.mainContent, .aboutUs,.contactInfo").slideUp("slow")
    $(".referContent,.backBtnContainer, .contactForm").slideDown("slow",function(){
      $('#nameInput').focus();
    });
  })

  $('.nriBtn').on('click', function() {
    isNriBtnClicked = true;
    $('.loanIcon,.projectLoanIcon,.itrIcon,.insuranceIcon ,.insuranceLink,.loanLink,.nriBtn').hide();
    $('.investmentIcon').addClass('col-md-offset-3');
    $('.backBtnContainer').slideDown("slow");
  })

  $('.financeIcon').on('click', function() {
    $("#source").val('PROJECT FINANCE');
    $("#homeContent,.iconContainer,.mainContent, .aboutUs,.contactInfo,.contactForm").slideUp("slow")
    $(".financContent,.backBtnContainer, .contactForm").slideDown("slow",function(){
      $('#nameInput').focus();
    });
  })

  $('.internalBtn').on('click', function() {
    $(this).css('background-color','#f2c40f');
    $("#source").val($(this).text());
    $(".backBtnContainer, .contactForm").slideDown("slow",function(){
      $('#nameInput').focus();
    });
  })

  $('.internalBtn').on('focusout', function() {
    $(this).css('background-color','#f2c40f');
  })



  // sending email
  $('#emailForm').on('submit', function(e) {
    e.preventDefault();
    $('#emailSendBtn').val('Sending Query ..');
    $.post('/email', $('#emailForm').serialize(), function(result) {
      $('#emailSendBtn').val('Contact me');
      $('#emailForm')[0].reset();
      if (result.success === 'send')
        $('#msg').html('Thanks for the query. Our executive will contact you within 24 hours between 9:30 AM to 6:30 PM.').fadeOut(5000);
      else
        $('#msg').html('Some error occured. Try again or write us at <a href="email:financeguru.co.in@gmail.com"> financeguru.co.in@gmail.com</a>')
    })
  })
})
