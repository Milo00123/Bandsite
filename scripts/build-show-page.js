
const shows = bandSiteApi.getShows() 



function showSection(){
const section = document.querySelector('section');

let showH2 = document.createElement('h2');
showH2.innerHTML = 'Shows';
section.appendChild(showH2);

let wrapShowDiv = document.createElement('div');
wrapShowDiv.classList.add('wrap-show--div')
section.appendChild(wrapShowDiv);

let counter = 0;
bandSiteApi.getShows().then(response =>{
    response.forEach(show =>{
        
 

    // DIVS//


    let outerDiv = document.createElement('div');
        outerDiv.classList.add('show-blocks');
        wrapShowDiv.appendChild(outerDiv);
    

    let innerDiv = document.createElement('div');
        innerDiv.classList.add('inner-blocks');
        outerDiv.appendChild(innerDiv);

    let innerInnerDiv = document.createElement('div');
        innerInnerDiv.classList.add('inner-inner-block');
        innerDiv.appendChild(innerInnerDiv);

    let venueDiv = document.createElement('div');
        venueDiv.classList.add('inner-inner-block');
        innerDiv.appendChild(venueDiv);
    
    let locationDiv = document.createElement('div');
        locationDiv.classList.add('inner-inner-block')
        innerDiv.appendChild(locationDiv)

     let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('inner-inner-block')
 
    
        //SHOW CONTENT//

        let dateSpan = document.createElement('span');
        dateSpan.textContent = 'DATE';
        innerInnerDiv.appendChild(dateSpan);
        

        //timestamp to date//
        const newShowdate = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
          }).format(show.date);

          
         let contentDate = document.createElement('p');
        contentDate.textContent = `${newShowdate}`
        contentDate.classList.add('highlight-date')
        innerInnerDiv.appendChild(contentDate);

        let venueSpan = document.createElement('span');
        venueSpan.textContent = 'VENUE';
        venueDiv.appendChild(venueSpan);

        let contentVenue = document.createElement('p');
        contentVenue.textContent = `${show.place}`
        venueDiv.appendChild(contentVenue);        

        let locationSpan = document.createElement('span');
        locationSpan.textContent = 'LOCATION';
        locationDiv.appendChild(locationSpan);

        let contentLocation = document.createElement('p');
        contentLocation.textContent = `${show.location}`;
        locationDiv.appendChild(contentLocation);    

        let button = document.createElement('button');
        button.textContent = 'BUY TICKETS';
        innerDiv.appendChild(button);

        if (counter > 0) { 
            dateSpan.classList.add('none');
            venueSpan.classList.add('none');
            locationSpan.classList.add('none');
        }
        counter++;



//function to keep the hover//
       let blocks = document.querySelectorAll('.show-blocks');
       let selected = null;
       blocks.forEach(block => {
       block.addEventListener('click',function(){
        if(selected){
            selected.classList.remove('selected');

        }
        block.classList.add('selected');
        selected = block;
    });
});


    });
   
}).catch(error => console.error('error loading shows', error))

      
    

      
};
showSection()
 

