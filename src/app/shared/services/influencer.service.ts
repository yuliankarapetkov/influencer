import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Influencer } from './../models/influencer.interface';

const INFLUENCER_API: string = 'http://localhost:3000/influencers';

@Injectable()
export class InfluencerService {
  constructor(private http: Http) { }

  getInfluencer(id: number): Observable<Influencer> {
    return this.http
      .get(`${INFLUENCER_API}/${id}?_expand=category`)
      .map((response: Response) => response.json());
  }

  getInfluencers(): Observable<Influencer[]> {
    return this.http
      .get(`${INFLUENCER_API}?_expand=category`)
      .map((response: Response) => response.json());
  }

  createInfluencer(influencer: Influencer): Observable<Influencer> {
    return this.http
      .post(INFLUENCER_API, influencer)
      .map((response: Response) => response.json());
  }

  updateInfluencer(influencer: Influencer): Observable<Influencer> {
    return this.http
      .put(`${INFLUENCER_API}/${influencer.id}`, influencer)
      .map((response: Response) => response.json());
  }

  removeInfluencer(influencer: Influencer): Observable<Influencer> {
    return this.http
      .delete(`${INFLUENCER_API}/${influencer.id}`)
      .map((response: Response) => response.json());
  }
}