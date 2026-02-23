import * as fs from 'fs';
import * as path from 'path';

/**
 * Firebase サービスアカウントを取得
 * - Amplify: 環境変数 FIREBASE_SERVICE_ACCOUNT（Base64）または FIREBASE_SERVICE_ACCOUNT_JSON（生JSON）から取得
 * - ローカル: firebase-account.json を fs で読み込み
 */
export function getFirebaseServiceAccount(): object {
    // Amplify: Base64 エンコード済み（改行・特殊文字の問題を回避）
    const base64 = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (base64) {
        try {
            const json = Buffer.from(base64, 'base64').toString('utf8');
            return JSON.parse(json);
        } catch (e) {
            // Base64 でない場合は生 JSON として試す（後方互換）
            try {
                return JSON.parse(base64);
            } catch {
                throw new Error('FIREBASE_SERVICE_ACCOUNT の形式が不正です。Base64 または JSON を設定してください。');
            }
        }
    }
    // ローカル: firebase-account.json を読み込み
    const filePath = path.join(process.cwd(), 'firebase-account.json');
    if (!fs.existsSync(filePath)) {
        throw new Error(
            'FIREBASE_SERVICE_ACCOUNT が設定されておらず、firebase-account.json も見つかりません。' +
            'ローカル: firebase-account.json をプロジェクトルートに配置。' +
            'Amplify: 環境変数 FIREBASE_SERVICE_ACCOUNT に firebase-account.json を Base64 エンコードした値を設定してください。'
        );
    }
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}
