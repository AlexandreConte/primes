## Busca Números Primos

# 🤔 O que é este projeto

Aplicação web Next.Js (framework do ReactJs): Faz uma requisição a api da aplicação, que realiza os cálculos e busca os números primos menores do que o número informado pelo usuário.

# Para rodar o projeto localmente:

1. Installe as dependências:
```
npm install
```

2. Rode o projeto

```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

Informe um número e busque os números primos menores.

# 🖥️ Será necessário ter instalado em sua máquina:
- Node

# ⚙️ Tecnologias usadas no projeto
- NextJs: Framework full stack do ReactJs, que facilita a criação de múltipla páginas e permite SSR (Server-Side Rendering: Renderização do lado do servidor), o que otimiza o SEO, pois os mecanismos de buscas conseguem caracterizar melhor o conteúdo.
- TailwindCSS: Framework CSS baseado em classes, que, ao contrário do Bootstrap, não fornece elementos prontos baseados em classes, fornecendo propriedades CSS como classes.
Um Exemplo de comparação entre CSS puro e TailwindCSS:

```CSS
.secao {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
Enquanto que no TailwindCSS, basta aplicar ao seu elemento HTML as classes:
```HTML
<div class="flex justify-center items-center">
  // Conteúdo
</div>
```

- TypeScript: O superset do JavaScript, fornece tipagem para as variáveis, pode facilitar a escrita de código JavaScript, autocompletando as variáveis do código.

# Como funciona esse projeto?
- A interface gráfica faz uma requisição para a API do website, envia o número informado pelo usuário e encontra os números primos positivos menores que ele, retornando a quantidade de números primos, quais são, e a duração dos cálculos realizados no back-end.

![GIF da pagina](https://github.com/AlexandreConte/primes/assets/84075891/a9de964f-494f-4164-a4aa-26a56c7a21f9)
