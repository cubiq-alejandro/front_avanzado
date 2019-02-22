class Api{

    static get API_URL(){
        return 'http://localhost:8080'
    }

    async getAll(){
        return await fetch(`${Api.API_URL}/tasks`)
        .then( response => response.json())
        .then( response => response.response.map( element => {
            return {
                id: element.$loki,
                created: element.meta.created,
                title: element.title,
                responsible: element.responsible,
                description: element.description,
                priority: element.priority
            }
        } ) )
    }

    async delete(id,callback,errorCallback){
        return await fetch(`${Api.API_URL}/tasks/${id}`,{
            method: 'DELETE'
        }).then( item => {
           callback && callback()
        } , error => {
            errorCallback && errorCallback(error.message)
        })
    }
}

export default Api


/*const API_URL = 'http://localhost:8080'

export async function getAll(){

    return await fetch(`${API_URL}/tasks`,{
        method: 'GET'
    }).then( data => data.json())

}*/