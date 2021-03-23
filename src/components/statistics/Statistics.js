import { Fragment } from 'react';
import PropTypes from 'prop-types';

const Statistics = ({label, percentage }) => {
    return (
        <Fragment>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
        </Fragment>
    )
}
Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default Statistics;