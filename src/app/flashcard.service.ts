import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  constructor(private storage: Storage) { 
    this.init()
  }


  addCard(key, value){
    this.storage.set(key, value)
  }

  getAllCards(){
    let cards: any=[]
    this.storage.forEach((key, value, index) => {
      cards.push({'key':value, 'value':key})
        console.log(value);
      });
      return cards
  }

  deleteCard(key){
    this.storage.remove(key)
  }

  async init(){
    await this.storage.create()
   }
 
}
