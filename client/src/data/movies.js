const data = [
  {
    Title: "The Godfather",
    Year: "1972",
    Rated: "R",
    Released: "24 Mar 1972",
    Runtime: "175 min",
    Genre: "Crime, Drama",
    Director: "Francis Ford Coppola",
    Writer:
      "Mario Puzo (screenplay by), Francis Ford Coppola (screenplay by), Mario Puzo (based on the novel by)",
    Actors: "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
    Plot:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    Language: "English, Italian, Latin",
    Country: "USA",
    Awards: "Won 3 Oscars. Another 26 wins & 30 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "9.2/10" },
      { Source: "Rotten Tomatoes", Value: "98%" },
      { Source: "Metacritic", Value: "100/100" }
    ],
    Metascore: "100",
    imdbRating: "9.2",
    imdbVotes: "1,509,742",
    imdbID: "tt0068646",
    Type: "movie",
    DVD: "09 Oct 2001",
    BoxOffice: "N/A",
    Production: "Paramount Pictures",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Star Wars: Episode IV - A New Hope",
    Year: "1977",
    Rated: "PG",
    Released: "25 May 1977",
    Runtime: "121 min",
    Genre: "Action, Adventure, Fantasy, Sci-Fi",
    Director: "George Lucas",
    Writer: "George Lucas",
    Actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
    Plot:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    Language: "English",
    Country: "USA",
    Awards: "Won 6 Oscars. Another 52 wins & 28 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.6/10" },
      { Source: "Rotten Tomatoes", Value: "93%" },
      { Source: "Metacritic", Value: "90/100" }
    ],
    Metascore: "90",
    imdbRating: "8.6",
    imdbVotes: "1,170,893",
    imdbID: "tt0076759",
    Type: "movie",
    DVD: "21 Sep 2004",
    BoxOffice: "N/A",
    Production: "20th Century Fox",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    Rated: "PG-13",
    Released: "19 Dec 2001",
    Runtime: "178 min",
    Genre: "Adventure, Drama, Fantasy",
    Director: "Peter Jackson",
    Writer:
      "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)",
    Actors: "Alan Howard, Noel Appleby, Sean Astin, Sala Baker",
    Plot:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    Language: "English, Sindarin",
    Country: "New Zealand, USA",
    Awards: "Won 4 Oscars. Another 115 wins & 124 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.8/10" },
      { Source: "Rotten Tomatoes", Value: "91%" },
      { Source: "Metacritic", Value: "92/100" }
    ],
    Metascore: "92",
    imdbRating: "8.8",
    imdbVotes: "1,568,706",
    imdbID: "tt0120737",
    Type: "movie",
    DVD: "06 Aug 2002",
    BoxOffice: "$314,000,000",
    Production: "New Line Cinema",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Terminator 2: Judgment Day",
    Year: "1991",
    Rated: "R",
    Released: "03 Jul 1991",
    Runtime: "137 min",
    Genre: "Action, Sci-Fi",
    Director: "James Cameron",
    Writer: "James Cameron, William Wisher",
    Actors:
      "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong, Robert Patrick",
    Plot:
      "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
    Language: "English, Spanish",
    Country: "USA",
    Awards: "Won 4 Oscars. Another 32 wins & 33 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.5/10" },
      { Source: "Rotten Tomatoes", Value: "93%" },
      { Source: "Metacritic", Value: "75/100" }
    ],
    Metascore: "75",
    imdbRating: "8.5",
    imdbVotes: "948,480",
    imdbID: "tt0103064",
    Type: "movie",
    DVD: "31 Mar 1998",
    BoxOffice: "$198,116,802",
    Production: "TriStar Pictures",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Dumb and Dumber",
    Year: "1994",
    Rated: "PG-13",
    Released: "16 Dec 1994",
    Runtime: "107 min",
    Genre: "Comedy",
    Director: "Peter Farrelly, Bobby Farrelly",
    Writer: "Peter Farrelly, Bennett Yellin, Bobby Farrelly",
    Actors: "Jim Carrey, Jeff Daniels, Lauren Holly, Mike Starr",
    Plot:
      "After a woman leaves a briefcase at the airport terminal, a dumb limo driver and his dumber friend set out on a hilarious cross-country road trip to Aspen, to return the briefcase to its owner.",
    Language: "English, Swedish, German",
    Country: "USA",
    Awards: "5 wins & 3 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.3/10" },
      { Source: "Rotten Tomatoes", Value: "67%" },
      { Source: "Metacritic", Value: "41/100" }
    ],
    Metascore: "41",
    imdbRating: "7.3",
    imdbVotes: "337,983",
    imdbID: "tt0109686",
    Type: "movie",
    DVD: "20 May 1997",
    BoxOffice: "N/A",
    Production: "Warner Bros",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Tombstone",
    Year: "1993",
    Rated: "R",
    Released: "25 Dec 1993",
    Runtime: "130 min",
    Genre: "Action, Biography, Drama, History, Western",
    Director: "George P. Cosmatos, Kevin Jarre",
    Writer: "Kevin Jarre",
    Actors: "Kurt Russell, Val Kilmer, Sam Elliott, Bill Paxton",
    Plot:
      "A successful lawman's plans to retire anonymously in Tombstone, Arizona, are disrupted by the kind of outlaws he was famous for eliminating.",
    Language: "English, Latin",
    Country: "USA",
    Awards: "2 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODRkYzA4MGItODE2MC00ZjkwLWI2NDEtYzU1NzFiZGU1YzA0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.8/10" },
      { Source: "Rotten Tomatoes", Value: "73%" },
      { Source: "Metacritic", Value: "50/100" }
    ],
    Metascore: "50",
    imdbRating: "7.8",
    imdbVotes: "119,120",
    imdbID: "tt0108358",
    Type: "movie",
    DVD: "02 Dec 1997",
    BoxOffice: "N/A",
    Production: "Buena Vista",
    Website: "N/A",
    Response: "True"
  }
];

export default data;
