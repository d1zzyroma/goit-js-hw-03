function slugify(title){

    titleLower = title.toLowerCase()
    titleSplit = titleLower.split(" ") 
    titleJoin = titleSplit.join("-")
    
    return titleJoin;

}


console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));