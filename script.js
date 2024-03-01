// 1.dio: DOM - povezivanje elemenata i njihovo pohranjivanje u varijable
const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');


/* 2.dio: stvaranje funkcije koja provjerava točnost funkcije, 
uspoređuje ju s pomoću reverse i join metoda, unosi elemente u html 
i ukoliko je input prazan treba izbaciti alert 
*/

const checkPalindrome = (input) => {
    // 2a: bitno je kreirati varijablu za uneseni input kako bi se originalni i preokrenuti inputi mogli usporediti
    const originalInput = input; // koji sprema trenutno stanje inputa
    result.replaceChildren(); // koji zamijenjuje djecu elementa result sa ničim, odnosno briše svu djecu 

    // 2b: postavljanje alerta, znači ako je input prazan
    if(input === ""){
        alert('Please input a value');
        return;
    }

    // 2c: provjeravanje svih testov koje input može imati, a da je svejedno palindrom
    // zamijenjuje sve znakove koji nisu slova ili brojevi
    // /[^A-Za-z0-9]/gi - provjerava sva mala i velika slova od a-z i brojeve od 0-9, g - global (kroz svaki dio prolazi), i je caseInsensitive mala i velika slova
    const replaceInput = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let showInput = `<span>${originalInput}</span> ${
        replaceInput === [...replaceInput].reverse().join('') ? 'is' : 'is not'
    } a palindrome.`;

    /*
    [...replaceInput] pretvara replaceInput u niz znakova, znači dijeli ih, ko split()
    .reverse() obrće redoslijed elemenata u nizu.
    .join('') spaja elemente niza natrag u jedan niz. 
    */


    // 2d: dodavanje p elementa i rezultat u html
    const pTag = document.createElement('p');
    pTag.innerHTML = showInput;
    result.appendChild(pTag);

    result.classList.remove('hidden');
}

// 3.dio: dodavanje eventa na gumb, i izvođenje funkcije 

checkBtn.addEventListener('click', () => {
    checkPalindrome(textInput.value);
    // Poziva funkciju checkPalindrome i predaje joj vrijednost unesenu u textInput elementu. 
    // Vrijednost unesena u textInput elementu preuzima se pomoću .value svojstva
    textInput.value = '';
    // Postavlja vrijednost textInput elementa na prazan niz, čime se briše uneseni tekst nakon što se klikne na gumb.
})







