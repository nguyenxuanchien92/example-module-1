let str = "dhqiowdoasncaoiqqweoiaisd";
let vowel = [];

function countVowel(str) {

    for (let i = 0; i < str.length; i++) {

        let val = str[i] === "u" ||  str[i] === "e" || str[i] === "o" || str[i] === "a" || str[i] === "i";

        if(val){
            vowel.push(str[i]);
        }
    }
    console.log(`Count vowel: ${vowel.length}`);
}

countVowel(str);