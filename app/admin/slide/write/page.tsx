import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import "../../../../styles/admin.scss";

interface Notice {
  noticeID: string;
  title: string;
  eachSlide: string;
}

export default function Admin() {
  const [src, setSrc] = useState<string>('');
  const [noticeList, setNoticeList] = useState<Notice[]>([]);
  const [noticeID, setNoticeID] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  

  const fetchNotices = async () => {
    const response = await fetch('/api/notice');
    const data = await response.json();
    setNoticeList(data);
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const handleNoticeClick = (notice: Notice) => {
    setNoticeID(notice.noticeID);
    setTitle(notice.title);
    setSrc(notice.eachSlide);
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const filename = encodeURIComponent(file.name);
    const res = await fetch(`/api/slides/image?file=${filename}`);
    const { fields, url } = await res.json();

    const formData = new FormData();
    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value as string | Blob);
    });

    const result = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (result.ok) {
      setSrc(`${url}/${filename}`);
    } else {
      console.log('실패');
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="card-write">
        <form action="/api/slide/new" method="POST" onSubmit={handleSubmit}>
          <div className="title-w">
            <input type="text" name="title" placeholder="슬라이드 제목" value={title} onChange={handleTitleChange} />
          </div>
          <div className="myinfo">
            <input type="text" name="price" placeholder="게임 배너일 시 가격" value={price} onChange={handlePriceChange} />
          </div>
          <input name="noticeID" defaultValue={noticeID} style={{ display: "none" }}></input>
          <input name="eachSlide" defaultValue={src} style={{ display: "none" }}></input>
          <button className="btn-w" type="submit">전송</button>
        </form>

        <img src={src} style={{ maxHeight: "300px" }} alt="Uploaded Image" />
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>

      <div>
        <h4>공지사항 목록</h4>
        <ul>
          {noticeList.map((notice) => (
            <div className="d-flex flex-nowrap relative admin-list-item flex-row" key={notice.noticeID} onClick={() => handleNoticeClick(notice)}>
              <div className="admin-image-wrapper">
                <img src={notice.eachSlide} height="184" width="352" alt="Notice Image"></img>
              </div>
              <div className="admin-info-wrapper d-flex flex-row flex-wrap relative">
                <div className="admin-title-wrapper">
                  <h3 className="admin-title">
                    <a href="">{notice.title}</a>
                  </h3>
                </div>
              </div>
              <div className="admin-read-more d-flex flex-row">
                <span className="widget-link-more" onClick={() => handleNoticeClick(notice)} style={{ cursor: "pointer" }}>슬라이드로 등록
                </span>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
