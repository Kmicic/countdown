**INSTALACJA I OPIS**
* Rozpakuj repozytorium w dowolnym katalogu dla przykładu rozpakuj w katalogu "Moje Dokumenty"
* Rozpakuj wraz z katalogiem "countdown".
* Otwórz katalog i kliknij otwórz na dokumencie "index.html"
* Otworzy się Twoja przeglądarka i strona odliczająca czas pozostały do wyborów do Parlamentu Europejskiego.
* Jeżeli chcesz uzywać strony jako strony startowej to skopiuj link do strony dla przykładu(U ciebie bedzie inny link): "[file:///F:/Documents/countdown/index.html](file:///F:/Documents/countdown/index.html)". Otwórz "ustawienia" przeglądarki, dla chrome bedzie to link "_**chrome://settings/**_". Poszukaj sekcji "_**Po uruchomieniu**_" i wpisz tam link który skopiowałeś ze schowka. Po każdym nastepnym uruchomieniu okna przeglądarki bedzie działała ta strona.
* Strona jest konfigurowalna i terminy odliczania i tekst można zmieniać.Wykonuje się to modyfikując skrypt w pliku "_**countdown.js**_". Otwórz plik w notatniku i przesuń kursor do linii z fragmentem :
  ```javascript
    data = [{
      date: '2019-05-26 8:00:00',
      desc: 'Wybory do parlamentu europejskiego, wybierz najlepszych.',
      bg: 'plue.jpg',
    },
    {
      date: '2019-10-27 8:00:00',
      desc: 'Wybory do sejmu i senatu, wybierz mądrze.',
      bg: 'gozdziki.jpg',
    }
  ]
  ```
  To jest dtruktura w formacie JSON odpowiedzialna za terminy (linia date:...), wyświetlany tekst(linia desc:...) i wy swietlane tło (linia bg:...). Oczywiscie obraz tła musi się znajdować w katalogu "coundown".
  
  **UWAGA**: zmieniamy tylko zawartość linii pomiędzy apostrofami pojedynczymi. Troche wyjasnienia o formacie JSON (Java Script Object Notation), nawiasy kwadratowe [] ograniczają tablicę objektów, objekty ograniczone są nawiasami klamrowymi[{object},{object}]. Objekty i ich pola z danymi są rozdzelane przecinkami. Pola mają budowę {nazwa: 'dane pola'}.
  W przykładzie są tylko dwa (objekty) z terminami ale można ich wpisać więcej pod jednym warunkiem muszą byc one wpisane chronologicznie datami i narastająco. Skrypt countdown.js analizuje wpisy kolejno i wybiera ten którego termnin w porównaniu z datą bieżącą się nie wyczerpał. Dnia 2019-05-26 o godzinie 8:01:00 system zacznie odliczać automatycznie czas do terminu następnych wyborów. Możesz wpisywać tam inne Twoje terminy.

  **TODO:** Budowa jest prosta i oparta na stylach grid. Stronę startową można rozbudować o ostatnio ogladane strony, strony najczęściej ogladane, wprowadzić wiecej wyszukiwarek, popularnych linków itp. Wszelkie modyfikacje mile widziane. Przydałby się moduł współpracujacy np z kalendarzem Google.

  **Licencja:** Używanie, powielanie, kopiowanie, zmiany oprogramowania są wolne o jakichkolwiek zastrzeżeń licencyjnych. Progam może być używany "tak jak jest" a powielany,kopiowany i zmieniany w każdy dowolny sposób na własny koszt i ryzyko, autor nie ponosi odpowiedzialności za ewentualne szkody wynikłe z używania oprogramowania.
   
