import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contactor',
  templateUrl: './contactor.component.html',
  styleUrls: ['./contactor.component.scss']
})
export class ContactorComponent implements OnInit {
  value: number = 0;
  @Input() total: number = 0;
  finally: boolean = false;

  decrement() {
    if (this.value > 0 && this.value <= this.total) {
      this.value--;
    } else {
      this.value = 0;
    }
    this.finally = false;
  }

  increment() {
    if (this.value >= 0 && this.value < this.total) {
      this.value++;
    }
    if (this.value === this.total) {
      this.finally = true;
    } else {
      this.finally = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
