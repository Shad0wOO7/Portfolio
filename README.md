# Portfolio — Edi TUTONDA

Portfolio personnel moderne, sobre et responsive développé avec **React**, **TypeScript**, **Vite** et **Tailwind CSS**. Conçu pour présenter mes compétences, mes projets académiques et mon parcours d'étudiant en informatique.

---

## 🚀 Technologies utilisées

- **Framework Front-End** : [React 19](https://react.dev/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Outillage & Build** : [Vite](https://vitejs.dev/)
- **Styling** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Hébergement cible** : [Cloudflare Pages](https://pages.cloudflare.com/) (100% gratuit)

---

## 🎨 Direction artistique & Charte graphique

- **Fond principal** : Blanc épuré (`bg-white`) avec légères touches de gris clair (`bg-gray-50/60`).
- **Couleur d'accentuation** : Violet moderne (`#7C3AED` / `violet-600`).
- **Typographie & Lisibilité** : Hiérarchie soignée, contrastes accessibles et micro-interactions discrètes au survol.
- **Transparence & Éthique** : Niveaux de compétences clairs et statut des projets affiché sans exagération d'expérience.

---

## 📂 Structure du projet

```text
├── public/                 # Assets statiques (avatar, motifs de fond)
├── src/
│   ├── components/         # Composants modulaires et réutilisables
│   │   ├── Navbar.tsx      # Barre de navigation responsive avec menu mobile
│   │   ├── Hero.tsx        # En-tête principal & accroche
│   │   ├── About.tsx       # Section à propos & points forts
│   │   ├── Skills.tsx      # Compétences avec niveaux honnêtes
│   │   ├── Projects.tsx    # Projets avec étiquettes, liens GitHub & aperçu
│   │   ├── Education.tsx   # Parcours académique (ULC-ICAM)
│   │   ├── Certifications.tsx # Axes d'apprentissage & certifications visées
│   │   ├── Technologies.tsx # Grille des outils & technologies
│   │   ├── Contact.tsx     # Coordonnées (Email, Tél/WhatsApp, Formulaire)
│   │   ├── Footer.tsx      # Pied de page
│   │   └── icons.tsx       # Icônes SVG personnalisées (GitHub, LinkedIn)
│   ├── data/
│   │   └── content.ts      # TOUT le contenu textuel centralisé et modifiable
│   ├── App.tsx             # Assemblage des sections
│   ├── index.css           # Imports Tailwind & styles globaux
│   └── main.tsx            # Point d'entrée React
├── index.html              # Fichier HTML principal avec balises meta SEO
├── package.json            # Dépendances et scripts npm
├── tsconfig.json           # Configuration TypeScript
└── vite.config.ts          # Configuration Vite
```

---

## 🛠️ Installation et lancement local

### 1. Prérequis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- `npm` ou `pnpm`

### 2. Cloner le dépôt
```bash
git clone https://github.com/Shad0wOO7/<nom-du-repo>.git
cd "FUTUR BASE POUR PORTFOLIO"
```

### 3. Installer les dépendances
```bash
npm install
```

### 4. Démarrer le serveur de développement
```bash
npm run dev
```
Ouvrez ensuite votre navigateur à l'adresse indiquée (habituellement `http://localhost:5173`).

### 5. Compiler pour la production
```bash
npm run build
```
Les fichiers prêts pour la mise en ligne sont générés dans le dossier `dist/`.

---

## ✏️ Comment personnaliser vos informations ?

Toutes vos données sont **centralisées dans un seul fichier** :
👉 [`src/data/content.ts`](src/data/content.ts)

Pour modifier vos coordonnées, vos compétences, vos projets ou votre biographie :
1. Ouvrez `src/data/content.ts`.
2. Modifiez l'objet `profile` (email, téléphone, liens GitHub et LinkedIn).
3. Modifiez ou ajoutez des compétences dans `skillCategories` en ajustant les niveaux.
4. Ajoutez vos nouveaux projets dans la liste `projects` avec vos URLs de dépôts GitHub.
5. Sauvegardez : les changements s'appliquent immédiatement !

---

## ☁️ Déploiement gratuit sur Cloudflare Pages

Cloudflare Pages offre un hébergement ultra-rapide, mondial et totalement gratuit avec certificat SSL automatique.

### Méthode 1 : Déploiement automatique via GitHub (Recommandé)

1. **Publier le projet sur GitHub** :
   ```bash
   git add .
   git commit -m "feat: portfolio complet Edi TUTONDA"
   git push origin main
   ```
2. Rendez-vous sur le tableau de bord [Cloudflare Dashboard](https://dash.cloudflare.com/).
3. Dans le menu de gauche, cliquez sur **Workers & Pages** > **Create application** > onglet **Pages** > **Connect to Git**.
4. Sélectionnez votre dépôt GitHub `Shad0wOO7/...`.
5. Dans les paramètres de compilation (**Build settings**) :
   - **Framework preset** : `Vite`
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
6. Cliquez sur **Save and Deploy**. Votre site sera en ligne en moins d'une minute sur une adresse `https://<votre-projet>.pages.dev` !

---

### Méthode 2 : Déploiement direct par glisser-déposer (sans Git)

1. Générez les fichiers de production sur votre machine :
   ```bash
   npm run build
   ```
2. Dans [Cloudflare Pages](https://dash.cloudflare.com/), choisissez **Workers & Pages** > **Upload assets**.
3. Donnez un nom à votre projet.
4. Glissez-déposez l'intégralité du contenu du dossier `dist/` dans l'interface Cloudflare.
5. Cliquez sur **Deploy site**.

---

## 📄 Licence

Ce projet est sous licence MIT — vous êtes libre de l'utiliser et de l'adapter pour vos besoins.
