import { connectDB } from "@/util/database";
import "../../../styles/admin.scss";
import NoticeList from "@/app/component/admin/noticeList";
import { NextPage } from "next";

const List= async () => {
    const db = (await connectDB).db("adog");
    let result = await db.collection("notice").find().toArray();

    return (
        <div className="main-content">
            <div className="page relative">
                <div className="admin container">
                    <div className="admin-section relative flex-nowrap d-flex flex-wrap flex-column flex-justify-center">
                        <div className="d-flex flex-wrap relative admin-list">
                            <a href="notice/write" className="new-slide">
                                새 공지사항
                            </a>
                            {result.map((notice, index) => (
                                <NoticeList result={notice} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default List;