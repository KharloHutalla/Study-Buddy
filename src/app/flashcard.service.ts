import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private _storage: Storage;

  constructor(private storage1: Storage) { 
    this.init()
  }

  addCard(key, value){
    this._storage?.set(key, value)
  }

  getAllCards(){
    let cards: any=[]
    this._storage?.forEach((key, value, index) => {
      cards.push({'key':value, 'value':key})
        console.log(value);
      });
      return cards
  }

  deleteCard(key){
    this._storage?.remove(key)
  }

  async init(){
    const storage1 = await this.storage1.create()
    this._storage= storage1;

   }
 
}
