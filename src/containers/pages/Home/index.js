import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import {
  Nav,
  SectionHeader1,
  SectionHeader2,
  SectionArticle,
  SectionSubscribe,
  Footer,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Vovk Kseniia | Lava";
  }

  render() {
    return (
      <>
        <Header>
          <Nav />
          <SectionHeader1 />
          <SectionHeader2 />
        </Header>
        <Main>
          <SectionArticle />
          <SectionSubscribe />
        </Main>
        <Footer />
      </>
    );
  }
}

export default index;
