new Vue({
    el: "#app",
    data: {
        showGame: false,
        healthYou: 100,
        healthMonster: 100,
        indicatorWidthYou: 100,
        indicatorWidthMonster: 100,
        listActions: ["Are you Ready?", "Yes, My friend"],
        monsterTitle: "it's a big Monster",
        playerTitle: "It's a small you"
    },
    methods: {
        action: function () {
            this.attackYou(3,10);
            this.attackMonster(5,13);
        },
        actionSpecial: function () {
            this.specialAttackYou(7,14);
            this.attackMonster(5,15);
        },
        actionHealth: function () {
            this.healYou(7,12);
            this.attackMonster(3,13);
        },
        attackYou: function (min, max) {
            let x = Math.floor(min + 0.5 + Math.random() * (max - min));
            this.healthMonster -= x;
            this.indicatorWidthMonster -= x;
            this.listActions.push("You dealt " + x + " damage ");
        },
        specialAttackYou: function (min, max) {
            let x = Math.floor(min + 0.5 + Math.random() * (max - min));
            this.healthMonster -= x;
            this.indicatorWidthMonster -= x;
            this.listActions.push("You dealt " + x + " damage ");
        },
        healYou: function (min, max) {
            let x = Math.floor(min + 0.5 + Math.random() * (max - min));
            this.healthYou += x;
            this.indicatorWidthYou += x;
            this.listActions.push("You healed on " + x);
        },
        attackMonster: function (min, max) {
            let x = Math.floor(min + 0.5 + Math.random() * (max - min));
            this.healthYou -= x;
            this.indicatorWidthYou -= x;
            this.listActions.push("Monster dealt " + x + " damage ");
        },
        startNewGame: function () {
                this.healthYou = 100;
                this.healthMonster = 100;
                this.indicatorWidthYou = 100;
                this.indicatorWidthMonster = 100;
                this.listActions = ["Are you Ready?", "Yes, My friend"];
                this.showGame = !this.showGame;
        },
    },
    computed: {
        healthActionYou: function () {

            if (this.indicatorWidthYou <= 0) {
                return {
                    width: 0 + '%',
                }
            } else {
                if (this.indicatorWidthYou >= 100) {
                    this.indicatorWidthYou = 100;
                    return {
                        width: 100 + '%',
                    }
                } else {
                    return {
                        width: this.indicatorWidthYou + '%',
                    }
                }

            }
        },
        healthActionMonster: function () {
            if (this.indicatorWidthMonster <= 0) {
                return {
                    width: 0 + '%',
                }
            } else {
                if (this.indicatorWidthMonster >= 100) {
                    this.indicatorWidthMonster = 100;
                    return {
                        width: 100 + '%',
                    }
                } else {
                    return {
                        width: this.indicatorWidthMonster + '%',
                    }
                }
            }
        }

    },
    watch: {
        healthYou: function () {
            if (this.healthYou >= 100){
                this.healthYou = 100;
            }
            if (this.healthYou <=0) {
                this.healthYou = 100;
                alert("You lost");
                this.showGame = !this.showGame;
            }
        },
        healthMonster: function () {
            if (this.healthMonster >= 100){
                this.healthMonster = 100;
            }
            if (this.healthMonster <=0) {
                this.healthMonster = 100;
                if (this.healthYou >=0){
                    alert("You won");
                    this.showGame = !this.showGame;
                }
            }
        },

    }
});
