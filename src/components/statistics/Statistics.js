import React, { Fragment } from 'react';

const Statistics = ({label, percentage }) => {
    return (
        <Fragment>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
        </Fragment>
    )
}
export default Statistics;