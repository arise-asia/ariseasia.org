import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const SEOTags = ({ title, description, type }) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/thumbnail.jpg" />
      <meta property="og:site_name" content="Arise Asia" />

      {/* Twitter tags */}
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:alt" content="Arise Asia" />
    </Helmet>
  );
};

SEOTags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
};

export default SEOTags;
