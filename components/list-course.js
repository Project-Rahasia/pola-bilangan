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
        <a href="/pages/materi-1/1/" class="list-course-child">Barisan Bilangan Fibonacci</a>
      </div>
      <div class="list-course mb-3">
        <a href="/pages/materi-1/1/" class="list-course-child">Barisan Bilangan Lainnya</a>
      </div>
      <div class="list-course mb-3">
        <a href="/pages/materi-1/1/" class="list-course-child">Kuis</a>
      </div>
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="flush-headingThree">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Accordion Item #3
    </button>
  </h2>
  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
  </div>
</div>
`;
