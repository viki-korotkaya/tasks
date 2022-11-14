const sameCase = (a,b) => {
    if (!/^[a-zA-Z]$/.test(a) || !/^[a-zA-Z]$/.test(b)){
        return -1;
    } 
    if (/[A-Z]/.test(a) === /[A-Z]/.test(b)) {
        return 1;
    }
    return 0;
}