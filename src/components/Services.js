import { SERVICES_INFOS } from "../utils/data";
import Title from "./Title";
import Service from "./Service";

function Services() {
  return (
    <section className="section services" id="services">
      <Title uncoloredText="our" coloredText="services" />

      <div className="section-center services-center">
        {SERVICES_INFOS.map((service) => {
          return <Service {...service} key={service.id} />;
        })}
      </div>
    </section>
  );
}

export default Services;
