import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const TileTitle = ({ title, redirectUrl, buttonLabel = 'Go', hidden = true }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(redirectUrl);
  };

  return (
    <div className="flex justify-between items-center py-2">
      <h2>{title}</h2>
      {!hidden && (
        <button className='text-brand hover:text-white hover:bg-brand hover:rounded cursor-pointer' onClick={handleClick} style={{ padding: '0.5rem 1rem' }}>{buttonLabel}</button>
      )}
    </div>
  );
};

TileTitle.propTypes = {
  title: PropTypes.string.isRequired,
  redirectUrl: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  hidden: PropTypes.bool,
};

export default TileTitle;
