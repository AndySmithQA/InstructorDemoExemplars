import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieService } from './services/movie.service';
import { Movie } from './models/movie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private movieService: MovieService){
    movieService.getAllMovies();

    const movie = new Movie(
      "Forrest Gump",
      "Drama",
      "1994",
      "Robert Zemeckis",
      8.8,
      142
    );

    movieService.createMovie(movie);
  }
  
  title = 'calab';
}
