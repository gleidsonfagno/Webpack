# Webpack

- Empacotador de módulos JS
- Utilizado por diversos frameworks modernos como o React, Angular...
- Trabalha com o Node.js

## Instalação

1. Iniciar o projeto no diretório

```bash
npm init -y
```

1. Instalar o Webpack como dependência de desenvolvimento

```bash
npm install --save-dev webpack webpack-cli
```

npx webpack --config webpack.config.js = rodar o webpack

## Trabalhando com HTML

É necessário trabalhar com plugin para ampliar as possibilidades de uso, instalação:

```bash
npm install --save-dev html-webpack-plugin
```

## Adicinando CSS

Para trabalhar com estilos também compensa adicionar algumas extensões.

- node-sass: compilador de sass para node
- sass-loader: carrega para o Webpack compilar
- style-loader: injeta estilos na árvore de objetos (DOM)
- css-loader: interpreta diretivas do CSS (import,..)
- extract: extrai CSS do JS

```bash
npm install --save-dev node-sass sass-loader style-loader css-loader mini-css-extract-plugin
```

- Sistema de módulos
- Gerenciamento de dependências
- Desenvolvimento x Produção

## Melhorando a compatibilidade do JS com Babel

Babel transforma o código JS para uma versão com maior compatibilidade para navegadores antigos

```bash
npm install --save-dev @babel/core @babel/preset-env babel-loader
```

## Trabalhando com imagens

Adicionar file loader

```bash
npm install --save-dev file-loader
```

rodar o projeto

```bash
rodar aotomatico
npm run watch

http-server .\dist
```
