import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Link} from "../shared/link.model";

@Component({
  selector: 'shop-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() link: Link;
  @Output() onClickLink: EventEmitter<Link> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(link: Link): void {
    this.onClickLink.emit(link);
  }
}
