import { Service } from '@angular/core';

export interface TaskItem{
    id:number;
    name:string;
    description:string;
    priority:string
    completed:boolean;
    deadline:string;
    category:string;
}

@Service()

export class Task{
    private tasks:TaskItem[]=[
        {
      id: 1,
      name: "Выучить ангуляр",
      description:"Выучить ангуляр",
      priority: "High",
      deadline: "02.03",
      completed: false,
      category:"Дома"
    },
     {
      id: 2,
      name: "Create component",
      description:"Create comp",
      priority: "Medium",
      deadline: "03.03",
      completed: true,
      category:"practice"
    },
    {
      id: 3,
      name: "practice in binding",
      description:"Practice",
      priority: "Low",
      deadline: "04.03",
      completed: false,
      category:"practice"
    },
    {
      id: 4,
      name: "Do homework",
      description:"Practice",
      priority: "High",
      deadline: "05.03",
      completed: false,
      category:"Дома"
    },
    {
      id: 5,
      name: "Rest",
      description:"Rest",
      priority: "High",
      deadline: "05.03",
      completed: true,
      category:"Дома"
    },
    {
      id: 6,
      name: "Sleep",
      description:"Sleep",
      priority: "High",
      deadline: "05.03",
      completed: true,
      category:"Дома"
    },
    {
      id: 7,
      name: "Wake up",
      description:"wake up",
      priority: "High",
      deadline: "05.03",
      completed: true,
      category:"Дома"
    },
    {
      id: 8,
      name: "Nothing",
      description:"Nothing",
      priority: "High",
      deadline: "05.03",
      completed: true,
      category:"Дома"
    }
    ];

    getTask(): TaskItem[]{
        return this.tasks;
    }
    getTaskById(id:number):TaskItem | undefined{
        return this.tasks.find(Task => Task.id ===id);
    }

    toggleCompleted(task:TaskItem):void{
        task.completed = !task.completed;
    }
    deleteTask(id:number):void{
        this.tasks = this.tasks.filter(Task => Task.id !== id);
    }
    getTotalCount():number{
        return this.tasks.length;
    }
    getCompletedCount():number{
        return this.tasks.filter(Task => Task.completed).length
    }
    getActiveCount():number{
        return this.tasks.filter(Task => !Task.completed).length
    }
    getHighPriorityTask():number{
         return this.tasks.filter(task => task.priority === 'High').length;
    }
}