import { connectDB } from "@/util/database"

export default async function handler(req, res) {
    const db = (await connectDB).db('adog');
    const result = await db.collection('notice').find().toArray();

    const notice = result.map((notice) => ({
        noticeID: notice._id,
        eachSlide: notice.thumb,
        title: notice.title,
    }));

    res.status(200).json(notice);
}