const sameCase = (a,b) => {
    if (!/^[a-zA-Z]$/.test(a) || !/^[a-zA-Z]$/.test(b)){
        return -1;
    } 
    if (/[A-Z]/.test(a) === /[A-Z]/.test(b)) {
        return 1;
    }
    return 0;
    //shorter
    if (/[A-Z]/i.test(a) && /[A-Z]/i.test(b)){
        if (/[A-Z]/.test(a) === /[A-Z]/i.test(b)) return 1;
        return 0;
    }
}