import axios from "axios";
import moment from "moment/moment";
import Link from "next/link";

interface GameBoxProps {
    list: {
        savings: string;
        lastChange: string;
        steamRatingText: string;
        salePrice: string;
        dealRating: string;
        dealID: string;
        thumb: string;
        gameID: string;
        title: string;
        normalPrice: string;
        storeID: string;
    }
    setGameID: (gameID: string) => void;
}

export default function GameBox(props: GameBoxProps) {
    const { list, setGameID } = props;

    if (!list) {
        return null;
    }

    const historical = Number(list.savings) == 100

    let howLongAgo = moment(list.lastChange, 'X').fromNow();
    const steamText = list.steamRatingText;

    let salePrice
    if (list.salePrice == "0.00") {
        salePrice = <span className="price-inner game-price-new c-green">Free</span>
    }
    else {
        salePrice = <span className="price-inner game-price-new">${list.salePrice}</span>
    }
    let dealRateColor
    const dealRating = Number(list.dealRating)
    if (dealRating >= 8) {
        dealRateColor = "bi bi-fire c-score-high"
    }
    else if (dealRating >= 5 && dealRating < 8) {
        dealRateColor = "bi bi-fire c-score-mid"
    }
    else {
        dealRateColor = "bi bi-fire c-score-low"
    }
    return (
        <div className="gameBox relative game-portrait-item grid" onMouseEnter={() => { setGameID(list.gameID) }}>
            <Link
                key={list.dealID}
                href={`/detail/${list.dealID}`}
                scroll={false}
                shallow={true}
                className="full-link"
            >
            </Link>
            <div className="game-image">
                <span className="browseThumb" style={{ backgroundImage: `url(${list.thumb})` }}></span>
            </div>
            <div className="game-info-wrapper grid">
                <div className="game-info-title-wrapper d-flex flex-align-center flex-row flex-nowrap">
                    <div className="icon-rating-high size-15 svg-icon-fire" title={`추천도 : ${list.dealRating}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={dealRateColor}>
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                        </svg>
                    </div>
                    <div className="game-info-title title">
                        {list.title}
                    </div>
                </div>
                <div className="game-tags game-tags-deal">
                    <div className="d-flex flex-align-center tags">
                        <div className="review-tag tag">
                            {steamText == "Overwhelmingly Positive" ? "압도적으로 긍적적" : steamText == "Very Positive" ? "매우 긍정적" : steamText == "Positive" ? "긍정적" : steamText == "Mostly Positive" ? "대체로 긍정적" : steamText == "Mixed" ? "복합적" : steamText == "Mostly Negative" ? "대체로 부정적" : steamText == "Negative" ? "부정적" : steamText == "very Negative" ? "매우 부정적" : steamText == "Overwhelmingly Negative" ? "압도적으로 부정적" : "평가 없음"}
                        </div>
                        <div className="tag-dot"></div>
                        <div className="time-tag tag">
                            {howLongAgo}
                        </div>
                    </div>
                </div>
                <div className="price-wrapper">
                    <span className="price-old relative">${list.normalPrice}</span>
                    <div className="price relative game-price">
                        {salePrice}
                    </div>
                </div>
                <div className="labels-container d-flex flex-row">
                    <span className="discount label d-flex">-{Math.round(Number(list.savings))}%</span>
                    {historical && <span className="historical label">역대 최저</span>}
                </div>
            </div>
            <div className="game-cta shop-icon-cta relative d-flex flex-align-center flex-row">
                <a className="shop-link d-flex flex-row flex-align-center flex-jistify-center" href={`https://www.cheapshark.com/redirect?dealID=${list.dealID}`} target="_blank" rel="nofollow noopener external">
                    <img className="shop-logo" src={`https://www.cheapshark.com/img/stores/banners/${Number(list.storeID) - 1}.png`} />
                </a>
            </div>
        </div>
    )
}
