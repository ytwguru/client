import React from "react";
import "./styles.less";

import Header from "../../../components/Header";


export default React.createClass({
  render : () => (
    <div>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "members"}}>
        </Header>
      </div>
    </div>
  )
});
