
// crétaion de l'objet tache
const Tache = (title, description, date) => ({
  title,
  description,
  date,
  tacheCompleted: false,
});

//vérification de mon nombre de taches
const nombreDeTaches = () => {
  return listeDesTaches.length;
};

//vérifier si ma liste de taches est vide
const estListeVide = () => {
  return listeDesTaches.length === 0;
}

// initialisation de la liste des tâches 
const listeDesTaches = []

// Pour ajouter une nouvelle tache à la liste
const ajouterUneTache = (title, description, date) => {
  listeDesTaches.push(Tache(title, description, date));
};
ajouterUneTache("Développeur web", "créer des applications mobiles", "05-08-2001")
ajouterUneTache("Marketeur Digital", "création des contenus instagram", "10-08-2024")

// console.log(listeDesTaches);

// supprimer une tache de la liste
const supprimerUneTache = (index) => {
  if (index >= 0 && index < listeDesTaches.length) {
    listeDesTaches.splice(index, 1);
  }
};
supprimerUneTache(0)
console.log(listeDesTaches )
//afficher toutes les taches
const afficherTaches = () => {
  listeDesTaches.forEach((tache, index) => {
    console.log(`${index + 1}. ${tache.title} - ${tache.date}`);
  });
}