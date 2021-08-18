import { Component, OnInit } from '@angular/core';
import {Lesson} from "../../Lesson"
import {LESSONS} from "../../mock-lessons"

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  lessons: Lesson[] = LESSONS

  constructor() { }

  ngOnInit(): void {
  }

}
