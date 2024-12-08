/*
1. Il faut vérifier si cette touche est connue.

2. SI oui, alors il faut jouer l'audio associé. Attention d'assurer une cohérence quand l'utilisateur presse une seconde fois la touche alors que l'audio précédent n'est pas encore complètement joué.

3. De plus, il faut ajouter la classe playing à l'élément .key qu'il faudra retirer quand la transition css se termine. Cf. transitionend

4. Changer la couleur de fond de l'élément body en ajoutant la classe qui porte le nom de la touche. Ex: si l'on presse la touche s alors il faut ajouter la classe s à l'élément body.
Permettre la même chose mais au click.*/

(function () {
    const drumKit = {
        divElements: document.querySelectorAll('.key'),
        init() {
            document.documentElement.classList.add('js-enabled');
            this.initData();
            this.addEventListeners();
        },
        initData() {
            this.letters = {};
            this.divElements.forEach(divElement => {
                this.letters[divElement.dataset.key] = {
                    audioElement: document.querySelector(`audio[data-key='${divElement.dataset.key}']`),
                    divElement: divElement
                }
            })
        },
        addEventListeners() {
            this.divElements.forEach(divElement => {
                divElement.addEventListener('transitionend', evt => {
                    this.removeClasses(evt);
                });
                divElement.addEventListener('click', evt => {
                    this.addClasses(evt.currentTarget.dataset.key);
                    this.playSound(evt.currentTarget.dataset.key);
                })
            });
            window.addEventListener('keydown', (evt) => {
                this.addClasses(evt.key);
                this.playSound(evt.key);
            });
        },
        addClasses(letter) {
            if (this.letters[letter]) {
                this.letters[letter].divElement.classList.add('playing');
                document.body.classList.add(letter);
            }
        },
        playSound(letter) {
            if (this.letters) {
                this.letters[letter].audioElement.currentTime = 0;
                this.letters[letter].audioElement.play();
            }
        },
        removeClasses(evt) {
            if (evt.propertyName === 'transform') {
                document.body.classList.remove(evt.currentTarget.dataset.key);
                evt.currentTarget.classList.remove('playing');
            }
        }
    }
    drumKit.init();
})();