import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() title: string;
  @Input() optionsArray: string[];

  options: boolean;
  currentOption: string;
  constructor() {
   
    this.title = '';
    this.optionsArray = ['Все'];
    this.currentOption = this.optionsArray[0];
    this.options = false;
  }

  public changeOption(item: string, event: MouseEvent) {
    event.stopPropagation();
    if (item !== this.currentOption) {
      this.currentOption = item;
      this.options = false;
    }
  }
  public showOptionsOnClick(event: MouseEvent) {
    event.stopPropagation();
    this.options = !this.options;
  }

  @HostListener('document:click')
  public clickOutside() {
    this.options = false;
  }

  ngOnInit(): void {
    this.optionsArray = ["Все",...this.optionsArray]
  }
}
