# サンプルTruffle-Vue DApp
以下を参考に、Dockerfileを用いて環境構築、本番へのデプロイ可能なDAppを作成しました。  
ref. https://www.trufflesuite.com/boxes/drizzle-vue-box


## Development
```
docker build . -t truffle-vue-tutrial
```
### For Linux
開発用コンテナを立ち上げて中に入る。`--network host`はLinuxしか使えない？
```
docker run --rm --network host -v `pwd`:/home -it truffle-vue-tutrial bash
```
#### Deploy SmartContract
Truffleのdevelop networkにスマートコントラクトをデプロイする。  
開発中はDevelopネットワークを立ち上げっぱなしにしておく。  
```
truffle develop
migrate
```
#### Start Frontend Server
フロントエンドのモジュールを起動して、Truffle Develop Network内のスマートコントラクトに接続する。
```
cd vapp
npm run serve
```  
`localhost:4000`にブラウザでアクセスして動作確認する。