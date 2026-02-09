# CLAUDE.md — Maquette Landing Page "Le Jardinier du Vignoble"

## Contexte projet

Tu dois créer la **maquette HTML/CSS** d'une landing page one-page pour un service d'entretien de jardin à destination de particuliers.

**Client :** Jessy Laderriere — Permapaysage (paysagiste à Vallet, Loire-Atlantique)
**Marque dédiée :** "Le Jardinier du Vignoble" — propulsé par Permapaysage
**Domaine cible :** lejardinierduvignoble.fr
**Objectif :** générer des demandes de devis qualifiées auprès de particuliers locaux
**Zone :** 25 km autour de Vallet (44)

Ce n'est PAS une refonte du site Permapaysage. C'est une **page autonome** avec une identité propre, mais qui reprend l'ADN visuel de Permapaysage (palette, ton, esprit). Le client veut repartir de la base de son site existant en termes de charte.

**Site de référence du client :** https://permapaysage.odoo.com/entretien-jardin
**Autre référence mentionnée par le client :** https://menage.shiva.fr/ (approche, pas le style)

---

## Identité de marque

### Nom et positionnement

- Nom principal : **Le Jardinier du Vignoble**
- Mention obligatoire : **"propulsé par Permapaysage"** (en footer ou sous le logo, discret)
- Positionnement : artisan local, éco-responsable, service à la personne, proximité
- Registre : chaleureux, accessible, professionnel sans être corporate

### Palette de couleurs

```
Primaire (vert foncé)     : #3C5A3B  → navbar, titres, CTA, fonds de section foncés
Vert olive / sauge        : #6B7F5E  → sous-titres, accents
Vert clair (accent)       : #8BA87E  → badges, hover, éléments interactifs
Crème / beige (fond)      : #F5F0E8  → fond de page principal
Blanc cassé               : #FAFAF7  → cartes, formulaires
Brun terre (texte)        : #5C4A3A  → paragraphes, texte courant
CTA vert                  : #4A7C59  → boutons d'action
Rouge-orange doux         : #C45B3E  → mise en avant crédit d'impôt, alertes positives
Gris chaud                : #8C8578  → légendes, placeholders
```

