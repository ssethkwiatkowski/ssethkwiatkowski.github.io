// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');
// Array of slides (10 Images)
const slides = [
	{ src: "images/image08.jpg.jpg", 
	  alt: 'mountain' ,
	  caption: 'I am everywhere'	
	},
	{ src: "images/image09.jpg.jpg" , 
	  alt: 'The Desert' ,
	  caption: 'All the time'
	},
	{ src: "images/image10.jpg.jpg" , 
	  alt: 'matt damon', 
	  caption: 'but no matter where I am'
	},
	{src: "images/image11.jpg.jpg" , 
	 alt: 'Grand Canynon',
	 caption: 'no matter the state Im in', 
	},
	{src: "images/image12.jpg.jpg" ,
	 alt: 'cincy',
	 caption: 'no matter what mood im in',
	},
	{src: "images/image13.jpg.jpg" ,
	 alt: 'tybee',
	 caption: 'no matter the time'
	},
	{src: "images/image15.jpg.jpg" ,
	 alt: 'the beach',
	 caption: 'no matter the weather'
	},
	{src: "images/image16.jpg.jpg" ,
	 alt: 'city',
	 caption: 'no matter the city'
	},
	{src: "images/image17.jpg.jpg" ,
	 alt: 'pitssburgh',
	 caption: 'all roads always'
	},
	{src: "images/image14.jpg.jpg" ,
	 alt: 'home',
	 caption: 'lead back home'}
];

let currentIndex = 0;

// Preload images
slides.forEach (({ src }) => {
const i = new Image () ;
i.src = src;
})
// Helper to show slide
function showSlide (index) {
	const slide = slides [index] ;
	mainImage.src = slide.src; // replaces the image
	mainImage.alt = slide.alt; // replaces the alt of the image
 	caption.textContent = slide.caption; // updates caption text
}

// Advance on click
function nextSlide () {
currentIndex = (currentIndex + 1) % slides.length;
showSlide (currentIndex) ;

}
	
// Initialize
showSlide (currentIndex);
mainImage.addEventListener ('click', nextSlide) ;