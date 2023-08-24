const Tour = ({ id, src, date, title, content, country, duration, price }) => (
  <article key={id} className="tour-card">
    <div className="tour-img-container">
      <img src={src} className="tour-img" alt="" />
      <p className="tour-date">{date}</p>
    </div>
    <div className="tour-info">
      <div className="tour-title">
        <h4>{title}</h4>
      </div>
      <p>{content}</p>
      <div className="tour-footer">
        <p>
          <span>
            <i className="fas fa-map"></i>
          </span>{" "}
          {country}
        </p>
        <p>{duration}</p>
        <p>{price}</p>
      </div>
    </div>
  </article>
);

export default Tour;
