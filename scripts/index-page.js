let commentArray = [
    {
        name: 'Connor Waltson',
        date: '02/17/2021',
        comment:'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
    },
    {
        name: 'Emilie Beach',
        date: '01/09/2021',
        comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
    },
    {
        name: 'Miles Acosta',
        date: '12/20/2020',
        comment:`I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.`, 
    }

];

function loadComments(){
   
let container = document.querySelector('.comment-container');
container.innerHTML = '';
for( let i = 0; i < commentArray.length; i++){

let commentsData = commentArray[i];

 let outerDiv = document.createElement('div');
outerDiv.classList.add('comment-wrap');
container.appendChild(outerDiv);

let avatarDiv = document.createElement('div');
avatarDiv.classList.add('avatar');
outerDiv.appendChild(avatarDiv);

let innerDiv = document.createElement('div');
innerDiv.classList.add('inner-div');
outerDiv.appendChild(innerDiv);

let innerInnerDiv = document.createElement('div');
innerInnerDiv.classList.add('inner-inner-div');
innerDiv.appendChild(innerInnerDiv);




//paragraphs//
let nameParagraph = document.createElement('p');
nameParagraph.classList.add('name-p');
nameParagraph.textContent = commentsData.name;
innerInnerDiv.appendChild(nameParagraph);

let dateParagraph = document.createElement('p');
dateParagraph.classList.add('date-p');
dateParagraph.textContent = commentsData.date;
innerInnerDiv.appendChild(dateParagraph);

let commentParagraph = document.createElement('p');
commentParagraph.classList.add('comment-p');
commentParagraph.textContent = commentsData.comment;
innerDiv.appendChild(commentParagraph);


};
};    



function clearInput (){
    document.querySelector('#user-name').value = '';
    document.querySelector('#comment-area').value = '';
};

function loadAnyComments() {
 
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();

     let container = document.querySelector('.comment-container');
     let commentArea =   document.querySelector('#comment-area').value;
     let userName =   document.querySelector('#user-name').value;
     let todaysDate = new Date();
     let today = todaysDate.toLocaleDateString();

      //comment object //
     let newComment = {
        name: userName,
        date: today,
        comment: commentArea
     };

       commentArray.unshift(newComment);
       
      clearInput(); 
      //divsAgain//

      let outerDivTwo = document.createElement('div');
     outerDivTwo.classList.add('comment-wrap');
     container.appendChild(outerDivTwo);
     container.insertBefore(outerDivTwo, container.firstChild);
     
     let avatarDivTwo = document.createElement('div');
     avatarDivTwo.classList.add('avatar');
     outerDivTwo.appendChild(avatarDivTwo);
     
     let innerDivTwo = document.createElement('div');
     innerDivTwo.classList.add('inner-div');
     outerDivTwo.appendChild(innerDivTwo);

     let innerInnerDivTwo = document.createElement('div');
     innerInnerDivTwo.classList.add('inner-inner-div');
     innerDivTwo.appendChild(innerInnerDivTwo);
     
     let nameParagraphTwo = document.createElement('p');
     nameParagraphTwo.classList.add('name-p');
     nameParagraphTwo.textContent = newComment.name;
     innerInnerDivTwo.appendChild(nameParagraphTwo);
     
     let dateParagraphTwo = document.createElement('p');
     dateParagraphTwo.classList.add('date-p');
     dateParagraphTwo.textContent = newComment.date;
     innerInnerDivTwo.appendChild(dateParagraphTwo);
     
     let commentParagraphTwo = document.createElement('p');
     commentParagraphTwo.classList.add('comment-p');
     commentParagraphTwo.textContent = newComment.comment;
     innerDivTwo.appendChild(commentParagraphTwo);
        
    });
    
     clearInput()
     loadComments();
    };
    
loadAnyComments();



