import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'shop-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color: string;
  @Input() text: string;
  @Output() btnClick = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.setColor();
  }

  onClick(): void {
    this.btnClick.emit();
  }

  private setColor() {
    if ((['Log In', 'Log Out']).includes(this.text)) {
      this.color = 'gray';
      return;
    }

    this.color = '#33ff33';
  }
}
