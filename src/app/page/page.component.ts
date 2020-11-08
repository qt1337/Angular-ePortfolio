import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Topic} from '../topic';
import {TopicService} from '../topic.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  topics: Topic[];
  public selectedTopic: Topic;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private topicService: TopicService
  ) {
    route.params.subscribe(() => {
      this.getTopic();
    });
  }

  ngOnInit(): void {
  }

  getTopics(): void {
    this.topicService.getTopics().subscribe(topics => this.topics = topics);
  }

  getTopic(): void {
    this.getTopics();
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
