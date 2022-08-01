let tampilan = '';
const layar = document.querySelector('.tampilan');
const dataDetail = document.querySelector('.detail');

const tombol = document.querySelector('.pilihan');
console.log(tombol);

tombol.addEventListener('click', function () {
  let input = document.querySelector('.input-keyword');
  $.ajax({
    url: `http://www.omdbapi.com/?s=${input.value}&apikey=58dec134`,
    success: (result) => {
      const movie = result.Search;

      for (const a of movie) {
        tampilan += showMovie(a);
      }

      layar.innerHTML = tampilan;
      $('.exampleModal-tombol').on('click', function () {
        let idImdb = $(this).data('imdbid');
        $.ajax({
          url: `http://www.omdbapi.com/?i=${idImdb}&apikey=58dec134`,
          success: (result) => {
            let isiDetail = showMovieDetail(result);

            dataDetail.innerHTML = isiDetail;
          }
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    }
  });
});

function showMovie(a) {
  return `<div class="col-md-4 my-5">
    <div class="card" style="">
      <img src="${a.Poster}" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">${a.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${a.Year}</h6>
        <a href="#" class="btn btn-primary exampleModal-tombol" data-bs-toggle="modal" data-imdbid="${a.imdbID}" data-bs-target="#exampleModal">Show Detail</a>
      </div>
    </div>
  </div>`;
}

function showMovieDetail(result) {
  return ` <div class="row ">
           <div class="col-md-3">
             <img src="${result.Poster}" class="img-fluid" />
           </div>
           <div class="col-md">
             <ul class="list-group">
               <li class="list-group-item"><h4>${result.Title}</h4></li>
               <li class="list-group-item">
                 <strong>Director :</strong>${result.Director}
               </li>
               <li class="list-group-item">
                 <strong>Actor :</strong>${result.Actors}
               </li>
               <li class="list-group-item">
                 <strong>Write :</strong>${result.Writer}
               </li>
               <li class="list-group-item">
                 <strong>Plot :</strong><br />${result.Plot}
               </li>
             </ul>
           </div>
         </div>`;
}
