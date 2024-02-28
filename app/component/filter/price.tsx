interface PriceDropdownProps {
    clickModal: () => void;
    categoryChange: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    resetFilter: () => void;
    categoryInput: () => void;
}


const PriceDropdown = (props: PriceDropdownProps) => {
    const { clickModal, categoryChange, resetFilter, categoryInput } = props;

    return (
        <>
            <div className="overlay" onClick={clickModal}></div>
            <div className='filter-content'>
                <div className="filter-wrap">
                    <div className='numeric-filter' onClick={(e) => e.stopPropagation()}>
                        <div className='filter-list relative'>
                            <div className='range-wrapper d-flex flex-row flex-wrap'>
                                <span className='range-item ellipsis badge badge-filter'
                                    onClick={categoryChange}
                                    data-name='upperPrice'
                                    data-value='2'
                                >
                                    $2이하
                                </span>
                                <span className='range-item predefine-item ellipsis badge badge-filter'
                                    onClick={categoryChange}
                                    data-name='upperPrice'
                                    data-value='5'
                                >
                                    $5이하
                                </span>
                                <span className='range-item predefine-item ellipsis badge badge-filter'
                                    onClick={categoryChange}
                                    data-name='upperPrice'
                                    data-value='10'
                                >
                                    $10이하
                                </span>
                                <span className='range-item predefine-item ellipsis badge badge-filter'
                                    onClick={categoryChange}
                                    data-name='upperPrice'
                                    data-value='20'
                                >
                                    $20이하
                                </span>
                                <span className='range-item predefine-item ellipsis badge badge-filter'
                                    onClick={categoryChange}
                                    data-name='upperPrice'
                                    data-value='30'
                                >
                                    $30이하
                                </span>
                                <span className='range-item predefine-item ellipsis badge badge-filter'
                                    onClick={categoryChange}
                                    data-name='upperPrice'
                                    data-value='50'
                                >
                                    $50이하
                                </span>
                            </div>
                            <div className='range-wrapper d-flex flex-row flex-nowrap'>
                                <input type='text' placeholder="$0" autoComplete='off' className='input-slider-range range-item range-input' name='lowerPrice' onBlur={categoryInput} />
                                <input type='text' placeholder="$1000" autoComplete='off' className='input-slider-range range-item range-input' name='upperPrice' onBlur={categoryInput} />
                            </div>
                        </div>
                    </div>
                    <div className='filter-reset-button-container'>
                        <div className='line'>
                            <span className='filter-reset-button'>
                                <span className='reset-btn-label' onClick={resetFilter}>필터 리셋</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceDropdown;
