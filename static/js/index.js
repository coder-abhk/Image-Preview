const image__ele = document.getElementById("image__ele");
const preview__button = document.getElementById("preview__button");
const image__uploader__ele = document.getElementById("image__uploader__ele");
const preview__text__ele = document.querySelector(".preview__text");

let imgFile;
image__uploader__ele.addEventListener("change", function(event) {
	imgFile = event.target.files[0];
})


const previewHandler = (imgFile) => {

	preview__text__ele.style.display = "none";
	image__ele.classList.toggle("active");
	if (imgFile) {
		// FileReader
		let reader = new FileReader();
		// create image url
		reader.readAsDataURL(imgFile);
		// imageLoader
		reader.addEventListener("load", function() {
			image__ele.src = this.result;
		})

	}

}

preview__button.addEventListener("click", (event) => {
	event.preventDefault();

	previewHandler(imgFile);
})