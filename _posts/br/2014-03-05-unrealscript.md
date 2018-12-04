---
layout: posts
title: "UnrealScript (UDK)"
date: 2014-03-05
categories: unrealscript udk
lang: br
image: /assets/posts_old/us_logo.jpg
---

UnrealScript é uma linguagem de programação relativamente fácil de aprender, muito parecida com Java ou C#, se você já tem alguma familiaridade com uma destas linguagens, você terá muita facilidade com o UnrealScript.<!--break-->

A linguagem está associada ás ferramentas de desenvolvimento da EpicGames, no caso [UDK/UE](https://www.unrealengine.com/en-US/previous-versions), e existem diferenças entre as versões implementadas na UE 1, UE 2 e UE 3. Ela ainda está alinhada com o jogo [Unreal Trounament](https://www.epicgames.com/unrealtournament/) (UT), disponilibizando diversos recursos para desenvolver jogos parecidos, mas não limitando a isso.

Primeiramente, quando você instala a UDK, você pode escolher entre instalar ou não os Scripts (incluindo códigos fonte, modelos 3D e outros arquivos) do UT, mas não se iluda, você terá apenas uma _Demo_ do jogo, mas caso possuir o jogo completo, é possível integrar. *** - Minha recomendação é que se for sua primeira vez com o UnrealScript, ou se seu projeto tenha uma jogabilidade próxima do UT, ou seja, tiro em primeira pessoa, com modos de jogo, como DeathMatch, Team Death Match... Instale; Caso contrário, dará mais trabalho, mas não instalar os scripts manterá seu projeto mais limpo, e te ajudará na criação de algo mais original. -  *** Saiba também que é possível encontrar vários Scripts na internet, e é sempre bom dar uma olhada para ter em que se basear, mas não saia apenas copiando e colando, ler o código, decifrá-lo, entendê-lo, é a parte mais importante do processo, assim você terá a possibilidade de modificar e trabalhar com o Script de modo que ele atenda as suas nescessidades.

Sobre a programação, grande parte do seu trabalho será de estender classes, e utilizar as funções e eventos que a UDK te disponibiliza, e modificá-los. Grande parte do UnrealScript se baseia nisso, uma vez que muito daquilo que voce precisa em um jogo, já vem programa e pronto para ser utilizado, mas - em grande maioria dos casos - o que a Engine fornece não faz aquilo que você deseja, ou pelo menos não do jeito que você quer.

O UnrealScript funciona basicamente por hierarquias, você estende uma classe, e a classe filho herdará tudo da classe pai, assim você pode expandir suas funcionalidades - ou seja, orientação à objetos -. Um exemplo:

- A classe _'UTPlayerController'_ é responsável pelo controle do jogador no UT. Logo, ela é estendida da classe _'UDKPlayerController'_, que possui os controles básicos na UDK, que por sua vez, estende da classe _'GamePlayerController'_, que é a base dos controladores de clientes; esta última classe estende da _'PlayerController'_ que possui todas as propriedades e funções dos controladores de jogadores (Administradores ou clientes); A _'PlayerController'_, estende da classe _'Controller'_, que possui as propriedades de controle para jogadores e I.A.; ela estende da classe _'Actor'_, que estende da _'Object'_, da qual todos as classes do UnrealScript extendem, e que possui todas as propriedades e funções dos objetos do jogo.

Dominando do paradigma de Orientação à Objetos, você dominará o UnrealScript.

De início recomendo alguns sites de tutoriais:

Em português:

- O blog [Romero Games](http://romerogames.blogspot.com.br/search/label/UnrealScript), que também possui sua versão em [inglês](http://romerounrealscript.blogspot.com.br/p/table-of-contents.html).
- E o blog do [UDKBrasil](http://udkbrasil.blogspot.com.br/), que possui vários tutoriais, em português e inglês.

Em inglês, a gama de conteúdo é bem mais, então citarei apenas meus favoritos:

- Primeiramente, é essencial que você conheça a documentação do [UDK](https://docs.unrealengine.com/udk/Three/WebHome.html) e do [UnrealScript](https://docs.unrealengine.com/udk/Three/UnrealScriptHome.html).
- A [Unreal Wiki](https://wiki.unrealengine.com/Main_Page) é um ótimo site para consultas rápidas.
- Possuindo vários tutoriais, [Hourences](http://www.hourences.com/).
- Possuindo vários tutoriais, claros e ajudam de mais, [Mougli](http://www.moug-portfolio.info/).
- Mais alguns sites que podem ajudar: [Max Giganti](http://maxpgiganti.com/), [Christopher Albeluhn](http://www.chrisalbeluhn.com/work.html), [Nick Urko](http://www.nickurko.com/).

Se você possui dúvidas em geral, o melhor lugar que existe para procurar ajuda é no [Fórum da Epic Games, na seção UDK](https://forums.epicgames.com/udk). Também fique avontade para me enviar uma mensagem.

