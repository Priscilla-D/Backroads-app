function Social({id, src, icon}) {
  return (
  <li key={id}>
    <a href={src} target="_blank" className="nav-icon" rel="noreferrer">
      <i className={icon}></i>
    </a>
  </li>
)}
export default Social;
