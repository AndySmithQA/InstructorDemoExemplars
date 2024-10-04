import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getAllMovies() {
      this.httpClient.get<Movie[]>('http://localhost:3001/movies')
      .subscribe(data => {
        console.log(data);
      });
  }

  createMovie(movie: Movie) {
    this.httpClient.post<Movie>('http://localhost:3001/movies', movie)
    .subscribe(res =>{
      console.log('Created movie:', res);
    });
  }
}
