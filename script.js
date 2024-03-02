document.getElementById('horske').onchange = function () {
  document.getElementById('horskes').disabled = !this.checked;
};
document.getElementById('silnice').onchange = function () {
  document.getElementById('silnices').disabled = !this.checked;
};
document.getElementById('detske').onchange = function () {
  document.getElementById('detskes').disabled = !this.checked;
};
document.getElementById('gravel').onchange = function () {
  document.getElementById('gravels').disabled = !this.checked;
};

document
  .querySelector('button[name="vypocet"]')
  .addEventListener('click', function () {
    let chBx = document.querySelectorAll('input[name="kola"]');
    let ks = document.querySelectorAll('input[name="ks"]');
    let rbBtn = document.querySelectorAll('input[name="nosic"]:checked');
    let select = document.querySelectorAll('select');
    let pay = document.querySelector('input[name="castka"]');
    let oznameni = document.querySelector('input[name="vesel"]');

    let temp = 0;

    for (let i = 0; i < chBx.length; i++) {
      if (chBx[i].checked && ks[i].value != 0) {
        temp = parseInt(chBx[i].value) * parseInt(ks[i].value) + temp;
      }
    }

    for (const hod of select) {
      temp = temp * parseInt(hod.value);
    }

    for (const rb of rbBtn) {
      temp = temp + parseFloat((rb.value / 100) * temp);
    }

    if (pay.value > temp) {
      oznameni.value = 'Parada, muzete jed';
    } else {
      oznameni.value = 'Lituji, ale nevyjdete penezi';
    }
    document.querySelector('.vys').value = temp;
  });

let mail = document.querySelector('input[type="email"]');
document.querySelector('.odeslat').addEventListener('click', function () {
  const regex = /@/;
  const validate = regex.test(mail.value);
  if (validate) {
    alert('pozadavky byly odeslany');
  } else {
    alert('Zadali jsem spatny email');
  }
});
