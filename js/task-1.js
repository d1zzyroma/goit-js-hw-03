function slugify(title){

    const titleLower = title.toLowerCase();
    const titleSplit = titleLower.split(" ");
    const titleJoin = titleSplit.join("-");
    
    return titleJoin;

}


console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));