let movieTitle:string="Endgame"
movieTitle="Arrival",
movieTitle.toUpperCase();
console.log(movieTitle);

//Number Type
let mynum:number=20;
mynum=20;
console.log(mynum);

//Boolean
let gameOver:boolean=false;
gameOver=true

//Type inference
let tvshow="Arrival"
tvshow="movies"
console.log(tvshow);
//any type
let show:any="intersteller"//now we can assign this to any type of datatype
show=10
show=false;
show={
    name:"Anurag Yadav"
    
}
let movieslist=["intersteller","amdeus","Arrival","The Things"];
let foundMovies:string;
for(let movie of movieslist){
    if(movie="Alien"){
        foundMovies="Alien";
    }

}
