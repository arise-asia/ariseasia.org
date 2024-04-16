import PropTypes from 'prop-types';

const Card = (props) => {
  const { image, key } = props;

  return (
    <div
      className="
        flex
        justify-center
        items-center
        drop-shadow-md	
        rounded-md"
    >
      <img alt={key} src={image} />
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  key: PropTypes.number,
};

export default Card;
