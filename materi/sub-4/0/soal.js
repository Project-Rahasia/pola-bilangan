const questions = [
  {
    question:
      "Pada pola bilangan persegi, suku ke-n adalah 169, $n$ adalah ...",
    answers: {
      a: "13",
      b: "14",
      c: "16",
      d: "17",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Pemerintah kota Banjarmasin memberikan vaksin secara bertahap pada warganya. Pada minggu pertama terdapat 200 orang yang telah divaksin. Dengan penambahan jumlah ketersediaan vaksin, jumlah orang yang telah divaksin tiap minggunya bertambah 50 orang. Jika penambahan ini bersifat konstan, maka banyak orang yang divaksin pada minggu ke-5 adalah sebanyak …",
    answers: {
      a: "400 orang",
      b: "450 orang",
      c: "500 orang",
      d: "550 orang",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Rumus suku ke-$n$ barisan bilangan adalah $\\frac{2n}{n+3}$. Empat suku pertama barisan tersebut adalah ...",
    answers: {
      a: "$\\frac{1}{2}, \\frac{4}{5}, 1, \\frac{8}{7}$",
      b: "$\\frac{2}{4}, \\frac{3}{4}, 1, \\frac{5}{4}$",
      c: "$\\frac{1}{2}, \\frac{3}{4}, \\frac{4}{5}, \\frac{5}{6}$",
      d: "$\\frac{1}{2}, 1, \\frac{6}{4}, 2$",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Jumlah bilangan pada baris-8 dari pola segitiga pascal adalah ...",
    answers: {
      a: "54",
      b: "128",
      c: "256",
      d: "512",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Stik disusun sedemikian rupa hingga membentuk pola seperti berikut.<img src='/materi/sub-4/0/img/stik.png' alt='img-soal' class='img-fluid d-block' width='400'><p>Jika tiap-tiap segitiga tersusun atas 3 stik, banyak stik pada susunan ke-97 adalah ...</p>",
    answers: {
      a: "185",
      b: "195",
      c: "200",
      d: "205",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Radi menyalakan kran air pada pukul 08.00 untuk mengisi bak mandinya yang memiliki kapasitas 24 liter. Pada pukul 08.05 bak mandi tersebut terisi 3 liter. Pada pukul 08.10 terisi 6 liter. Kemudian pada pukul 08.15 terisi 9 liter. Jika banyak air yang bertambah tetap konstan mengikuti pola tersebut, maka bak mandi Radi akan terisi penuh pada pukul …",
    answers: {
      a: "08.20",
      b: "08.30",
      c: "08.40",
      d: "08.50",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Perhatikan pola berikut!<img src='/materi/sub-4/0/img/segitiga.png' alt='img-soal' class='img-fluid d-block' width='400'><p>$U_{7}$ dan $U_{10}$ dari barisan 1, 3, 6, 10, ... adalah ...</p>",
    answers: {
      a: "28 dan 52",
      b: "28 dan 55",
      c: "30 dan 42",
      d: "36 dan 45",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Sebuah grup pemandu sorak ingin membuat piramida manusia dengan susunan seperti gambar berikut.<img src='/materi/sub-4/0/img/orang.png' alt='img-soal' class='img-fluid d-block' width='100'>Jika grup pemandu sorak tersebut ingin membuat piramida manusia setinggi 5 tingkat, jumlah orang yang berada pada tingkat paling bawah dari piramida manusia tersebut adalah sebanyak ...",
    answers: {
      a: "14 orang",
      b: "12 orang",
      c: "10 orang",
      d: "8 orang",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Pada sebuah ruangan bioskop terdapat 12 baris kursi. Baris paling depan memiliki 10 baris kursi. Baris berikutnya selalu memiliki lebih banyak 2 kursi dari baris didepannya. Banyak kursi pada baris paling belakang ruang bioskop tersebut adalah sebanyak …",
    answers: {
      a: "30",
      b: "32",
      c: "34",
      d: "36",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Jika diketahui barisan bilangan -16, -10, -4, x, 8, 14, 20, maka nilai x adalah ...",
    answers: {
      a: "-2",
      b: "0",
      c: "2",
      d: "4",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Perhatikan pola berikut!<img src='/materi/sub-4/0/img/genapsoal.JPG' alt='img-soal' class='img-fluid d-block' width='400'><p>Banyak lingkaran pada susunan ke-50 pola tersebut adalah ...</p>",
    answers: {
      a: "70",
      b: "80",
      c: "90",
      d: "100",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Diketahui barisan bilangan 50, 48, 46, 42, 38, 34, 30. Agar menjadi barisan bilangan yang benar maka bilangan yang harus dihilangkan adalah ...",
    answers: {
      a: "50",
      b: "48",
      c: "38",
      d: "34",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Tiga bilangan berikutnya dari barisan 12, 13, 25, 38, 63, 101, .... adalah ...",
    answers: {
      a: "164, 265, 429",
      b: "162, 265, 420",
      c: "164, 263, 427",
      d: "162, 263, 429",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Perhatikan pola berikut!<img src='/materi/sub-4/0/img/persegisoal.png' alt='img-soal' class='img-fluid d-block' width='400'><p>Suku ke-21 dari pola di atas adalah ...</p>",
    answers: {
      a: "144",
      b: "441",
      c: "361",
      d: "216",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Perhatikan pola berikut!<img src='/materi/sub-4/0/img/polapp.png' alt='img-soal' class='img-fluid d-block' width='400'><p>Rumus yang dapat digunakan untuk menghitung banyak persegi dalam tiap susunan pada pola di atas adalah ...</p>",
    answers: {
      a: "$U_{n} = (n+1) \\times n$",
      b: "$U_{n} = (n+n) \\times 1$",
      c: "$U_{n} = (n \\times 1) + 1$",
      d: "$U_{n} = (n+2) \\times n$",
    },
    correctAnswer: "a",
  },
];
