import { Component } from '@angular/core';
import { Platform, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-actionsheet',
  templateUrl: 'actionsheet.html',
})
export class ActionsheetPage {

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public alertCtrl: AlertController
    ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionsheetPage');
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
        title: 'Albums',
        cssClass: 'action-sheets-basic-page',
        buttons: [
          {
            text: 'Delete',
            role: 'destructive',
            icon: !this.platform.is('ios') ? 'trash' : null,
            handler: () => {
              console.log('Delete clicked');
            }
          },
          {
            text: 'Share',
            icon: !this.platform.is('ios') ? 'share' : null,
            handler: () => {
              console.log('Share clicked');
            }
          },
          {
            text: 'Play',
            icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
            handler: () => {
              console.log('Play clicked');
            }
          },
          {
            text: 'Favorite',
            icon: !this.platform.is('ios') ? 'heart-outline' : null,
            handler: () => {
              console.log('Favorite clicked');
            }
          },
          {
            text: 'Cancel',
            role: 'cancel', // will always sort to be on the bottom
            icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  showPromptAlert() {
    let alert = this.alertCtrl.create({
      title: 'Album',
      message : "Enter a name for this new album you're so keep on adding",
      inputs : [{
        name:"name",
        placeholder:"Name"
      }],
      buttons: [{
        text : 'Cancel',
        handler : data => {
          console.log('Cancel clicked');
        }
      },{
        text : 'Save',
        handler : data => {
          console.log('Save clicked');
        }
      }]
    });
    alert.present();
  }

}
