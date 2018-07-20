import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {
  moviesList = [{
    title : "Nine Inch Nails Live",
    imagePath : "https://image.tmdb.org/t/p/w600_and_h900_bestv2/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg"
  },
  {
    title : "Nine Inch Live",
    imagePath : "https://image.tmdb.org/t/p/w600_and_h900_bestv2/28mjEQ5bByHK3o1TnL4jsFGRb90.jpg"
  },
  {
    title : "Nine Nails Live",
    imagePath : "https://image.tmdb.org/t/p/w600_and_h900_bestv2/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg"
  },
  {
    title : "Inch Nails Live",
    imagePath : "https://image.tmdb.org/t/p/w600_and_h900_bestv2/28mjEQ5bByHK3o1TnL4jsFGRb90.jpg"
  },
  {
    title : "Nine Inch Nails",
    imagePath : "https://image.tmdb.org/t/p/w600_and_h900_bestv2/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg"
  },
  {
    title : "Nine Live",
    imagePath : "https://image.tmdb.org/t/p/w600_and_h900_bestv2/28mjEQ5bByHK3o1TnL4jsFGRb90.jpg"
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

}
