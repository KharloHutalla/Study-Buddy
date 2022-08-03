import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TodoService } from '../todo.service';
import { IonicStorageModule } from '@ionic/storage-angular';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})
export class ToDoPage implements OnInit {
  todoList =[]
  
  today: number= Date.now()
  constructor(public modalCtrl:ModalController, private route: Router,public alertController: AlertController, public todoService: TodoService) {
    this.getAllTask()
   }
  
  async addTask(){
    const modal = await this.modalCtrl.create({
     component: AddNewTaskPage
    })

    modal.onDidDismiss().then(newtaskObj =>{
      this.getAllTask()
     // console.log(newtaskObj.data);
    //  if(newtaskObj.data === undefined){
        
   //   }
   //   else{
    //    this.todoList.push(newtaskObj.data)
   //   }
      
    })
    return await modal.present()
  }

  getAllTask(){
    this.todoList =this.todoService.getAllTasks()

    //console.log(this.todoService.getAllTasks())
  }

 async delete(key){
    const alert = await this.alertController.create({
      header: 'Greate Job!',
      subHeader: 'Your task has been completed.',
      message: 'On to the next task.',
      buttons: ['OK']
    });
    await alert.present();
    //console.log(key)
    this.todoService.deleteTask(key)
    this.getAllTask()
    //this.todoList.splice(index,1)
  }

  async complete(index){

  }

  home(){
    this.route.navigate(['/home'])
  }
  ngOnInit() {
  }

}
