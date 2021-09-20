import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tercera',
  templateUrl: './tercera.component.html',
  styleUrls: ['./tercera.component.css']
})
export class TerceraComponent implements OnInit {

  parametro:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => this.parametro = data.param);
  }

}
