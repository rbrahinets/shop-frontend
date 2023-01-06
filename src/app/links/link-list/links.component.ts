import {Component, OnInit} from '@angular/core';
import {LinkService} from "../shared/link.service";
import {Link} from "../shared/link.model";

@Component({
  selector: 'shop-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  links: Link[] = [];

  constructor(
    private linkService: LinkService
  ) {
  }

  ngOnInit(): void {
    this.linkService.getLinks().subscribe(
      (links) => this.links = links
    );
  }

  click(link: Link): void {
    alert(`Go to ${link.text}`);
  }
}
