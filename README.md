<div align="center">

  <img src="public/shadow-logo-stacked.svg" alt="SHADOW Logo" width="220" />

  # SHADOW · Edi TUTONDA
  ### Informaticien — Développement Logiciel · IA · Cybersécurité

  [![Site en Ligne](https://img.shields.io/badge/Site%20en%20Ligne-shadow--portfolio--one.vercel.app-7C3AED?style=for-the-badge&logo=vercel&logoColor=white)](https://shadow-portfolio-one.vercel.app/)
  [![GitHub Repository](https://img.shields.io/badge/GitHub-Shad0wOO7%2FPortfolio-black?style=for-the-badge&logo=github)](https://github.com/Shad0wOO7/Portfolio)
  [![License MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

  <p align="center">
    <b>Portfolio officiel moderne, réactif et haut de gamme conçu avec une identité visuelle personnalisée, micro-animations cyberpunk et intégration continue.</b>
  </p>

  <p align="center">
    <a href="https://shadow-portfolio-one.vercel.app/"><strong>🌐 Explorer le site en direct »</strong></a>
  </p>

</div>

---

## 🌟 Présentation

Ce portfolio est l'espace vitrine d'**Edi TUTONDA** (alias **SHADOW**), étudiant en informatique à l'**ULC-ICAM** (Kinshasa, République Démocratique du Congo 🇨🇩), passionné par l'intersection entre le **génie logiciel**, l'**intelligence artificielle** et la **cybersécurité**.

### Points forts du projet :
- 🎨 **Identité de marque sur-mesure (SHADOW)** : Logotype et emblème vectoriel original tracés en SVG pur (`<ShadowLogo />`, `<ShadowEmblem />`).
- ⚡ **Animation Cyberpunk Glitch & Halo** : Effet de dédoublement chromatique périodique (cyan/rouge) et anneau orbital réactif sans aucune dépendance lourde.
- 📱 **Responsive Design 100% Mobile-First** : Grille adaptative 12 colonnes, navigation fluide et mise en page optimisée pour tous les écrans.
- 🚀 **Déploiement Continu Automatique** : Hébergé sur **Vercel** avec intégration Git transparente (tout commit sur `main` est déployé en production en quelques secondes).

---

## 🛠️ Stack Technique

| Domaine | Technologie | Rôle |
| :--- | :--- | :--- |
| **Framework Front-End** | [React 19](https://react.dev/) | Architecture composants réutilisables |
| **Langage** | [TypeScript](https://www.typescriptlang.org/) | Typage strict et maintenabilité |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) | Utilitaires modernes et transitions fluides |
| **Build & Bundler** | [Vite 7](https://vitejs.dev/) | Environnement de développement et compilation ultra-rapide |
| **Icônes** | [Lucide React](https://lucide.dev/) | Iconographie vectorielle cohérente |
| **Hébergement & CDN** | [Vercel](https://vercel.com/) | Déploiement mondial, HTTPS automatique & edge CDN |

---

## 📂 Structure du Répertoire

```text
├── public/                     # Assets statiques & symboles vectoriels
│   ├── shadow-emblem.svg       # Emblème SHADOW vectoriel pur
│   ├── shadow-wordmark.svg     # Typographie SHADOW vectorielle
│   └── shadow-logo-stacked.svg # Logo complet SHADOW
├── src/
│   ├── components/             # Composants React modulaires
│   │   ├── Navbar.tsx          # Navigation fixe avec effet blur & menu mobile
│   │   ├── Hero.tsx            # Section Hero avec vitrine emblème & glitch cyberpunk
│   │   ├── About.tsx           # Parcours, valeurs et vision
│   │   ├── Skills.tsx          # Matrice des compétences
│   │   ├── Projects.tsx        # Réalisations avec tags et dépôts GitHub
│   │   ├── Education.tsx       # Parcours académique (ULC-ICAM)
│   │   ├── Certifications.tsx  # Certifications et axes d'apprentissage
│   │   ├── Technologies.tsx    # Grille des technos & frameworks maîtrisés
│   │   ├── Contact.tsx         # Liens de contact, email et formulaire
│   │   ├── Footer.tsx          # Signature et raccourcis
│   │   ├── ShadowLogo.tsx      # Composant logo dynamique (inline & stacked)
│   │   └── ShadowEmblem.tsx    # Composant emblème vectoriel avec style props
│   ├── data/
│   │   └── content.ts          # Contenu éditorial centralisé (coordonnées, projets, bio)
│   ├── App.tsx                 # Assemblage global des sections
│   ├── index.css               # Imports Tailwind & styles globaux
│   └── main.tsx                # Point d'entrée React
├── vercel.json                 # Configuration de routage SPA pour Vercel
├── index.html                  # Fichier HTML principal avec méta-données SEO
├── package.json                # Dépendances et scripts de build
├── tsconfig.json               # Configuration du compilateur TypeScript
└── vite.config.ts              # Configuration Vite & plugins
```

---

## 🚀 Démarrage Rapide en Local

### 1. Cloner le projet
```bash
git clone https://github.com/Shad0wOO7/Portfolio.git
cd Portfolio
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```
Accédez au site local sur `http://localhost:5173`.

### 4. Compiler pour la production
```bash
npm run build
```
Les fichiers optimisés et minifiés sont générés dans le répertoire `dist/`.

---

## ☁️ Déploiement sur Vercel

Le site est configuré pour un déploiement continu sans friction avec **Vercel** :

1. Toute modification poussée sur la branche principale :
   ```bash
   git add .
   git commit -m "feat: votre mise à jour"
   git push origin main
   ```
2. Vercel détecte automatiquement le push via le webhook GitHub, exécute `npm run build` et met le site à jour en direct sur :
   👉 **[https://shadow-portfolio-one.vercel.app/](https://shadow-portfolio-one.vercel.app/)**

---

## 📬 Contact & Réseaux

- **Développeur** : Edi TUTONDA (**SHADOW**)
- **GitHub** : [@Shad0wOO7](https://github.com/Shad0wOO7)
- **Email** : [edi.tutonda@2030.ulc-icam.com](mailto:edi.tutonda@2030.ulc-icam.com)
- **Localisation** : Kinshasa, République Démocratique du Congo 🇨🇩

---

## 📄 Licence

Ce projet est sous licence [MIT](LICENSE) — libre d'utilisation et d'adaptation.
