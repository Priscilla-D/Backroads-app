import { TOURS_INFOS } from "../utils/data";
import Title from "./Title";
import Tour from "./Tour";

function Tours() {
  return (
    <section className="section" id="tours">
      <Title uncoloredText="featured" coloredText="tours" />

      <div className="section-center featured-center">
        {TOURS_INFOS.map((tour) => {
          return <Tour {...tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
