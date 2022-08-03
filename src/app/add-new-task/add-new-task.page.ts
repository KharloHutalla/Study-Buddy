import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';
import { IonicStorageModule } from '@ionic/storage-angular';
@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories= ['School' , 'Personal', 'Home']

  taskName
  taskDate
  taskPriority
  taskCategory

  taskObject
  constructor(public modalCtrl:ModalController, public todoService:TodoService) { }

  ngOnInit() {
  }
  async dismiss(){
      await this.modalCtrl.dismiss(this.taskObject)
    
  }

  selectedCategory(index){
    this.taskCategory = this.categories[index]
  }

  async addTask(){
    this.taskObject = ({itemName:this.taskName, 
                          itemDueDate:this.taskDate, 
                          itemPriority:this.taskPriority, 
                          itemCategory:this.taskCategory})
    let uid = this.taskName + "hi"
    
    if(uid){
      await this.todoService.addTask(uid,this.taskObject)
    }else{
      console.log("cant add task")
    }
   

    
 
    this.dismiss()
  }
}
