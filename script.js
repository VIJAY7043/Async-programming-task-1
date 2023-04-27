const dogImage = document.getElementById('dog-image');
const newImageBtn = document.getElementById('new-image-btn');

function getRandomDogImage() {
	fetch('https://dog.ceo/api/breeds/image/random')
		.then(response => response.json())
		.then(data => {
			dogImage.src = data.message;
		})
		.catch(error => {
			console.log(error);
		});
}

newImageBtn.addEventListener('click', getRandomDogImage);
getRandomDogImage();
