import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionsheetPage } from '../actionsheet/actionsheet';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  title: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.title = ['Action Sheet','Alerts'];

    this.items = [];
    for (let i = 0; i < this.title.length; i++) {
      this.items.push({
        title: this.title[i],
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    if(item.title == "Action Sheet"){
      this.navCtrl.push(ActionsheetPage, {
        item: item
      });
    }    
  }
}
