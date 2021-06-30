import React from "react";
import {
  Table,
  Divider,
  Icon,
  Row,
  CardPanel,
  Card,
  CardTitle,
  Col,
  Slider,
  Slide,
  Caption,
} from "react-materialize";
import "materialize-css";

const Certyfikaty = () => {
  return (
    <div>
      <Row>
          <Col s={12} m={10} l={8} push="m1 l2">
          <br/><br/><br/><br/>
<br/> <h3> FUNDAMENTY </h3>
<br/><h5 className="orange-text">Ogólny opis</h5>
<br/><div className="black-text">Fundamenty wykonane są w technologii suchej, z mikro pali stalowych, galwanizowanych (rozłożone co około 3m).</div>
<br/><h5 className="orange-text">Główne zalety</h5>
<br/>Montaż nawet w ciągu 24 godzin.
<br/>Montaż w trudno-dostępnych warunkach
<br/>Możliwość użycia tych fundamentów w różnych warunkach glebowych (nawet na wysypisku). 
<br/>Mały wpływ na środowisko (jest precedens użycia tych fundamentów  w obszarze chronionym NATURA 2000)
<br/>Obniżony embodied carbon - nie używamy dużej ilości betonu
<br/>Ograniczono kopanie w gruncie
<br/>Podobne fundamenty często stosuje się w masztach telekomunikacyjnych
<h3> KONSTRUKCJA </h3>
<br/><h5 className="orange-text">Główne zalety</h5>
<br/>Konstrukcję wykonano z drewna klejonego oraz belek w technologii poist joist.
<br/><h5 className="orange-text">Główne zalety</h5>
<br/>Montaż nawet w ciągu kilku dni.
<br/>Konstrukcja pozwala na zmianę układu pomieszczeń wewnątrz budynku.
<br/>Lekka Konstrukcja - mniej obciąża grunt
<br/>Ekologiczny materiał

<h3> ŚCIANY ZEWNĘTRZNE </h3>
<br/><h5 className="orange-text">Główne zalety</h5>
<br/>Ściany wykonano z paneli warstwowych, płyt G-K, wybranego przez inwestora wykończenia elewacji.
<br/><h5 className="orange-text">Główne zalety</h5>
<br/>Montaż nawet w ciągu kilku dni.
<br/>Prefabrykowane elementy - wysoka kontrola jakości.
<br/>Lekki materiał - mniej obciąża grunt.
<br/>Możliwość zmiany wyglądu elewacji w przyszłości.
<br/>Możliwości dodania okien/drzwi w przyszłości.
<br/>Świetna termoizolacja - wykorzystuje się podobne panele w chłodniach.
<br/>Szczelne połączenia, szczególnie istotne na dachu.
<br/>Ekologiczny proces produkcji i montażu - mało odpadów.
{/* <br/>Istotne dla nas podczas procesu inwestycyjnego
<br/>Potrzebujemy adresu 
<br/>Potrzebujemy czasu realizacji */}
<br/>
<h3> ŚCIANY WEWNĘTRZNE </h3>
<br/><h5 className="orange-text">Główne zalety</h5>
<br/>Ściany wykonano z płyt G-K czerwonych(ogniodopornych, akustycznych) i zielonych (wodoodpornych).
<br/><h5 className="orange-text">Główne zalety</h5>
<br/>Montaż nawet w ciągu kilku dni.
<br/>Przyjazny materiał.
<br/>Możliwość zmiany układu pomieszczeń, drzwi.
<br/>Łatwo dodać, zmienić instalację w ścianach.
<br/>
<br/>
<br/>Instalacje
<br/><h5 className="orange-text">Główne zalety</h5>
<br/>Ogrzewanie - podłogowe, w technologii suchej (bez wylewki)
<br/>Wentylacja - mechaniczna, rekuperacja pozwala na odzyskiwanie ciepła w zimie i schładzanie go w lecie
<br/>Elektryczne - Panele słoneczne z aplikacją na telefon do śledzenia produkcji prądu, gniazdka z pomieszczeniach, punkty świetlne w każdym pomieszczeniu wraz z włącznikami
<br/>Kuchnia - płyta grzewcza, lodówka, pralka, zmywarka, wyciąg (okap), piekarnik
<br/>Łazienka - przygotowano gniazdo pod grzejnik na ręczniki
<br/>Wszystkie jednostki sterujące do instalacji wraz z zasobnikiem na wodę ciepłą znajdują się w jednym pomieszczeniu technicznym
<br/>
<br/><h5 className="orange-text">Główne zalety</h5>
<br/>Wygodne rozplanowanie gniazd elektrycznych
<br/>Dzięki zastosowaniu technologii ścian działowych, łatwo jest zmienić układ instalacji
<br/>Panele słoneczne wraz z falownikiem znajdują się na dachu - małe napięcie na panelach - bezpieczeństwo, panele połączone są równolegle - jak jeden ulegnie zniszczeniu pozostałe dalej działają
<br/>Instalacja wod/kan zajmuje małą część domu - w razie awarii łatwo naprawić
<br/>Ogrzewanie podłogowe na parterze, na poddaszu grzejniki

<br/>
<h3>Okna</h3>
<br/><h5 className="orange-text">Główne zalety</h5>
<br/>Spełniają nowe, wyśrubowane wymogi polskiej normy dotyczące izolacji termicznej
<br/>Duże przeszklenia
<br/>Od salonu okna tarasowe tak zwane HS-y - przesuwne, od strony sypialni okna balkonowe rozwierne.
<br/>Renomowany dostawca - firma AKPO
<br/><h5 className="orange-text">Główne zalety</h5>
<br/>Duże przeszklenia
<br/>Wysoka jakość producenta AKPO - nie dajemy budżetowej stolarki

<br/>
<h3>Cena Obejmuje</h3>
<br/>
<br/>Projekt budowlany typowy/powtarzalny nadzór kierownika budowy oraz prowadzenie dziennika budowy
<br/>Doprowadzenie budynku do stanu deweloperskiego wg standardu wykonawczego  HouseQ, wraz z ujętymi instalacjami wewnętrznymi - koszt robocizny i materiałów wraz z transportem na plac budowy
<br/>Panele Słoneczne wraz z montażem
<br/>Ogrzewanie podłogowe wraz z montażem
<br/>Pompa Ciepła wraz z montażem
<br/>Fundamenty z mikropali
<br/>Stolarka okienna premium aluminiowa
<br/>Zakwaterowanie i transport pracowników uczestniczących w procesie budowy
<br/>Zaplecze sanitarne na placu budowy
<br/>Taras  – świerk skandynawski, dwukrotnie olejowane Flügger U-605
<br/>Punkty elektryczne: 1-8 punkty na pomieszczenie, 2 punkty zewnętrzne, 1 punkt siłowy na budynek
<br/>Instalacja odgromowa
<br/>Montaż osprzętu elektrycznego i tablicy rozdzielczej
<br/>Pomiary rezystancji instalacji i pętli zwarć
<br/>Woda: instalacja z rur PP rozprowadzona w oddzielnej przestrzeni instalacyjnej do punktów odbioru, doprowadzenie do obrysu fundamentów, próba ciśnieniowa, bez podłączenia do opomiarowania
<br/>Kanalizacja: rozprowadzenie rur kanalizacyjnych PCV do punktów odbioru, doprowadzenie do obrysu fundamentów
<br/>Rekuperacja jednostka centralna wraz z rozprowadzeniem przewodów wentylacyjnych, anemostaty w kolorze białym
<br/>
<br/>Harmonogram realizacji inwestycji:
<br/>1. Weryfikacja działki, potwierdzenie możliwości przeprowadzenia zgłoszenia budowy lub konieczności uzyskania pozwolenia na budowę.
<br/>Inwestor w celu wstępnej weryfikacji przekazuje wykonawcy informację dotyczące działki:
<br/>– jednostka ewidencyjna,
<br/>– numer ewidencyjny, obręb, powierzchnia, długość i szerokość,
<br/>– informację czy teren działki objęty jest obowiązującym miejscowym planem zagospodarowania przestrzennego lub czy działka posiada decyzję o warunkach zabudowy)
<br/>Dostarczenie dokumentacji badań podłoża gruntowego wraz z opinią geotechniczną.
<br/>Inwestor na swój koszt zleca wykonanie dokumentacji badań podłoża gruntowego, wyniki badań przedstawia wykonawcy w celu potwierdzenia spełnienia standardowych warunków gruntowych zgodnych z dokumentacją projektową. W przypadku gdy warunki gruntowe są skomplikowane wykonawca weryfikuje sposób posadowienia budynku oraz kosztorys.  
<br/>
<br/>2 . Podpisanie umowy
<br/>Podpisanie umowy następuje po weryfikacji działki (punkt 3.1) oraz po weryfikacji badań podłoża gruntowego (punkt 3.2)
<br/>Dokonanie zgłoszenia lub złożenie wniosku o wydanie pozwolenia na budowę
<br/>Zgłoszenie
<br/>
<br/>Po stronie inwestora:
<br/>– złożenie wniosku zgłoszenia budowy
<br/>– oświadczenie o prawie do dysponowania nieruchomością na cele budowlane
<br/>– dostarczenie mapy zasadniczej lub mapy do celów projektowych
<br/>Po stronie wykonawcy:
<br/>– projekt zagospodarowania działki lub terenu
<br/>– szkice i rysunki
<br/>– opis
<br/>– wykonawca służy pomocą i doświadczeniem w przeprowadzeniu zgłoszenia
<br/>Pozwolenie na budowę
<br/>
<br/>Po stronie inwestora:
<br/>– oświadczenie o prawie do dysponowania nieruchomością na cele budowlane
<br/>– dostarczenie mapy do celów projektowych
<br/>Po stronie wykonawcy:
<br/>– złożenie wniosku o wydanie decyzji o pozwoleniu na budowę
<br/>– opracowanie kompletnego projektu budowlanego stanowiącego podstawę do wydania Decyzji o pozwoleniu na budowę
<br/>oferta na przygotowanie projektu budowlanego zostanie przygotowana na podstawie osobnej umowy pomiędzy inwestorem i wykonawcą.
<br/>Wykonanie robót budowlanych polegających na wybudowaniu budynku na podstawie Dokumentacji Projektowej
<br/>Budynek zostanie wykonany w standardzie określonym w załączniku do umowy, wykonawca ma prawo zlecać wykonanie Robót podwykonawcą, zakres robót określa kosztorys załączony do umowy.
<br/>Przekazanie budynku inwestorowi odbiory
<br/>Strony przystępują do odbioru końcowego Robót w terminie 3 dni od zgłoszenia w formie dokumentowej przez Wykonawcę gotowości do odbioru.
<br/>4. STANDARD WYKONANIA
<br/>Oferta obejmuje kompleksową usługę budowy całorocznego domu „House_Q” wraz z pomocą uzyskania zgłoszenia budowy lub uzyskania pozwolenia na budowę. Oferta obejmuje budowę obiektu w stanie deweloperskim wraz z elementami wykończenia wyszczególnionymi w załączniku do umowy.
<br/>Zakres robót budowlanych i wykończeniowych:
<br/>– Roboty ziemne
<br/>– Wykonanie fundamentów
<br/>– Wykonanie drewnianej konstrukcji budynku
<br/>– Wykonanie izolacji i okładziny zewnętrznej ścian
<br/>– Wykonanie izolacji i okładziny zewnętrznej dachu
<br/>– Wykończenie podłóg
<br/>– Wykończenie sufitów
<br/>– Wykonanie ścian działowych
<br/>– Wykonanie schodów wewnętrznych
<br/>– Montaż stolarki okiennej
<br/>– Wykonanie tarasu
<br/>– Wykonanie wewnętrznych instalacji sanitarnych
<br/>– Wykonanie wewnętrznych instalacji elektrycznych
<br/>– Wykonanie instalacji odgromowej
<br/>5. WYNAGRODZENIE DLA WYKONAWCY HARMONOGRAM PŁATNOŚCI
<br/>30% zaliczka na materiały
<br/>30% zakończona konstrukcja budynku
<br/>20% stan surowy otwarty
<br/>20% roboty wykończeniowe (z oknem)
<br/>UWAGA W ZWIĄZKU Z CZĘSTO ZMIENIAJĄCYMI SIĘ CENAMI MATERIAŁÓW BUDOWLANYCH, CENA ZA DOM MOŻE ULEC ZMIANIE.
<br/>
<h3>Zalety naszego systemu</h3>
<br/>
<br/>Szybkość - prefabrykacja, fundamenty suche, szkielet. Realizacja w 2-4 miesiące.
<br/>Jakość - prefabrykacja, sprawdzone rozwiązania, stolarka premium
<br/>Ekologia - ekologiczne materiały i budowa, odnawialnie zrodla energi, rekuperacja
<br/>Adaptacja - wszystkie ściany wewnętrzne są ścianami działowymi, rózne wykończenia ścian zewnętrznych, możliwość zmiany elewacji w przyszłości, lokalne materiały
<br/>Wymagające działki - możliwość posadowienia na skarpie, małej działce, brak mokrych robót, dojedziemy prawie wszędzie
<br/>Domy Całoroczne i dodatki - komfort, przyjazne dla osób niepełnosprawnych duże przeszklenia, ogrzewanie podłogowe, dom pasywny, garaż, basen, wiata, kuchnia polowa i wiele więcej
<br/>Cena - niższa cena i wyższa jakość niż u konkurencji, brak ukrytych kosztów 
</Col>
      </Row>
    </div>
  );
};
export default Certyfikaty;
