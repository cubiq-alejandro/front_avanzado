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
        await fetch(`${Api.API_URL}/tasks/${id}`,{
            method: 'DELETE'
        }).then( item => {
           callback && callback()
        } , error => {
            errorCallback && errorCallback(error.message)
        })
    }

    async create(task,callback){
        await fetch(`${Api.API_URL}/tasks`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then( response => response.json())
        .then( response => {
            return {
                id: response.response.$loki,
                created: response.response.meta.created,
                title: response.response.title,
                responsible: response.response.responsible,
                description: response.response.description,
                priority: response.response.priority
            }
        })
        .then( response => {
            callback && callback(response)
        } )

    }
}

export default Api