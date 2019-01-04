"use strickt"

class generatorHash{
	constructor (hashLength){
		this.startSymbolCode = 40;
		this.finishSymbolCode = 126;
		if (!isNaN(parseInt(hashLength))){
			this.hashLength = parseInt(hashLength);
			this.generateHash();
		} else{
			this.hash = false;
		}

	}

	generateHash(){
		this.hash = '';
		for (let i = 0; i < this.hashLength; i++){
			this.hash += String.fromCharCode(this.randomInteger(this.startSymbolCode, this.finishSymbolCode));
		}

	}

	randomInteger(min, max) {
	    let rand = min - 0.5 + Math.random() * (max - min + 1)
	    rand = Math.round(rand);
	    return rand;
	 }
}


