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
        <Col m={6} s={12} push="m3">
          <Card className="orange darken-1 z-depth-2 klienci">
            <div className="center white-text">
              <h4>Nasze certyfikaty</h4>
              <Divider />
            </div>
          </Card>
          <Card
            className="kliencicard z-depth-2"
            actions={[<h5 className="right">Certyfikat 1</h5>]}
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle image="https://www.finn.pl/ltc-root-ca/img/cert.png" />
            }
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
          >
            "super super supersuper super supersuper super supersuper super
            supersuper super super"
          </Card>
          <Card
            className="kliencicard z-depth-2"
            actions={[<h5 className="right">Certyfikat 1</h5>]}
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle image="https://www.finn.pl/ltc-root-ca/img/cert.png" />
            }
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
          >
            "super super supersuper super supersuper super supersuper super
            supersuper super super"
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Certyfikaty;
