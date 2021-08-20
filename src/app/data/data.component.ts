import { Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent  {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
 

}

