import React from "react";
import { Icon, Row, Card, CardTitle, Col, Divider } from "react-materialize";
import "materialize-css";

const Kontrahenci = () => {
  return (
    <div className="marginTop">
      <Row>
      <Col m={6} s={12} push="m3">
          <Card className=" z-depth-3 klienci orange">
            <div className="center">
              <div className="white-text ">
                <h4>Nasi Kontrahenci</h4>
                <Divider />
                <br></br>
               
              </div>
            </div>
          </Card>
        
             
          <Card
            className="kliencicard z-depth-3"
            actions={[
              <a key="1" href="https://www.colimatic.com/en/">
                website
              </a>,
            ]}
            closeIcon={<Icon>close</Icon>}
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
          >
             <div className="center">
               <img src="https://www.colimatic.com/wp-content/uploads/2018/12/colimatic-logo.png" alt="" width="30%" />
            </div>
            <br/>
            Zakres maszyn pakujących COLIGROUP obejmuje: maszyny z komorą
            próżniową, systemy kombinowane flowpack, maszyny do zamykania tacek
            (traysealery) oraz maszyny do termoformowania. Dostarczamy
            rozbudowane rozwiązania wraz z systemami etykietowania, drukowania i
            dozowania oraz z najnowocześniejszymi robotami . Dzięki temu
            wszystkie systemy pakowania są kompletne, wydajne i wyjątkowe!
            Wszystkie maszyny COLIMATIC są zaprojektowane i spersonalizowane
            zgodnie z dokładnymi wymaganiami naszych klientów
          </Card>
    
          <Card
            className="kliencicard z-depth-3"
            actions={[
              <a key="1" href="https://www.concetti.com/">
                website
              </a>,
            ]}
            closeIcon={<Icon>close</Icon>}
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
          >
            <div>
               <img src="https://www.concetti.com/images/icone_home/logo_concetti.png" alt="" width="30%" />
            </div>
            <br/>
            CONCETTI zapewnia w pełni gotowe systemy, zgodnie ze szczególnymi
            wymaganiami klienta. Oferowane systemy zostały zaprojektowane
            specjalnie dla różnorodnych firm , które wymagają maksymalnej
            elastyczności w obsłudze różnych produktów przy minimalnym czasie
            przeznaczonym na zmianę formatu. Podczas integracji całego systemu,
            wszystkie maszyny są w pełni samo-regulujące. Concetti oferuje
            systemy dozowania, maszyny formujące, napełniające i zamykające
            opakowanie, maszyny do napełniania i zamykania prefabrykowanych
            opakowań, systemy napełniania BIG-BAG, w pełni automatyczne
            paletyzery oraz wiele innych w pełni spersonalizowanych rozwiązań.
          </Card>
        
      
          <Card
            className="kliencicard z-depth-3"
            actions={[
              <a key="1" href="https://www.essegi.com/en/">
                website
              </a>,
            ]}
            closeIcon={<Icon>close</Icon>}
         
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
          >
            <div className="center">
            <img src="https://www.essegi.com/wp-content/uploads/2019/08/logo-350.png" alt="" width="30%" />
            </div>
            <br/>
            ESSEGI jest wiodącą firmą w dziedzinie projektowania i budowania
            pionowych systemów pakowania, pras do belowania, linii mieszających
            do gleby, systemów ważących i automatyki przemysłowej dla różnych
            produktów, obejmujących szeroki zakres wag i formatów. Ponad
            trzydzieści lat doświadczenia pozwoliło ESSEGI na produkcję
            zaawansowanych technologicznie maszyn, a także na budowę wysoko
            wykwalifikowanej i pomocnej sieci sprzedaży, której częścią jest
            firma MADEJPAK- autoryzowany i wyłączny przedstawiciel ESSEGI w
            Polsce.
          </Card>
        
        
          <Card
            className="kliencicard z-depth-3"
            actions={[
              <a key="21" href="https://www.gsp.it/en/">
                website
              </a>,
            
            ]}
            closeIcon={<Icon>close</Icon>}
        
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
            
          >
            <div className="center">
            <img src="https://www.interpack.de/vis-content/event-interpack2020/exh-interpack2020.2594890/interpack-General-System-Pack-S.r.l.-Exhibitor-base-data-interpack2020.2594890-k18L7ibISvyuJDziFZ3SRg.png" alt="" width="30%" />
            </div>
            General System Pack to włoska firma, która projektuje, buduje i
            dostarcza maszyny pakujące oraz automatyczne systemy pakowania od
            prawie trzydziestu lat. Wspólnie wyposażyliśmy w innowacyjne systemy
            i maszyny pakujące setki firm w całym kraju, przyczyniając się tym
            do ich prężnego rozwoju . Możemy poszczycić się długą listą
            zadowolonych klientów. Nasi klienci to firmy działające praktycznie
            we wszystkich możliwych gałęziach przemysłu.
          </Card>
        
      
        
          <Card
            className="kliencicard z-depth-3"
            actions={[
              <a key="1" href="https://www.tosagroup.com/en/">
                website
              </a>,
            ]}
            closeIcon={<Icon>close</Icon>}
            horizontal
          >
              <div className="center">
               <img src="https://www.tosagroup.com/wp-content/uploads/2017/10/logo-tosa.png" alt="" width="30%" />
            </div>
            TOSA jest włoską grupą, należącą do liderów na międzynarodowym
rynku urządzeń „END-OF-LINE”.
Dzięki trzem markom TOSA, MIMI i CMR jesteśmy w stanie zaspokoić
każdą potrzebę stabilizacji i bezpieczeństwa ładunków, niezależnie od tego,
czy są na paletach, czy nie, dzięki naszej pełnej gamie maszyn do owijania,
maszyn do wiązania (paskowania) i obkurczania.
          </Card>
        </Col>
     

      </Row>
    </div>
  );
};
export default Kontrahenci;
