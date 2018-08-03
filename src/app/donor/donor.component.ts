import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit{
  srcId:number;
  info:string;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {

  this.route.params.subscribe(param =>{
    this.srcId = param['id'];
    this.info = 'You will need to register to access this link';
    if(this.srcId >10){
      this.info = 'Platinum Donor';
    }
    if(this.srcId <10){
      this.router.navigate(['/details',this.info]);
    }
  })
}
}
