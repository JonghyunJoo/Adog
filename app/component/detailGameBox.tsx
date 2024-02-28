interface DetailGameBoxProps {
    store: Number;
    deal: { price: string, retailPrice: string, savings: number };
    storeList: { storeName: string }[];
}

export default function DetailGameBox(props: DetailGameBoxProps) {
    const { store, deal, storeList } = props;

    let salePrice
    if (deal?.price == "0.00") {
        salePrice = <span className="price-inner game-price-current c-green">Free</span>
    }
    else {
        salePrice = <span className="price-inner game-price-current">${deal?.price}</span>
    }

    return (
        <div className="relative gameBox d-flex flex-wrap flex-align-center game-item flex-nowrap">
            <a className="full-link" target="_blank" rel="nofollow noopener external" href=""></a>
            <div className="d-flex flex-align-center flex-self-start shop-image">
                <a className="d-flex flex-align-center shop-link flex-justify-center relative" target="_blank" rel="nofollow noopener external" href="">
                    <img className="shop-logo" src={`https://www.cheapshark.com/img/stores/banners/${store}.png`} />
                </a>
            </div>
            <div className="game-info-wrapper grid relative">
                <div className="game-info-title-wrapper d-flex flex-row flex-nowrap ">
                    <a className="game-info-title title" href="" target="_blank">
                        {storeList[Number(store)].storeName}
                    </a>
                </div>
                <div className="relative price-info-with-label d-flex">
                    <div className="price-wrapper with-badges d-flex flex-row">
                        <span className="price-label price-old relative">
                            ${deal.retailPrice}
                        </span>
                        <a target="_blank" rel="nofollow noopener external" className="price game-price" href="">
                            {salePrice}
                        </a>
                    </div>
                </div>
                <div className="d-flex flex-row flex-justify-end flex-nowrap labels-container">
                    <span className="discount label">
                        {Math.round(deal.savings)}%
                    </span>
                </div>
            </div>
        </div>
    )
}