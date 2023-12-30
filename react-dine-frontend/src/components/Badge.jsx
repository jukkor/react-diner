import './Badge.css';

const Badge = ({ value }) => {
  return (
    <div className="badge">
      {value}
    </div>
  );
};

export default Badge;