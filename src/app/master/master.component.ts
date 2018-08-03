import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit, OnChanges{
  show=true;
  name:string;
  constructor() { 

    console.log("constructor called");
  }

  ngOnInit() {
    console.log("ngInit called");
  }

  ngOnChanges(change:SimpleChanges){
    console.log("ng on changes called.");
  }

  changeShow(){
    this.show = !this.show;
  }
  setName(){
    console.log("ng on changes called."+this.name);
  }

}
