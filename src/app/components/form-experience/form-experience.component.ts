import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-experience',
  templateUrl: './form-experience.component.html',
  styleUrls: ['./form-experience.component.scss']
})


export class FormExperienceComponent implements OnInit {
  experienceForm!: FormGroup;
  finally: boolean = false;
  @Input() experiences: { title: string; content: string; }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.experienceForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required])
    });
  }

  get title() {
    return this.experienceForm.get('title')!;
  }

  get content() {
    return this.experienceForm.get('content')!;
  }

  submit() {
    if (this.experienceForm.invalid) {
      return;
    }
    this.experiences.push({ title: this.title.value, content: this.content.value });
    this.finally = true;
  }

}
