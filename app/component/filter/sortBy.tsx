'use client'
import { useState } from "react";

interface SortByDropdownProps {
    clickModal: () => void;
    categoryChange: () => void;
}

export default function SortByDropdown(props: SortByDropdownProps) {
    const { clickModal, categoryChange } = props


    return (
        <>
            <div className="overlay" onClick={clickModal}></div>
            <div className='filter-content' style={{ width: "108px", height: "210px" }}>
                <div className="filter-wrap">
                    <div className='numeric-filter' >
                        <div className='filter-list relative'>
                            <div className='range-wrapper d-flex flex-column flex-wrap'>
                                <span className='sort-item ellipsis badge badge-filter'
                                    onClick={categoryChange}
                                    data-name='sortBy'
                                    data-value='DealRating'
                                >
                                    추천순
                                </span>

                                <span className='sort-item ellipsis badge badge-filter'
                                    onClick={categoryChange}
                                    data-name='sortBy'
                                    data-value='Recent'
                                >
                                    최신순
                                </span>

                                <span className='sort-item ellipsis badge badge-filter'
                                    onClick={categoryChange}
                                    data-name='sortBy'
                                    data-value='Savings'
                                >
                                    할인순
                                </span>

                                <span className='sort-item ellipsis badge badge-filter'
                                    onClick={categoryChange}
                                    data-name='sortBy'
                                    data-value='Price'
                                >
                                    가격순
                                </span>

                                <span className='sort-item ellipsis badge badge-filter'
                                    onClick={categoryChange}
                                    data-name='sortBy'
                                    data-value='Reviews'
                                >
                                    리뷰순
                                </span>

                                <span className='sort-item ellipsis badge badge-filter'
                                    onClick={categoryChange}
                                    data-name='sortBy'
                                    data-value='Title'
                                >
                                    제목순
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}