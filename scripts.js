/* Random Image */
function displayRandomImage(){
  var holder = document.getElementById("profile_image");
  var num = Math.floor(Math.random() * 3);
  var image = document.createElement("img");
  var bigImage = document.createElement("img");
  // Small Image
  image.src = '/assets/profile/kiq' + num + '_116.jpg';
  image.className = "blur";
  image.alt = "Kaique de Queiroz";
  image.style.width = "100%";
  holder.appendChild(image);
  // BigImage
  bigImage.onload = function() {
    image.src = this.src;
    image.className = "noblur";
  }
  // Call change
  setTimeout(function() {
    bigImage.src = image.src = '/assets/profile/kiq' + num + '.jpg';
  }, 50);
}

/* Lazy Load Images */
function lazyLoadImages(){
  var images = document.getElementsByClassName("lazy");
  if(images.length > 0){
      loadLazyImage(images, 0);
  }
}

function loadLazyImage( images, idx ){
  var img = document.createElement("img");
  img.onload = function() {
    images[idx].src = this.src;
    images[idx].alt = images[idx].dataset.alt;
    if(images.length){
      loadLazyImage(images, idx+1);
    }

  }
  img.src = images[idx].dataset.src;
}

/* Maximize Cards */
function createMaximizeButtons(){
  var elements = document.getElementsByClassName("maximize");

  for(let i=0, len=elements.length; i<len; ++i){
    let btn_menu, card, btn_max, btn_med, btn_min;
    card = elements[i];
    btn_menu = document.createElement("DIV");
    spc = document.createElement("SPAN");
    btn_max = document.createElement("BUTTON");
    btn_med = document.createElement("BUTTON");
    btn_min = document.createElement("BUTTON");
    // Div
    //btn_menu.className = "flex disp-top disp-right";
    btn_menu.className = "d-flex position-absolute w-100";
    spc.className = "block w-100";
    // Maximize Btn
    btn_max.innerHTML = "+";
    btn_max.className = "btn btn-outline-secondary btn-sm";
    btn_max.style.display = "block";
    // Minimize Btn
    btn_min.innerHTML = "X";
    btn_min.className = "btn btn-outline-secondary btn-sm";
    btn_min.style.display = "none";
    // Medium Btn
    btn_med.innerHTML = "M";
    btn_med.className = "btn btn-outline-secondary btn-sm";
    btn_med.style.display = "block";
    // Functions
    btn_max.onclick = function(){maximize(btn_max, btn_med, btn_min, card);}
    btn_med.onclick = function(){medium(btn_max, btn_med, btn_min, card);}
    btn_min.onclick = function(){restore(btn_max, btn_med, btn_min, card);}
    // Add the buttons
    btn_menu.appendChild(spc);
    btn_menu.appendChild(btn_max);
    //btn_menu.appendChild(btn_med);
    btn_menu.appendChild(btn_min);
    card.appendChild(btn_menu);
  };
}

function maximize( max, med, min, el ){
  max.style.display = "none";
  med.style.display = "block";
  min.style.display = "block";
  el.style.overflow = "scroll";
  el.className += " fixed-top w-100 h-100";
  //el.className = el.className.replace(" medium-size-pane", "");
  //el.className += " maximized-pane";
  document.getElementsByTagName("BODY")[0].style.overflowY = "hidden";
}

function medium( max, med, min, el ){
  max.style.display = "block";
  med.style.display = "none";
  min.style.display = "block";
  el.style.overflow = "auto";
  //el.className = el.className.replace(" maximized-pane", "");
  //el.className += " medium-size-pane";
  //el.className += " ";
  document.getElementsByTagName("BODY")[0].style.overflowY = "auto";
}

function restore( max, med, min, el ){
  $(el).modal('hide');
  max.style.display = "block";
  med.style.display = "block";
  min.style.display = "none";
  el.style.overflow = "auto";
  el.className = el.className.replace(" fixed-top w-100 h-100", "");
  //el.className = el.className.replace(" medium-size-pane", "");
  //el.className = el.className.replace(" maximized-pane", "");
  document.getElementsByTagName("BODY")[0].style.overflowY = "auto";
}

/* Máquina de Escrever */
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = Math.floor(Math.random()*toRotate.length);
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 175 - Math.random() * 75;
  if (this.isDeleting) { delta /= 2; }
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
  setTimeout(function() {that.tick();}, delta);
};

/* On Load */
window.onload = function() {
  displayRandomImage();
  createMaximizeButtons();
  lazyLoadImages();
  // Start Typewrite
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff; animation: blink .75s infinite;} @keyframes blink{ to{border-right: 0.08em solid #fff0;}}";
  document.body.appendChild(css);
};
