import openSocket from 'socket.io-client'

class Socket {

    constructor(){
        this.socket = openSocket(`http://192.168.2.69:9000`,{ forceNew: true })
    }

    async getAll(callback){
        await this.socket.on(`tasks_emit`, data => {
            
            let tasks = data.map( element => {
                return {
                    id: element.$loki,
                    created: element.meta.created,
                    title: element.title,
                    responsible: element.responsible,
                    description: element.description,
                    priority: element.priority
                }
            } )

            callback && callback(tasks)

        })
    }

    async create(task){
        this.socket.emit(`task_create`,task)
    }

    async delete(id){
        this.socket.emit(`task_delete`,id)
    }

}

export default Socket