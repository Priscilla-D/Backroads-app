import { TOURS_INFOS } from "../utils/data";
import Title from "./Title";

function Tours() {
  return (
    <section className="section" id="tours">
      <Title uncoloredText="featured" coloredText="tours" />

      <div className="section-center featured-center">
        {TOURS_INFOS.map((tour) => {
          return (
            <article key={tour.id} className="tour-card">
              <div className="tour-img-container">
                <img src={tour.src} className="tour-img" alt="" />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.content}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {tour.country}
                  </p>
                  <p>{tour.duration}</p>
                  <p>{tour.price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Tours;
