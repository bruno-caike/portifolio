import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
  styleUrls: ['./card-experience.component.scss']
})
export class CardExperienceComponent implements OnInit {
  @Input() title: string = '';
  @Input() content: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
