import PropTypes from 'prop-types';
import { Title } from './Layout.styled';

const MainTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainTitle;
