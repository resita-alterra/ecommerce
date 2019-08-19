import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderPra from "./../components/HeaderPra";
import HeaderPost from "./../components/HeaderPost";
// import novel from "./../assets/img/novel.jpg";
// import komik from "./../assets/img/komik.jpg";
// import pelajaran from "./../assets/img/pelajaran.png";
// import agama from "./../assets/img/agama.jpg";
// import sejarah from "./../assets/img/sejarah.jpg";
// import umum from "./../assets/img/umum.gif";

function Home(props) {
  console.log(props.is_login);
  if (props.is_login == true) {
    return (
      <div>
        <HeaderPost />
        <div className="container">
          <div
            className="row d-flex align-items-center"
            style={{ backgroundColor: "white", height: "84vh" }}
          >
            <div className="col-12 align-self-center text-center">
              <h1 style={{ color: "#8FB2E2", fontSize: 60 }}>
                Selamat datang di UculSo, {props.identitas.user_name}
              </h1>
              <p style={{ fontSize: 20 }}>
                Silahkan melihat koleksi kami di menu koleksi
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <HeaderPra />
        <div className="container">
          <div
            className="row d-flex align-items-center"
            style={{ backgroundColor: "white", height: "84vh" }}
          >
            <div className="col-12 align-self-center text-center">
              <h1 style={{ color: "#8FB2E2", fontSize: 60 }}>
                Selamat datang di UculSo
              </h1>
              <p style={{ fontSize: 20 }}>
                Silahkan melihat koleksi kami di menu koleksi
              </p>
              <p>Untuk berbelanja, anda harus mendaftar terlebih dahulu</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "is_login, identitas",
  actions
)(Home);
