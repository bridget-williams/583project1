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
  
  let grootName = '';
  let grootPhoto = '';
  let grootComics ='' ;
  let grootSeries = '';
  let grootStories = '';
  
  let falconName = '';
  let falconPhoto = '';
  let falconComics ='' ;
  let falconSeries = '';
  let falconStories = '';
  
  //API Responses
  fetch('/characters')
    .then((resp) => resp.json())
    .then((data) => {
    console.group('%cResponse from /characters', 'color: #F037A5; font-size: large');
    console.log(data);
    
    data.forEach(function(c){
      let name = c.data[0].name;
      let photo = c.data[0].thumbnail.path + '.' + c.data[0].thumbnail.extension;
      let description = c.data[0].description
      let appears = '';
      let wrapper = document.createElement('div');
      wrapper.setAttribute('class','character-wrapper');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      h2.innerHTML= name;
      wrapper.append(h2);
      let img = document.createElement('img');
      img.setAttribute('src', photo);
      img.setAttribute('class', 'character-photo');
      wrapper.append(img);
      document.getElementById('character1').append(wrapper);
    });
    

    
    falconName=data[1].data[0].name;
    falconPhoto = data[1].data[0].thumbnail.path + '.' + data[0].data[0].thumbnail.extension;
    let falconComics = data[1].data[0].comics.available;
    let falconSeries = data[1].data[0].series.available;
    let falconStories = data[1].data[0].stories.available;
    
    
    
    let h22 = document.createElement('h2');
    h22.innerHTML= falconName;
    document.getElementById('character2').append(h22);
    let img2 = document.createElement('img');
    img2.setAttribute('src', falconPhoto);
    img2.setAttribute('id', 'groot-photo');
    document.getElementById('character2').append(img2);


    
    console.groupEnd();
    // return(data);
    
    
  
  // chart
    
    let chartHead = document.createElement('h2');
    chartHead.innerHTML= 'How do these well known sidekicks compare?';
    document.getElementById('chart-head').append(chartHead);
    
    
  var ctx = document.getElementById("myChart").getContext('2d');
    Chart.defaults.global.defaultFontFamily = 'Raleway';
    Chart.defaults.global.defaultFontColor = '#cc4224';
     Chart.defaults.global.defaultFontStyle = 'bold';
  var myChart = new Chart(ctx, {
      type: 'bar',
  
      data: {
      labels: ["Comics", "Series", "Stories"],
      datasets: [
          {
              label: "Groot",
              backgroundColor: "#F3D403",
              data: [data[0].data[0].comics.available, data[0].data[0].series.available, data[0].data[0].stories.available]
          },
          {
              label: falconName,
              backgroundColor: "#2A75B3",
              data: [falconComics, falconSeries, falconStories]
          },
        {
              label: "Wong",
              backgroundColor: "#cc4224",
              data: [data[2].data[0].comics.available, data[2].data[0].series.available, data[2].data[0].stories.available]
          },
        {
              label: "Bucky",
              backgroundColor: "#ffffff",
              data: [data[3].data[0].comics.available, data[3].data[0].series.available, data[3].data[0].stories.available]
          }
          
      ]
  }

    ,
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
  });


  
  

});