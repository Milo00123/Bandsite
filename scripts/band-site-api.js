// "api_key": "3c2224b1-281c-4c16-a35d-521389158066"
const apiKey = "00cc5913-42a5-4d02-ac27-61b27545ca7c";
class BandSiteApi{
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl ='https://project-1-api.herokuapp.com/';
        
    }
     
    postComment = (newComment) => {
        
        if (!newComment.name || !newComment.comment){
            console.error('Name and Comment are REQUIRED.')
            return Promise.reject('Name and Comment are REQUIRED.');   
        }
       return axios.post(`${this.baseUrl}comments?api_key=${this.apiKey}`, newComment)
        .then(response =>{
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
        })
    }
    getComments = () => {
        return axios.get(`${this.baseUrl}comments?api_key=${this.apiKey}`) 
        .then(response =>{
            return response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            

        } ) .catch(error => {
            console.log(error)
        })    
    }
    getShows = () =>{
        return axios.get(`${this.baseUrl}showdates?api_key=${this.apiKey}`)
        .then(show =>{
            return(show.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    }

    
    const bandSiteApi = new BandSiteApi(apiKey);

    



