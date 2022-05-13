## Qual a diferença entre contexto e estado?

O contexto é um estado global que consigo compartilhar/fornecer por toda a minha aplicação.

O estato ele é responsavel apenas para o escopo lexíco da página onde ele foi criado.

## Quais os benefícios de usar contexto?

Antigamente antes do React implementar o Context API, o desenvolvedores usanvam bastante o conceito de Prop Drilling
que seria o conceito de passar props para cada componente e isso dava muito problema pela questão de que alguns componentes
que eu utilizava não precisava enxergar essa propriedade, mas era "meio que obrigado" a props. Já utilizando o contexto temos um
desenvolvimento linear e sabemos que cada valor está em cada componente que precisamos e caso ocorra algum re-render sabemos que
não vamos ter a perca de valores usando o context, mas na passagem de props sim (Passo por isso atualmente hoje no trabalho Prop Drilling)

Resuminado não preciso trafegar a minha informação para dentro de toda a árvore de componentes da aplicação;

## Quais os benefícios de usar o estado?

O benefícios de ter usar um useState na minha página, é que consigo ter um controle maior sobre os dados daquela página
consigo armazenar os valores anteriores e também alterar esses valores como também acrescentar mais valores no meu valor atual.

## Quais os Downsides de cada um?

useState -> Acredito que a desavantagem atual seria a questão de renderização da tela, caso você não saiba muito bem ter
controle do seu state, ele pode causar um problema de renderização.

useContext -> Não consigo ver atualmente uma desvantagem sobre essa API do React, acredito que se não existir uma boa arquitetura para
a utilização do context possa existir bastante problemas lá na frente.
