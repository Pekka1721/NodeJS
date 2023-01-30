const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user)
//uptime of system

//knowing different os module methods assigining to object called curentOs
console.log(`The system Uptime is ${os.uptime} seconds`)
const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs);