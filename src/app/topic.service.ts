import {Injectable} from '@angular/core';
import {Topic} from './topic';
import {TOPICS} from './topics';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() {
  }

  getTopics(): Observable<Topic[]> {
    return of(TOPICS);
  }
}
