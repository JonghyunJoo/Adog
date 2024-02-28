import axios from "axios";

const NoticeList = ({ result }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`/api/notice/delete?_id = ${result._id }`);
            console.log('게시물이 성공적으로 삭제되었습니다.');
        } catch (error) {
            console.log('삭제 중에 오류가 발생했습니다.', error);
        }
    };

    return (
        <div className="d-flex flex-nowrap relative admin-list-item flex-row">
            <div className="admin-image-wrapper">
                <img src={result.thumb} height="184" width="352"></img>
            </div>
            <div className="admin-info-wrapper d-flex flex-row flex-wrap relative">
                <div className="admin-title-wrapper">
                    <h3 className="admin-title">
                        <a href="">{result.title}</a>
                    </h3>
                    <div className="admin-lead">
                        {result.lead}
                    </div>
                </div>
            </div>
            <div className="admin-read-more d-flex flex-row">
                <a className="widget-link-more" href="" onClick={handleDelete}>
                    삭제
                </a>
            </div>
        </div>

    )
}

export default NoticeList;