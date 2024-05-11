import React from 'react';
import RightSVG from '../Images/right.svg'
import CancelBtn from '../Images/cancel.svg'

const FilterButton = ({ filter, isActive, isHovered, onClick, onMouseEnter, onMouseLeave }) => {
    return (
        <button
            className={`btn-tagdata ${isActive ? 'data-filter-active' : 'data-filter-inactive'}`}
            onClick={() => onClick(filter)}
            // onMouseEnter={() => onMouseEnter(filter)}
            // onMouseLeave={onMouseLeave}
        >
            <div>
                {isActive && (
                    <img src={RightSVG} alt="Right icon" width={16} height={16} />
                )}
                {/* {isActive && isHovered && (
                    <img src={CancelBtn} alt="Cancel icon" width={16} height={16} />
                )} */}
            </div>
            <div>
                {filter}
            </div>
        </button>
    );
};

export default FilterButton;