import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public tab!: string;

  constructor(private Location: Location, private router: Router) {
    this.tab = this.Location.path();
    console.log(this.tab);
    this.router.navigateByUrl('x', { skipLocationChange: true });
  }

  ngOnInit(): void {
    // this.tab = 'all';
  }

  // public activeTab(event: string) {
  //   this.tab = event;
  //   console.log(this.tab);
  // }
}
