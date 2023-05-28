import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'shop-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick;

  constructor() {
    this.btnClick = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.btnClick.emit();
  }
}
