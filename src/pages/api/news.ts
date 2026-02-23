import firebase from 'firebase/compat/app';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getFirebaseServiceAccount } from '../../lib/firebase-admin';
const { cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const admin = require('firebase-admin');

const serviceAccount = getFirebaseServiceAccount();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const COLLECTION_NAME = 'news';
    //　初期化する
    if (admin.apps.length === 0) {
        admin.initializeApp({
            credential: cert(serviceAccount),
        });
    }
    const db = getFirestore();
    const newsList: News[] = [];

    if (req.method === 'GET') {
        const snapshot = await db.collection(COLLECTION_NAME).get();

        snapshot.forEach((doc: firebase.firestore.QueryDocumentSnapshot) => {
            const data = doc.data();
            const news: News = {
                id: doc.id,
                title: data.title,
                description: data.description,
                create_date: data.create_date.toDate(),
                update_date: data.update_date.toDate(),
            };
            newsList.push(news);
        });
    }
    res.status(200).json(newsList);
}