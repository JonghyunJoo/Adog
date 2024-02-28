import axios from "axios";
import Link from "next/link";
import TopMenu from "@/app/component/topmenu"
import Navbar from "@/app/component/navbar"
import "../../../styles/search.scss"

interface SearchResultProps {
    params: { gameName: string }
}

export default async function SearchResult(props: SearchResultProps) {

    let searchList: {
        cheapestDealID: string;
        thumb: string;
        dealID: string;
        external: string;
    }[] = [];

    const gameName = props?.params?.gameName;
    await axios.get(`https://www.cheapshark.com/api/1.0/games?title=${gameName}`)
        .then(res => {
            searchList = res.data;
        })
    return (
        <div className="background">
            <TopMenu />
            <Navbar />
            <div className="main-content">
                <div className="page relative">
                    <div className="container search-result">
                        <div className="d-flex flex-wrap search-list-wrap">
                            {searchList.map((list) => (
                                <div key={list.cheapestDealID} className="search-item-wrapper">
                                    <div className="d-flex flex-column flex-align-center search-item">
                                        <Link href={`/detail/${list?.cheapestDealID}`}>
                                            <div className="game-image">
                                                <span className="browseThumb" style={{ backgroundImage: `url(${list.thumb})` }}></span>
                                            </div>
                                        </Link>
                                        <div className="search-title d-flex flex-align-center flex-justify-center">
                                            <Link href={`/detail${list.dealID}`}>{list.external}</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}