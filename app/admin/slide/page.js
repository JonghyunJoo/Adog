import { connectDB } from "@/util/database"
import SlideList from "../../component/admin/slideList.js"
import "../../../styles/admin.scss"

export default async function List() {
    let db = (await connectDB).db('adog');
    let result = await db.collection('slide').find().toArray();
    result = result.map((slide) => {
        return slide
    })

    return (
        <div className="main-content">
            <div className="page relative">
                <div className="admin container">
                    <div className="admin-section relative flex-nowrap d-flex flex-wrap flex-column flex-justify-center">
                        <div className="d-flex flex-wrap relative admin-list">
                            <a href="slide/write" className="new-slide">새 슬라이드</a>
                            {result.map((a, i) =>
                                <SlideList result={result[i]} key={i} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}