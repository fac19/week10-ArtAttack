function handleArtwork() {
  //   function genObjectId() {
  let arr = [2558, 1, 2, 3, 4, 5, 6, 7, 8];
  // for (let i = 0; i < arr.length; i++) {
  //   return arr[i];
  // }
  //   }
  let index = Math.floor(Math.random() * arr.length);

  fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arr[index]}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  //Out of 474,000 objects we require 100 objects
  //Loop through the 100 objects and check to see if they have an image
  // If the object has an image then great
}

export default handleArtwork;
