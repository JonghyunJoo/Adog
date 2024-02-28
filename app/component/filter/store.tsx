interface Store {
    storeID: string;
    storeName: string;
}

interface StoreDropdownProps {
    clickModal: () => void;
    storeList: { storeID: string; storeName: string }[];
    resetFilter: () => void;
    categoryInput: () => void;
}

const StoreDropdown = (props: StoreDropdownProps) => {
    const { clickModal, storeList, resetFilter, categoryInput } = props;

    return (
        <>
            <div className="overlay" onClick={clickModal}></div>
            <div className="filter-content">
                <div className="filter-wrap">
                    <div className="numeric-filter" onClick={(e) => e.stopPropagation()}>
                        <div className="filter-list relative">
                            <div className="range-wrapper d-flex flex-row flex-wrap">
                                {storeList?.slice(0, 20).map((store) => (
                                    <span
                                        className="range-item ellccccccipsis badge badge-filter d-flex flex-align-center"
                                        key={store.storeID}
                                        style={{ textAlign: "start" }}
                                    >
                                        <input
                                            type="checkbox"
                                            onChange={categoryInput}
                                            name="storeID"
                                            value={store.storeID}
                                        />
                                        <img
                                            src={`https://www.cheapshark.com/img/stores/icons/${Number(store.storeID) - 1}.png`}
                                            style={{ marginRight: "5px" }}
                                        />
                                        {store.storeName}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="filter-reset-button-container">
                            <div className="line">
                                <span className="filter-reset-button">
                                    <span className="reset-btn-label" onClick={resetFilter}>
                                        필터 리셋
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StoreDropdown;