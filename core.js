class PerformanceOptimizer {
    constructor() {
        this.dataCache = {};
    }

    optimizeData(data) {
        const key = this._generateKey(data);
        if (this.dataCache[key]) {
            return this.dataCache[key];
        }
        const optimized = this._processData(data);
        this.dataCache[key] = optimized;
        return optimized;
    }

    _generateKey(data) {
        return JSON.stringify(data);
    }

    _processData(data) {
        return data.map(item => {
            return {
                id: item.id,
                value: item.value * 2 
            };
        });
    }
}

module.exports = new PerformanceOptimizer();