**Règle absolue :** zéro bleu, zéro gris froid (`gray-*`, `slate-*`, `zinc-*`), zéro noir pur (`#000`), zéro blanc pur (`#FFF`). Tout reste dans le spectre chaud : vert, brun, crème, terre. Le plus foncé = `earth-900` (#3D2E22), le plus clair = `white` (#FEFDFB).

### Typographie

- **Famille :** sans-serif humaniste — utiliser **Inter** (Google Fonts) comme police principale
- **Titres H1 :** Bold, 36-42px
- **Titres H2 :** Bold, 26-30px
- **Titres H3 :** Semi-bold, 20-22px
- **Corps :** Regular, 16-17px, line-height 1.6-1.7
- **CTA / boutons :** Semi-bold, 16-18px

### Icônes

- **Bibliothèque :** Lucide React (`lucide-react`) — icônes fines, cohérentes, légères
- Utiliser des icônes dans les titres de section, les cartes garanties, les bullet points clés
- **Style :** stroke-width 1.5 ou 2, taille 20-24px, couleur `brand-olive` ou `brand-cta`
- **Jamais** d'emojis natifs (🌱❓📞 etc.) — nulle part, ni titres, ni texte, ni boutons
- Les emojis du site Odoo existant étaient un choix par défaut du template, pas un choix de design. On les remplace systématiquement par des icônes Lucide propres.

Mapping des icônes suggéré :

```
Prestations    → Leaf ou Trees
Garanties      → ShieldCheck
Avis clients   → Star
Zone           → MapPin
FAQ            → HelpCircle
Contact        → MessageSquare ou Send
Téléphone      → Phone
Satisfait      → ThumbsUp ou RefreshCw
Crédit impôt   → BadgePercent ou Wallet
Ponctualité    → Clock
```

---

## Structure de la page (sections dans l'ordre)

### 1. Navbar

- Logo "Le Jardinier du Vignoble" à gauche (depuis `/logos/`)
- Liens d'ancrage : Prestations, Garanties, Avis, Zone, Contact — `text-sm font-medium`, pas d'icônes dans les liens de nav
- Bouton CTA "Obtenir un devis" à droite — `bg-brand-dark text-white rounded-full px-5 py-2`
- Numéro de téléphone cliquable à côté du CTA : icône `Phone` (Lucide, 16px) + numéro en `text-sm`, visible desktop uniquement
- **Sticky** au scroll avec `backdrop-blur-md bg-white/90 shadow-sm` — apparition fluide
- **Mobile :** hamburger (`Menu` icon), slide-in panel ou dropdown. Fermeture avec `X` icon.
- Fond : blanc/crème transparent, pas opaque — le blur fait le travail

### 2. Hero

- **Fond :** vert foncé `brand-dark` avec un **léger grain/texture** CSS (noise subtil ou radial gradient doux vers `brand-cta`) — pas un aplat plat
- **Titre H1 :** "Entretien de jardin à Vallet" — blanc, bold, grande taille
- **Sous-titre :** "Un extérieur impeccable, sans stress" — `brand-cream` ou blanc à 80% opacité, font-weight 400
- **Paragraphe d'accroche :** "Votre jardinier de proximité pour un jardin toujours propre, accueillant et facile à vivre." — taille plus petite, espacement large
- **Badge de réassurance :** chip/pill avec fond `brand-cta` semi-transparent → icône `ShieldCheck` + "Crédit d'impôt 50 % — Devis gratuit, réponse sous 24h"
- **CTA principal :** bouton blanc avec texte `brand-dark`, coins arrondis `rounded-full`, ombre douce, hover → légère élévation + fond crème
- **CTA secondaire (optionnel) :** lien texte "ou appelez-nous au 07 52 62 08 18" avec icône `Phone`, style discret
- Centré, max-width ~700px pour le texte, très aéré
- **Pas d'image hero** — le fond couleur texturé suffit. C'est volontaire, pas un manque.

### 3. Prestations d'entretien

- **Titre :** icône `Leaf` + "Nos prestations d'entretien"
- **Layout :** 2 colonnes sur desktop (`lg:grid-cols-2`), stacked sur mobile
- **Colonne gauche — Contexte :**
  - Texte : zones d'intervention (Vallet, Clisson, Mouzillon, Gorges, Vignoble Nantais)
  - **Chip/badge** avec icône `BadgePercent` : "Éligible au crédit d'impôt de 50 %"
  - Modes de règlement : Virement, CB, CESU, E-CESU, avance immédiate — en petite liste discrète avec icône `Wallet`
- **Colonne droite — Accordéons :**
  - Tonte de pelouse & mulching
  - Débroussaillage
  - Taille de haies, arbustes & fruitiers
  - Désherbage manuel et écoresponsable
  - Entretien des massifs vivaces et fleuris
  - Soufflage & ramassage des feuilles
  - Nettoyage des allées, terrasses et surfaces extérieures
  - Scarification
  - Chaque accordéon : icône `ChevronDown` (rotation au toggle), titre en `font-semibold`, contenu en 1-2 phrases
  - **Transition douce** sur l'ouverture (height + opacity, ~200ms ease)
- **Fond :** `brand-cream` ou très léger vert-gris `#F2F5F0`
- Reprendre les textes du site existant, les raccourcir si besoin

### 4. Garanties

- **Titre :** icône `ShieldCheck` + "Nos garanties pour votre sérénité"
- **Fond :** `brand-dark`, texte blanc
- **3 cartes côte à côte** (`lg:grid-cols-3`, stacked sur mobile) :
  - Icône `RefreshCw` + **Satisfait ou refait** — "Si le résultat ne correspond pas à vos attentes, nous réintervenons sans frais."
  - Icône `BadgePercent` + **Crédit d'impôt clair & immédiat** — "Agrément service à la personne : 50% de crédit d'impôt. Nous vous guidons pour l'avance immédiate."
  - Icône `Clock` + **Toujours à l'heure** — "Nous respectons chaque rendez-vous. Un imprévu ? Vous êtes prévenu 24h à l'avance."
- **Style cartes :** fond `brand-dark` légèrement éclairci (ou `white/5` pour un subtil effet verre), pas de bordure visible, `rounded-xl`, padding généreux
- **Icônes :** taille 32px, couleur `brand-light`, placées au-dessus du titre
- **Titres cartes :** blanc, `font-semibold`, 18-20px
- **Texte cartes :** blanc à 80% opacité, 15-16px

### 5. Avant / Après (optionnel mais recommandé)

- **Titre :** icône `ArrowLeftRight` + "Nos résultats en images"
- Utiliser les montages de `/montage-avant-apres/`
- Format : **slider drag** (barre centrale draggable pour révéler avant/après) — composant React custom simple (`onMouseMove` / `onTouchMove` + `clip-path` ou `overflow`)
- Fallback si trop complexe : side-by-side avec labels "Avant" / "Après" en overlay semi-transparent
- 2-3 exemples max, les plus parlants
- Légende courte sous chaque montage (ex : "Désherbage et remise au propre — Vallet") — `text-brand-muted`, `text-sm`
- **Fond :** blanc `brand-white`
- Si les montages ne sont pas exploitables (qualité trop basse), passer cette section

### 6. Avis clients Google

- **Titre :** icône `Star` + "Ce que disent nos clients"
- **Note globale** en haut : grande note (ex : "4.8/5") + étoiles remplies (`Star` icônes en `brand-accent` ou doré `#D4A843`) + nombre d'avis
- **3-4 cartes d'avis** en grille ou carrousel horizontal sur mobile
- **Style carte :** fond `brand-white`, `rounded-xl`, ombre douce (`shadow-sm`), padding 24px
  - 5 étoiles en haut (petites, dorées)
  - Extrait de l'avis en italique, `text-brand-earth`
  - Nom du client en `font-semibold` + "— Avis Google" en `text-brand-muted text-sm`
  - Petite icône Google (logo G) discrète en coin
- Pour la maquette : utiliser des **avis placeholder réalistes** mais marqués `[Avis réel à intégrer]` dans un commentaire HTML
- **Fond section :** `brand-cream`

### 7. Zone d'intervention (carte)

- **Titre :** icône `MapPin` + "Notre zone d'intervention"
- **Layout :** 2 colonnes — carte à gauche (ou en haut sur mobile), texte à droite
- **Carte :** Google Maps embed (iframe) centré sur Vallet, rayon visible ~25km. Pour la maquette : placeholder gris `rounded-xl` avec texte "[Google Maps — Vallet 44330]" si embed pas encore configuré
- **Texte :**
  - "Nous intervenons dans un rayon de 25 km autour de Vallet"
  - Liste des communes en **tags/chips** : petits pills `rounded-full` fond `brand-cream` texte `brand-earth`, inline-flex wrapping — PAS une liste à puces
  - Communes : Le Loroux-Bottereau, Saint-Julien-de-Concelles, Clisson, Divatte-sur-Loire, Haute-Goulaine, Gorges, Aigrefeuille-sur-Maine, Gétigné, Le Pallet, La Chapelle-Heulin, Le Landreau, Mouzillon
  - Mention en `text-sm text-brand-muted` : "Vous êtes plus loin ? Contactez-nous pour vérifier si nous pouvons intervenir."
- **Fond :** `brand-white`

### 8. FAQ

- **Titre :** icône `HelpCircle` + "Questions fréquentes"
- **5 questions max** — accordéon avec `ChevronDown` (rotation animée au toggle)
  1. Combien coûte l'entretien de mon jardin ?
  2. Est-ce que je peux bénéficier du crédit d'impôt ?
  3. Intervenez-vous pour des prestations ponctuelles ?
  4. Quelles sont les tâches incluses dans un entretien régulier ?
  5. Comment demander un devis ?
- Réponses courtes (3-4 lignes max)
- **Style :** séparateur `border-b border-brand-cream` entre chaque item, pas de fond de carte — clean et minimaliste
- **Transition :** même animation que les accordéons prestations (height + opacity, ~200ms)
- **Fond section :** léger vert-gris `#F2F5F0`

### 9. Formulaire de contact / demande de devis

- **Ancre :** `id="contact"`
- **Titre :** icône `MessageSquare` + "Demandez votre devis gratuit"
- **Sous-titre :** "Réponse dans la journée par téléphone, sous 48h par email" — `text-brand-muted`
- **Layout :** formulaire centré, max-width ~600px OU 2 colonnes (infos à gauche, form à droite)
- **Champs :** design clean — labels au-dessus, bordure `border-brand-cream`, focus `ring-brand-cta`, coins `rounded-lg`
  - Prénom / Nom
  - Email
  - Téléphone
  - Ville / Code postal
  - Besoin principal (select : Tonte, Taille haies/arbres, Nettoyage allées/terrasses, Entretien complet, Autre)
  - Message (textarea, optionnel, 3 lignes)
- **Bouton :** `bg-brand-dark text-white rounded-full` + icône `Send` — large, bien visible. Hover : `bg-brand-cta`
- **Feedback submit :** état de succès avec icône `CheckCircle` + "Merci, votre demande a été envoyée ! Nous vous recontactons sous 24h."
- **Fond section :** `brand-white`

### 10. Footer

- **Fond :** `brand-footer` (#2A3F29)
- **Layout :** 3-4 colonnes sur desktop, stacked sur mobile
- **Col 1 :** Logo "Le Jardinier du Vignoble" + mention "propulsé par Permapaysage" en `text-sm opacity-60`
- **Col 2 :** Liens rapides (Prestations, Garanties, Avis, Zone, FAQ, Contact) — `text-sm`, hover `text-brand-light`
- **Col 3 :** Contact — icône `Mail` + email, icône `Phone` + téléphone (cliquable `tel:`)
- **Col 4 :** Réseaux sociaux — icônes Facebook + Instagram (Lucide `Facebook`, `Instagram`), taille 20px, hover `text-brand-light`
- **Bas de footer :** séparateur `border-t border-white/10` + ligne avec "Mentions légales · CGV" à gauche, "Devis gratuit, rapide et sans engagement" au centre ou à droite
- Liste des villes d'intervention en tout petit (`text-xs opacity-40`) — c'est du SEO, pas du contenu visible important
- **Texte :** blanc à 70-80% opacité par défaut, hover pleine opacité

---

## Directives de design

### Ce qu'on FAIT

- Design **mobile-first** — la majorité du trafic sera mobile (particuliers locaux)
- Sections **pleine largeur** avec alternance de fonds : `brand-cream`, `brand-white`, `brand-dark`, `#F2F5F0`
- **Séparateur entre sections :** fine ligne `h-1 bg-brand-cta` (4px) — signature visuelle héritée de Permapaysage. Ne pas en abuser : une toutes les 2-3 sections, pas entre chaque.
- Coins arrondis `rounded-xl` sur les cartes, `rounded-full` sur les boutons et chips
- **Ombres :** subtiles uniquement — `shadow-sm` sur les cartes, jamais de `shadow-lg` ou d'ombres lourdes
- Espacement généreux : padding sections `py-20 lg:py-28`, gap entre éléments `gap-6` à `gap-10`
- Largeur de contenu max `max-w-6xl` (~1152px), centré avec `mx-auto px-6`
- CTA **"Obtenir un devis"** visible à tout moment : navbar sticky + répété 2-3 fois dans la page
- **Transitions :** `transition-all duration-200 ease-out` sur tous les éléments interactifs (boutons, accordéons, liens)
- **Contraste :** vérifier l'accessibilité — texte `brand-earth` sur fond `brand-cream` = OK, texte blanc sur `brand-dark` = OK. Tester avec un outil de contraste si besoin.
- **Whitespace :** l'espace vide est un choix de design, pas un manque. Laisser respirer.

### Ce qu'on NE FAIT PAS

- ❌ Pas d'emojis natifs — nulle part (utiliser Lucide icons)
- ❌ Pas de bleu, pas de gris froid (`gray-*` Tailwind), pas de noir pur (`black`)
- ❌ Pas d'image hero plein écran (le client n'a pas de photo HD de couverture)
- ❌ Pas de parallax, pas d'animations d'entrée lourdes (pas de scroll-triggered animations, pas de GSAP)
- ❌ Pas de formulaire multi-étapes
- ❌ Pas de pricing/tarifs affichés
- ❌ Pas de section "formules" (Éco/Tranquillité/Premium) — c'est sur le site principal, pas sur la landing
- ❌ Pas de blog, pas de newsletter, pas de popup
- ❌ Pas de chatbot ni de widget tiers
- ❌ Ne PAS utiliser de photos stock génériques de jardins — utiliser uniquement les photos fournies dans `/photos-entretien/` et `/montage-avant-apres/`
- ❌ Ne PAS utiliser les images de `/conception/` — ce sont des projets d'aménagement, hors sujet
- ❌ Ne PAS utiliser les couleurs Tailwind par défaut (`blue-500`, `gray-400`, etc.) — uniquement la palette `brand-*`
- ❌ Pas de border-radius inconsistants — `rounded-xl` pour les cartes, `rounded-full` pour les boutons/chips, `rounded-lg` pour les inputs. Pas de mix.
- ❌ Pas de polices multiples — Inter uniquement, jouer sur les poids (400/500/600/700) pour la hiérarchie

---

## Contenu texte

### Textes à reprendre du site existant

Le contenu des prestations, garanties et FAQ est déjà rédigé sur https://permapaysage.odoo.com/entretien-jardin — tu peux le reprendre et l'adapter. Les textes sont de bonne qualité, juste les raccourcir si besoin pour la landing page.

### Textes à NE PAS inventer

- Les avis clients → utiliser des placeholders marqués "[Avis Google — à intégrer]"
- Les tarifs → aucun prix nulle part
- Les engagements chiffrés (nombre de clients, heures, etc.) → ne pas les reprendre sauf si explicitement demandé

### Mots-clés SEO à intégrer naturellement

- "entretien de jardin Vallet"
- "jardinier Vallet"
- "entretien jardin vignoble nantais"
- "crédit d'impôt entretien jardin"
- "service à la personne jardin"
- "tonte pelouse Vallet"
- "taille haies Clisson"
- Les noms des communes de la zone d'intervention

---

## Technique

### Stack

- **Next.js** (App Router)
- **Tailwind CSS** pour tout le styling — pas de CSS custom sauf cas exceptionnel
- **Google Fonts :** Inter (400, 500, 600, 700) — via `next/font/google`
- **Responsive :** mobile-first, breakpoints Tailwind (`sm`, `md`, `lg`)
- **Composants React** pour :
  - Accordéons (prestations + FAQ) — état local `useState`
  - Menu hamburger mobile
  - Smooth scroll vers les ancres
  - Slider avant/après (si implémenté)
- **Images :** utiliser `next/image` avec les photos des dossiers du repo — optimisation automatique
- **Pas de dépendance lourde** — pas de bibliothèque UI tierce (pas de shadcn, pas de Framer Motion). Tailwind + Lucide React suffisent.

### Tailwind — couleurs custom à ajouter dans `tailwind.config.ts`

```js
colors: {
  brand: {
    900: '#1E3A1E',  // footer, fonds très foncés
    800: '#2D4A2D',  // navbar, hero, sections foncées
    700: '#3C5A3B',  // titres sur fond clair
    600: '#4A7C59',  // CTA principal, séparateurs, liens
    500: '#5A9A6A',  // CTA hover, éléments actifs
    400: '#8BA87E',  // badges, accents légers
    300: '#B5CCAB',  // fonds cartes accent, bordures légères
    200: '#D4E4CD',  // fonds sections alternées (vert très clair)
    100: '#EAF2E6',  // fond hover, surlignage subtil
    50:  '#F4F8F2',  // fond page alternatif
  },
  earth: {
    900: '#3D2E22',  // titres principaux, texte fort
    800: '#5C4A3A',  // corps de texte courant
    600: '#7A6B5D',  // texte secondaire
    400: '#A89888',  // placeholders, légendes
    200: '#D9D0C7',  // bordures, séparateurs légers
    100: '#EDE8E3',  // fonds neutres chauds
  },
  cream:   '#F7F3ED',  // fond de page principal
  white:   '#FEFDFB',  // cartes, formulaires
  accent: {
    500: '#C45B3E',  // crédit d'impôt, mise en avant
    400: '#D4735A',  // hover accent
    100: '#FDF0EC',  // fond badge crédit d'impôt
  },
  success: '#3D8B5E',  // validation formulaire
  star:    '#D4A843',  // étoiles avis (or chaud)
}
```

Usage : `bg-brand-800`, `text-earth-800`, `border-brand-600`, `text-accent-500`, etc.

**Référence complète :** voir `Charte_LeJardinierDuVignoble_v1.md` pour les specs détaillées de chaque composant (boutons, cartes, accordéons, formulaire, etc.).

### Images — Dossiers disponibles dans le repo

/public puis :

```
/photos-entretien/    → Photos de chantiers d'entretien (qualité inégale — sélectionner les meilleures)
/conception/          → Photos de projets de conception paysagère (NE PAS utiliser sur cette landing)
/logos/               → Logos Permapaysage (fichiers source)
/montage-avant-apres/ → Montages avant/après de chantiers
```

**Utilisation :**

- **Header + Footer :** utiliser le logo depuis `/logos/`
- **Section prestations / galerie :** sélectionner les meilleures photos de `/photos-entretien/` (les plus nettes, bien cadrées, lumineuses)
- **Section preuve / réassurance :** les avant/après de `/montage-avant-apres/` sont un excellent levier de conversion — les intégrer si possible (slider ou side-by-side)
- **NE PAS utiliser** `/conception/` — ce sont les projets d'aménagement, pas d'entretien. Hors sujet pour cette landing.
- Si une photo est trop basse qualité, utiliser un placeholder gris marqué "[Photo chantier — à remplacer]" plutôt que de forcer une image floue
- Formats attendus : `.webp` ou `.jpg` — `next/image` gère l'optimisation automatiquement. Stocker les images dans `/public/images/` organisées par sous-dossier.

### Formulaire

- Le formulaire est **visuel uniquement** dans la maquette (pas de backend pour l'instant)
- État local React (`useState`) pour les champs
- Validation côté client basique (required, format email)
- Le bouton submit affiche un feedback visuel (ex : "Merci, votre demande a été envoyée !" en `useState`)

---

## Livrables attendus

1. **Un projet Next.js fonctionnel** — `npm run dev` doit lancer la maquette sans erreur
2. **Une seule page** (`app/page.tsx`) avec des composants découpés proprement dans `components/`
3. Découpage suggéré : `Navbar`, `Hero`, `Prestations`, `Garanties`, `AvantApres`, `Avis`, `ZoneIntervention`, `FAQ`, `ContactForm`, `Footer`
4. Le rendu doit être **suffisamment fini** pour être montré au client comme proposition de direction visuelle
5. Le client doit pouvoir voir la page sur son téléphone (responsive obligatoire)

---

## Checklist avant livraison

- [ ] `npm run dev` démarre sans erreur
- [ ] `npm run build` passe sans erreur
- [ ] La page s'affiche correctement sur mobile (360px), tablette (768px) et desktop (1200px+)
- [ ] Les composants sont découpés proprement dans `components/`
- [ ] Les couleurs custom `brand-*` sont utilisées partout (aucune couleur Tailwind par défaut type `blue-500`, `gray-*`, `slate-*`)
- [ ] Tous les CTA pointent vers la section formulaire (`#contact`)
- [ ] Les accordéons fonctionnent (prestations + FAQ)
- [ ] Le menu mobile fonctionne (hamburger toggle)
- [ ] La palette de couleurs respecte la charte (aucun bleu, aucun gris froid)
- [ ] La mention "propulsé par Permapaysage" est présente dans le footer
- [ ] Aucun emoji natif nulle part — uniquement des icônes Lucide React
- [ ] Aucun prix n'est affiché
- [ ] Les avis clients sont des placeholders marqués comme tels
- [ ] Le formulaire contient tous les champs listés avec feedback visuel au submit
- [ ] Le séparateur vert `brand-cta` est présent entre les sections principales (pas entre chaque section)
- [ ] Le numéro de téléphone est cliquable (`tel:`)
- [ ] Le smooth scroll fonctionne sur les liens d'ancrage
- [ ] Les images utilisent `next/image` (pas de `<img>` brut)
- [ ] Aucune image de `/conception/` n'est utilisée
