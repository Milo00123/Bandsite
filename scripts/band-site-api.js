// "api_key": "3c2224b1-281c-4c16-a35d-521389158066"

class BandSiteApi{
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl ='https://project-1-api.herokuapp.com/';
        
    }
     postComment = async(newComment) =>{
        const url = this.baseUrl;
        try{
            const response = await axios.post(this.baseUrl, newComment);
            console.log(response.data);
        } catch (error){
            console.log(error)
        }

        

    }

    getComments = async() =>{
        
    } 

}
