import { useState, ChangeEvent, FormEvent } from "react";
import "../../../../styles/admin.scss";

export default function Admin() {
    const [src, setSrc] = useState<string>('');

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const filename = encodeURIComponent(file.name);
        const res = await fetch(`/api/notice/image?file=${filename}`);
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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="container">
            <div className="card-write">
                <form action="/api/notice/new" method="POST" onSubmit={handleSubmit}>
                    <div className="title-w">
                        <input type="text" name="title" placeholder="공지사항 제목" />
                    </div>
                    <div className="myinfo">
                        <input type="text" name="lead" placeholder="부제" />
                    </div>
                    <div className="msg">
                        <textarea name="content" placeholder="본문 내용"></textarea>
                    </div>
                    <input name="thumb" value={src} style={{ display: "none" }}></input>
                    <button className="btn-w" type="submit">전송</button>
                </form>

                <img src={src} style={{ maxHeight: "300px" }} alt="Uploaded Image" />
                <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>
        </div>
    );
}