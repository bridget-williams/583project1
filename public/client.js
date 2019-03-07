// Globas Variables
/* global Chart */

// client-side js

// Document Ready Function
document.addEventListener("DOMContentLoaded", function(){
  
  var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});

		// get all slides
		var slides = document.querySelectorAll("section.panel");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
				})
				.setPin(slides[i])
				.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
		}


  
  
  console.log('hello world :o');
  
  let characterName = '';
  let characterPhoto = '';
  let grootComics ='' ;
  let grootSeries = '';
  let grootStories = '';
  
  //API Responses
  fetch('/characters')
    .then((resp) => resp.json())
    .then((data) => {
    console.group('%cResponse from /characters', 'color: #F037A5; font-size: large');
    console.log('Data:' + data.name);
    characterName=data.name;
    characterPhoto = data.thumbnail.path + '.' + data.thumbnail.extension;
    let grootComics = data.comics.available;
      console.log(grootComics);
    let grootSeries = data.series.available;
    let grootStories = data.stories.available;
    console.log(characterPhoto, characterName);
    
    let h2 = document.createElement('h2');
    h2.innerHTML= 'Groot';
    document.getElementById('character1').append(h2);
    let img = document.createElement('img');
    img.setAttribute('src', characterPhoto);
    img.setAttribute('id', 'groot-photo');
    document.getElementById('character1').append(img);
    
    let h22 = document.createElement('h2');
    h22.innerHTML= 'Groot- This is a placeholder';
    document.getElementById('character2').append(h22);
    let img2 = document.createElement('img');
    img2.setAttribute('src', characterPhoto);
    img2.setAttribute('id', 'groot-photo');
    document.getElementById('character2').append(img2);


    
    console.groupEnd();
    // return(data);
    
    
  
  // chart
    
    let chartHead = document.createElement('h2');
    chartHead.innerHTML= 'How do these well known sidekicks compare?';
    document.getElementById('chart-head').append(chartHead);
    
    
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
  
      data: {
      labels: ["Comics", "Series", "Stories"],
      datasets: [
          {
              label: "Groot",
              backgroundColor: "blue",
              data: [grootComics, grootSeries, grootStories]
          },
          {
              label: "Chico",
              backgroundColor: "red",
              data: [4,3,5]
          }
          
      ]
  }

    ,
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true,
                     

                  }
              }]
          }
      }
  });
  });


  
  

});