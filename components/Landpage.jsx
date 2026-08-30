"use client";

import React, { useState } from "react";
import Image from "next/image";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import "./Landpage.css";

const MENU_ITEMS = ["Projetos", "Sobre mim", "Depoimentos", "Contato"];

export default function Landpage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="landpage">
      {/* Fundo — Capa.jpg cobrindo toda a landing page */}
      <Image
        className="landpage__bg"
        src="/images/Capa.jpg"
        alt=""
        fill
        quality={100}
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />

      {/* Header: troca ESCURO <-> CLARO no hover, só em CSS */}
      <div className="landpage__header-hitbox">
        {/* header ESCURO — visível por padrão */}
        <div className="header header--escuro">
          <div className="header__icon-btn header__icon-btn--left">
            <Image
              src="/images/Burger_escuro.png"
              alt="Menu"
              width={43}
              height={43}
              quality={100}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <div className="header__logo-frame">
            <Image
              src="/images/Logo_escuro.png"
              alt="Gabriela Viana"
              width={165}
              height={120}
              quality={100}
              priority
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <div className="header__icon-btn header__icon-btn--right">
            <Image
              src="/images/Telefone_escuro.png"
              alt="Telefone"
              width={43}
              height={43}
              quality={100}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* header CLARO — aparece só no hover */}
        <div className="header header--claro">
          <div className="header__overlay-bg" />

          <button
            type="button"
            className="header__icon-btn header__icon-btn--left header__icon-btn--button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <Image
              src="/images/Burger_claro.png"
              alt=""
              width={43}
              height={43}
              quality={100}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </button>

          <div className="header__logo-frame">
            <Image
              src="/images/Logo_claro.png"
              alt="Gabriela Viana"
              width={165}
              height={120}
              quality={100}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <div className="header__icon-btn header__icon-btn--right">
            <Image
              src="/images/Telefone_claro.png"
              alt="Telefone"
              width={43}
              height={43}
              quality={100}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>

          {menuOpen && (
            <nav className="header__menu">
              {MENU_ITEMS.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="header__menu-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>

      {/* MAIN */}
      <div className="landpage__main">
        <p className="landpage__eyebrow">
          BRANDING / DIREÇÃO DE ARTE / IDENTIDADE VISUAL
        </p>
        <p className="landpage__cta">TRABALHOS</p>
        <div className="landpage__arrow">
          <ArrowDownIcon size={40} color="#f1f2f8" />
        </div>
      </div>
    </section>
  );
}
