const Section = ({ id, name, itemClassName }) => {
  return(<li key={id}>
    <a href={`#${name}`} className={itemClassName}>
      {name}
    </a>
  </li>
)};

export default Section;
