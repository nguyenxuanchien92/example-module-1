let str = ["n", "a", "o", "n", "m"];
let vowel = [];


function checkVowel(str) {
    let vowelA = ["u", "e", "o", "a", "i"];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowelA.length; j++) {
            if (str[i] === vowelA[j]) {
                vowel.push(str[i]);
            }
        }
    }
}

function show() {
    let boolean = checkVowel(str);

        console.log(`Count vowel: ${vowel.length}`);


}

show();