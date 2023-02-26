import io, { Socket } from "socket.io-client"

export class Game {
    private giantQuestionEventListener: (question: string) => string;
    private giantTalkEventListeners: ((sentence: string) => void)[];
    private heroTalkEventListeners: ((sentence: string) => void)[];
    private server: string;
    private socket: Socket | null;
    private delay: number;
    private ranksEventListener: null | ((x: {name: string, time: number, level: number}[]) => void);

    constructor(server: string) {
        this.socket = null
        this.server = server
        this.giantQuestionEventListener = () => "C'est la Mer Noire !"
        this.giantTalkEventListeners = []
        this.heroTalkEventListeners = []
        this.delay = 50
        this.ranksEventListener = null
    }

    onGiantTalk(giantAnswerEventListener: (sentence: string) => void) {
        this.giantTalkEventListeners.push(giantAnswerEventListener)
    }

    onHeroTalk(heroAnswerEventListener: (sentence: string) => void) {
        this.heroTalkEventListeners.push(heroAnswerEventListener)
    }

    onQuestion(giantQuestionEventListener: (question: string) => string) {
        this.giantQuestionEventListener = giantQuestionEventListener
    }

    onRanks(ranksEventListener: (ranks: {name: string, time: number, level: number}[]) => void) {
        this.ranksEventListener = ranksEventListener
    }


    start() {
        this.socket = io(this.server)

        this.socket.on("ranks", (ranks) => {
            console.log("@ranks")
            if(this.ranksEventListener) {
                this.ranksEventListener(ranks)
            }

        })

        this.onGiantTalk((sentence) => {

            if(this.ranksEventListener) {
                return
            }

            if(sentence.endsWith("?")) {
                const answer = this.giantQuestionEventListener(sentence)



                    setTimeout(() => {
                    if(!this.socket) return

                    this.socket.emit("sentenceFromTheHero", answer)
                    this.heroTalkEventListeners.forEach(listener => listener(answer))
                    }, this.delay)

            }

        })
        
        this.socket.on("sentenceFromTheGiant", (sentence: string) => {
            this.giantTalkEventListeners.forEach(listener => listener(sentence))
        })

    }

}