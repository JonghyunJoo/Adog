import axios from "axios";

export default async function SlideList(props) {
    const { result } = props;

    // const handleDelete = async () => {
    //     try {
    //         await axios.delete(`/api/slide/delete?_id=${result._id}`);
    //         console.log('게시물이 성공적으로 삭제되었습니다.');
    //     } catch (error) {
    //         console.log('삭제 중에 오류가 발생했습니다.', error);
    //     }
    // };

    return (
        <div className="d-flex flex-nowrap relative admin-list-item flex-row">
            <div className="admin-image-wrapper">
                <img src={result.eachSlide} height="184" width="352" alt="Slide"></img>
            </div>
            <div className="admin-info-wrapper d-flex flex-row flex-wrap relative">
                <div className="admin-title-wrapper">
                    <h3 className="admin-title">
                        <a href="">{result.title}</a>
                    </h3>
                    <div className="admin-lead">{result.price}</div>
                </div>
            </div>
            <a className="widget-link-more">
                삭제
            </a>
        </div>
    );
}
