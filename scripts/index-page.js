
const comment = bandSiteApi.getComments()

function loadComments(){
    let container = document.querySelector('.comment-container');
    container.innerHTML = '';
    
    //geting comment from API//
        bandSiteApi.getComments().then(response => {
            response.forEach(comment => {
              

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
nameParagraph.textContent = comment.name;
innerInnerDiv.appendChild(nameParagraph);


const commentDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(comment.timestamp);
 
let dateParagraph = document.createElement('p');
dateParagraph.classList.add('date-p');
dateParagraph.textContent = commentDate;
innerInnerDiv.appendChild(dateParagraph);

let commentParagraph = document.createElement('p');
commentParagraph.classList.add('comment-p');
commentParagraph.textContent = comment.comment;
innerDiv.appendChild(commentParagraph);
                           
            });
        }) .catch(error => console.error('error loading comments', error));
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
     
     if (!userName || !commentArea) {
        console.error('User name and comment must not be empty.')
        alert('User name and comment must not be empty.');
        return;
    }
   
      //comment object //
      const commentResponse = bandSiteApi.postComment({name: userName,comment: commentArea});
      console.log(commentResponse)
     let newComment = {
        name: userName,
        comment: commentArea
     }; 
       
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
     dateParagraphTwo.textContent = newComment.timestamp;
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





