import Navbar from "../../component/navbar";
import TopMenu from "../../component/topmenu";
import "../../../styles/notice.scss";
import { connectDB } from "@/util/database";
import { ObjectId, WithId } from "mongodb";

interface NewsProps {
    params: { newsID: string };
}

export default async function News(props: NewsProps) {
    const db = (await connectDB).db("adog");
    const result: WithId<{
        title?: string;
        thumb?: string;
        lead?: string;
        content?: string;
    }> | null = await db.collection("notice").findOne({
        _id: new ObjectId(props?.params?.newsID),
    });

    if (!result) {
        return <div>Loading...</div>;
    }

    return (
        <div className="background">
            <TopMenu />
            <Navbar />
            <div className="main-content">
                <div className="page relative">
                    <div className="news-content">
                        <article className="single-news">
                            <header className="relative news-heading">
                                <div className="news-heading-title">
                                    <h1>{result.title}</h1>
                                </div>
                            </header>
                            <div className="relative news-heading-image">
                                <img src={result.thumb} alt="News thumbnail" />
                            </div>
                            <div className="relative news-content">
                                <div className="lead">
                                    <p>{result.lead}</p>
                                </div>
                            </div>
                            <div className="relative news-content">
                                <p>{result.content}</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}
