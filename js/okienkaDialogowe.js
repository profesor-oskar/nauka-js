// Okna dialogowe (metody obiektu window)
// alert, confirm, prompt 

// alert(' zostaje wyświetlone okienko z komunikatem i przyciskiem OK. Po kliknięciu przycisku nie zostaje zwrócona żadna wartość, tak więc okno to nadaje się tylko do informowania użytkownika o pewnych zdarzeniach. Zaznaczyć trzeba, że nie ma możliwości zmiany tytułu tego okna (jest zależny od przeglądarki), a tylko treści jakie to okienko wyświetla.');

alert('Przykładowy alert');

// confirm('Okienko confirm służy do tego, aby użytkownik coś potwierdził (stąd nazwa confirm). Do funkcji confirm() przekazywany jest tylko jeden parametr zawierający treść jaka będzie wyświetlana w okienku. Okienko to wyświetla dwa guziki: OK i ANULUJ (cancel). W zależności od tego który guzik został kliknięty przez użytkownika, metoda ta zwróci true lub false.');

if(confirm('Wybierz Ok lub Anuluj')){
    console.log('Confirm OK');
}
else{
    console.log('Confirm Cancel');
}

// Do funkcji prompt przekazujemy dwa parametry - jeden jest treścią, która będzie wyświetlana w okienku, a drugi jest domyślną wartością, która będzie wyświetlana w polu, w które wpisujemy tekst. Jeżeli użytkownik kliknie [ANULUJ], zostanie zwrócona wartość null, w przeciwnym razie zostanie zwrócona wartość wpisana w pole okienka.

const imie = prompt('Podaj swoje Imię', '');
if(imie){
    alert(`Masz na imię $imie`);
}
else{
    alert('Czemu wybrałeś anuluj?')
}