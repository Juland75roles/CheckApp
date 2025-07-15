# Projet de Gestion des Présences Universitaires

## Description Générale

Application multiplateforme pour la gestion des présences, absences et rapports académiques destinée aux universités. Elle comporte trois profils principaux : Professeur, Responsable académique, Étudiant.

- **Backend** : Laravel (API RESTful)
- **Frontend Web** : React.js (professeur, responsable)
- **Frontend Mobile** : React Native (professeur, responsable, étudiant)

---

## Fonctionnalités principales

### Professeur (Web & Mobile)
- Authentification
- Génération de codes de présence uniques
- Validation des présences, gestion des absences et justificatifs
- Envoi de rapports au responsable académique

### Responsable Académique (Web & Mobile)
- Gestion des cours, salles, filières, professeurs
- Consultation des rapports par filière
- Intégration avec les systèmes de l’université

### Étudiant (Mobile uniquement)
- Authentification
- Saisie du code de présence
- Justification des absences
- Consultation de ses rapports

---

## Structure du projet

```
CheckApp/
├── backend           # API Laravel
├── frontend-web      # Interface web React.js
└── mobile            # App mobile React Native
```

---

## Installation & Lancement

### 1. Backend (Laravel)
```bash
cd backend
cp .env.example .env
# Modifier .env pour la base de données
php artisan key:generate
php artisan migrate
php artisan serve
```

### 2. Frontend Web (React.js)
```bash
cd frontend-web
npm install
npm start
```

### 3. Mobile (React Native)
```bash
cd mobile
npm install
npx react-native run-android   # ou run-ios
```

---

## Technologies principales
- Laravel 11+
- React.js 18+
- React Native 0.7x+
- MySQL ou PostgreSQL
- Authentification API Token (Sanctum ou Passport)

---

## Prochaines étapes
- Définir les modèles (User, Presence, Justificatif, Cours, etc.)
- Mettre en place l’authentification et la gestion des rôles
- Développer les interfaces utilisateur selon les profils
- Prévoir l’intégration avec les systèmes de l’université

---

## Auteurs
- [Votre Nom]
- [Votre Université]

---

## Licence
MIT
