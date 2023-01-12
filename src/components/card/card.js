import "./card.css";

export function Card({ gender, protagonist, year, title }) {
  return (
    <div className="card-component">
      <h2>{title}</h2>
      <h2>Anime Name</h2>
      <section className="card-infos">
        <span className="card-span">Protagonist:</span>
        <h3>{protagonist}</h3>
        <h3>Protagonist name</h3>
      </section>
      <section className="card-infos">
        <span className="card-span">Gender:</span>
        <h3>{gender}</h3>
        <h3>Whatever</h3>
      </section>
      <section className="card-infos">
        <span className="card-span">Year:</span>
        <h3>{year}</h3>
        <h3>2005</h3>
      </section>
    </div>
  );
}
