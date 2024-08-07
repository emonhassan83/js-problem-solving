//kono Array theke kivabe sobtheke boro 'string' khuje ber korben and tar index number deakhben ?

/* function longestString(names) {
    let longestWord = '';

    for (name of names) {
        if (name.length > longestWord.length){
            longestWord = name ;
        }
    }
    
    return [longestWord, names.indexOf(longestWord)];
}

console.log(longestString(['Will Smith',  'Johnny Depp', 'Adam Sandler', 'Vin Diesel', 'Jackie Chan', 'Morgan Freeman', 'Robin Williams', 'Angelina Jolie', 'Brad Pitt', 'Jim Carrey'])); */

//* shortcut way
const strings = [
  "Will Smith",
  "Johnny Depp",
  "Adam Sandler",
  "Vin Diesel",
  "Jackie Chan",
  "Morgan Freeman",
  "Robin Williams",
  "Angelina Jolie",
  "Brad Pitt",
  "Jim Carrey",
];

const longestString = strings.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
}, "");

console.log(longestString);
