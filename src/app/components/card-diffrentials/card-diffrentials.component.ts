import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-diffrentials',
  templateUrl: './card-diffrentials.component.html',
  styleUrls: ['./card-diffrentials.component.scss']
})
export class CardDiffrentialsComponent implements OnInit {
  @Input() name: string = '';
  @Input() dark: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
