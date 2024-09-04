import { Component, OnInit } from '@angular/core';
import { Task } from './Model/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  id!:number
  newTask:Task={
    id:0,
    description:"",
    completed:false,
    dateAjout:new Date()
  }
  tasks:Task[]=[{id:1,description:"Définir les exigences fonctionnelles",completed:true},
    {id:2,description:"Définir les exigences non fonctionnelles",completed:false},
    {id:3,description:"Concevoir la solution",completed:false},
    {id:4,description:"Réaliser la solution",completed:false},
    {id:5,description:"Tester la solution",completed:false}
  ]
  modifier:boolean=false
  constructor(){}
  ngOnInit(): void {
    this.addDateAjout()
    console.log(this.tasks)
  }
  addDateAjout(){
    this.tasks.map(el=>{if(el.dateAjout==null){
      el.dateAjout=new Date()}
    })
  }
  terminer(task:Task){
    task.completed=true
  }
  ajouter(){
    this.newTask.id=this.tasks.length+1
    this.tasks.push(this.newTask)
    this.newTask={
      id:0,
      description:"",
      completed:false,
      dateAjout:new Date()
    }
  }
  update(task:Task){
    this.modifier=true
    this.newTask.description=task.description
    this.id=task.id
  }
  modifie(){
    this.tasks.filter(task=> {if(task.id==this.id){
      task.description=this.newTask.description
      task.dateMdification=new Date()
    }})
    this.newTask={
      id:0,
      description:"",
      completed:false,
      dateAjout:new Date()
    }
    this.modifier=false
  }
  supprimer(idT:number){
    console.log(idT)
    let index = this.tasks.findIndex(element=> element.id === idT)
    console.log(index)
    if(index!=-1){
      this.tasks.splice(index,1)
    }
    
  }
}
