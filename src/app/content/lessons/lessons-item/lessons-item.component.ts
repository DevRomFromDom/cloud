import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from 'src/app/Lesson';

@Component({
  selector: 'app-lessons-item',
  templateUrl: './lessons-item.component.html',
  styleUrls: ['./lessons-item.component.scss'],
})
export class LessonsItemComponent implements OnInit {
  @Input() lesson: Lesson;

  editModalView: Boolean;
  showModal(event: Event) {
    this.editModalView = ! this.editModalView;
  }
  constructor() {
    this.editModalView = false;
    this.lesson = {
      date: '',
      name: '',
      students: 0,
      trainer: '',
      progress: 0,
    };
  }
  ngOnInit(): void {}
}
