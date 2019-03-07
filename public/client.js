// Globas Variables
/* global Chart */

// client-side js

// Document Ready Function
document.addEventListener("DOMContentLoaded", function(){
  
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
    document.getElementById('intro-section').append(h2);
    let img = document.createElement('img');
    img.setAttribute('src', characterPhoto);
    img.setAttribute('id', 'groot-photo');
    document.getElementById('intro-section').append(img);
    
    let h22 = document.createElement('h2');
    h22.innerHTML= 'Groot- This is a placeholder';
    document.getElementById('intro-section').append(h22);
    let img2 = document.createElement('img');
    img2.setAttribute('src', characterPhoto);
    img2.setAttribute('id', 'groot-photo');
    document.getElementById('intro-section').append(img2);


    
    console.groupEnd();
    // return(data);
    
    
  
  // chart
    
    let chartHead = document.createElement('h2');
    chartHead.innerHTML= 'How do these well known sidekicks compare?';
    document.getElementById('chart-section').append(chartHead);
    
    
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
          },
          {
              label: "Groucho",
              backgroundColor: "green",
              data: [7,2,6]
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