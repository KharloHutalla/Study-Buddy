import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {
  @Input() task;
  categories= ['School' , 'Personal', 'Home']

  taskName
  taskDate 
  taskPriority
  taskCategory

  taskObject
  constructor(public modalCtlr:ModalController, public todoService:TodoService) { }

  ngOnInit() {
    this.taskName = this.task.value.itemName
    this.taskDate = this.task.value.itemDate
    this.taskPriority = this.task.value.itemPriority
    this.taskCategory = this.task.value.itemCategory
    
    console.log(this.task)
  }
  selectedCategory(index){
    this.taskCategory = this.categories[index]
  }
  async dismis(){
    await this.modalCtlr.dismiss()
  }

  async update(){
    this.taskObject = ({itemName:this.taskName, 
                        itemDueDate:this.taskDate, 
                        itemPriority:this.taskPriority, 
                        itemCategory:this.taskCategory})
    let uid = this.task.key
    await this.todoService.updateTask(uid, this.taskObject)
    
    this.dismis()
  }




}
