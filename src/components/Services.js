import { SERVICES_INFOS } from "../utils/data";
import Title from "./Title";

function Services() {
  return (
    <section className="section services" id="services">
      <Title uncoloredText="our" coloredText="services" />

      <div className="section-center services-center">
        {SERVICES_INFOS.map((service) => {
          return (
            <article key={service.id} className="service">
              <span className="service-icon">
                <i className={service.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-text">{service.content}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
