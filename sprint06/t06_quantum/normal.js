function calculateTime() {
    let date1 = new Date(1939, 1, 1)
    let now = new Date()

    Date.prototype.years = () => { return now.getFullYear() - date1.getFullYear() }
    Date.prototype.months = () => { return now.getMonth() - date1.getMonth() }
    Date.prototype.days = () => { return now.getDate() - date1.getDate() }

    return date1;
}

module.exports.calculateTime = calculateTime;

