document.querySelector(".modal").innerHTML = `
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <!-- List course -->
      <div class="accordion accordion-flush" id="accordionFlushExample">
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
              <a href="/materi/sub-1/0/" class="list-course-child isDisabled sub-1-0 ${getChapChild(
                "sub-1/0/"
              )}" id="sub-1-0">Kompetensi Dasar</a>
            </div>
            <div class="list-course mb-3">
              <a href="/materi/sub-1/1/" class="list-course-child isDisabled sub-1-1 ${getChapChild(
                "sub-1/1/"
              )}" id="sub-1-1">Peta Konsep</a>
            </div>
            <div class="list-course mb-3">
              <a href="/materi/sub-1/2/" class="list-course-child isDisabled sub-1-2 ${getChapChild(
                "sub-1/2/"
              )}" id="sub-1-2">Pendahuluan</a>
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
            <a href="/materi/sub-2/0/" class="list-course-child isDisabled sub-2-0 ${getChapChild(
              "sub-2/0/"
            )}" id="sub-2-0">Pendahuluan</a>
          </div>
          <div class="list-course mb-3">
            <a href="/materi/sub-2/1/" class="list-course-child isDisabled sub-2-1 ${getChapChild(
              "sub-2/1/"
            )}" id="sub-2-1">Barisan Bilangan Ganjil dan Genap</a>
          </div>
          <div class="list-course mb-3">
            <a href="/materi/sub-2/2/" class="list-course-child isDisabled sub-2-2 ${getChapChild(
              "sub-2/2/"
            )}" id="sub-2-2">Barisan Bilangan Fibonacci</a>
          </div>
          <div class="list-course mb-3">
            <a href="/materi/sub-2/3/" class="list-course-child isDisabled sub-2-3 ${getChapChild(
              "sub-2/3/"
            )}" id="sub-2-3">Pola Bilangan Segitiga Pascal</a>
          </div>
          <div class="list-course mb-3">
            <a href="/materi/sub-2/4/" class="list-course-child isDisabled sub-2-4 ${getChapChild(
              "sub-2/4/"
            )}" id="sub-2-4">Barisan Bilangan Lainnya</a>
          </div>
          <div class="list-course mb-3">
            <a href="/materi/sub-2/5/" class="list-course-child isDisabled sub-2-5 ${getChapChild(
              "sub-2/5/"
            )}" id="sub-2-5">Kuis</a>
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
        <div id="flush-collapseThree" class="accordion-collapse collapse ${getChapClass(
          "sub-3"
        )}" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="list-course mb-3">
              <a href="/materi/sub-3/0/" class="list-course-child isDisabled sub-3-0 ${getChapChild(
                "sub-3/0/"
              )}" id="sub-3-0">Pendahuluan</a>
            </div>
            <div class="list-course mb-3">
              <a href="/materi/sub-3/1/" class="list-course-child isDisabled sub-3-1 ${getChapChild(
                "sub-3/1/"
              )}" id="sub-3-1">Pola Bilangan Persegi</a>
            </div>
            <div class="list-course mb-3">
              <a href="/materi/sub-3/2/" class="list-course-child isDisabled sub-3-2 ${getChapChild(
                "sub-3/2/"
              )}" id="sub-3-2">Pola Bilangan Persegi Panjang</a>
            </div>
            <div class="list-course mb-3">
              <a href="/materi/sub-3/3/" class="list-course-child isDisabled sub-3-3 ${getChapChild(
                "sub-3/3/"
              )}" id="sub-3-3">Pola Bilangan Segitiga</a>
            </div>
            <div class="list-course mb-3">
              <a href="/materi/sub-3/4/" class="list-course-child isDisabled sub-3-4 ${getChapChild(
                "sub-3/4/"
              )}" id="sub-3-4">Pola Konfigurasi Objek Lainnya</a>
            </div>
            <div class="list-course mb-3">
              <a href="/materi/sub-3/5/" class="list-course-child isDisabled sub-3-5 ${getChapChild(
                "sub-3/5/"
              )}" id="sub-3-5">Kuis</a>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingFour">
          <button class="accordion-button ${getCollapsed(
            "sub-4"
          )}" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
            Latihan
          </button>
        </h2>
        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="list-course mb-3">
              <a href="/materi/sub-4/0/" class="list-course-child isDisabled sub-4-0 ${getChapChild(
                "sub-4/0/"
              )}" id="sub-4-0">Latihan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End List course -->
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" id="next" data-bs-dismiss="modal">Tutup</button>
    </div>
  </div>
</div>
`;
