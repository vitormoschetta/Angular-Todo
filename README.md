
## Add JSON Server and JSON Auth
```
npm install -D json-server json-server-auth
```


Add **db.json** file schema:
```
{
  "users": [ ],
  "todos": [ ]
}
```

Update package.json **scripts** session:
```
"scripts": {
    ...   
    "server": "json-server db.json -m ./node_modules/json-server-auth --port 2001"
},
```

Execute JSON Server:
```
yarn server
```

<br>
<br>


## Deploy Firebase Hosting

Install firebase tools:
```
npm install -g firebase-tools
```


Install firebase tools:
```
firebase login
```


Install firebase tools:
```
firebase init
```

Seguir o passa a passo no terminal, quando concluir:

1. Executar o build para gerar os arquivos estáticos para produção:
```
ng build
```

2. Atualizar o arquivo gerado **firebase.json**:
a propriedade public é o diretório que seu arquivo buildado será encontrado:
```
"public": "dist/todo",
```

3. Efetuar o deploy:
```
firebase deploy
```