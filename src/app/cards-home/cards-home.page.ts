import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CreateFlashcardPage } from '../create-flashcard/create-flashcard.page';
import { FlashcardService } from '../flashcard.service';

@Component({
  selector: 'app-cards-home',
  templateUrl: './cards-home.page.html',
  styleUrls: ['./cards-home.page.scss'],
})
export class CardsHomePage implements OnInit {
  questions = []
  constructor(public modalctrl:ModalController, private route: Router, public flashcardService:FlashcardService) { 
    this.getllAllCard()
  }
  
  async addCard() {
    const modal = await this.modalctrl.create({
      component: CreateFlashcardPage
    })

    modal.onDidDismiss().then(newcardObj =>{
      this.getllAllCard()
      //console.log(newcardObj.data);

     // if(newcardObj.data === undefined){
     // }

     // else{
     //   this.questions.push(newcardObj.data)
     // }

    })

    return await modal.present()

  }

  getllAllCard(){
    this.questions = this.flashcardService.getAllCards()
    //console.log(this.flashcardService.getAllCards())
  }


  delete(key){
    this.flashcardService.deleteCard(key)
    this.getllAllCard()
  }

  noInput(){
    return this.questions === undefined || this.questions === null;
  }


  ngOnInit() {
  }

}
