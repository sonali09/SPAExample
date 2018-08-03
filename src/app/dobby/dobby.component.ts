import { Component, OnInit, OnDestroy, destroyPlatform, AfterContentInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dobby',
  templateUrl: './dobby.component.html',
  styleUrls: ['./dobby.component.css']
})
export class DobbyComponent implements OnInit, OnDestroy, AfterContentInit, OnChanges{
  @Input()name;
  constructor() { 
    console.log("Dobby inside constructor");
  }

  ngOnInit() {
    console.log("Dobby inside ng on it");
    console.log("Master gave dobby a name"+this.name);
  }
  ngOnDestroy(){
    console.log('dobby inside on destroyPlatform.');
  }
  ngAfterContentInit(){
    console.log("Dobby inside after content init");
  }
  ngOnChanges(change:SimpleChanges){
    console.log(change);
  }
}
