import { Component, OnInit } from '@angular/core';
import {Lesson} from "../../Lesson"
import {LESSONS} from "../../mock-lessons"

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  lessons: Lesson[] = LESSONS
  programms : string[]
  statuses: string[]

  constructor() {
    this.programms = ["Программа 1","Программа 2","Программа 3","Программа 4"]
    this.statuses = ["Статус 1","Статус 2","Статус 3","Статус 4"]
  }

  ngOnInit(): void {
  }

}
