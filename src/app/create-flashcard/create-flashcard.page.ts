import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-flashcard',
  templateUrl: './create-flashcard.page.html',
  styleUrls: ['./create-flashcard.page.scss'],
})
export class CreateFlashcardPage implements OnInit {

  frontText
  backText

  cardObj

  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }
  async dismiss() {

    await this.modalCtrl.dismiss(this.cardObj)
  }

  addCard(){
    this.cardObj = ({
      itemQuestion:this.frontText,
      itemAnswer:this.backText
    })

    this.dismiss()
  }

}

