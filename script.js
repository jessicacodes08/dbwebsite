const movies = document.querySelectorAll(".movie");

movies.forEach(movie => {

    movie.addEventListener("click", function () {

        movies.forEach(other => {

            if(other !== movie){

                other.classList.remove("active");

            }

        });

        movie.classList.toggle("active");

    });

});

const timeline=document.querySelector(".timeline");

timeline.addEventListener("wheel",function(e){

    e.preventDefault();

    timeline.scrollLeft+=e.deltaY;

});