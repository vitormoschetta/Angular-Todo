## Deploy Firebase Hosting

Install firebase tools:
```
npm install -g firebase-tools
```


Install firebase tools:
```
firebase login
```


Setting firebase files:
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

<br>
<br>

## Deploy Firebase Hosting - GitHub Actions


Setting firebase files:
```
firebase init hosting:github
```

Seguir o passo a passo no terminal, entre eles:

1. Vai abrir uma página para login no GitHub
2. Vai pedir para selecionar o projeto do GitHub no terminal
....


No final, uma pasta com nome **github** será gerada na raíz do projeto. Ela contém arquivos de extenção `.yml`, que são utilizados pelo github actions para especificar um fluxo de CD (continuous deployment). 



<br>
<br>

## Backend API Using:

<https://mockapi.io/>

