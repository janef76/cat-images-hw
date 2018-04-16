document.addEventListener('DOMContentLoaded', () => {
  //
  // const cats = document.querySelector('#cats');
  // const newCat = document.createElement('ul');
  //
  // const catName = document.createElement('li');
  // catName.textContent = 'Name: Jane'
  //
  // const catFavFood = document.createElement('li');
  // catFavFood.textContent = 'Favourite food: mouse'
  //
  // const image = document.createElement('li');
  //
  // const catImage = document.createElement('img');
  // catImage.src = 'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?cs=srgb&dl=adorable-animal-animal-photography-774731.jpg&fm=jpg';
  // catImage.width = 500;
  //
  // cats.appendChild(newCat);
  // newCat.appendChild(catName);
  // newCat.appendChild(catFavFood);
  // newCat.appendChild(image);
  // image.appendChild(catImage);

  const cats = document.querySelector('#cats');
    cats.innerHTML = '';


  const catProfile = function(cat) {

  const newCat = document.createElement('ul');

  const catName = document.createElement('li');
  catName.textContent = (`Name: ${cat[0]}`);

  const catFavFood = document.createElement('li');
  catFavFood.textContent = (`Favourite food: ${cat[1]}`);

  const image = document.createElement('li');
  const catImage = document.createElement('img');
  catImage.src = cat[2];
  catImage.width = 500;

  cats.appendChild(newCat);
  newCat.appendChild(catName);
  newCat.appendChild(catFavFood);
  newCat.appendChild(image);
  image.appendChild(catImage);
}

const cat1 = ['Jane', 'Mouse', 'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?cs=srgb&dl=adorable-animal-animal-photography-774731.jpg&fm=jpg'];
const cat2 = ['Boba', 'Sock fluff', 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'];
const cat3 = ['Barnaby', 'Tuna', 'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg'];
const cat4 = ['Max', 'Whiskas Temptations', 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'];

const catArray = [cat1, cat2, cat3, cat4];

for (let i = 0; i < catArray.length; i++) {
  catProfile(catArray[i]);
}
});




  // const image = document.createElement('img');
  //   image.src = 'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?cs=srgb&dl=adorable-animal-animal-photography-774731.jpg&fm=jpg';
  //   image.width = 500;
  //   cats.appendChild(image);

//     const createImage = function (source, cats) {
//       const image = document.createElement('img');
//       image.src = source;
//       image.width = 500;
//       cats.appendChild(image);
//     }
//
//     createImage('https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?cs=srgb&dl=adorable-animal-animal-photography-774731.jpg&fm=jpg', cats);
// });


//https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?cs=srgb&dl=adorable-animal-animal-photography-774731.jpg&fm=jpg
