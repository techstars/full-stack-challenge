module.exports = {
    getDate: function() {
        let cur = new Date();

        //LET'S GET FANCY
        curDate = cur.getFullYear() + '-'
        + ('0' + (cur.getMonth() + 1)).slice(-2) + '-'
        + ('0' + cur.getDate()).slice(-2) + ' '
        + ('0' + cur.getHours()).slice(-2) + ':'
        + ('0' + cur.getMinutes()).slice(-2) + ':'
        + ('0' + cur.getSeconds()).slice(-2);
        
        return curDate;    
    },
    logMessage: function(msg) {
        console.log('[' + this.getDate() + '] ',msg);
    }
}