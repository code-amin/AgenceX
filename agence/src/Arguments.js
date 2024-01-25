const Arguments = () => {
  return (
    <div id="arguments">
      <h2 className=" text-center mb-4 text-3xl lg:text-4xl">
        Pourquoi choisir <span className="font-medium">licorne</span>
        <span className="font-thin">labs</span> 🦄
      </h2>
      <div className="p-1 text-3xl lg:text-4xl">
        <span className="font-medium">licorne</span>
        <span className="font-thin">labs</span>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl mb-4">
            L'Innovation est notre raison d'être.
          </h3>
          {/* <p className="text-white-500 text-sm mb-4">
            Chez Licorne Labs, nous apportons une richesse d'expertise à votre
            projet. Notre équipe de développement chevronnée maîtrise les
            dernières technologies, frameworks et tendances en matière de
            design. En choisissant notre équipe, vous vous associez à une équipe
            dédiée à l'innovation, garantissant que vos solutions web ne sont
            pas seulement actuelles, mais à la pointe de la technologie.
          </p> */}
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl text-white-500 mb-4">
            Des Solutions Adaptées pour Votre Réussite
          </h3>
          {/* <p className="text-white-500 text-sm mb-4">
            Nous prenons le temps de comprendre vos besoins uniques et vos
            objectifs commerciaux. Chez Licorne Labs, nous nous enorgueillissons
            de créer des solutions web sur mesure qui correspondent parfaitement
            à vos objectifs. Notre approche collaborative garantit que chaque
            projet est une réflexion sur mesure de votre vision, générant des
            résultats tangibles, que ce soit une amélioration de l'engagement
            des utilisateurs, une augmentation des conversions ou une meilleure
            visibilité de la marque.
          </p> */}
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl text-white-500 mb-4">
            Un Support Exceptionnel et une Collaboration de Qualité
          </h3>
          {/* <p className="text-white-500 text-sm mb-4">
            Vivez une expérience centrée sur le client avec Licorne Labs. Notre
            engagement envers un support client exceptionnel signifie que vous
            n'êtes pas simplement un client ; vous êtes un partenaire précieux.
            Nous accordons la priorité à la communication ouverte, à la
            transparence et à la réactivité. Tout au long du processus de
            développement, nous recherchons activement votre contribution,
            apprécions vos commentaires et collaborons étroitement pour nous
            assurer que le produit final dépasse vos attentes.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Arguments;
