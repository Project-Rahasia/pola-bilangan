const getChapClass = (path) => {
  return this.location.pathname.substr(8, 5) === path ? "show" : "";
};

const getCollapsed = (path) => {
  return this.location.pathname.substr(8, 5) !== path ? "collapsed" : "";
};

const getChapChild = (path) => {
  return this.location.pathname.substring(8) === path ? "course-active" : "";
};

document.querySelector(".accordion").innerHTML = `
<div class="accordion-item">
  <h2 class="accordion-header" id="flush-headingOne">
    <button class="accordion-button ${getCollapsed(
      "sub-1"
    )}" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Pendahuluan
    </button>
  </h2>
  <div id="flush-collapseOne" class="accordion-collapse collapse ${getChapClass(
    "sub-1"
  )}" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body">
      <div class="list-course mb-3">
        <a href="/materi/sub-1/0/" class="list-course-child ${getChapChild(
          "sub-1/0/"
        )}">Peta Konsep</a>
      </div>
      <div class="list-course mb-3">
        <a href="/materi/sub-1/1/" class="list-course-child ${getChapChild(
          "sub-1/1/"
        )}">Pendahuluan</a>
      </div>
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="flush-headingTwo">
    <button class="accordion-button ${getCollapsed(
      "sub-2"
    )}" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Menentukan Persamaan dari Suatu Barisan Bilangan
    </button>
  </h2>
  <div id="flush-collapseTwo" class="accordion-collapse collapse ${getChapClass(
    "sub-2"
  )}" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body">
      <div class="list-course mb-3">
        <a href="/materi/sub-2/0/" class="list-course-child ${getChapChild(
          "sub-2/0/"
        )}">Pendahuluan</a>
      </div>
      <div class="list-course mb-3">
        <a href="/materi/sub-2/1/" class="list-course-child ${getChapChild(
          "sub-2/1/"
        )}">Barisan Bilangan Ganjil dan Genap</a>
      </div>
      <div class="list-course mb-3">
        <a href="/materi/sub-2/2/" class="list-course-child ${getChapChild(
          "sub-2/2/"
        )}">Barisan Bilangan Fibonacci</a>
      </div>
      <div class="list-course mb-3">
        <a href="/materi/sub-2/3/" class="list-course-child ${getChapChild(
          "sub-2/3/"
        )}">Pola Bilangan Segitiga Pascal</a>
      </div>
      <div class="list-course mb-3">
        <a href="/materi/sub-2/4/" class="list-course-child ${getChapChild(
          "sub-2/4/"
        )}">Barisan Bilangan Lainnya</a>
      </div>
      <div class="list-course mb-3">
        <a href="/materi/sub-2/5/" class="list-course-child ${getChapChild(
          "sub-2/5/"
        )}">Kuis</a>
      </div>
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="flush-headingThree">
    <button class="accordion-button ${getCollapsed(
      "sub-3"
    )}" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Menentukan Persamaan dari Suatu Konfigurasi Objek
    </button>
  </h2>
  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body">
      <div class="list-course mb-3">
        <a href="/pages/materi-1/1/" class="list-course-child">Pola Bilangan Persegi</a>
      </div>
      <div class="list-course mb-3">
        <a href="/pages/materi-1/1/" class="list-course-child">Pola Bilangan Persegi Panjang</a>
      </div>
      <div class="list-course mb-3">
        <a href="/pages/materi-1/1/" class="list-course-child">Pola Bilangan Segitiga</a>
      </div>
      <div class="list-course mb-3">
        <a href="/pages/materi-1/1/" class="list-course-child">Pola Konfigurasi Objek Lainnya</a>
      </div>
      <div class="list-course mb-3">
        <a href="/pages/materi-1/1/" class="list-course-child">Kuis</a>
      </div>
    </div>
  </div>
</div>
`;
