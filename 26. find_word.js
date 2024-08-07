//* Nicher Sentence e "Traffic" word ti kotobar use hoyeche ?  First "traffic" koto number position e pawa geche ?

const sentence = `Traffic jam is a regular issue in our country. A traffic jam is a long line of vehicles that are stuck in traffic. It’s a familiar occurrence in major cities and towns. It has now turned into a big problem. It causes a horrible situation in our daily lives.
There are several reasons for traffic jams. The major reasons for traffic jams include an increase in the number of buses, trucks, rickshaws, and motorbikes. Overpopulation is also another cause. On the other hand, our country’s traffic control system is undeveloped. Drivers are also accountable for this problem. Another reason for traffic jams is the insufficient knowledge about traffic rules, overtaking tendency, and parking here and there. It causes untold pain to the passengers and hampers vehicle movement.`

const matches = sentence.match(/traffic/gi); //kotoguo traffic pawa gache 
const occurrences = matches ? matches.length : 0; 

console.log(occurrences);

let position = sentence.search(/trafficss/i); // 1st kototomo position e pawa geche
position = position >= 0 ? position : "not found!"

console.log(position);