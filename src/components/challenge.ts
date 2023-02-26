import {Game} from "./game";


const game = new Game("ws://35.219.136.219:8080/")

game.onQuestion((question) => {

    if(question === "Quel est ton nom jeune voyageur ?") {
        return "John Doe" // TODO : Mettez votre vrai nom ici ;)
    }

    return "C'est la Mer Noire !"

})

export default game