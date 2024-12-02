// Initialiser la liste des tâches
let listeDesTaches = [];

// Fonction pour ajouter une tâche
const ajouterUneTache = (title) => {
  const nouvelleTache = {
    id: Date.now(),
    title,
    completed: false,
  };
  listeDesTaches.push(nouvelleTache);
  afficherTaches();
};

// Fonction pour afficher les tâches
const afficherTaches = () => {
  const itemList = document.querySelector('.item-list');
  itemList.innerHTML = '';

  listeDesTaches.forEach((tache, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item', 'flex', 'justify-between', 'items-center', 'my-3', 'border-b', 'border-b-green-500', 'pb-1');
    
    itemDiv.innerHTML = `
      <div class="flex gap-1 items-center">
        <h6 class="item-index border border-green-500 rounded p-1">${index + 1}</h6>
        <p class="item-name capitalize">${tache.title}</p>
      </div>
      <div class="items-icons">
        <i class="far fa-check-circle cursor-pointer complete-item mx-2 items-icon text-green-500" onclick="completerTache(${tache.id})"></i>
        <i class="far fa-edit cursor-pointer edit-item mx-2 items-icon" onclick="editerTache(${tache.id})"></i>
        <i class="far fa-times-circle cursor-pointer delete-item mx-2 items-icon text-green-500" onclick="supprimerTache(${tache.id})"></i>
      </div>
    `;
    itemList.appendChild(itemDiv);
  });
};

// Fonction pour supprimer une tâche
const supprimerTache = (id) => {
  listeDesTaches = listeDesTaches.filter(tache => tache.id !== id);
  afficherTaches();
};

// Fonction pour compléter une tâche
const completerTache = (id) => {
  listeDesTaches = listeDesTaches.map(tache => {
    if (tache.id === id) {
      return { ...tache, completed: !tache.completed };
    }
    return tache;
  });
  afficherTaches();
};

// Fonction pour éditer une tâche
const editerTache = (id) => {
  const nouveauTitre = prompt('Modifier la tâche :');
  if (nouveauTitre) {
    listeDesTaches = listeDesTaches.map(tache => {
      if (tache.id === id) {
        return { ...tache, title: nouveauTitre };
      }
      return tache;
    });
    afficherTaches();
  }
};

// Gérer l'ajout de tâches via le formulaire
document.getElementById('itemForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const itemInput = document.getElementById('itemInput');
  const title = itemInput.value.trim();
  if (title) {
    ajouterUneTache(title);
    itemInput.value = '';
  }
});

// Supprimer toutes les tâches
document.getElementById('clear-list').addEventListener('click', () => {
  listeDesTaches = [];
  afficherTaches();
});
