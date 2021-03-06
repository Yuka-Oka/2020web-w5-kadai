const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '気温華氏40度で外は寒かった。:insertx:は出かけた。 :inserty: に着いた。:insertz:体重 100ポンド の:insertx:は驚いたが、 Bobは驚かなかった。:inserty:ではよくあることだった。';
let insertX = ['赤の女王','マッドハッター','アリス'];
let insertY = ['吉祥寺駅','三鷹駅','新宿駅'];
let insertZ = ['駅が燃えていた。','混雑していた。','雷がなっていた。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name); /*Bobの代わりに名前を埋め込む*/
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' kg';
    const temperature =  '摂氏-' + Math.round((94-32) * 5 / 9) ;
    newStory = newStory.replace('華氏40',temperature);
    newStory = newStory.replace('100ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
