export type Movie = {
  id: number;
  title: string;
  genre: string;
  language: string;
  rating: string;
  duration: string;
  certificate: string;
  poster: string;
  backdrop: string;
  accent: string;
  tag?: string;
};

export const movies: Movie[] = [
  {
    id: 1, title: "Dune: Part Two", genre: "Sci-Fi / Adventure", language: "English",
    rating: "8.8", duration: "2h 46m", certificate: "UA 13+",
    poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=85",
    backdrop: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1800&q=90",
    accent: "#c7a875", tag: "TRENDING"
  },
  {
    id: 2, title: "The Dark Knight", genre: "Action / Crime", language: "English",
    rating: "9.0", duration: "2h 32m", certificate: "UA 16+",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=600&q=85",
    backdrop: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=90",
    accent: "#9eacb7", tag: "FAN FAVOURITE"
  },
  {
    id: 3, title: "Interstellar", genre: "Sci-Fi / Drama", language: "English",
    rating: "8.7", duration: "2h 49m", certificate: "UA 13+",
    poster: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=85",
    backdrop: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1800&q=90",
    accent: "#7d9fbd", tag: "CINEMA CLASSIC"
  },
  {
    id: 4, title: "The Grand Budapest Hotel", genre: "Comedy / Drama", language: "English",
    rating: "8.1", duration: "1h 39m", certificate: "UA 13+",
    poster: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=85",
    backdrop: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=90",
    accent: "#d4a1a8", tag: "EDITOR'S PICK"
  },
  {
    id: 5, title: "Blade Runner 2049", genre: "Sci-Fi / Thriller", language: "English",
    rating: "8.0", duration: "2h 44m", certificate: "A",
    poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=85",
    backdrop: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=90",
    accent: "#cf8b61", tag: "VISUAL SPECTACLE"
  },
  {
    id: 6, title: "Into the Wild", genre: "Adventure / Drama", language: "English",
    rating: "8.2", duration: "2h 28m", certificate: "UA 13+",
    poster: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=85",
    backdrop: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=90",
    accent: "#8cae8c", tag: "WORTH THE WATCH"
  }
];

export const showtimes = ["10:15 AM", "1:30 PM", "4:45 PM", "7:20 PM", "10:05 PM"];
