const mixedWords = [
    "camera", "sparrow", "hug", "book", "india", "kiss", "chair", "dolphin", "light", "flirt",
    "parrot", "mexico", "wolf", "door", "romance", "peacock", "love", "iran", "giraffe", "keyboard",
    "blanket", "feeling", "tiger", "bus", "river", "rabbit", "saudi", "moon", "caring", "mouse",
    "emotion", "charm", "goat", "leopard", "affection", "train", "cloud", "soulmate", "owl", "date",
    "cup", "kiss", "fox", "zebra", "usa", "canary", "vulture", "passion", "honesty", "shirt",
    "airport", "heart", "desire", "table", "china", "notebook", "trust", "hat", "clock", "deer",
    "turkey", "valley", "sun", "rain", "bottle", "cat", "school", "sky", "island", "sheep",
    "brazil", "camel", "hill", "flirt", "bridge", "turkey", "couple", "panda", "elephant", "trouser",
    "dog", "mountain", "garden", "tree", "college", "swan", "eagle", "emotion", "door", "japan",
    "duck", "rain", "hospital", "window", "crow", "lion", "sweden", "market", "affection", "pig",
    "falcon", "teacher", "bike", "coat", "mirror", "goose", "love", "flower", "romance", "bed",
    "ship", "radio", "crocodile", "student", "australia", "kiss", "donkey", "phone", "monkey", "cloud",
    "hug", "mirror", "internet", "road", "school", "xylophone", "penguin", "watch", "desert", "pencil",
    "relationship", "paper", "train", "flirt", "forest", "desire", "laptop", "lion", "charm", "window",
    "iran", "sofa", "poland", "sun", "date", "tower", "emotion", "mouse", "village", "affection",
    "sparrow", "keyboard", "kangaroo", "camera", "passion", "airport", "romance", "goat", "trust", "queen",
    "notebook", "shirt", "hat", "romance", "truck", "garden", "door", "jacket", "ball", "flower",
    "eagle", "fox", "book", "love", "mirror", "clock", "shark", "tiger", "blanket", "river",
    "desert", "germany", "italy", "kingfisher", "truck", "india", "couple", "bag", "rain", "violin",
    "lake", "snow", "cat", "relationship", "apple", "sun", "hat", "jungle", "tree", "house",
    "romance", "date", "swan", "lion", "soulmate", "kiss", "dog", "school", "dolphin", "teacher",
    "glove", "love", "rabbit", "air", "bridge", "emotion", "garden", "passion", "trust", "hug"
  ];
let string = mixedWords[Math.floor(Math.random() * mixedWords.length)];  
let time = 0;
let start = false;
let allow = true;
let t=0;
for (let i = 1; i < 50; i++) {
  let randomIndex = Math.floor(Math.random() * mixedWords.length);
  string += " " + mixedWords[randomIndex];
}



let textArea = document.querySelector(".textArea");


for (let j = 0; j < string.length; j++) {
  let span = document.createElement("span");
  span.innerText = string[j];
  span.className = 'default';
  textArea.appendChild(span);
}

let i = 0;
let spans = document.querySelectorAll('span');
document.addEventListener("keydown", function (e) {
if(!allow)return;
  if (e.key !== 'Backspace' && e.key.length > 1) return;
  start = true;
  if (e.key === "Backspace") {
    if (i > 0) {
      i--;
      spans[i].className = 'default';
    }
  } else if (e.key === string.charAt(i)) {

    spans[i].className = 'green';
    i++;
  } else if (e.key.length === 1) {
    spans[i].className = 'red';
    i++;
  }
  print(i-1);
});
function print(i) {
   let word=0;
   let char=0;
   let correct=0;
   let accuracy=100;
   if(i>=0){
   for(let k=0;k<=i;k++){
    if(string.charAt(k)==" ")word++;
   }
    char=i;
    let redSpans = document.querySelectorAll('span.green');
    redSpans.forEach(span => {
    correct++;
     });
     accuracy= Math.floor((correct / (i + 1)) * 100);
     console.log("Word: " + word + " Char: " + char + " Correct: " + correct + " Accuracy: " + accuracy + "%");
    let wpm = Math.floor((word / (time / 60)) * 100) / 100;
    let cpm = Math.floor((char / (time / 60)) * 100) / 100;

    let toFill = document.getElementById("wpmm");
    toFill.innerText = wpm;
    let toFill2 = document.getElementById("cpmm");
    toFill2.innerText = cpm;
    let toFill3 = document.getElementById("acc");
    toFill3.innerText = accuracy + "%";

    let toFill4 = document.getElementById("tmm");
   
    toFill4.innerText = (30-time) + "s";
    console.log(time);


   }
 
}
timerid=setInterval(() =>{
  if(!start)return;
  if(time==30){
    time = 0;
    start = false;
    i=0;
    spans.forEach(span => {
      span.className = 'default';
    });
    allow = false;
    clearInterval(timerid);
  }
time++;
print(i-1);
},1000);

