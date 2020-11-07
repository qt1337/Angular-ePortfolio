import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Topic} from '../topic';
import {TOPICS} from '../topics';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  topics: Topic[] = TOPICS;
  public selectedTopic: Topic;

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
    const topicName: string = this.route.snapshot.paramMap.get('topic');
    let topic: any;
    for (topic of this.topics) {
      if (topic.name === topicName) {
        this.selectedTopic = topic;
      }
    }
  }

  goBack(): void {
    this.location.back();
  }
}
