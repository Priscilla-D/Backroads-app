const Title = ({ uncoloredText, coloredText }) => (
  <div className="section-title">
    <h2>
      {uncoloredText} <span>{coloredText}</span>
    </h2>
  </div>
);

export default Title;
