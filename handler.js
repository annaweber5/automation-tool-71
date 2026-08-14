class Handler {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
        this.bindEvents();
    }
    bindEvents() {
        this.eventEmitter.on('start', this.onStart.bind(this));
        this.eventEmitter.on('stop', this.onStop.bind(this));
    }
    onStart(data) {
        console.log('Handler started with data:', data);
    }
    onStop() {
        console.log('Handler stopped');
    }
    dispose() {
        this.eventEmitter.off('start', this.onStart);
        this.eventEmitter.off('stop', this.onStop);
    }
}

module.exports = Handler;