import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { element } from 'protractor';
import { FlashcardService } from '../flashcard.service';

@Component({
  selector: 'app-create-flashcard',
  templateUrl: './create-flashcard.page.html',
  styleUrls: ['./create-flashcard.page.scss'],
})
export class CreateFlashcardPage implements OnInit {

  frontText
  backText

  cardObj

  constructor(public modalCtrl:ModalController ,public flashcardService: FlashcardService) { }

  ngOnInit() {
  }
  async dismiss() {
    if(this.cardObj){
      await this.modalCtrl.dismiss(this.cardObj)
    }else{
      await this.modalCtrl.dismiss()
    }

    
  }

  async addCard(){
    this.cardObj = ({
      itemQuestion:this.frontText,
      itemAnswer:this.backText
    })
    
      this.dismiss()
    }
    
  }


 /**let uid = this.frontText + this.backText

    if(uid){
      await this.flashcardService.addCard(uid, this.cardObj)
    }else{
      console.log("cant add task")
    }*/
