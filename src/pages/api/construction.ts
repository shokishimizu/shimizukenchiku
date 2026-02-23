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
    const COLLECTION_NAME = 'construction';
    //　初期化する
    if (admin.apps.length === 0) {
        admin.initializeApp({
            credential: cert(serviceAccount),
        });
    }
    const db = getFirestore();
    const constructions: Construction[] = [];

    if (req.method === 'GET') {
        const snapshot = await db.collection(COLLECTION_NAME).get();

        snapshot.forEach((doc: firebase.firestore.QueryDocumentSnapshot) => {
            const data = doc.data();
            const construction: Construction = {
                id: doc.id,
                name: data.name,
                display_name: data.display_name,
                main_image_path: data.main_image_path,
                create_date: data.create_date.toDate(),
            };
            constructions.push(construction);
        });
    }
    res.status(200).json(constructions);
}