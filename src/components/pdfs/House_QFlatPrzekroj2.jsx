import Resources from "../Resources";
import React from "react";
import PDFViewer from "pdf-viewer-reactjs";
import { Component } from "react";

class House_QFlatPrzekroj2 extends React.Component {
  render() {
    return (
      <div>
        <PDFViewer
          id={Resources.parterFlat}
          hideNavbar={true}
          rotationAngle={0}
          scale={0.5}
          document={{
            url: `${Resources.przekroj2Flat}`,
          }}
        />
      </div>
    );
  }
}
export default House_QFlatPrzekroj2;
