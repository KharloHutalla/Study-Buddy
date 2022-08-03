import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CreateFlashcardPage } from '../create-flashcard/create-flashcard.page';

@Component({
  selector: 'app-cards-home',
  templateUrl: './cards-home.page.html',
  styleUrls: ['./cards-home.page.scss'],
})
export class CardsHomePage implements OnInit {
  questions = []
  constructor(public modalctrl:ModalController, private route: Router, public alertController: AlertController) { }
  
  async addCard() {
    const modal = await this.modalctrl.create({
      component: CreateFlashcardPage
    })

    modal.onDidDismiss().then(newcardObj =>{
      console.log(newcardObj.data);

      if(newcardObj.data === undefined){
      }

      else{
        this.questions.push(newcardObj.data)
      }
    })

    return await modal.present()

  }

  delete(index){
    this.questions.splice(index,1)
  }

  noInput(){
    return this.questions === undefined || this.questions === null;
  }


  ngOnInit() {
  }

}
