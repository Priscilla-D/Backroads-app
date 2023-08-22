import { ARTICLES_INFOS } from "./utils/articles";

function Tours() {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        {ARTICLES_INFOS.map((article) => {
          return (
            <article className="tour-card">
              <div className="tour-img-container">
                <img src={article.src} className="tour-img" alt="" />
                <p className="tour-date">{article.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{article.title}</h4>
                </div>
                <p>{article.content}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {article.country}
                  </p>
                  <p>{article.duration}</p>
                  <p>{article.price}</p>
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
