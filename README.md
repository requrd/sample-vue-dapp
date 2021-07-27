# サンプルTruffle-Vue DApp
以下を参考に、Dockerfileを用いて環境構築、本番へのデプロイ可能なDAppを作成しました。  
ref. https://www.trufflesuite.com/boxes/drizzle-vue-box


## Development
```
docker build . -t truffle-vue-tutrial
```
### For Linux
```
docker run --rm --network host -v `pwd`:/home -it truffle-vue-tutrial bash
```
#### Deploy SmartContract
```
truffle develop
migrate
.exit
```
#### Start Frontend Server
```
cd vapp
npm run serve
```