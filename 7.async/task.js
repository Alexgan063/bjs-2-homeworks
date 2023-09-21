class AlarmClock {
    constructor() {
  
      this.alarmCollection = [];
      this.intervalId = null;
    }
  
    addClock(time, callback) {
      if (time == undefined || callback == undefined) {
        throw new Error('Отсутствуют обязательные аргументы');
      }
      if (this.alarmCollection.some((item) => item.time === time)) {
        console.warn('Уже присутствует звонок на это же время');
      }
      
      this.alarmCollection.push({ time, callback, canCall: true });
      console.log('Звонок добавлен');
      return this.alarmCollection;
    }
    removeClock(time) {
      this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
      return this.alarmCollection;
    }
  
    getCurrentFormattedTime() {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
  
      return `${(hours < 10) ? `0${hours}` : hours}:${(minutes < 10) ? `0${minutes}` : minutes}`;
    }
  
    start() {
      if (this.intervalId === null) {
        this.intervalId = setInterval(() => {
          this.alarmCollection.forEach((item) => {
            if (item.time === this.getCurrentFormatedTime && item.canCall) {
              item.canCall = false;
              item.callback();
              //console.log('Звонок прозвенел!\n');
            }
          });
        },1000);
  
        return this.intervalId;
      }
      else {
        //console.warn('Интервал уже запущен');
        return this.intervalId;
      }
    }
  
    stop() {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        //console.log('Интервал остановлен\n');
        return this.intervalId;
      }
      else {
        //console.warn('Интервал не запущен');
        return this.intervalId;
      }
    }
  
    resetAllCalls(){
      this.alarmCollection.forEach(item => item.canCall = true);
      return this.alarmCollection;
    }
    
    clearAlarms(){
      this.stop();
      this.alarmCollection = [];
      return this.alarmCollection;
    }  
  }