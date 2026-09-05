export type Song = {
    id: number;
    titre: string;
    auteur: string | null;
    paroles: string;
    created_at: string;
    updated_at: string;
    tags: string;
    number: number | null;
    is_favorite: boolean | null;
    comment: string | null;
};

export const SONGS: Song[] = [
    {
        id: 1,
        titre: "Je suis à Jésus-Christ",
        auteur: null,
        paroles: "Refrain :\r\nJe suis à, Jésus-Christ\r\nmon, passé est parti\r\nje suis à Jésus-Christ (bis)\r\navec toute ma jeunesse aussi\r\n\r\n1. Je suis jeune comme Samuel\r\net Dieu veut m’utiliser\r\npour le glorifier (bis)\r\ncomme, comme le jeune Samuel\r\n\r\n2. Je suis jeune comme Joseph\r\nEt Dieu veut qu’à tous égards\r\nJe garde ma sainteté (bis)\r\nmême devant la femme de Potiphar\r\n\r\n3. Je suis jeune comme David\r\nEt Dieu veut qu’avec les anges\r\nJe lui chante des louanges (bis)\r\nComme, comme le jeune David\r\n\r\n4. Je suis jeune comme Daniel\r\net Dieu veut que toujours\r\nj’attende son saint secours (bis)\r\ncomme, comme le jeune Daniel",
        created_at: "2026-08-06 11:19:04.296934+00",
        updated_at: "2026-08-06 11:19:04.296934+00",
        tags: "je suis, jeune",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 2,
        titre: "Le seigneur a juré",
        auteur: null,
        paroles: "1. Le seigneur a juré\r\nde revenir sur terre\r\ndans la gloire de sa venue\r\nil nous reconnaîtra\r\n\r\nRefrain :\r\n        Venez\r\n   dans sa clarté (chœur)\r\n        Redi-\r\n   sent les anges (chœur)\r\n        Venez\r\ndans sa clarté, au grand jour de bonheur (chœur)\r\n        \r\n2. Au son de ses archanges\r\nau son de leur musique\r\nau son de leurs trompettes\r\nChrist nous invitera\r\n\r\n3. Prenez donc les guitares\r\njouez donc aux tambours\r\nqu’attendez-vous encore ?\r\nallons au paradis\r\nChantez\r\nalléluia (chœur)\r\nJouant\r\naux guitares (chœur)\r\nEnfin\r\nla victoire, Jésus est avec nous (chœur)",
        created_at: "2026-08-06 11:19:04.296934+00",
        updated_at: "2026-08-06 11:19:04.296934+00",
        tags: "le seigneur, Venez",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 4,
        titre: "Pour Ton Amour suprême",
        auteur: null,
        paroles: "1.  Pour ton amour suprême\r\n        (Alléluia)       \r\n     Jésus que tu nous aime\r\n        (Alléluia)\r\n     Pour ta divine flamme \r\n        (Hosanna)\r\n     Que tu jettes à nos âmes \r\n        (Alléluia)\r\n\r\n\r\n   Refrain :\r\n        À Jésus notre maitre\r\n        roi de lumière \r\n        soit toute la gloire\r\n        Alléluia \r\n\r\n               \r\n 2.  Jadis sous l’esclavage\r\n       (Alléluia)\r\n      nous étions sans défense \r\n       (Alléluia)      \r\n      Mais tu vins dans ta grâce \r\n       (Hosanna)\r\n      Et tu nous rendis libres \r\n       (Alléluia)\r\n\r\n\r\n 3. Les anges du bon père \r\n      (Alléluia)\r\n    Les hommes de la terre\r\n       (Alléluia)\r\n    Le ciel et tous les astres \r\n       (Hosanna)\r\n    Redisent tes merveilles \r\n       (Alléluia)\r\n\r\n\r\n 4. Toi qui nourrit nos âmes \r\n      (Alléluia)\r\n    De ton amour immense\r\n      (Alléluia)\r\n    Tu nous prêtes ton souffle \r\n      (Hosanna)  \r\n    Tous les élus t’acclament\r\n      (Alléluia)",
        created_at: "2026-08-07 13:38:21.682568+00",
        updated_at: "2026-08-07 13:38:21.682568+00",
        tags: "Alléluia",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 5,
        titre: "L’heure du départ s’annonce",
        auteur: null,
        paroles: "\r\n1.\tL’heure du départ s’annonce\r\n    On entend partout des plaintes \r\n    Des jugements il prononce\r\n    C’est pourquoi il y’a des craintes\r\n\r\n\r\nRefrain : \r\n      Mais nous rachetés\r\n      nous avançons vers le ciel\r\n      oui dans sa clarté sans pareil\r\n\r\n\r\n2.\tLe cri de l’époux s’annonce\r\n    et le ciel ouvre ses portes \r\n    le chant des élus entonne \r\n    avec christ suivons l’escorte\r\n\r\n\r\n3.\tDe son trône Jésus s’avance\r\n    pour accueillir ses vrais amis\r\n    comme des aigles ils s’élancent \r\n    enfin disparaissent leurs ennuis\r\n\r\n\r\n4.\tMalheurs aux hommes de la terre\r\n    qui ont méprisé mes appels\r\n    je descends et ma colère \r\n    s’abat sur tous les rebelles",
        created_at: "2026-08-07 13:38:21.682568+00",
        updated_at: "2026-08-07 13:38:21.682568+00",
        tags: "Mais nous",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 6,
        titre: "Le grand rendez-vous",
        auteur: null,
        paroles: "1. Je veux être au grand rendez-vous\r\n    où tous les saints seront avec Jésus\r\n    moi aussi quelle joie d’y trouver une place\r\n    Randonné de tous les bienheureux \r\n    rendez-vous de tous les rachetés\r\n    moi aussi quelle joie d’y trouver une place\r\n\r\n2.  Oh mon Dieu ! Viens secourir ma foi \r\n    Je suis oppressé par les ennemis\r\n    qui m’empêchent d’avancer \r\n    vers ce jour glorieux\r\n    Ton amour m’affermit chaque jour\r\n    je vois déjà ta grande beauté \r\n    moi aussi je soupire après ce grand bonheur\r\n\r\n3.  Jésus attend déjà dans les nuées\r\n    l’épouse glorieuse racheté du monde\r\n    oh mon frère montons auprès de notre seigneur\r\n    Merveilleux est ce jour de bonheur\r\n    À jamais délivrés des tourments\r\n    Nous vivrons avec lui à jamais, pour toujours\r\n",
        created_at: "2026-08-07 13:38:21.682568+00",
        updated_at: "2026-08-07 13:38:21.682568+00",
        tags: "rendez-vous",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 7,
        titre: "Souffle Esprit de Dieu",
        auteur: null,
        paroles: "1. Comme un torrent d’eau qui déborde ses rivages\r\n        (souffle Esprit de Dieu) \r\n    Comme une force nouvelle qui nous conduit d’âge en âge \r\n        (souffle Esprit de Dieu) \r\n    Sur cette assemblée réunit en prière \r\n        (souffle Esprit de Dieu) \r\n    Repend ton onction et repend ta lumière\r\n        (souffle Esprit de Dieu)  \r\n\r\nRefrain :\r\n     Saint-Esprit consolateur\r\n     Saint-Esprit révélateur \r\n     comme une nouvelle vague\r\n     tu nous conduis vers le ciel\r\n     souffle Esprit de dieu\r\n\r\n 2. Esprit de force, Esprit de feu de clarté\r\n        (souffle Esprit de Dieu) \r\n    Nous voulons marcher dans la victoire sans fin\r\n        (souffle Esprit de Dieu) \r\n    Sur un chemin de vérité, de sainteté \r\n        (souffle Esprit de Dieu) \r\n    Conduis-nous oh père là-haut dans la cité sainte\r\n        (souffle Esprit de Dieu)",
        created_at: "2026-08-07 13:38:21.682568+00",
        updated_at: "2026-08-07 13:38:21.682568+00",
        tags: "souffle, saint-esprit",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 8,
        titre: "Chrétien ne tremble pas",
        auteur: null,
        paroles: "\r\n            Refrain : \r\n                  Chrétien ne tremble pas Jésus est là \r\n                  tiens ferme dans la foi\r\n                  alléluia \r\n\r\n\r\n              1. L’ennemi contre toi \r\n                 (toujours se dresse)\r\n                 Ne perds pas ton courage \r\n                 (dans la détresse)\r\n\r\n\r\n               2. Le monde et ses attraits \r\n                  (frappe à ton cœur)\r\n                  Réserve cette place \r\n                   (à ton sauveur)\r\n\r\n\r\n               3. Tes parents tes amis \r\n                   (tous t’abandonnent)\r\n                   Mais le seigneur Jésus \r\n                   (pour toi se donne)\r\n\r\n\r\n                4. Méprise tes soucis\r\n                   (ta pauvreté)\r\n                   Jésus le roi t’offre \r\n                   (l’éternité)\r\n\r\n               5. Jésus veille sur toi\r\n                   (il sait tes peines)\r\n                    Le prince d’Israël \r\n                    (ne dors jamais)",
        created_at: "2026-08-11 11:00:39.660679+00",
        updated_at: "2026-08-11 11:00:39.660679+00",
        tags: "Chrétien",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 9,
        titre: "Dieu notre consolateur",
        auteur: null,
        paroles: "1. Dieu notre consolateur\r\n    toi qui règnes dans les cieux\r\n    nous élevons tous nos cœurs \r\n    pour t’adorer en ce lieu\r\n\r\n\r\nRefrain :\r\n                                                                   \r\n    Esprit du grand Dieu vivant\r\n    descends sur tous tes enfants\r\n    remplis ton peuple de paix et d’amour\r\n\r\n\r\n2. Sans toi que pouvons-nous faire\r\n   devant tous nos ennemies\r\n   c’est toi qui brise nos fers\r\n   qui enlève nos soucis\r\n\r\n3. Esprit de force et de feu\r\n   tu nous combles de bonheur\r\n   consumes tous nos forfaits\r\n                                                                \r\n\r\n4. Quand viennent les tentations\r\n   tu es notre compagnon\r\n   et dans les persécutions\r\n   tu es la consolation\r\n\r\n\r\n5. Saint-Esprit Dieu tout puissant\r\n   quand tu viens sur tes enfants\r\n   ils ne sont plus mourants \r\n   ils sont purs et triomphants\r\n",
        created_at: "2026-08-11 11:00:39.660679+00",
        updated_at: "2026-08-11 11:00:39.660679+00",
        tags: "Esprit",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 10,
        titre: "Tenons fermes",
        auteur: null,
        paroles: "\r\nRefrain : \r\n   Tenons ferme dans la foi\r\n   et marchons confiant et sans crainte\r\n   la victoire nous l’aurons \r\n   si nous nous confions en l’Eternel\r\n\r\n\r\n1. Dieu nous prépare de nouveaux cieux \r\n   et une nouvelle terre \r\n   où règnera pour toujours la paix\r\n   luttons mes frères pour entrer dans ce doux repos\r\n   qui nous est réservé là-haut\r\n\r\n\r\n2. Si nous suivons les directives du Saint-Esprit\r\n   si nous lui sommes entièrement soumis\r\n   le long chemin à parcourir sera moins dur\r\n   nous arriverons à coup sûr \r\n\r\n\r\n3. Souffrons mais avec Jésus pour régner avec lui\r\n   suivons les traces qu’il a suivi\r\n   c’est au travers des tribulations que nous entrerons\r\n   dans son céleste et beau royaume",
        created_at: "2026-08-11 11:00:39.660679+00",
        updated_at: "2026-08-11 11:00:39.660679+00",
        tags: "Tenons",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 14,
        titre: "Que ton Esprit me ravive",
        auteur: "Pst Iket Samuel",
        paroles: " 1.Que ton Esprit me ravive seigneur\r\n    dans le combat jusqu’à ma mort (bis)\r\n\r\n  2.Parle à mon cœur et je vivrais seigneur\r\n    devant ta face pour l’éternité (bis)\r\n\r\n  3.Le jour la nuit mon cœur soupire\r\n    après toi oh mon doux sauveur (bis)\r\n           \r\n  4.Ma vie enfin je te la donne seigneur\r\n    soutiens ma foi jusqu’à ma mort (bis)\r\n\r\n  5.De mon tombeau j’entendrais le son \r\n    de la trompette oh quel grand amour (bis)\r\n\r\n  6.Après cette vie je vais te rencontrer \r\n    dans le ciel quelle félicité (bis)\r\n",
        created_at: "2026-08-17 11:45:44.570549+00",
        updated_at: "2026-08-17 11:45:44.570549+00",
        tags: "ravive",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 15,
        titre: "Oui Christ est là !",
        auteur: null,
        paroles: "\r\nRefrain : \r\n    Oui Christ est là il veut me défendre\r\n    dans le combat ma place il veut prendre\r\n\r\n\r\n1. Belzébuth ce grand roi de la troupe infernale\r\n   avait lâché sur moi son chef le plus ardent\r\n   ce dragon animé d’une fureur sans égale \r\n   venait fondre sur moi sans perdre un seul instant\r\n\r\n\r\n2. En vain par ses discours il tenta ma constance\r\n   dans un pareil combat il faut vaincre ou mourir\r\n   et j’aurais succombé malgré ma résistance \r\n   si mon roi n’eut été prêt à me secourir\r\n\r\n\r\n3. Oui l’archange Michaël veillait pour ma défense \r\n   d’un glaive à deux tranchants arma ma faible \r\n   par son puissant secours j’obtins ma délivrance\r\n   je blessais le dragon qui s’envola soudain \r\n\r\n\r\n4. Béni soit à jamais l’auteur de ma victoire \r\n   mon cher Emmanuel mon divin protecteur\r\n   donne moi désormais de vivre pour ta gloire \r\n   toi qui dans ce combat fut mon libérateur \r\n",
        created_at: "2026-08-17 11:52:44.029951+00",
        updated_at: "2026-08-17 11:52:44.029951+00",
        tags: "Oui",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 16,
        titre: "Je ne veux plus retourner",
        auteur: null,
        paroles: "\r\n       Refrain : \r\n           Je ne veux plus retourner (bis)\r\n           au pays de destruction \r\n           je ne veux plus seigneur \r\n\r\n\r\n      1. Là-bas seigneur je n’ai plus\r\n         ni famille ni ami\r\n         Jésus tu es mon salut \r\n         mon secours mon appui\r\n\r\n\r\n       2. Là-bas seigneur je n’ai plus\r\n          ni trésor ni demeure\r\n          ma force je l’ai perdu\r\n          je n’ai que toi seigneur\r\n\r\n\r\n       3. Un pays de tentations \r\n          avec un roi trompeur\r\n          j’ai quitté les déceptions\r\n          pour te suivre seigneur \r\n\r\n\r\n        4. Quelques dure que soit la route\r\n           sombre que soit le chemin \r\n           je te suivrai jusqu’au bout\r\n           mais seigneur tiens ma main\r\n",
        created_at: "2026-08-17 11:57:57.271517+00",
        updated_at: "2026-08-17 11:57:57.271517+00",
        tags: "retourner",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 17,
        titre: "Seigneur Jésus mon libérateur",
        auteur: null,
        paroles: "\r\n1. Seigneur Jésus mon libérateur \r\n   protège moi bien dans tes mains \r\n   toute ma vie est vraiment menacée\r\n   oh Jésus soutient ma foi.\r\n   Il m’est toujours impossible\r\n   de bien garder ma vie et ma foi\r\n   seigneur Jésus viens je t’en prie \r\n   ton secours m’est nécessaire \r\n\r\n\r\nrefrain : \r\n     Seigneur dissipe ma crainte\r\n     remplis moi de ton Esprit\r\n     je veux avoir du courage\r\n     devant l’ennemi satan\r\n     il a été déjà vaincu \r\n     à la croix de Golgotha.\r\n     Même dans la détresse \r\n     je saisirai l’espérance \r\n     consolide bien ma foi\r\n     qu’elle ne soit pas ébranlée\r\n     j’aime la persévérance \r\n     dans la foi jusqu’à la fin\r\n\r\n\r\n2. Quand les méchants s’avancent vers moi\r\n   voulant bien dévorés ma chair\r\n   jamais je n’aurais aucune crainte \r\n   car je sais que tu es là.\r\n   Même quand les amis vont me quitter\r\n   je serai bien consolé par toi\r\n   car tu es mon ami éternel \r\n   tu ne me quitteras pas\r\n\r\n\r\n3. Mon ami viens je vais te montrer \r\n   un ami qui t’aime pus que tout \r\n   il ne pourra jamais te décevoir \r\n   comme tes amis de ce monde.\r\n   Les amis de ce monde méchants \r\n   pourront bien te donner de l’argent\r\n   mais ils ne pourront jamais te donner \r\n   la paix du cœur comme Jésus\r\n",
        created_at: "2026-08-17 12:07:22.84655+00",
        updated_at: "2026-08-17 12:07:22.84655+00",
        tags: "mon libérateur",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 18,
        titre: "Jeune homme réjouis toi",
        auteur: null,
        paroles: "1. Jeune homme réjouis toi\r\n    pendant les jours de ta jeunesse \r\n    livre ton cœur à la joie\r\n    marches dans les voies de ton cœur\r\n    selon les regards de tes yeux \r\n    mais saches que pour tout cela \r\n    Dieu t’appelle en jugement\r\n\r\n\r\n  Refrain :\r\n      Mais souviens toi de ton créateur \r\n      pendant les jours de ta jeunesse \r\n      avant que les jours mauvais n’arrivent\r\n      où tu diras je n’en peux plus\r\n\r\n\r\n 2. Éloigne le mal de ton cœur\r\n    car tout n’est que vanité \r\n    saisi la sagesse de Dieu.\r\n    Il est une chose mon ami \r\n    tout s’accomplira ainsi\r\n    car l’homme s’en va vers \r\n    sa demeure éternelle \r\n\r\n\r\n 3. Réfléchis dès à présent \r\n    avant que ton corps retourne\r\n    dans la poussière de la terre\r\n    et que ton esprit retourne \r\n    dans la demeure de Dieu\r\n    sans salut sans le seigneur Jésus \r\n    quel grand malheur\r\n",
        created_at: "2026-08-17 12:14:25.265931+00",
        updated_at: "2026-08-17 12:14:25.265931+00",
        tags: "souviens toi",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 19,
        titre: "je demande à l’éternel",
        auteur: null,
        paroles: "\r\n1. je demande à l’éternel, \r\n   une seule chose,\r\n   je voudrais habiter au paradis\r\n   avec tous les saints\r\n   (pour l’éternité.) bis\r\n\r\n\r\n2. Malgré les épreuves,\r\n   les difficultés,\r\n   rien ne peut changer \r\n   (ma résolution.) bis\r\n\r\n\r\n3. Contempler sa gloire,\r\n   et le célébrer \r\n   avec tous les élus \r\n   (pour l’éternité.) bis\r\n\r\n\r\n4. J’ai décidé de quitter\r\n   la vie de ce monde,\r\n   pour suivre le chemin\r\n   (qui conduit au ciel.) bis\r\n",
        created_at: "2026-08-19 09:13:42.186416+00",
        updated_at: "2026-08-19 09:13:42.186416+00",
        tags: "je demande",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 20,
        titre: "je veux être ton ami",
        auteur: null,
        paroles: "\r\nRefrain :\r\n   Jésus, Jésus je veux être ton ami\r\n   Jésus, Jésus tu m’as libéré \r\n   Jésus, Jésus je veux être ton ami\r\n   depuis que je t’ai trouvé, tout a changé.\r\n\r\n\r\n1. Je pensais me débrouiller \r\n   tout seul dans ma vie,\r\n   mon sentiment pour toi\r\n   n’était que du mépris,\r\n   mais je me suis souvent trouvé \r\n   dans un drôle d’état,\r\n   tu es venu vers moi, \r\n   quand j’étais bien mort.\r\n\r\n\r\n2. J’ai compris que tout seul sans toi\r\n   moi je n’étais rien,\r\n   j’ai crié au secours,\r\n   et tu m’as tendu la main,\r\n   tu ne m’as pas laissé couler dans le désespoir,\r\n   ta lumière à briller,\r\n   quand tout semblait noir.\r\n\r\n\r\n3. Chaque jour tu es près de moi\r\n   sans m’abandonner,\r\n   si j’ai des difficultés,\r\n   je n’ai qu’à te prier,\r\n   je sais que je pourrai\r\n   compter sur toi tout le temps\r\n   Jésus tu m’as donné un nouvel élan.\r\n",
        created_at: "2026-08-19 09:20:44.47305+00",
        updated_at: "2026-08-19 09:20:44.47305+00",
        tags: "ton ami",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 21,
        titre: "Mon cœur te cherche",
        auteur: null,
        paroles: "\r\n      Refrain :\r\n           Mon cœur te cherche (bis)\r\n               ô mon Dieu \r\n           mon cœur te cherche, \r\n               délivre moi.\r\n           Mon cœur te cherche (bis)\r\n               ô seigneur\r\n           mon cœur te cherche,\r\n            viens m’éclairer.\r\n\r\n\r\n   1. Mon cœur se perd sur le chemin,\r\n      je marche comme un fils égaré,\r\n      je n’ai personne qui me tienne la main,\r\n      c’est pourquoi je ne cesse de pleurer.\r\n\r\n\r\n   2. Je redoute sur mon avenir,\r\n      mon âme et ma vie pleins d’illusions,\r\n      ont besoin de celui qui doit venir,\r\n      ô Dieu laisse agir ta compassion.\r\n\r\n\r\n    3. L’amour du maître viens m’éclairer\r\n       la grâce illumine tout mon cœur,\r\n       Jésus est venu me rassurer\r\n       ma bouche pour lui chante des louanges.\r\n\r\n\r\n    4. Je suis pardonné Dieu m’a fait grâce,\r\n       mon ancienne vie est oubliée,\r\n       le ciel désormais devient ma place,\r\n       toute ma vie à lui est confiée.\r\n",
        created_at: "2026-08-19 09:29:17.388058+00",
        updated_at: "2026-08-19 09:29:17.388058+00",
        tags: "cherche",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 22,
        titre: "Tandis que d’autres marchent",
        auteur: null,
        paroles: "\r\nRefrain :\r\n    Tandis que d’autres marchent\r\n    au nom de leurs dieux,\r\n    nous marchons,\r\n    au nom de l’Eternel des armées  \r\n            (bis)\r\n         eh eh !\r\n\r\n1. Ceux qu’il a connu d’avance,\r\n   il les a prédestinés,\r\n   à être semblables à l’image\r\n   de son fils premier-né.\r\n   Il les a appelés, il les a justifiés, il les a glorifiés \r\n   il est grand notre Dieu!\r\n           \r\n\r\n2. Qui accusera les élus de Christ,\r\n   et qui condamnera les cohéritiers ? \r\n   Rendons gloire à l’agneau,\r\n   nous sommes son élection.\r\n   Si Dieu est avec nous, \r\n   qui sera contre nous ?\r\n\r\n\r\n3. Par la foi nous marchons,\r\n   par elle nous triomphons.\r\n   Quelques soit la saison,\r\n   nous atteindrons les monts.\r\n   nous les fils de Sion,\r\n   pleinement nous jouirons,\r\n   arrivés à la maison\r\n   de notre bénédiction.\r\n",
        created_at: "2026-08-19 09:34:25.44686+00",
        updated_at: "2026-08-19 09:34:25.44686+00",
        tags: "tandis que",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 23,
        titre: "Le seigneur Jésus m’aima",
        auteur: null,
        paroles: "\r\n1. Le seigneur Jésus m’aima plus que lui-même,\r\n   en donnant sa vie pour moi pécheur.\r\n   Il vit ma misère et accepta la mort,\r\n   la souffrance, la honte, pour moi pécheur.\r\n\r\n\r\nRefrain :\r\n    Laissez-moi mes frères.\r\n    Comment ne pas l’aimer,\r\n    lui qui pour mon âme,\r\n    donna sa vie ?\r\n    seigneur Jésus christ,\r\n    mon cœur est tout à toi,\r\n    je t’adorerai toute ma vie.\r\n\r\n\r\n2. Comment a-t-il pu oser mourir pour moi,\r\n   lui le Dieu de paix et justice ?\r\n   Quand ma vie entière, au service du péché\r\n   sans guide pour lui plaire, méritait l’enfer.\r\n\r\n\r\n3. Comment résister à un pareil amour ?\r\n   Si toi tu le peux, moi je ne le peux.\r\n   Le seigneur Jésus apporta foi et paix,\r\n   dans mon cœur troublé, sans espérance.\r\n\r\n\r\n4. Le seigneur Jésus est pour nous tous un don,\r\n   que le Dieu d’amour envoya du ciel.\r\n   Si donc tu reçois ce que ton Dieu te donne,\r\n   ce sera pour toi le paradis.\r\n",
        created_at: "2026-08-19 09:38:54.540528+00",
        updated_at: "2026-08-19 09:38:54.540528+00",
        tags: "laissez-moi",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 24,
        titre: "Le seigneur reviendra",
        auteur: null,
        paroles: "\r\nRefrain :\r\n   Le seigneur reviendra  (bis)\r\n   annoncez cette nouvelle !\r\n   que le seigneur reviendra \r\n   que le seigneur reviendra (bis)\r\n\r\n\r\n1. J’annoncerai cette nouvelle \r\n   à travers tous les continents\r\n\r\n\r\n2. J’annoncerai cette nouvelle\r\n   à tous les pécheurs du monde entier\r\n\r\n\r\n3. Je m’en irai par les mers,\r\n   puis par eaux et je redirai\r\n\r\n\r\n4. ô chrétiens qui sur cette terre\r\n   subsistez toute ignominie \r\n\r\n\r\n5. J’annoncerai par les mers, les continents\r\n   que le seigneur revient\r\n",
        created_at: "2026-08-24 12:23:59.494374+00",
        updated_at: "2026-08-24 12:23:59.494374+00",
        tags: "reviendra",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 25,
        titre: "C’était à Gethsémané",
        auteur: null,
        paroles: "\r\n1. Quel sort a subi Christ le roi ?\r\n  Le fils de l’homme, prince de paix,\r\n  n’est il pas venu me sauver du péché,\r\n  quel grand crime avait-il bien pu commettre ?\r\n  \r\n  C’était à Gethsémané, dans le jardin où il priait\r\n  pour le sort de tous même ses bourreaux.\r\n  Les soldats l’ont arrêté, et ils l’avaient bien lié\r\n  l’emmenèrent prétendant le juger.\r\n\r\n\r\n2. Les juifs l’ont couronné d’épines,\r\n   ils l’ont frappé, il n’a rien dit,\r\n   on voulait le défendre il en empêcha \r\n   quelle grande mort, que celle de ce grand héro.\r\n\r\n   On a craché sur sa face et on l’a battu de verges\r\n   il fut l’objet de toutes les injures.\r\n   Mais il a tout accepté, et priait même pour ses bourreaux\r\n   père pardonne leur, c’est des ignorants.\r\n\r\n\r\n3. Il a péri comme un brigand,\r\n   lié pour être pendu après,\r\n   mais mort il ressuscita le troisième jour\r\n   Hosanna, mon sauveur vit à jamais. \r\n\r\n   Il est venu pour une mission \r\n   et il accompli sa mission, \r\n   il en devint sauveur de la terre.\r\n   Dieu par son abaissement\r\n   l’a souverainement élevé \r\n   lui donnant un nom plus grand que tout.\r\n",
        created_at: "2026-08-24 12:55:54.904082+00",
        updated_at: "2026-08-24 12:55:54.904082+00",
        tags: "Gethsémané",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 26,
        titre: "Oh le seigneur Jésus",
        auteur: null,
        paroles: "\r\nRefrain :\r\n     Oh ! Oh ! \r\n   le seigneur Jésus (bis)\r\n   il nous a aimé (bis)\r\n   il nous a choisi (bis)\r\n   pour être la lumière du monde,\r\n   et c’est lui que nous attendons \r\n   car il revient très bientôt \r\n   pour chercher ceux qui auront crû.\r\n   \r\n1. Nous étions errants comme des brebis\r\n   et chacun suivait sa voie,\r\n   quand Jésus est venu vers nous, \r\n   plein de vie et plein d’amour\r\n   il nous offrit gratuit le salut \r\n   et fit de nous ses élus,\r\n   c’est pourquoi nous proclamons son nom.\r\n\r\n\r\n 2. Il nous a envoyé dans ce monde\r\n    pour annoncer l’évangile,\r\n    qui délivre du péché et guérit les cœurs brisés.\r\n    Si tu te détournes de tes voies\r\n    Jésus te pardonnera, comme nous\r\n    tu pourras aussi chanter.\r\n\r\n\r\n3. Quand la trompette retentira\r\n   Jésus Christ apparaîtra, \r\n   ceux qui l’auront rejeté \r\n   resteront  et souffriront,\r\n   mais ceux qui l’aurons toujours aimé, \r\n   tous les morts et les vivants, \r\n   le rencontreront tous dans les airs.\r\n",
        created_at: "2026-08-24 13:14:19.242185+00",
        updated_at: "2026-08-24 13:14:19.242185+00",
        tags: "le seigneur",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 27,
        titre: "Oh toi qui fuis!",
        auteur: null,
        paroles: "\r\n1. Oh toi qui fuis depuis longtemps \r\n   la douce voix du Dieu puissant\r\n   Jésus voudrait sauver ton âme \r\n\r\nRefrain :\r\n   Reviens au père\r\n   plein de tendresse \r\n   oh toi qui pleures\r\n   viens à sa lumière \r\n\r\n\r\n2. Christ a donné sa vie pour toi\r\n   afin que tu suives sa voie,\r\n   c’est bien ton âme qu’il réclame.\r\n\r\n\r\n3. Satan qui est le grand trompeur\r\n   veut t’aveugler dans tes malheurs\r\n   pour enfin régner sur ton âme.\r\n\r\n                \r\n4. Toi qui trembles devant la mort,\r\n   Jésus veut te conduire au port\r\n   n’attends plus donne lui ton âme.\r\n",
        created_at: "2026-08-24 13:17:34.797227+00",
        updated_at: "2026-08-24 13:17:34.797227+00",
        tags: "reviens",
        number: null,
        is_favorite: null,
        comment: null
    },
    {
        id: 28,
        titre: "Sonnez de la trompette!",
        auteur: null,
        paroles: "\r\n1. Sonnez de la trompette !\r\n     ( Jésus est là )\r\n   Criez en allégresse !\r\n     ( Christ apparait )\r\n   Au milieu de son peuple\r\n     ( Oh quelle joie ) bis\r\n\r\n   Les larmes, les craintes et nuits sans sommeil,\r\n   cesseront au jour de l’agneau.\r\n   Adieu les luttes et la mort,\r\n   nous allons au banquet de l’agneau.\r\n\r\n\r\n2. Sonnez de la trompette !\r\n      ( le millénium )\r\n   Le règne de la paix \r\n      ( avec Jésus )\r\n   Tous ses saints avec lui\r\n      ( Au rendez-vous ) bis\r\n\r\n   Satan lié jusqu’au temps marqué, \r\n   cessera de troubler le monde.\r\n   Les rachetés de l’agneau\r\n   gouverneront dans ce millenium.\r\n\r\n\r\n3. Jésus est avec nous \r\n   ( Oh nous l’aimons )\r\n   Christ éclaire notre voie\r\n   ( Notre lumière )\r\n   Jésus est avec nous\r\n   ( Il nous protège ) bis\r\n              \r\n   Fortifions nous avançons rassuré, \r\n   notre chef est toujours fidèles.\r\n   Attendons son proche retour,\r\n   le bonheur est la fin des combats.\r\n",
        created_at: "2026-08-24 13:23:08.02398+00",
        updated_at: "2026-08-24 13:23:08.02398+00",
        tags: "sonnez",
        number: null,
        is_favorite: null,
        comment: null
    },
];
