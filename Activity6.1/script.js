
class Movie{
    title=""
    studio=""
    rating=""
    constructor(title,studio,rating="PG")
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    setTitle(title)
    {
        this.title=title
    }
    setStudio(studio)
    {
        this.studio=studio
    }
    setRating(rating)
    {
        this.rating=rating
    }
    getPG()
    {
        if(this.rating=="PG")
        return this.name 
    }

}
const movie1=new Movie("Good Bye","Twin Productions","PG13")
console.log(movie1.name);
console.log(movie1.studio);
console.log(movie1.rating);
const movie2=new Movie("Day after tomorrow","Engle Production","PG");
console.log(movie2);
console.log(movie2.getPG())
const movie3=new Movie("Casino Royale","Eon Productions","PG13")
console.log(movie3)


