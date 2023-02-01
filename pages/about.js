import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Este Projeto foi criado por apenas uma pessoa chamada, Gabriel bixpo
        afim de melhorar seus conhecimentos de programação e da linguagem next,
        foi um projeto que criei com muito carinho e um dos projetos que mais
        gostei de desenvolver espero que vocês gostem dele, aceito críticas
        contrutivas e melhoras para o site.
        <Image
          src="/images/charizard.png"
          width="250"
          height="250"
          alt="Charizard"
        />
      </p>
    </div>
  );
}
