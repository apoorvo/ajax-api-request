const express = require('express');
const app = require('express')();

app.use(express.static('public'));

var words= ["To Kill a Mockingbird by Harper Lee", "1984 by George Orwell", "The Book Thief by Markus Zusak", "Brave New World by Aldous Huxley", "The Underground Railroad by Colson Whitehead", "Beloved by Toni Morrison", "All the Light We Cannot See by Anthony Doerr", "Pride and Prejudice by Jane Austen", "Catch-22 by Joseph Heller", "The Call of the Wild by Jack London", "Fahrenheit 451 by Ray Bradbury", "Love in the Time of Cholera by Gabriel García Márquez", "The Lovely Bones by Alice Sebold", "The Alchemist by Paulo Coelho", "The Joy Luck Club by Amy Tan", "A Tree Grows in Brooklyn by Betty Smith", "Siddhartha by Herman Hesse", "The Great Gatsby by F. Scott Fitzgerald", "The Kite Runner by Khaled Hosseini", "The Handmaid’s Tale by Margaret Atwood", "The Color Purple by Alice Walker", "The Little Prince by Antoine de Saint-Exupéry", "Their Eyes Were Watching God by Zora Neale Hurston", "The Bell Jar by Sylvia Plath", "Harry Potter and the Sorcerer’s Stone by J.K. Rowling", "Slaughterhouse-Five by Kurt Vonnegut", "The Left Hand of Darkness by Ursula K. le Guin", "Eat Pray Love by Elizabeth Gilbert", "Braving the Wilderness by Brené Brown", "Tuesdays with Morrie by Mitch Albom", "The Glass Castle by Jeannette Walls", "Walden by Henry David Thoreau", "I Know Why the Caged Bird Sings by Maya Angelou", "Into the Wild by Jon Krakauer", "The Diary of a Young Girl by Anne Frank↵", "A Walk in the Woods by Bill Bryson", "A Return to Love by Marianne Williamson", "Year of Yes by Shonda Rhimes", "On the Road by Jack Kerouac", "When Breath Becomes Air by Paul Kalanithi", "The Last Lecture by Randy Pausch", "Angela’s Ashes by Frank McCourt", "Tiny Beautiful Things by Cheryl Strayed", "Between the World and Me by Ta-Nehisi Coates", "A Brief History of Time by Stephen Hawking", "Hidden Figures by Margot Lee Shetterly", "The 7 Habits of Highly Effective People by Stephen R. Covey", "The Happiness Project by Gretchen Rubin", "The Immortal Life of Henrietta Lacks by Rebecca Skloot"];
var result = "";
app.get('/',function(req,res){
    console.log('Request');
    res.render('index.ejs');
});     

app.get('/ajax',function(req,res){
    console.log(req.query.inp);
    search(req.query.inp);
    res.send(result);
    result="";
});

function search(i){
    words.forEach(function(word){
        if(word.toLowerCase().includes(i.toLowerCase())){
            result+="<li>"+word+"</li>";
        }
    });
}

app.listen(3000, ()=>{console.log('Done')});