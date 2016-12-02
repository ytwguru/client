import React from "react";
import "./styles.less";

import Header from "../../../components/Header";
import Member from "../../../components/Member";
import MidBreaker from "../../../components/MidBreaker";
import Preloader from "../../../components/Preloader";
import Footer from "../../../components/Footer";
import Quote from "../../../components/Quote";


export default React.createClass({
  getMemberData : function(){
    return {
      name : "Yomi Toba",
      title : "Co-Founder / CEO",
      profilePicture : "http://cdn.ytadvisors.com/images/team/yomi.gif",
      links : [
        { facebook : "http://www.facebook.com/yomi.toba.39"},
        { twitter : "http://www.twitter.com/ytwguru" },
        { google : "http://plus.google.com/109638795509632465576" },
        { linkedin : "http://www.linkedin.com/in/yomi-toba-569884a" }
      ],
      address : `YT Advisors<br/>
                7733 Forsyth Blvd. Suite 1100<br/>
                Clayton, MO. 63105 USA <br/>`,
      phone : "314.669.1750",
      fax : "314.652.2092",
      bio : `<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum risus in nibh maximus ornare. Duis tincidunt dui ac ornare laoreet. Donec suscipit maximus enim, vel eleifend nisl volutpat quis. Duis dignissim lacus porta tristique auctor. Proin finibus est efficitur, fringilla leo eget, tempor augue. Nunc sit amet tristique mauris, nec porta risus. Donec imperdiet neque sit amet nunc finibus, in viverra arcu aliquam. Nullam sed lacus sapien. Donec in ligula placerat nulla posuere efficitur.</p>
             <p>Quisque non risus et urna facilisis tempor sit amet vel ipsum. Mauris suscipit viverra nibh ut pulvinar. Aenean congue pellentesque nunc non sagittis. Vivamus nulla lacus, tincidunt vitae ex eget, blandit sagittis magna. Pellentesque est urna, hendrerit non turpis hendrerit, vehicula feugiat leo. Integer fermentum ipsum et risus venenatis porttitor. Sed non interdum erat, ut rhoncus nisl. Donec commodo sem vel lacus interdum hendrerit eget at nulla. Aenean commodo, massa quis scelerisque fringilla, eros turpis sodales dolor, a ultricies enim nisl et tortor. Nulla auctor, lorem luctus vehicula tincidunt, nibh lectus tincidunt sapien, faucibus tincidunt arcu mi tincidunt sem. Praesent vehicula scelerisque felis et tempus. Ut sit amet dapibus dolor, at bibendum ex. Nam libero justo, pretium eu lacus eu, ultrices porttitor arcu.</p>
             <p>Aenean eu sollicitudin ante, a feugiat mauris. Nullam ut mauris efficitur, tincidunt tellus vel, elementum nunc. Nullam quis nulla quis turpis sollicitudin aliquam. Duis eleifend magna at urna rhoncus, vitae venenatis enim fringilla. Etiam dapibus metus rhoncus augue semper, in fringilla neque sodales. Aenean quis porta augue, iaculis congue ipsum. Donec sit amet dui suscipit, volutpat neque tempus, egestas turpis. Ut sit amet tellus orci. Ut sagittis lectus molestie, ultricies diam nec, rhoncus tellus. Aliquam euismod sollicitudin felis sed vehicula. Maecenas sodales velit vel pellentesque accumsan. Praesent sit amet purus sollicitudin sem consectetur gravida. Aenean malesuada eros in dolor viverra, sit amet tristique ligula ornare. Aliquam vehicula, lorem pulvinar feugiat molestie, arcu enim faucibus neque, vitae pellentesque magna ex ac odio.</p>
             <p>Pellentesque eu leo non arcu interdum volutpat. Praesent luctus vehicula metus at molestie. Maecenas eros justo, hendrerit sed lectus sed, blandit ornare ex. Vivamus magna risus, laoreet vitae viverra non, iaculis sit amet ipsum. In fringilla nulla vitae pulvinar placerat. Nunc lobortis augue sit amet euismod scelerisque. Etiam ultrices scelerisque dolor, ut pretium dolor tincidunt id. Quisque viverra efficitur libero, in efficitur massa pulvinar eu. Sed vel rutrum ante, eu varius mi. Cras tristique pretium dui in cursus. Sed pellentesque enim ac erat pulvinar semper.</p></div>`
    };
  },
  render : function() {
    return <div>
      <Preloader >
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header data={{page : "team"}}>
        </Header>
        <MidBreaker data={{id : "paralaxSlice9"   }}>
        </MidBreaker>
        <Member data={this.getMemberData()}>
        </Member>
      </div> 
      <Quote data={{ color: "color4" }}>
      </Quote>
      <Footer>
      </Footer>
    </div>
  }
});