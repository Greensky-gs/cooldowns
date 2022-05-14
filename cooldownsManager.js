const { Collection, Client } = require('discord.js');

class cooldownsManager {
    constructor() {
        this.cooldowns = new Collection();
    }
    /**
     * @param {{ commandName: String, userID: String }} data 
     */
    getId(data) {
        return `${data.commandName}.${data.userID}`;
    }
    /**
     * @param {{ commandName: String, userID: String }} data 
     */
    check(data) {
        let id = this.getId(data);

        return this.cooldowns.has(id);
    }
    /**
     * @param {{ commandName: String, userID: String, time: Number }} data 
     */
    set(data) {
        let id = this.getId(data);

        this.cooldowns.set(id, Date.now() + (data.time * 1000));
        setTimeout(() => {
            this.cooldowns.delete();
        }, data.time * 1000);
        return this.cooldowns.get(id);
    }
    /**
     * @param {{ commandName: String, userID: String }} data 
     */
    remainingTime(data) {
        let id = this.getId(data);

        if (!this.cooldowns.has(id)) return false;

        return (Date.now() - this.cooldowns.get(id)) / 1000;
    }
};

module.exports = cooldownsManager;