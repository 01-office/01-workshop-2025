export type Movie = {
  id: number;
  title: string;
  director: string;
  year: number;
  images: string[];
};

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    images: [
      "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
      "https://image.tmdb.org/t/p/w500/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg",
      "https://image.tmdb.org/t/p/w500/aejYp9A5mVsPLljXXlxlUnwP2J6.jpg",
    ],
  },
  {
    id: 2,
    title: "Parasite",
    director: "Bong Joon-ho",
    year: 2019,
    images: [
      "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      "https://image.tmdb.org/t/p/w500/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
      "https://image.tmdb.org/t/p/w500/b0YvQF6UVxZ4SkpWIT2Ik0EYdMZ.jpg",
    ],
  },
  {
    id: 3,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    images: [
      "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
      "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      "https://image.tmdb.org/t/p/w500/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",
    ],
  },
  {
    id: 4,
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    year: 2001,
    images: [
      "https://image.tmdb.org/t/p/w500/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
      "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      "https://image.tmdb.org/t/p/w500/wbeBZWbGF4aC28CXjM8P9K65t0H.jpg",
    ],
  },
  {
    id: 5,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    images: [
      "https://image.tmdb.org/t/p/w500/tTLU7Rz1DzVtbA36TObgGJE0E7E.jpg",
      "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
      "https://image.tmdb.org/t/p/w500/4gO6UqmYuJrDXu0SzVOM3NVLwVo.jpg",
    ],
  },
  {
    id: 6,
    title: "Amélie",
    director: "Jean-Pierre Jeunet",
    year: 2001,
    images: [
      "https://image.tmdb.org/t/p/w500/wnUAcUrMRGPPZUDroLeZhSjLkuu.jpg",
      "https://image.tmdb.org/t/p/w500/lHE2e8mBPMR6C3SQBqGPjKxFiKV.jpg",
      "https://image.tmdb.org/t/p/w500/wkqVqdsdSedxQBPjh6KmSnK4A39.jpg",
    ],
  },
  {
    id: 7,
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    images: [
      "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
      "https://image.tmdb.org/t/p/w500/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg",
      "https://image.tmdb.org/t/p/w500/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
    ],
  },
  {
    id: 8,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    images: [
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "https://image.tmdb.org/t/p/w500/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
      "https://image.tmdb.org/t/p/w500/kP8eAwtPfG6fAwh0O0hEikCf4n6.jpg",
    ],
  },
  {
    id: 9,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    images: [
      "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      "https://image.tmdb.org/t/p/w500/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
      "https://image.tmdb.org/t/p/w500/dlZCmmZvkTWXEnMzQ8P1N0gWyQq.jpg",
    ],
  },
  {
    id: 10,
    title: "Oldboy",
    director: "Park Chan-wook",
    year: 2003,
    images: [
      "https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURTaI3pUc8qo.jpg",
      "https://image.tmdb.org/t/p/w500/yn0OJZ3CAoXJuQNTtFUS1bmnAGG.jpg",
      "https://image.tmdb.org/t/p/w500/kSFgHrELcU1n6DF4VvXSPWulPkd.jpg",
    ],
  },
  {
    id: 11,
    title: "Schindler's List",
    director: "Steven Spielberg",
    year: 1993,
    images: [
      "https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg",
      "https://image.tmdb.org/t/p/w500/uJ8bXw2WKy9WqVnUu7mfNL1rT0b.jpg",
      "https://image.tmdb.org/t/p/w500/vkFQworGWB07psPS0PeqxaQqlbF.jpg",
    ],
  },
  {
    id: 12,
    title: "Your Name",
    director: "Makoto Shinkai",
    year: 2016,
    images: [
      "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
      "https://image.tmdb.org/t/p/w500/2YpG9fXmZcJ49wXSE6phgE4IO6M.jpg",
      "https://image.tmdb.org/t/p/w500/jcOKlBurnkFZbVOlTZP1QyrJx0U.jpg",
    ],
  },
  {
    id: 13,
    title: "Whiplash",
    director: "Damien Chazelle",
    year: 2014,
    images: [
      "https://image.tmdb.org/t/p/w500/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
      "https://image.tmdb.org/t/p/w500/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg",
      "https://image.tmdb.org/t/p/w500/5wFvMyk9d898VLm5SUf1bgiK4SA.jpg",
    ],
  },
  {
    id: 14,
    title: "Fight Club",
    director: "David Fincher",
    year: 1999,
    images: [
      "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
      "https://image.tmdb.org/t/p/w500/j-Lo0GOdFH5OV9grzj6hFnepEUa.jpg",
      "https://image.tmdb.org/t/p/w500/vQ7zlZ1TgkH4UOEbNeMSprS7Q5y.jpg",
    ],
  },
  {
    id: 15,
    title: "La La Land",
    director: "Damien Chazelle",
    year: 2016,
    images: [
      "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
      "https://image.tmdb.org/t/p/w500/frTcbLV9qNIsWQSYGepblqaqIwS.jpg",
      "https://image.tmdb.org/t/p/w500/roi4g6ZvMRxU4bE5vBSni2VIyhT.jpg",
    ],
  },
  {
    id: 16,
    title: "City of God",
    director: "Fernando Meirelles",
    year: 2002,
    images: [
      "https://image.tmdb.org/t/p/w500/4qGqxvKo73YnJEb1ssJQrb0R9tu.jpg",
      "https://image.tmdb.org/t/p/w500/o5fKmqdDWlU5u8bqCp1JyICiN89.jpg",
      "https://image.tmdb.org/t/p/w500/bvV24d6nKsBWHMWAC5zQpS9T1tx.jpg",
    ],
  },
  {
    id: 17,
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    images: [
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      "https://image.tmdb.org/t/p/w500/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
      "https://image.tmdb.org/t/p/w500/jZyDCk6ScF5wrTn3dLxf1b0h3uC.jpg",
    ],
  },
  {
    id: 18,
    title: "Joker",
    director: "Todd Phillips",
    year: 2019,
    images: [
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      "https://image.tmdb.org/t/p/w500/mHjW8qnAAsZI3xG6K6k8o2Uld9l.jpg",
      "https://image.tmdb.org/t/p/w500/jVtM4D5ySHgGvJmk9WjR0yBGF18.jpg",
    ],
  },
  {
    id: 19,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
    images: [
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      "https://image.tmdb.org/t/p/w500/aoiW2JgXfyzjRRcydQ8E0Uddj3j.jpg",
      "https://image.tmdb.org/t/p/w500/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    ],
  },
  {
    id: 20,
    title: "Se7en",
    director: "David Fincher",
    year: 1995,
    images: [
      "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
      "https://image.tmdb.org/t/p/w500/bJcG2c4mh7jpb7i3sYF3o23w5U.jpg",
      "https://image.tmdb.org/t/p/w500/i43Yp5h0jc7YQnxR8JdzivjEbv4.jpg",
    ],
  },
  {
    id: 21,
    title: "The Prestige",
    director: "Christopher Nolan",
    year: 2006,
    images: [
      "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg",
      "https://image.tmdb.org/t/p/w500/j3IgFJ6tU7y2esQML9sdyhXUGqQ.jpg",
      "https://image.tmdb.org/t/p/w500/tffIz2xVrQHxyTfE7Qy5TtT5pOi.jpg",
    ],
  },
  {
    id: 22,
    title: "Coco",
    director: "Lee Unkrich",
    year: 2017,
    images: [
      "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
      "https://image.tmdb.org/t/p/w500/qblL9V3FcdhG5r3l2Rk38EdvKjQ.jpg",
      "https://image.tmdb.org/t/p/w500/lFnqU5Cn7hIkGS1wlIYe8GbfSRB.jpg",
    ],
  },
  {
    id: 23,
    title: "Avengers: Endgame",
    director: "Anthony Russo, Joe Russo",
    year: 2019,
    images: [
      "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
      "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
      "https://image.tmdb.org/t/p/w500/6vng8fap29EddC1o0SzuIzyq20W.jpg",
    ],
  },
  {
    id: 24,
    title: "Her",
    director: "Spike Jonze",
    year: 2013,
    images: [
      "https://image.tmdb.org/t/p/w500/ykC9bcdBRzsxjVZQkvnBggyOaDF.jpg",
      "https://image.tmdb.org/t/p/w500/7DKcbL9BqybR0xUvzTEmTxJf7yB.jpg",
      "https://image.tmdb.org/t/p/w500/4vd15UwvK5R0MyoVo9hw3rroWne.jpg",
    ],
  },
  {
    id: 25,
    title: "Up",
    director: "Pete Docter",
    year: 2009,
    images: [
      "https://image.tmdb.org/t/p/w500/rpG0aJQJn1nQeHwpDoTEQCF1fgi.jpg",
      "https://image.tmdb.org/t/p/w500/kO0En5AihTlfhiTqlIGa3Acwni7.jpg",
      "https://image.tmdb.org/t/p/w500/tpuZr31vNq6KpvJ9P1UnKVbKGHw.jpg",
    ],
  },
  {
    id: 26,
    title: "Gladiator",
    director: "Ridley Scott",
    year: 2000,
    images: [
      "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      "https://image.tmdb.org/t/p/w500/q4P0IV8rZWjNq7P5yZGfffEAFoB.jpg",
      "https://image.tmdb.org/t/p/w500/pt63OaexH94ypPefAXWGpF4OAHh.jpg",
    ],
  },
  {
    id: 27,
    title: "The Lion King",
    director: "Roger Allers, Rob Minkoff",
    year: 1994,
    images: [
      "https://image.tmdb.org/t/p/w500/2ltadt0HtHS8qD3xREVds3PDxkP.jpg",
      "https://image.tmdb.org/t/p/w500/d3jJbS6G2FkooeJ9KHn2QRipr6e.jpg",
      "https://image.tmdb.org/t/p/w500/x2GAJ4bTDbZbM9z4w1L1fBbOdi6.jpg",
    ],
  },
  {
    id: 28,
    title: "The Pianist",
    director: "Roman Polanski",
    year: 2002,
    images: [
      "https://image.tmdb.org/t/p/w500/fwGkPfbL3hhjWfW2wTZkNn2Hz6K.jpg",
      "https://image.tmdb.org/t/p/w500/6KojSNAmjNdj3AJWDzojLWH9eNi.jpg",
      "https://image.tmdb.org/t/p/w500/bJp1drjLx4hR0X2kFAuIhERUy8m.jpg",
    ],
  },
  {
    id: 29,
    title: "Life Is Beautiful",
    director: "Roberto Benigni",
    year: 1997,
    images: [
      "https://image.tmdb.org/t/p/w500/f7DImXDebOs148U4uPjI61iDvaK.jpg",
      "https://image.tmdb.org/t/p/w500/na8lAcu9H8GICdTnm6dAdUE7DcN.jpg",
      "https://image.tmdb.org/t/p/w500/1XOY2M0eCsJwAgI7RUdcpHiLwTk.jpg",
    ],
  },
  {
    id: 30,
    title: "The Truman Show",
    director: "Peter Weir",
    year: 1998,
    images: [
      "https://image.tmdb.org/t/p/w500/iD3l3PB3cca7q0g7ewTCfyLwUuh.jpg",
      "https://image.tmdb.org/t/p/w500/809BUJk9psPUYgFdpCIZ42bPpru.jpg",
      "https://image.tmdb.org/t/p/w500/6dKueSo2AuEylhHSKN2x9trnAX4.jpg",
    ],
  },
];
