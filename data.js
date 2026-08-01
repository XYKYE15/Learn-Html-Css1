const nama = "Rizki Rinaldi";
let umur = 2;

let biodata = document.getElementById('biodata');

function generateBiodata() {
  let generasi;

  if (umur >= 2 && umur <= 10) {
    generasi = "anda adalah seorang anak-anak";
  } else if (umur >= 10 && umur < 17) {
    generasi = "anda adalah seorang remaja";
  } else if (umur >= 17 && umur < 30) {
    generasi = "anda adalah seorang dewasa";
  } else if (umur >= 30) {
    generasi = "anda seorang orang tua";
  } else {
    generasi = "anda adalah seorang bayi";
  }
  return biodata.innerHTML = generasi;
}

generateBiodata();
