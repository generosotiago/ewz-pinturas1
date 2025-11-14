# EWZ Pinturas - Website

Website responsivo para EWZ Pinturas - Serviços de limpeza externa e pinturas.

## Tecnologias

- React.js 18
- CSS3 (Responsive Design)
- HTML5

## Instalação

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm start
```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura do Projeto

```
src/
  ├── components/
  │   ├── Header.js          # Cabeçalho com navegação
  │   ├── Hero.js            # Seção hero com CTA
  │   ├── About.js           # Seção sobre nós e serviços
  │   ├── Gallery.js         # Galeria de imagens
  │   ├── Contact.js         # Seção de contato
  │   └── WhatsAppFloat.js   # Botão flutuante do WhatsApp
  ├── App.js                 # Componente principal
  ├── App.css
  ├── index.js
  └── index.css
```

## Funcionalidades

- ✅ Design responsivo (Mobile, Tablet, Desktop)
- ✅ Navegação suave entre seções
- ✅ Integração com WhatsApp
- ✅ Galeria de imagens
- ✅ Botão flutuante do WhatsApp
- ✅ Animações e transições suaves

## Personalização

Para alterar o número do WhatsApp, edite os arquivos:
- `src/components/Hero.js`
- `src/components/Contact.js`
- `src/components/WhatsAppFloat.js`

Substitua `5547997780998` pelo número desejado (formato: código do país + DDD + número, sem caracteres especiais).

