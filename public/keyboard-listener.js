export default function createKeyboardListener(document) {

    const state = {
        observers: [],
        playerId: null
    }

    function registerPlayerId(playerId){
        state.playerId = playerId
    }

    function subscribe(observerFunction) {
        
        var add = true

        for (const observer in state.observers){            
            if (state.observers[observer] == observerFunction) {
                add = false
            }
        }
        
        if (add){
            state.observers.push(observerFunction)
        }
        
    }

    function notifyAll(command) {
        for (const observerFunction of state.observers) {
            observerFunction(command)
        }
    }

    document.addEventListener('keydown', handleKeydown)

    function handleKeydown(event) {
        const keyPressed = event.key
        
        const command = {
            type: 'move-player',
            playerId: state.playerId,
            keyPressed
        }

        notifyAll(command)
        
    }

    return {
        subscribe,
        registerPlayerId
    }
}