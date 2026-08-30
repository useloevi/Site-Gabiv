import React from "react";
import Image from "next/image";
import HamburgerIcon from "./icons/HamburgerIcon";
import PhoneIcon from "./icons/PhoneIcon";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import "./Landpage.css";

export default function Landpage() {
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
          <button type="button" className="header__icon-btn header__icon-btn--left" aria-label="Menu">
            <HamburgerIcon size={28} color="#635b85" />
          </button>
          <div className="header__logo-frame">
            <Image
              src="/images/Logo_escuro.png"
              alt="Gabriela Viana"
              width={192}
              height={140}
              quality={100}
              priority
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <button type="button" className="header__icon-btn header__icon-btn--right" aria-label="Telefone">
            <PhoneIcon size={28} color="#635b85" />
          </button>
        </div>

        {/* header CLARO — aparece só no hover */}
        <div className="header header--claro">
          <div className="header__overlay-bg" />
          <button type="button" className="header__icon-btn header__icon-btn--left" aria-label="Menu">
            <HamburgerIcon size={28} color="#f1f2f8" />
          </button>
          <div className="header__logo-frame">
            <Image
              src="/images/Logo_claro.png"
              alt="Gabriela Viana"
              width={192}
              height={140}
              quality={100}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <button type="button" className="header__icon-btn header__icon-btn--right" aria-label="Telefone">
            <PhoneIcon size={28} color="#f1f2f8" />
          </button>
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
