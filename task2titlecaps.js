// 1.Anonymous Function:

let titlecaps = function (caps) {
    let titlecap = [];
    caps = caps.toLowerCase().split(' ')
    for (let i = 0; i < caps.length; i++){
        caps[i] = caps[i].charAt(0).toUpperCase() + caps[i].slice(1);
        caps.join(' ');
        titlecap.push(caps[i]);

    }
        
    return titlecap;
    
}

let caps = ("apple");
console.log(titlecaps(caps));

// 2.IIFE:


console.log(((caps) => {
    let titlecap = [];
    caps = caps.toLowerCase().split(' ')
    for (let i = 0; i < caps.length; i++) {
        caps[i] = caps[i].charAt(0).toUpperCase() + caps[i].slice(1);
        caps.join(' ');
        titlecap.push(caps[i]);

    }

    return titlecap;

})("apple"));


// 3.Arrow Function:

let tcaps = (caps) => {

    let titlecap = [];
    caps = caps.split(' ');
    for (let i = 0; i < caps.length; i++) {
        caps[i] = caps[i].charAt(0).toUpperCase() + caps[i].slice(1);
        caps.join(' ');
        titlecap.push(caps[i]);

    }

    return titlecap;

}
console.log(tcaps('apple'));