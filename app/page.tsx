"use client";

import { useMemo, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronDown,
  Clapperboard, Clock3, Film, MapPin, Menu, Play, Search, ShieldCheck,
  SlidersHorizontal, Sparkles, Star, Ticket, X
} from "lucide-react";
import { movies, showtimes, type Movie } from "@/lib/movies";
import MovieCard from "@/components/MovieCard";

const categories = ["All movies", "Action", "Sci-Fi", "Drama", "Adventure"];
const dates = [
  { day: "TODAY", date: "22", month: "OCT" },
  { day: "FRI", date: "23", month: "OCT" },
  { day: "SAT", date: "24", month: "OCT" },
  { day: "SUN", date: "25", month: "OCT" },
  { day: "MON", date: "26", month: "OCT" }
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All movies");
  const [city, setCity] = useState("Hyderabad");
  const [cityOpen, setCityOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDate, setActiveDate] = useState(0);
  const [activeMovie, setActiveMovie] = useState<Movie | null>(null);
  const [activeShowtime, setActiveShowtime] = useState("7:20 PM");
  const [toast, setToast] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const filteredMovies = useMemo(() => movies.filter((movie) => {
    const matchesSearch = `${movie.title} ${movie.genre} ${movie.language}`.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All movies" || movie.genre.toLowerCase().includes(category.toLowerCase());
    return matchesSearch && matchesCategory;
  }), [search, category]);

  function notify(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2800);
  }

  function openBooking(movie: Movie) {
    setActiveMovie(movie);
    setActiveShowtime("7:20 PM");
  }

  function confirmBooking() {
    if (!activeMovie) return;
    notify(`${activeMovie.title} · ${activeShowtime} selected. Booking backend coming soon.`);
    setActiveMovie(null);
  }

  return (
    <main>
      <div className="announcement"><Sparkles size={13} /> YOUR NEXT GREAT STORY STARTS HERE <span className="announcement-dot" /> THE CINEMA, REIMAGINED</div>

      <header className="site-header">
        <a className="brand" href="#" aria-label="Platinum Cineplex home">
          <span className="brand-mark"><Clapperboard size={22} strokeWidth={1.6} /></span>
          <span className="brand-text"><strong>PLATINUM</strong><small>C I N E P L E X</small></span>
        </a>

        <nav className={`main-nav ${mobileMenu ? "nav-open" : ""}`} aria-label="Main navigation">
          <a className="nav-active" href="#movies" onClick={() => setMobileMenu(false)}>Movies</a>
          <a href="#experience" onClick={() => setMobileMenu(false)}>The experience</a>
          <a href="#offers" onClick={() => { setMobileMenu(false); notify("Offers are coming soon."); }}>Offers</a>
        </nav>

        <div className="header-actions">
          <div className="city-wrap">
            <button className="city-button" onClick={() => setCityOpen(!cityOpen)} aria-expanded={cityOpen}>
              <MapPin size={15} /><span>{city}</span><ChevronDown size={14} />
            </button>
            {cityOpen && <div className="city-menu">
              {["Hyderabad", "Mumbai", "Bengaluru", "Chennai", "New Delhi"].map((name) =>
                <button key={name} onClick={() => { setCity(name); setCityOpen(false); notify(`Showing demo listings for ${name}.`); }}>
                  {name}{city === name && <Check size={14} />}
                </button>
              )}
            </div>}
          </div>
          <button className="icon-button search-toggle" aria-label="Focus movie search" onClick={() => { setSearchOpen(!searchOpen); document.getElementById("movie-search")?.focus(); }}><Search size={18} /></button>
          <button className="sign-in" onClick={() => notify("Account sign-in will be added in the next phase.")}>Sign in <ArrowUpRight size={15} /></button>
          <button className="mobile-menu-button" aria-label="Toggle menu" onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-image" />
        <div className="hero-vignette" />
        <div className="hero-grain" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-line" /> THE BIG SCREEN IS CALLING</div>
          <h1>Stories worth<br /> <em>staying</em> for.</h1>
          <p className="hero-description">Lose yourself in another world. Find your next unforgettable moment, only at Platinum.</p>
          <div className="hero-buttons">
            <a href="#movies" className="button-primary">Explore movies <ArrowRight size={17} /></a>
            <button className="button-quiet" onClick={() => { document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); }}><Play size={15} /> Discover the experience</button>
          </div>
          <div className="hero-footnote"><span className="live-dot" /> NOW SHOWING IN {city.toUpperCase()} <span className="hero-footnote-sep">/</span> CURATED FOR YOU</div>
        </div>
        <div className="hero-side-note"><span>THE ART OF CINEMA</span><span className="vertical-rule" /><span>EST. FOR MOVIE LOVERS</span></div>
        <div className="hero-index"><span>01</span><span className="index-line" /><span>03</span></div>
      </section>

      <section className="search-strip" aria-label="Find a movie">
        <div className="search-label"><span className="search-label-icon"><Search size={18} /></span><div><strong>Find your film</strong><small>Something good is playing.</small></div></div>
        <div className={`search-input-wrap ${searchOpen ? "search-highlight" : ""}`}>
          <Search size={17} />
          <input id="movie-search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search movies, genres, languages..." aria-label="Search movies, genres, languages" />
          {search && <button aria-label="Clear search" onClick={() => setSearch("")}><X size={15} /></button>}
          <kbd>⌘ K</kbd>
        </div>
        <a className="advanced-search" href="#movies"><SlidersHorizontal size={16} /> <span>Browse all</span> <ArrowUpRight size={14} /></a>
      </section>

      <section className="movies-section section-shell" id="movies">
        <div className="section-heading">
          <div><div className="eyebrow muted"><span className="eyebrow-line" /> THE CURRENT LINEUP</div><h2>Now <em>showing.</em></h2><p className="section-subtitle">Handpicked worlds. Unmissable stories. All on the big screen.</p></div>
          <a className="text-link" href="#all-movies" onClick={() => setCategory("All movies")}>View all films <ArrowRight size={16} /></a>
        </div>

        <div className="category-row" role="group" aria-label="Filter movies by genre">
          {categories.map((item) => <button key={item} className={`category-pill ${category === item ? "selected" : ""}`} onClick={() => setCategory(item)}>{item}</button>)}
          <span className="movie-count">{filteredMovies.length.toString().padStart(2, "0")} FILMS</span>
        </div>

        {filteredMovies.length > 0 ? <div className="movie-grid" id="all-movies">
          {filteredMovies.map((movie) => <article key={movie.id} className="movie-card">
            <button className="poster-button" onClick={() => openBooking(movie)} aria-label={`See showtimes for ${movie.title}`}>
              <div className="poster-wrap">
                <img className="poster-img" src={movie.poster} alt={`${movie.title} atmospheric artwork`} loading="lazy" />
                <span className="poster-shade" />
                {movie.tag && <span className="poster-tag">{movie.tag}</span>}
                <span className="poster-rating"><Star size={13} fill="currentColor" /> {movie.rating}</span>
                <span className="poster-open"><ArrowUpRight size={18} /></span>
              </div>
            </button>
            <div className="movie-card-copy"><h3>{movie.title}</h3><p>{movie.genre}</p><div className="movie-meta"><span>{movie.language}</span><span>{movie.duration}</span></div></div>
          </article>)}
        </div> : <div className="empty-state"><Film size={28} /><strong>No films found</strong><span>Try a different title or genre.</span><button onClick={() => { setSearch(""); setCategory("All movies"); }}>Clear filters</button></div>}

        <div className="catalogue-footer"><span>SHOWING {filteredMovies.length} OF {movies.length} CURATED FILMS</span><span className="footer-dash" /><span>MORE STORIES COMING SOON</span></div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-art"><img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=90" alt="Atmospheric cinema auditorium" loading="lazy" /><div className="experience-art-overlay" /><div className="art-caption"><span>01 / 03</span><span>THE PLATINUM DIFFERENCE</span></div><div className="art-stamp"><Clapperboard size={27} /><span>MADE FOR<br />THE MOVIES</span></div></div>
        <div className="experience-copy"><div className="eyebrow muted"><span className="eyebrow-line" /> MORE THAN A MOVIE</div><h2>Make a night<br />of <em>it.</em></h2><p>From the first frame to the final credits, the best cinema experiences make ordinary evenings feel extraordinary.</p><div className="experience-perks"><div><span className="perk-icon"><Film size={18} /></span><span><strong>Stories, carefully chosen</strong><small>A lineup for every kind of movie lover.</small></span></div><div><span className="perk-icon"><Ticket size={18} /></span><span><strong>Simple, seamless booking</strong><small>Your next night out, a few clicks away.</small></span></div><div><span className="perk-icon"><ShieldCheck size={18} /></span><span><strong>Your plans, in good hands</strong><small>A clear and considered booking journey.</small></span></div></div><a href="#movies" className="button-outline">Find your next film <ArrowRight size={16} /></a></div>
      </section>

      <section className="booking-section" id="offers">
        <div className="booking-section-head"><div><div className="eyebrow muted"><span className="eyebrow-line" /> PLAN YOUR VISIT</div><h2>Your seat is <em>waiting.</em></h2></div><p>Pick a day, find a time, and let the story take it from there.</p></div>
        <div className="booking-panel">
          <div className="booking-panel-top"><span><CalendarDays size={17} /> SELECT YOUR DATE</span><span className="booking-location"><MapPin size={14} /> {city}</span></div>
          <div className="date-selector">{dates.map((date, i) => <button key={date.date} className={`date-option ${activeDate === i ? "date-active" : ""}`} onClick={() => setActiveDate(i)}><span>{date.day}</span><strong>{date.date}</strong><small>{date.month}</small></button>)}</div>
          <div className="booking-panel-bottom"><div><strong>Ready for a little movie magic?</strong><span>Choose a film above to explore showtimes.</span></div><a href="#movies" className="button-primary">Choose a movie <ArrowRight size={16} /></a></div>
        </div>
        <div className="booking-disclaimer"><Clock3 size={14} /> Showtimes and availability are sample interface data for this frontend demo.</div>
      </section>

      <section className="newsletter">
        <div className="newsletter-mark"><Sparkles size={22} /></div><div><div className="eyebrow">A LITTLE CINEMA IN YOUR INBOX</div><h2>Be first in line.</h2><p>New releases, special screenings, and reasons to make a night of it.</p></div><form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); notify("Thanks! Newsletter signup will be connected in a future phase."); }}><input type="email" placeholder="Your email address" aria-label="Your email address" required /><button type="submit" aria-label="Subscribe"><ArrowRight size={19} /></button></form>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#"><span className="brand-mark"><Clapperboard size={21} strokeWidth={1.6} /></span><span className="brand-text"><strong>PLATINUM</strong><small>C I N E P L E X</small></span></a>
        <p className="footer-note">A little more magic on the big screen.</p>
        <div className="footer-links"><a href="#movies">Movies</a><a href="#experience">Our experience</a><a href="#offers">Offers</a><button onClick={() => notify("This is a frontend-only portfolio project.")}>About this demo</button></div>
        <div className="footer-bottom"><span>© 2026 PLATINUM CINEPLEX</span><span>INDEPENDENT PORTFOLIO PROJECT</span><a href="#">BACK TO TOP <ArrowUpRight size={12} /></a></div>
      </footer>

      {activeMovie && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setActiveMovie(null); }}>
        <section className="showtime-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button className="modal-close" aria-label="Close showtimes" onClick={() => setActiveMovie(null)}><X size={19} /></button>
          <div className="modal-art"><img src={activeMovie.backdrop} alt="" /><span className="modal-art-overlay" /><span className="modal-kicker">PLATINUM SELECTS · {activeMovie.certificate}</span></div>
          <div className="modal-content"><div className="modal-eyebrow"><Star size={14} fill="currentColor" /> {activeMovie.rating} / 10 <span>·</span> {activeMovie.duration} <span>·</span> {activeMovie.language}</div><h2 id="modal-title">{activeMovie.title}</h2><p>{activeMovie.genre} · A cinematic experience on the big screen.</p>
            <div className="modal-date"><CalendarDays size={16} /> THURSDAY, OCTOBER {dates[activeDate].date}, 2026 <span>·</span> {city.toUpperCase()}</div>
            <div className="showtime-grid">{showtimes.map((time) => <button key={time} className={`showtime-option ${activeShowtime === time ? "showtime-active" : ""}`} onClick={() => setActiveShowtime(time)}>{time}</button>)}</div>
            <button className="button-primary modal-book" onClick={confirmBooking}>Continue with {activeShowtime} <ArrowRight size={17} /></button>
            <span className="modal-footnote"><ShieldCheck size={13} /> No payment required · Demo booking only</span>
          </div>
        </section>
      </div>}

      {toast && <div className="toast" role="status"><Check size={16} /> {toast}</div>}
      <button className="back-to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><ArrowDown size={16} /></button>
    </main>
  );
}