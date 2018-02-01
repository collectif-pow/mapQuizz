// const questions = [
// 	{
// 		question: '1 ?',
// 		answers: ['Un pouet', 'Un truc', 'Un machin', 'Un bidule'],
// 		good: 3,
// 	},
// 	{
// 		question: '2 ?',
// 		answers: ['Un pouet', 'Un truc', 'Un machin', 'Un bidule'],
// 		good: 3,
// 	},
// 	{
// 		question: '3 ?',
// 		answers: ['Un pouet', 'Un truc', 'Un machin', 'Un bidule'],
// 		good: 3,
// 	},
// 	{
// 		question: '4 ?',
// 		answers: ['Un pouet', 'Un truc', 'Un machin', 'Un bidule'],
// 		good: 3,
// 	},
// ];

export const questionList = [
	{
		theme: 'TRAVAILLER',
		questions: [
			"... vouloir te lancer dans l'entrepreneuriat pour (enfin) connaître les joies du coworking ?",
			'... avoir failli te faire virer pour non respect de la hiérarchie ?',
			'... être adepte du jonglage entre 2 ou 3 métiers, aka "Ma vie de slasher" ?',
		],
	},
	{
		theme: 'SEXE',
		questions: [
			'... raconter à tes ami.e.s le détail de tes derniers ébats ?',
			'... être tenté par le métier de sex reporter ?',
			"... pouvoir dessiner l'anatomie clitoridienne dans ses moindres détails ?",
		],
	},
	{
		theme: 'EXILÉS',
		questions: [
			'... te demander comment ouvrir les portes de ton appart à un jeune exilé ?',
			"... vouloir comprendre la différence entre réfugié, demandeur d'asile et exilé ?",
			"... t'intéresser au parcours et à la vision des jeunes exilés ?",
		],
	},
	{
		theme: 'SPORT & VIE NOCTURNE',
		questions: [
			'... penser que le sport aussi peut être écolo !',
			"... répéter qu'il y en a marre d'aller toujours dans le même bar de nuit ?",
			"... constater que les filles ont moins de liberté de circuler la nuit et qu'il faut changer ça !",
			'... regarder avec fascination les gens qui font des pompes à 300 dans la ville ?',
		],
	},
	{
		theme: 'VACANCES LOCALES',
		questions: [
			"... penser que des vacances au soleil c'est surfait !",
			'... partir en quête des petits coins de campagne sympas à côté de chez toi ?',
			'... prévoir, pour tes prochaines vacances, un stage de survivalisme en forêt du Gavre ?',
		],
	},
	{
		theme: 'AGRICULTURE URBAINE & MANGER LOCAL',
		questions: [
			'... réessayer, chaque année, de faire pousser des tomates cerises sur ton balcon ?',
			"... t'extasier devant un légume made in jardin ?",
			'... faire la gueule aux kiwis néo-zélandais et aux fraises en hiver ?',
		],
	},
	{
		theme: 'VIE NUMÉRIQUE',
		questions: [
			"... penser que l'open-source peut sauver le monde ?",
			'... rêver de programmer une carte électronique pour connecter ton grille-pain à ton réveil-matin ?',
			'... vouloir t\'abonner à "FAI Maison" (fournisseur d\'accès internet local) pour que ton surf soit aussi bio que les légumes de ton amap ?',
		],
	},
	{
		theme: "RÉCUP'",
		questions: [
			'... flâner dans une ressourcerie pour dégoter les bibelots de ton intérieur "anti-IKEA" ?',
			'... vouloir sauver les fruits et légumes moches ?',
			'... regretter le temps (lointain) des bouteilles consignées ?',
		],
	},
	{
		theme: 'DÉMOCRATIE',
		questions: [
			'... appliquer les principes de la gouvernance partagée à tes vacances entre potes ?',
			'... te laisser tenter par une expérimentation de communauté sans police type ZAD NDDL ?',
			"... trouver que l'école à la finlandaise (sans devoir ni notes), c'est vachement mieux !",
		],
	},
	{
		theme: 'ARGENT',
		questions: [
			'... chanter que "Moe Money, Moe Problems" ?',
			'... faire la nique au système bancaire en plaçant tes économies sous ton matelas ou mieux : à la banque solidaire la NEF ?',
			'... être adepte du troc sous toutes ses formes ?',
		],
	},
];

const randomInt = max => {
	return Math.floor(Math.random() * Math.floor(max));
};

export const pickQuestions = () => {
	const themes = [];
	while (themes.length < 5) {
		const currentTheme = randomInt(questionList.length);
		if (!themes.includes(currentTheme)) themes.push(currentTheme);
	}
	return themes.map(theme => {
		const currentQuestion = randomInt(questionList[theme].questions.length);
		return {
			theme: questionList[theme].theme,
			question: questionList[theme].questions[currentQuestion],
		};
	});
};
