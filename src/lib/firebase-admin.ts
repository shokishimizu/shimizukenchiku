import * as fs from 'fs';
import * as path from 'path';

/**
 * Firebase サービスアカウントを取得
 * - Amplify: 環境変数 FIREBASE_SERVICE_ACCOUNT から取得
 * - ローカル: firebase-account.json を fs で読み込み（require はビルド時に解決されるため使用不可）
 */
export function getFirebaseServiceAccount(): object {
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
        return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    }
    const filePath = path.join(process.cwd(), 'firebase-account.json');
    if (!fs.existsSync(filePath)) {
        throw new Error(
            'FIREBASE_SERVICE_ACCOUNT が設定されておらず、firebase-account.json も見つかりません。' +
            'ローカル: firebase-account.json をプロジェクトルートに配置。' +
            'Amplify: 環境変数 FIREBASE_SERVICE_ACCOUNT を設定してください。'
        );
    }
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}
