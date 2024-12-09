const links = [
  {
    title: 'INFOS PRATIQUES',
    linkName: ['À propos', 'Livraisons & Reprises', 'Mode demploi', 'F.A.Q'],
  },
  {
    title: 'LÉGAL',
    linkName: [
      'Mentions légales',
      'CGU',
      'CGV',
      'Politique de confidentialité',
    ],
  },
  {
    title: 'Mon compte',
    linkName: [
      'Accéder à mon compte',
      'Ma liste denvie',
      'Créer un compte',
      'Mot de passe oublié',
    ],
  },
];

const Links = () => {
  return (
    <div className="text-[#393939] flex items-start w-full md:flex-row md:mt-0 mt-8 flex-col gap-16">
      {links.map(({ linkName, title }, index) => (
        <div key={index} className="flex gap-2.5 max-w-[174px] flex-col">
          <p className="font-cabinet font-bold text-lg">{title}</p>
          <ul className="flex flex-col text-sm gap-2.5">
            {linkName.map((name, index) => (
              <li key={index} className="">
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Links;