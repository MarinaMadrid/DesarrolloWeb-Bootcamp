import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secundaria',
  templateUrl: './secundaria.component.html',
  styleUrls: ['./secundaria.component.css']
})

export class SecundariaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
