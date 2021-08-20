
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss'],
})
export class EditButtonComponent implements OnInit {
  @Output() openModal = new EventEmitter();
  public showModal(event: MouseEvent) {
    event.stopPropagation();
    this.editModal = !this.editModal;
    this.openModal.emit();
  }

  editModal: Boolean;
  constructor() {
    this.editModal = false;
  }

  ngOnInit(): void {}
  @HostListener('document:click')
  public clickOutside() {
    
    if (this.editModal) {
      this.openModal.emit();
      this.editModal = false;
    }
  }
}
