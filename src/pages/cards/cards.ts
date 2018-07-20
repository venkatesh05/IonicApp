import { Component, Injector, ViewChild, OnInit  } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

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
export class CardsPage implements OnInit{
  @ViewChild(Slides) slides: Slides;
  public selectedCategory;
  categories: Array<{id: string, name: string}>;
    public showLeftButton: boolean;
    public showRightButton: boolean;
    
  moviesList = [{
    title : "Nine Inch Nails Live dfgdf dgfdg dfg dfg ",
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public injector: Injector) {
    this.categories = [{
      id:"all",
      name:"All"
    },{
      id:"category1",
      name:"Category1"
    },{
      id:"category2",
      name:"Category2"
    },{
      id:"category3",
      name:"Category3"
    }];
    console.log('constructor CardsPage '+JSON.stringify(this.categories));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage '+JSON.stringify(this.categories));
  }

  ngOnInit(){
    this.initializeCategories();
  }


  initializeCategories() {

      // Select it by defaut
      this.selectedCategory = this.categories[0];

      // Check which arrows should be shown
      this.showLeftButton = false;
      this.showRightButton = this.categories.length > 3;
  }

  public filterData(categoryId: number): void {
      // Handle what to do when a category is selected
  }

  // Method executed when the slides are changed
  public slideChanged(): void {
      let currentIndex = this.slides.getActiveIndex();
      this.showLeftButton = currentIndex !== 0;
      this.showRightButton = currentIndex !== Math.ceil(this.slides.length() / 3);
  }

  // Method that shows the next slide
  public slideNext(): void {
      this.slides.slideNext();
  }

  // Method that shows the previous slide
  public slidePrev(): void {
      this.slides.slidePrev();
  }

}
