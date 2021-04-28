// Pętle

// pętla for (zainicjowanie_zmiennych;  warunek_kończący_wykonywanie_pętli;  zmiana_zmiennych) {
//     kod który zostanie wykonany pewną ilość razy
// }

function example1(){
    for(let i=0; i<=10; i++){
        console.log('Wykonałam się ' + i +' razy');
        
        if(i = 10){
            alert('Pętla for wykonała się 10 razy')
        }
    }
}

 
// Pętla while (dopóki) to kolejny typ pętli, który można spotkać w wielu językach. Struktura tej pętli ma następującą postać:
// while (wyrażenie_sprawdzające_zakończenie_pętli) {
//     ...fragment kodu który będzie powtarzany...
// }
// Zauważ, że w pętli tego typu nie definiujemy ani początkowego licznika, ani nie definiujemy zmiany licznika. Musimy te rzeczy zrobić ręcznie:

function example2(){
    let i = 0;
    while(i<6){
        console.log('Wykonałam się ' + (i + 1) + ' razy');
        i++
    }
}

// zadania https://github.com/kartofelek007/zadania-podstawy/blob/master/2-petle/1-zadania/README.md

function zadanie1(){
    console.log('Zadanie 1');

    for(let i = 1; i<=10; i++){
        console.log(`${i}`);
    }
}

function zadanie2(){
    console.log('Zadanie 2');

    let n = 8;
    let txt = 'Kot ';
    let str = ''; // zmienna pomocnicza

    if(n > 0){
        for(n; n>0; n--){
            str += txt;
        }
        console.log(str);
    }
}

function zadanie3(napis){
    if(napis){
        const symbole = [
            '═', '╔', '╗', '╚', '╝', '║', ' '
        ];

        let dludoscLinii = napis;
        dludoscLinii = napis.length;
        dludoscLinii += 6;

        function linia1(){
            // ╔
            let linia = symbole[1];

            // ========
            for(let i = 0; i<dludoscLinii; i++){
                linia += symbole[0];
            }

            // ╗
            linia += symbole[2];
            return console.log(linia);
        }

        function linia2(){
            // ║
            linia = symbole[5];

            // ' '
            for(let i = 0; i<=2; i++){
                linia += symbole[6];
            }

            //    napis
            linia += napis;

            for(let i = 0; i<=2; i++){
                linia += symbole[6];
            }

            // ║
            linia += symbole[5];
            return console.log(linia);
        }

        function linia3(){
            // ╚
            linia = symbole[3];

            // ========
            for(let i = 0; i<dludoscLinii; i++){
                linia += symbole[0];
            }

            // ╝
            linia += symbole[4];
            return console.log(linia);
        }

        linia1();
        linia2();
        linia3();

        return linia1(), linia2(), linia3();
    }
    else return console.log('Nie podano parametru');
}

let napis = "Nazywam się Rupert";

zadanie3(napis);

function zadanie3_ver1(slice = 20){
    napis = prompt();
    napisZaokr = napis.slice(0, slice);
    return napisZaokr += '...';
}

// zadanie3(zadanie3_ver1(10));