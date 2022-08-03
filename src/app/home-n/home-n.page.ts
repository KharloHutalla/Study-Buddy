import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { StorageItem } from '../shared/storage-item';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home-n',
  templateUrl: 'home-n.page.html',
  styleUrls: ['home-n.page.scss'],
})
export class HomeNPage implements OnInit {
  list: StorageItem[];
  subscription: any;
  constructor(private storage: Storage, private router: Router,
    private platform: Platform) { }
  ngOnInit(): void {
    this.router.events.subscribe(async (e: any) => {
      if (e instanceof NavigationEnd) {
        this.list = await this.storage.get('notes') as StorageItem[];
        console.log(this.list);
      }
    });
  }
  isEmpty() {
    return this.list === undefined || this.list === null;
  }

  trackElement(item) {
    return item.key;
  }
  async updateItem(item) {
    let it = this.list.find((element) => {
      return element === item;
    });
    this.router.navigate(['/edit-note'], {state: {obj: item}});
    
  }

}
