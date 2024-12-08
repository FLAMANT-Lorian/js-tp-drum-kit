# Drum Kit 🎶

> JS exercise given at HEPL

* * *

**js-tp-drum-kit** is an educational project, which will be used for `JS` courses.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège,
Belgium, is a french-speaking school. From this point, the instruction will be in french. Sorry.

* * *

> Lors de vos cours de *web*, vous allez découvrir le langage *JavaScript* et le mettre en pratique pour apprendre à
> rendre vos pages web interactives.

* * *

Vous pouvez consulter une version finale du projet [ici](https://hepl-dcc.github.io/js-tp-drum-kit/).

## Énoncé

![readme](./readme.gif)

*Bim bam boom* 🎶 🎵, le tout avec des couleurs. Dans le cadre de cet exercice, nous vous demandons de jouer un son
particulier quand l'utiliser presse les touches visibles à l'écran. De plus, la couleur de fond change pendant un bref
instant.

## Aides

Quand l'utilisateur presse une touche  :

1. Il faut vérifier si cette touche est *connue*.
2. SI oui, alors il faut jouer l'audio associé. Attention d'assurer une cohérence quand l'utilisateur presse une seconde
   fois la touche alors que l'audio précédent n'est pas encore complètement joué.
3. De plus, il faut ajouter la classe `playing` à l'élément `.key` qu'il faudra retirer quand la transition css se
   termine. Cf. [transitionend](https://developer.mozilla.org/fr/docs/Web/Events/transitionend)
1. Changer la couleur de fond de l'élément `body` en ajoutant la classe qui porte le nom de la touche. Ex: si l'on
   presse la touche  `s` alors il faut ajouter la classe `s` à l'élément `body`.
2. Permettre la même chose mais au click.

## Quelques ressources 👌

[keycode.info](http://keycode.info)

[keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)  ⚠️ à lire !

[data-*](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/data-*)

[currentTime](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime)

[play()](https://developer.mozilla.org/fr/docs/Web/API/HTMLMediaElement/play)

## Source

[JavaScript30](https://javascript30.com) de [Wes Bos](https://wesbos.com)
