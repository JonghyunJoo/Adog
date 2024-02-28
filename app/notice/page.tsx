import Navbar from "../component/navbar";
import TopMenu from "../component/topmenu";
import "../../styles/notice.scss"
import { connectDB } from "@/util/database";

export default async function Notice() {

    let db = (await connectDB).db('adog');
    let result = await db.collection('notice').find().toArray();

    return (
        <div className="background">
            <TopMenu />
            <Navbar />
            <div className="main-content">
                <div className="page relative">
                    <div className="news container">
                        <div className="news-section relative flex-nowrap d-flex flex-wrap flex-column flex-justify-center">
                            {result.map((a, i) =>
                                <div className="d-flex flex-wrap relative news-list">
                                    <article className="d-flex flex-nowrap relative news-list-item flex-row" >
                                        <a className="full-link" href={`/notice/${result[i]._id}`}></a>
                                        <div className="news-image-wrapper">
                                            <img src={result[i].thumb} height="184" width="352"></img>
                                        </div>
                                        <div className="news-info-wrapper d-flex flex-row flex-wrap relative">
                                            <div className="news-title-wrapper">
                                                <h3 className="news-title">
                                                    <a href="">{result[i].title}</a>
                                                </h3>
                                                <div className="news-lead">
                                                    {result[i].lead}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="news-read-more d-flex flex-row">
                                            <a className="widget-link-more">
                                                더 보기
                                                <div className="next" />
                                            </a>
                                        </div>
                                    </article>
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
