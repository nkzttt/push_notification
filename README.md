# push_notification

## テスト方法

1. `npx web-push generate-vapid-keys` を実行し、生成された VAPID を .vapid.json として保存 ※1
2. デプロイ ( `npx vercel login` -> `npm run deploy` )
3. テストしたい端末でサイトにアクセスし、 subscription を取得
   1. iPhone Safari の場合は一度ホーム画面に追加し PWA として起動する
4. 3 で取得した subscription を send.js に貼り付け `node send.js` を実行

--- 

※1

.vapid.json
```json
{
  "publicKey": "xxxxxxxxxx",
  "privateKey": "xxxxxxxxxx"
}
```