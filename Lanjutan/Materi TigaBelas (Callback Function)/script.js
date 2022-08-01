function getDataMahasiswa(url, succes, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        succes(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  xhr.open('get', url);
  xhr.send();
}

function succes(rest) {
  let mhs = JSON.parse(rest);
  for (const m of mhs) {
    console.log(m);
  }
}

function error() {}

getDataMahasiswa('data/mahasiswa.json', succes, error);
