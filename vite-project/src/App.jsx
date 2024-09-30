import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import {
  FaSquareInstagram,
  FaSquareWhatsapp,
  FaSquareFacebook,
} from "react-icons/fa6";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      usuario: "",
      senha: "",
      content: "home",
      content2: "",
    };
  }

  handleChange = (event) => {
    this.setState({ nome: event.target.value });
  };

  handleUsuarioChange = (event) => {
    this.setState({ usuario: event.target.value });
  };

  handleSenhaChange = (event) => {
    this.setState({ senha: event.target.value });
  };

  handleLogin = (event) => {
    event.preventDefault();
    this.setState({ content2: "" });

    if (this.state.usuario === "admin" && this.state.senha === "admin") {
      this.setState({ content: "loggedIn" });
    } else {
      this.setState({ content2: "Username or Password Error" });
    }
  };

  handleContentChange = (newContent) => {
    if (newContent === "login") {
      this.setState({ senha: "", usuario: "" });
    }
    this.setState({ content: newContent });
  };

  renderContent = () => {
    const { content, usuario, senha, content2 } = this.state;

    if (content === "home") {
      return (
        <>
          <div>
            <h1>INICIO</h1>
          </div>
        </>
      );
    } else if (content === "login") {
      return (
        <div className="text-content login">
          <h5>Nome</h5>
          <input
            className="input"
            type="text"
            value={usuario}
            onChange={this.handleUsuarioChange}
          />
          <h5>Senha</h5>
          <input
            className="input"
            type="password"
            value={senha}
            onChange={this.handleSenhaChange}
          />
          <p className="p-error">{content2}</p>
          <button onClick={this.handleLogin}>Login</button>
        </div>
      );
    } else if (content === "loggedIn") {
      return (
        <div className="text-content">
          <h2>Logado</h2>
        </div>
      );
    } else if (content === "receitas") {
      return (
        <>
          <div className="text-content"></div>
          <div className="content">
            <Card />
            <Card />
            <Card />
          </div>
        </>
      );
    }
  };

  render() {
    return (
      <div className="container">
        <nav className="sidebar">
          <img
            className="card-image"
            src="https://via.placeholder.com/180x180"
            alt="Place Holder"
          />
          <a href="#home" onClick={() => this.handleContentChange("home")}>
            Inicio
          </a>
          <a
            href="#receitas"
            onClick={() => this.handleContentChange("receitas")}
          >
            Receitas
          </a>
          <a href="#login" onClick={() => this.handleContentChange("login")}>
            Login
          </a>
        </nav>

        <main className="main">{this.renderContent()}</main>

        <footer className="footer">
          <div className="icon-container">
            <FaSquareInstagram />
            <FaSquareWhatsapp />
            <FaSquareFacebook />
          </div>
          <p>©2023 Copyright: placeholder</p>
        </footer>
      </div>
    );
  }
}
