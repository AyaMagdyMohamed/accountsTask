import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import {AccountDetailsPage} from '../account-details/account-details';
@Component({
  selector: 'page-list',
  templateUrl: 'accounts.html'
})
export class accountsPage {
  selectedItem: any;
  icons: string[];
  public items: any []
  visability:boolean = false;
  visability2:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.http.get('http://localhost:8090/accounts/').pipe(
      map(res => res.json())
  ).subscribe(response => {
      console.log('GET Response:', response);
      this.items= response
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].checkBox = false;
      }
   

  });
  
   // this.selectedItem = navParams.get('item');
   
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(AccountDetailsPage, {
      item: item
    });
  }

  select(event, itemsSent){
    event.stopPropagation() ;
    console.log('select',event.currentTarget);
   
    var arr = itemsSent
   //alert(arr[0].checkBox)
    let isChecked=false;
    for (let i = 0; i < arr.length; i++) {
      
      console.log("checkbox1",  arr[i].checked)
      console.log("checkbox",  arr[i].checkBox)
      let test = arr[i].checkBox
      if(test == true){
        isChecked = true;
        this.visability2 = true;
       // this.visability = false;
      }
      // else{
      //    this.visability = true;
      // }
     
    }
    console.log("isChecked",  isChecked )
    if(isChecked == false){
  
     this.visability2 = false;
     this.visability = true ;
    } 
    else if (isChecked == true){
      this.visability2 = true
      this.visability = false ;
    }
   
  }
}
