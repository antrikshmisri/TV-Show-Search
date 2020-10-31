const form = document.querySelector('form');
const img = document.querySelector('.img-ele')
const h1 = document.querySelector('.movie-title')
const p = document.querySelector('.show-desc')
form.addEventListener('submit' , async function (e) {
    e.preventDefault();
    const showQuery = form.elements.search.value;
    const res = await axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${showQuery}`);
    const imgurl = res.data.image.original;
    const moviename = res.data.name;
    const moviedesc = res.data.summary;
    img.src = imgurl;
    h1.innerText = moviename;
    p.innerHTML = moviedesc;
})