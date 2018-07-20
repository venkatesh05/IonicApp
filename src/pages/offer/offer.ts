import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OffersService } from '../../services/offers';

@IonicPage()
@Component({
  selector: 'page-offer',
  templateUrl: 'offer.html',
})
export class OfferPage implements OnInit {
  public offersData;
  public offersList;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private offersService: OffersService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferPage');
  }

  ngOnInit() {
    this.loadOffers();
  }

  loadOffers() {
    this.offersService.getOffers()
    .subscribe(
      (data) => {        
        this.offersData = data;
        this.offersList = this.offersData.data;
      },
      error => { console.log("error "+error); } 
    );
  }

}
