import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Influencer } from './../models/influencer.interface';

const INFLUENCER_API: string = 'http://localhost:3000/influencers';

@Injectable()
export class InfluencerService {
  constructor(private http: Http) {}

  getInfluencers(): Observable<Influencer[]> {
    return this.http
      .get(INFLUENCER_API)
      .map((response: Response) => response.json());
  }
}