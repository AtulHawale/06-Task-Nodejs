import { Body, Controller, Get, Post } from '@nestjs/common';
import { json } from 'stream/consumers';

interface Movie {
    id: number;
    title: string;
    rating: number;
    director?: string;
  }

@Controller('/api/v1/movies')
export class MovieController {
    movies: Movie[] = [];

    constructor() {
      this.movies.push({ title: 'IronMan', id: 24, rating: 4.1 });
      this.movies.push({ title: 'CasinoRoyal', id: 41, rating: 4.7 });
      this.movies.push({ title: 'Ranjhanaa', id: 71, rating: 3.7 });
      this.movies.push({ title: 'The Departed', id: 127, rating: 4.4 });
    }

    
  
    @Get()
    getAllMovies(): Array<Movie> {
      return this.movies;
    }


    @Post()
    saveMovie(@Body() m: Movie): Movie {
      console.log("Saving Movie"+JSON.stringify(m));
      this.movies.push(m);
      return m;
    }
  }

