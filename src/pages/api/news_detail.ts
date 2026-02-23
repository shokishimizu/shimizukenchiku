import firebase from 'firebase/compat/app';
import type { NextApiRequest, NextApiResponse } from 'next';
const { cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../../../firebase-account.json'); // 秘密鍵を取得
const admin = require('firebase-admin');

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const COLLECTION_NAME = 'news';
    // 初期化する
    if (admin.apps.length === 0) {
        admin.initializeApp({
            credential: cert(serviceAccount),
        });
    }
    const db = getFirestore();

    if (req.method === 'GET') {
        const snapshot = await db.collection(COLLECTION_NAME).doc(req.query.id as string).get();

        const data = snapshot.data();
        const news: News = {
            id: snapshot.id,
            title: data.title,
            description: data.description,
            create_date: data.create_date.toDate(),
            update_date: data.update_date.toDate(),
        };
        res.status(200).json(news);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}