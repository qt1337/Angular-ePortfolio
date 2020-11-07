import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  public topic: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {
    route.params.subscribe(() => {
      this.getTopic();
    });
  }

  ngOnInit(): void {
  }

  getTopic(): void {
    this.topic = this.route.snapshot.paramMap.get('topic');
  }

  goBack(): void {
    this.location.back();
  }
}
