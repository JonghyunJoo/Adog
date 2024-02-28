import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        try {
            const db = (await connectDB).db('adog');
            const result = await db.collection('slide').deleteOne({ _id: new ObjectId(req.query._id) });
            console.log(result);
            res.status(200).json('게시물이 성공적으로 삭제되었습니다.');
        } catch (error) {
            console.log('삭제 중에 오류가 발생했습니다.', error);
            res.status(500).json('서버 오류로 인해 게시물을 삭제할 수 없습니다.');
        }
    } else {
        res.status(400);
    }
}