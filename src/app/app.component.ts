import { Component } from '@angular/core';
import { Task } from './Model/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  i:number=1
  tasks:Task[]=[{id:this.i++,description:"Définir les exigences fonctionnelles",completed:false,dateAjout:new Date()},
    {id:this.i++,description:"Définir les exigences non fonctionnelles",completed:false,dateAjout:new Date()},
    {id:this.i++,description:"Concevoir la solution",completed:false,dateAjout:new Date()},
    {id:this.i++,description:"Réaliser la solution",completed:false,dateAjout:new Date()},
    {id:this.i++,description:"Tester la solution",completed:false,dateAjout:new Date()}
  ]
  description:string=""
  terminer(task:Task){
    task.completed=true
  }
  ajouter(){
    console.log(this.description)
    this.tasks.push({id:this.i++,description:this.description,completed:false,dateAjout:new Date()})
    this.description=""
  }
}
