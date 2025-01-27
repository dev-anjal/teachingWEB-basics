console.log("HTML and JS are connected suscessfully");

function giveRandomWatch() {
  var element = document.querySelector(".watch");

  var point_wala_number = Math.random() * 2;
  var round_off_gareko = Math.round(point_wala_number);

  if (round_off_gareko == 0) {
    element.innerHTML = `<div class="container">
      <div class="image"><img src="./img3.jpg" alt"Image No. 1" height="150" width="200"></div>
      <div class="desc">
        this is watch number 1
      </div>
      <div class="btn">
        <button>buy now</button>
      </div>
    </div>`;
  } else if (round_off_gareko == 1) {
    element.innerHTML = `<div class="container">
      <div class="image"><img src="./img1.jpg" alt"Image No. 2" height="150" width="200"></div>
      <div class="desc">
        this is watch number 2
      </div>
      <div class="btn">
        <button>buy now</button>
      </div>
    </div>`;
  } else if (round_off_gareko == 2) {
    element.innerHTML = `<div class="container">
      <div class="image"><img src="./img2.jpg" alt"Image No. 3" height="150" width="200"></div>
      <div class="desc">
        this is watch number 3
      </div>
      <div class="btn">
        <button>buy now</button>
      </div>
    </div>`;
  }
}
