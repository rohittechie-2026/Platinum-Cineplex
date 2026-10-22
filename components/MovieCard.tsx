import { ArrowUpRight, Star } from "lucide-react";
import type { Movie } from "@/lib/movies";

export default function MovieCard({ movie, onBook }: { movie: Movie; onBook: (movie: Movie) => void }) {
  return (
    <article className="movie-card">
      <button className="poster-button" onClick={() => onBook(movie)} aria-label={`View showtimes for ${movie.title}`}>
        <div className="poster-wrap">
          {/* Remote demo artwork; replace with licensed poster assets before production. */}
          <img className="poster-img" src={movie.poster} alt={`${movie.title} cinematic artwork`} loading="lazy" />
          <span className="poster-shade" />
          {movie.tag && <span className="poster-tag">{movie.tag}</span>}
          <span className="poster-rating"><Star size={13} fill="currentColor" /> {movie.rating}</span>
          <span className="poster-open"><ArrowUpRight size={18} /></span>
        </div>
      </button>
      <div className="movie-card-copy">
        <h3>{movie.title}</h3>
        <p>{movie.genre}</p>
        <div className="movie-meta"><span>{movie.language}</span><span>{movie.duration}</span></div>
      </div>
    </article>
  );
}