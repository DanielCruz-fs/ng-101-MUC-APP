import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
  private data: Hero[] = [
    {
      name: "Aquaman",
      bio: "Is a superhero appearing in American comic books published by DC Comics. Created by Paul Norris and Mort Weisinger.",
      img: "assets/images/aquaman.png",
      release: "1941-11-01",
      home:"DC"
    },
    {
      name: "Batman",
      bio: "Is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger.",
      img: "assets/images/batman.png",
      release: "1939-05-01",
      home:"DC"
    },
    {
      name: "Daredevil",
      bio: "Is a fictional superhero appearing in American comic books published by Marvel Comics. Daredevil was created by writer-editor Stan Lee and artist Bill Everett.",
      img: "assets/images/daredevil.png",
      release: "1964-01-01",
      home: "Marvel"
    },
    {
      name: "Hulk",
      bio: "Is a fictional superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby.",
      img: "assets/images/hulk.png",
      release: "1962-05-01",
      home:"Marvel"
    },
    {
      name: "Green Lantern",
      bio: "Is the name of several superheroes appearing in American comic books published by DC Comics. ",
      img: "assets/images/linterna-verde.png",
      release: "1940-06-01",
      home: "DC"
    },
    {
      name: "Spider-Man",
      bio: "Is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 (August 1962).",
      img: "assets/images/spiderman.png",
      release: "1962-08-01",
      home: "Marvel"
    },
    {
      name: "Wolverine",
      bio: "Is a fictional character appearing in American comic books published by Marvel Comics, mostly in association with the X-Men.",
      img: "assets/images/wolverine.png",
      release: "1974-11-01",
      home: "Marvel"
    }
  ];
  constructor() {
    console.log('heroes services ready to use');      
  }

  getHeroes(): Hero[] {
    return this.data;
  }
}

export interface Hero {
  name: string;
  bio: string;
  img: string;
  release: string;
  home: string;
}