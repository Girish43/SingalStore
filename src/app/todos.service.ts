import { Injectable } from "@angular/core";
import { TODOS } from "./mock-data";
import { Todo } from "./todo.model";

@Injectable({providedIn:"root"})
export class TodosService{
    async getTodos(){
        await sleep(1000)
        return TODOS;
    }
    async addTodo(todo:Partial<Todo>):Promise<Todo>
    {
        await sleep(1000);
        return { id:Math.random().toString(36).substr(2,9),
            ...todo
        }as Todo;
    }
    async deleteTodo(id:string)
    {
        await sleep(500)
    }
    async updateTodo(id:string,completed:boolean)
    {
        
await sleep(500)
    }

}
async function sleep(ms:number) {
    return new Promise(resolve=>{setTimeout(resolve,ms)})
    
}