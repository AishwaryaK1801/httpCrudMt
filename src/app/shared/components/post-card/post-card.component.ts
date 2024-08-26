import { Component, Input, OnInit } from '@angular/core';
import { Iposts } from '../../models/posts.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  constructor() { }

  @Input() getCard !: Iposts
  ngOnInit(): void {
  }

}
