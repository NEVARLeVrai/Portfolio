// Système de traduction multilingue pour le portfolio
class LanguageSystem {
    constructor() {
        this.currentLanguage = 'fr';
        this.translations = {
            fr: {
                // Navigation
                'nav-home': 'Accueil',
                'nav-about': 'À propos',
                'nav-skills': 'Compétences',
                'nav-education': 'Formations',
                'nav-experience': 'Expériences',
                'nav-certifications': 'Certifications',
                'nav-projects': 'Projets',
                'nav-contact': 'Me Contacter',
                
                // Accueil
                'home-title': 'Hey, Je suis',
                'home-name': 'Daniels Soares',
                'home-subtitle': 'Développeur Full Stack<br>Créatif & Autodidacte',
                'home-description': 'Passionné par le développement web, d\'applications et le design graphique, je suis actuellement en BTS SIO SLAM au Lycée René Cassin.',
                'home-contact-btn': 'Me Contacter',
                'home-projects-btn': 'Mes Projets',
                'home-scroll': 'Scrollez vers le bas',

                // Alts
                'alt-logo': 'Logo',
                'alt-matrix-rain': 'Pluie de code Matrix',
                'alt-about': 'À propos de moi',
                'alt-dev': 'Développement',
                'alt-design': 'Design',
                'alt-uiux': 'UX/UI',
                'alt-pix-cert': 'Certification PIX',
                'alt-cisco-cert': 'Certification Cisco',
                'alt-anssi-cert': 'Certification ANSSI',
                'alt-psc1-cert': 'Certification PSC1',
                'alt-nzik-project': 'Projet N-Zik',
                'alt-footer-profile': 'Photo de profil Daniels Soares',
                
                // À propos
                'about-title': 'À propos',
                'about-subtitle': 'Mon introduction',
                'about-description': 'Passionné par l\'informatique, les jeux vidéo et le graphisme, je me spécialise dans le développement web et le design graphique. Mon objectif est de valoriser mes compétences techniques et créatives au service des entreprises, en les accompagnant dans leurs projets numériques. Motivé, autonome et curieux, j\'ai à cœur de m\'investir pleinement au sein d\'une équipe. Je suis disponible pour une alternance dès juin, juillet ou août 2025, au rythme d\'une semaine en formation / une semaine en entreprise.',
                'about-projects': 'Projets',
                'about-experience': 'an<br/>d\'experience',
                'about-cv': 'CV',
                'about-motivation': 'Lettre de motivation',
                'about-veille': 'Veille technologique',
                'modal-redirect': 'Vous serez redirigé',
                'gdrive-cv': 'Tout est stocké sur mon GDrive',
                'gdrive-motivation': 'La lettre de motivation est disponible sur mon GDrive',
                'gdrive-veille': 'La veille technologique est disponible sur mon GDrive',
                'modal-view': 'Le visualiser',
                
                // Réalisations
                'realisations-title': 'Ce que je peux réaliser',
                'realisations-subtitle': 'Mes domaines de création',
                'dev-title': 'Développement<br>Digital',
                'dev-desc': 'Création de sites web, applications et modding de jeu vidéo',
                'design-title': 'Design<br>Créatif',
                'design-desc': 'Design graphique, affiches & visuels pour événements, branding / logo',
                'uiux-title': 'UX/UI Design',
                'uiux-desc': 'Conception d\'interfaces utilisateur intuitives, expérience utilisateur optimisée, prototypage et wireframing, design responsive et adaptatif',
                
                // Compétences
                'skills-title': 'Mes Compétences',
                'skills-subtitle': 'Mon niveau technique',
                'languages-title': 'Langues',
                'skill-french': 'Français',
                'skill-french-level': 'C2 (langue Maternelle)',
                'skill-english': 'Anglais',
                'skill-english-level': 'B2',
                'dev-languages-title': 'Langages et Développement',
                'skill-html-css': 'HTML / CSS',
                'skill-js': 'JavaScript',
                'skill-php-mysql': 'PHP / MySQL',
                'skill-csharp': 'C#',
                'skill-python': 'Python',
                'skill-vb-batch': 'VB / Batch',
                'skill-sql': 'SQL',
                'skill-kotlin': 'Kotlin',
                'skill-cpp': 'C++',
                'skill-java': 'Java',
                'skill-level-advanced': 'Avancé',
                'skill-level-intermediate': 'Intermédiaire',
                'skill-level-basic': 'Basique',
                'tools-title': 'Outils et logiciels',
                'tool-adobe': 'Adobe Photoshop / Illustrator',
                'tool-canva-figma': 'Canva / Figma',
                'tool-wordpress': 'WordPress',
                'tool-vs': 'Visual Studio / VS Code',
                'tool-git': 'GitHub / Git',
                'tool-vm': 'VirtualBox / VM Ware',
                'tool-office': 'Suite Office / Google Workspace',
                'tool-game-engine': 'Unity / Unreal Engine',
                'tool-android-studio': 'Android Studio',
                'skills-table': 'Tableau des compétences',
                'gdrive-skills': 'Le tableau des compétences est disponible sur mon GDrive',
                
                // Formations
                'education-title': 'Formations',
                'formation-bts-title': 'BTS SIO',
                'formation-bts-location': 'Lycée des métiers<Br>René-Cassin Strasbourg',
                'formation-permis-title': 'Permis de conduire',
                'formation-bac-title': 'Bac Pro SN option C RISC',
                'formation-bac-location': 'Lycée Philippes Charles<Br> Goulden Bischwiller',
                'education-bts': 'BTS SIO Option SLAM:',
                'education-bts-desc': 'BTS SIO Services informatiques aux organisations Option SLAM (en cours de formation).',
                'education-permis': 'Permis de conduire :',
                'education-permis-desc': 'Obtention Permis de conduire B',
                'education-bac': 'Bac Pro SN option C RISC',
                'education-bac-desc': 'Système numérique réseau informatique, système communicants',
                'education-bac-mention': 'Mention Très bien',
                'modal-more': 'Voir plus',
                
                // Expériences
                'experience-title': 'Expériences Professionnelles',
                'exp-gaf-title': 'BTS 2SIO SLAM, PFMP',
                'exp-gaf-location': 'Game Asset Factory Dauendorf',
                'exp-ina1-title': 'BTS 1SIO SLAM, PFMP',
                'exp-ina1-location': 'INA Schaeffler Haguenau',
                'exp-oci-title': 'Terminale SN, PFMP',
                'exp-oci-location': 'Groupe OCI mundolsheim',
                'exp-ina2-title': 'Terminale SN, PFMP',
                'exp-ina2-location': 'INA Schaeffler Haguenau',
                'exp-allo-title': 'Seconde et Première SN, PFMP',
                'exp-allo-location': 'Allo informatique',
                'exp-siemens-title': 'Seconde SN, PFMP',
                'exp-siemens-location': 'Siemens Haguenau',
                'experience-details': 'Détails du stage :',
                'experience-1-desc': "Mise en place de solutions de contrôle à distance, stockage cloud sécurisé, sécurisation des données et modernisation du site web de l'entreprise.",
                'experience-2-desc': "Développement d'une application C# pour l'ajout de traçabilité du contrôle dureté des fours à chambre à la supervision du traitement thermique.",
                'experience-3-desc': "Dépannage, installation, préparation de poste, réparation de PC Grant EST HP et mise en place d'installation Windows personnalisé.",
                'experience-4-desc': "Dépannage, installation et préparation de poste pour l'entreprise.",
                'experience-5-desc': "Dépannage, installation et préparation de poste pour l'entreprise.",
                'experience-6-desc': "Dépannage, installation et préparation et programmation C++.",
                
                // Certifications
                'certifications-title': 'Certifications',
                'certifications-subtitle': 'Mes Certifications',
                'cert-view': 'Voir la Certification',
                'cert-pix-title': 'Certification PIX',
                'cert-cisco-title': 'Cisco Netacad - Cybersecurity Essentials',
                'cert-anssi-title': 'Secnum Académie - ANSSI',
                'cert-psc1-title': 'PSC1',
                'cert-location-rene-cassin': 'Lycée des métiers René-Cassin Strasbourg',
                'cert-location-soufflenheim': 'Collège Albert Camus Soufflenheim',
                'cert-obtained': 'Obtenu le',
                'cert-obtained-in': 'Obtenu en',
                'cert-under-construction': 'En construction',
                
                // Projets
                'projects-title': 'Projets',
                'projects-subtitle': 'Mes projets récents',
                'project-view': 'Voir le Projet',
                'project-personal': 'Projet Personnel',
                'project-school': 'Lycée des métiers René-Cassin Strasbourg',
                'project-stage': 'Projet de stage',
                'project-started': 'Commencé le',
                'project-finished': 'Finis le',
                'project-gaf-period': 'Commencé le 06/01/25 au 07/02/25',
                'project-school-rene-cassin': 'Lycée des métiers René-Cassin Strasbourg',
                'project-nzik-title': "N-Zik est une application Android multilingue pour YouTube Music, optimisée pour l'UX/UI et enrichie de nouvelles fonctionnalités.",
                'project-gaf-title': 'Site web Game Asset Factory',
                'project-criee-title': 'Site web Criee',
                'project-view-codeigniter': 'Voir la Version CodeIniter318',
                'project-celeste-title': 'TP Crédit Céleste en C# avec une BDD SQL Server',
                'project-view-tp': 'Voir le TP',
                'project-resto-title': 'TP Restaurant en C#',
                'project-view-tp-resto': 'Voir le TP Restaurant',
                'project-boulangerie-title': 'Site Web Boulangerie - Le Fournil Alsacien',
                'project-view-html': 'Voir la Version HTML/CSS/PHP',
                'project-jpo-title': 'Site Web JPO - (Journée Portes Ouvertes)',
                
                // Contact
                'contact-title': 'Contactez-moi par email',
                'contact-subtitle': 'N\'hésitez pas à me contacter pour plus d\'informations par email',
                'contact-email': 'Email',
                'contact-location': 'Localisation',
                'contact-location-value': 'Alsace, France',
                'contact-firstname': 'Prénom',
                'contact-lastname': 'Nom',
                'contact-subject': 'Sujet',
                'contact-message': 'Message',
                'contact-send': 'Envoyer le mail',
                'contact-fill-all': 'Veuillez remplir tous les champs.',
                
                // Footer
                'footer-title': 'Daniels.exe',
                'footer-subtitle': 'Étudiant en développement<br> Application et Web',
                'footer-home': 'Accueil',
                'footer-contact': 'Me Contacter',
                'footer-secret': 'SECRET'
            },
            en: {
                // Navigation
                'nav-home': 'Home',
                'nav-about': 'About',
                'nav-skills': 'Skills',
                'nav-education': 'Education',
                'nav-experience': 'Experience',
                'nav-certifications': 'Certifications',
                'nav-projects': 'Projects',
                'nav-contact': 'Contact Me',
                
                // Accueil
                'home-title': 'Hey, I\'m',
                'home-name': 'Daniels Soares',
                'home-subtitle': 'Full Stack Developer<br>Creative & Self-taught',
                'home-description': 'Passionate about web development, applications and graphic design, I am currently in BTS SIO SLAM at Lycée René Cassin.',
                'home-contact-btn': 'Contact Me',
                'home-projects-btn': 'My Projects',
                'home-scroll': 'Scroll down',

                // Alts
                'alt-logo': 'Logo',
                'alt-matrix-rain': 'Matrix code rain',
                'alt-about': 'About me',
                'alt-dev': 'Development',
                'alt-design': 'Design',
                'alt-uiux': 'UX/UI',
                'alt-pix-cert': 'PIX Certification',
                'alt-cisco-cert': 'Cisco Certification',
                'alt-anssi-cert': 'ANSSI Certification',
                'alt-psc1-cert': 'PSC1 Certification',
                'alt-nzik-project': 'N-Zik Project',
                'alt-footer-profile': 'Daniels Soares profile picture',
                
                // À propos
                'about-title': 'About',
                'about-subtitle': 'My introduction',
                'about-description': 'Passionate about IT, video games and graphics, I specialize in web development and graphic design. My goal is to enhance my technical and creative skills in the service of companies, accompanying them in their digital projects. Motivated, autonomous and curious, I am committed to fully investing myself within a team. I am available for an apprenticeship from June, July or August 2025, at the rate of one week in training / one week in company.',
                'about-projects': 'Projects',
                'about-experience': 'year<br/>of experience',
                'about-cv': 'CV',
                'about-motivation': 'Motivation Letter',
                'about-veille': 'Technology Watch',
                'modal-redirect': 'You will be redirected',
                'gdrive-cv': 'Everything is stored on my GDrive',
                'gdrive-motivation': 'The motivation letter is available on my GDrive',
                'gdrive-veille': 'The technology watch is available on my GDrive',
                'modal-view': 'View it',
                
                // Réalisations
                'realisations-title': 'What I can create',
                'realisations-subtitle': 'My creation domains',
                'dev-title': 'Digital<br>Development',
                'dev-desc': 'Website creation, applications and video game modding',
                'design-title': 'Creative<br>Design',
                'design-desc': 'Graphic design, posters & visuals for events, branding / logo',
                'uiux-title': 'UX/UI Design',
                'uiux-desc': 'Intuitive user interface design, optimized user experience, prototyping and wireframing, responsive and adaptive design',
                
                // Compétences
                'skills-title': 'My Skills',
                'skills-subtitle': 'My technical level',
                'languages-title': 'Languages',
                'skill-french': 'French',
                'skill-french-level': 'C2 (Native language)',
                'skill-english': 'English',
                'skill-english-level': 'B2',
                'dev-languages-title': 'Languages and Development',
                'skill-html-css': 'HTML / CSS',
                'skill-js': 'JavaScript',
                'skill-php-mysql': 'PHP / MySQL',
                'skill-csharp': 'C#',
                'skill-python': 'Python',
                'skill-vb-batch': 'VB / Batch',
                'skill-sql': 'SQL',
                'skill-kotlin': 'Kotlin',
                'skill-cpp': 'C++',
                'skill-java': 'Java',
                'skill-level-advanced': 'Advanced',
                'skill-level-intermediate': 'Intermediate',
                'skill-level-basic': 'Basic',
                'tools-title': 'Tools and software',
                'tool-adobe': 'Adobe Photoshop / Illustrator',
                'tool-canva-figma': 'Canva / Figma',
                'tool-wordpress': 'WordPress',
                'tool-vs': 'Visual Studio / VS Code',
                'tool-git': 'GitHub / Git',
                'tool-vm': 'VirtualBox / VM Ware',
                'tool-office': 'Office Suite / Google Workspace',
                'tool-game-engine': 'Unity / Unreal Engine',
                'tool-android-studio': 'Android Studio',
                'skills-table': 'Skills table',
                'gdrive-skills': 'The skills table is available on my GDrive',
                
                // Formations
                'education-title': 'Education',
                'formation-bts-title': 'BTS SIO',
                'formation-bts-location': 'René-Cassin Vocational High School<Br>Strasbourg',
                'formation-permis-title': 'Driving License',
                'formation-bac-title': 'Bac Pro SN option C RISC',
                'formation-bac-location': 'Philippes Charles Goulden High School<Br>Bischwiller',
                'education-bts': 'BTS SIO Option SLAM:',
                'education-bts-desc': 'BTS SIO IT Services for Organizations SLAM Option (currently in training).',
                'education-permis': 'Driving License:',
                'education-permis-desc': 'Obtained Driving License B',
                'education-bac': 'Bac Pro SN option C RISC',
                'education-bac-desc': 'Digital system computer network, communicating systems',
                'education-bac-mention': 'Very Good Mention',
                'modal-more': 'See more',
                
                // Expériences
                'experience-title': 'Professional Experience',
                'exp-gaf-title': '2nd Year BTS SIO SLAM, Internship',
                'exp-gaf-location': 'Game Asset Factory Dauendorf',
                'exp-ina1-title': '1st Year BTS SIO SLAM, Internship',
                'exp-ina1-location': 'INA Schaeffler Haguenau',
                'exp-oci-title': 'Final Year SN, Internship',
                'exp-oci-location': 'Groupe OCI Mundolsheim',
                'exp-ina2-title': 'Final Year SN, Internship',
                'exp-ina2-location': 'INA Schaeffler Haguenau',
                'exp-allo-title': 'Second and First Year SN, Internship',
                'exp-allo-location': 'Allo Informatique',
                'exp-siemens-title': 'Second Year SN, Internship',
                'exp-siemens-location': 'Siemens Haguenau',
                'experience-details': 'Internship details:',
                'experience-1-desc': "Implementation of remote control solutions, secure cloud storage, data security and modernization of the company's website.",
                'experience-2-desc': 'Development of a C# application for adding traceability of hardness control of chamber furnaces to the heat treatment supervision.',
                'experience-3-desc': 'Troubleshooting, installation, workstation preparation, repair of Grant EST HP PCs and implementation of customized Windows installation.',
                'experience-4-desc': 'Troubleshooting, installation and workstation preparation for the company.',
                'experience-5-desc': 'Troubleshooting, installation and workstation preparation for the company.',
                'experience-6-desc': 'Troubleshooting, installation, preparation and C++ programming.',
                
                // Certifications
                'certifications-title': 'Certifications',
                'certifications-subtitle': 'My Certifications',
                'cert-view': 'View Certification',
                'cert-pix-title': 'PIX Certification',
                'cert-cisco-title': 'Cisco Netacad - Cybersecurity Essentials',
                'cert-anssi-title': 'Secnum Academy - ANSSI',
                'cert-psc1-title': 'PSC1',
                'cert-location-rene-cassin': 'René-Cassin Vocational High School Strasbourg',
                'cert-location-soufflenheim': 'Albert Camus College Soufflenheim',
                'cert-obtained': 'Obtained on',
                'cert-obtained-in': 'Obtained in',
                'cert-under-construction': 'Under Construction',
                
                // Projets
                'projects-title': 'Projects',
                'projects-subtitle': 'My recent projects',
                'project-view': 'View Project',
                'project-personal': 'Personal Project',
                'project-school': 'René-Cassin Strasbourg Vocational High School',
                'project-stage': 'Internship Project',
                'project-started': 'Started on',
                'project-finished': 'Finished on',
                'project-gaf-period': 'Started from 01/06/25 to 02/07/25',
                'project-school-rene-cassin': 'René-Cassin Strasbourg Vocational High School',
                'project-nzik-title': 'N-Zik is a multilingual Android application for YouTube Music, optimized for UX/UI and enriched with new features.',
                'project-gaf-title': 'Game Asset Factory Website',
                'project-criee-title': 'Criee Website',
                'project-view-codeigniter': 'View CodeIgniter318 Version',
                'project-celeste-title': 'TP Heavenly Credit in C# with a SQL Server DB',
                'project-view-tp': 'View Practical Work',
                'project-resto-title': 'TP Restaurant in C#',
                'project-view-tp-resto': 'View Restaurant Practical Work',
                'project-boulangerie-title': 'Bakery Website - Le Fournil Alsacien',
                'project-view-html': 'View HTML/CSS/PHP Version',
                'project-jpo-title': 'JPO-Website - (Open Day)',
                
                // Contact
                'contact-title': 'Contact me by email',
                'contact-subtitle': 'Don\'t hesitate to contact me for more information by email',
                'contact-email': 'Email',
                'contact-location': 'Location',
                'contact-location-value': 'Alsace, France',
                'contact-firstname': 'First Name',
                'contact-lastname': 'Last Name',
                'contact-subject': 'Subject',
                'contact-message': 'Message',
                'contact-send': 'Send email',
                'contact-fill-all': 'Please fill in all fields.',
                
                // Footer
                'footer-title': 'Daniels.exe',
                'footer-subtitle': 'Student in Application and Web Development',
                'footer-home': 'Home',
                'footer-contact': 'Contact Me',
                'footer-secret': 'SECRET'
            },
            de: {
                // Navigation
                'nav-home': 'Startseite',
                'nav-about': 'Über mich',
                'nav-skills': 'Fähigkeiten',
                'nav-education': 'Ausbildung',
                'nav-experience': 'Erfahrung',
                'nav-certifications': 'Zertifizierungen',
                'nav-projects': 'Projekte',
                'nav-contact': 'Kontakt',
                
                // Accueil
                'home-title': 'Hey, ich bin',
                'home-name': 'Daniels Soares',
                'home-subtitle': 'Full Stack Entwickler<br>Kreativ & Autodidakt',
                'home-description': 'Leidenschaftlich für Webentwicklung, Anwendungen und Grafikdesign, bin ich derzeit im BTS SIO SLAM am Lycée René Cassin.',
                'home-contact-btn': 'Kontakt',
                'home-projects-btn': 'Meine Projekte',
                'home-scroll': 'Nach unten scrollen',

                // Alts
                'alt-logo': 'Logo',
                'alt-matrix-rain': 'Matrix-Code-Regen',
                'alt-about': 'Über mich',
                'alt-dev': 'Entwicklung',
                'alt-design': 'Design',
                'alt-uiux': 'UX/UI',
                'alt-pix-cert': 'PIX-Zertifizierung',
                'alt-cisco-cert': 'Cisco-Zertifizierung',
                'alt-anssi-cert': 'ANSSI-Zertifizierung',
                'alt-psc1-cert': 'PSC1-Zertifizierung',
                'alt-nzik-project': 'N-Zik-Projekt',
                'alt-footer-profile': 'Daniels Soares Profilbild',
                
                // À propos
                'about-title': 'Über mich',
                'about-subtitle': 'Meine Einführung',
                'about-description': 'Leidenschaftlich für IT, Videospiele und Grafik, spezialisiere ich mich auf Webentwicklung und Grafikdesign. Mein Ziel ist es, meine technischen und kreativen Fähigkeiten im Dienst von Unternehmen zu verbessern und sie bei ihren digitalen Projekten zu begleiten. Motiviert, autonom und neugierig, setze ich mich vollständig in einem Team ein. Ich bin verfügbar für eine Ausbildung ab Juni, Juli oder August 2025, im Rhythmus von einer Woche Ausbildung / eine Woche im Unternehmen.',
                'about-projects': 'Projekte',
                'about-experience': 'Jahr<br/>Erfahrung',
                'about-cv': 'Lebenslauf',
                'about-motivation': 'Motivationsschreiben',
                'about-veille': 'Technologiebeobachtung',
                'modal-redirect': 'Sie werden weitergeleitet',
                'gdrive-cv': 'Alles ist auf meinem GDrive gespeichert',
                'gdrive-motivation': 'Das Motivationsschreiben ist auf meinem GDrive verfügbar',
                'gdrive-veille': 'Die Technologiebeobachtung ist auf meinem GDrive verfügbar',
                'modal-view': 'Anzeigen',
                
                // Réalisations
                'realisations-title': 'Was ich erstellen kann',
                'realisations-subtitle': 'Meine Erstellungsbereiche',
                'dev-title': 'Digitale<br>Entwicklung',
                'dev-desc': 'Website-Erstellung, Anwendungen und Videospiel-Modding',
                'design-title': 'Kreatives<br>Design',
                'design-desc': 'Grafikdesign, Poster & Visuals für Events, Branding / Logo',
                'uiux-title': 'UX/UI Design',
                'uiux-desc': 'Intuitive Benutzeroberfläche, optimierte Benutzererfahrung, Prototyping und Wireframing, responsives und adaptives Design',
                
                // Compétences
                'skills-title': 'Meine Fähigkeiten',
                'skills-subtitle': 'Mein technisches Niveau',
                'languages-title': 'Sprachen',
                'skill-french': 'Französisch',
                'skill-french-level': 'C2 (Muttersprache)',
                'skill-english': 'Englisch',
                'skill-english-level': 'B2',
                'dev-languages-title': 'Sprachen und Entwicklung',
                'skill-html-css': 'HTML / CSS',
                'skill-js': 'JavaScript',
                'skill-php-mysql': 'PHP / MySQL',
                'skill-csharp': 'C#',
                'skill-python': 'Python',
                'skill-vb-batch': 'VB / Batch',
                'skill-sql': 'SQL',
                'skill-kotlin': 'Kotlin',
                'skill-cpp': 'C++',
                'skill-java': 'Java',
                'skill-level-advanced': 'Fortgeschritten',
                'skill-level-intermediate': 'Mittelstufe',
                'skill-level-basic': 'Grundlegend',
                'tools-title': 'Tools und Software',
                'tool-adobe': 'Adobe Photoshop / Illustrator',
                'tool-canva-figma': 'Canva / Figma',
                'tool-wordpress': 'WordPress',
                'tool-vs': 'Visual Studio / VS Code',
                'tool-git': 'GitHub / Git',
                'tool-vm': 'VirtualBox / VM Ware',
                'tool-office': 'Office Suite / Google Workspace',
                'tool-game-engine': 'Unity / Unreal Engine',
                'tool-android-studio': 'Android Studio',
                'skills-table': 'Fähigkeitstabelle',
                'gdrive-skills': 'Die Fähigkeitstabelle ist auf meinem GDrive verfügbar',
                
                // Formations
                'education-title': 'Ausbildung',
                'formation-bts-title': 'BTS SIO',
                'formation-bts-location': 'Berufsgymnasium René-Cassin<Br>Straßburg',
                'formation-permis-title': 'Führerschein',
                'formation-bac-title': 'Bac Pro SN Option C RISC',
                'formation-bac-location': 'Philippes Charles Goulden Gymnasium<Br>Bischwiller',
                'education-bts': 'BTS SIO Option SLAM:',
                'education-bts-desc': 'BTS SIO IT-Dienstleistungen für Organisationen Option SLAM (in Ausbildung).',
                'education-permis': 'Führerschein:',
                'education-permis-desc': 'Führerschein B erworben',
                'education-bac': 'Bac Pro SN Option C RISC',
                'education-bac-desc': 'Digitales System Computernetzwerk, Kommunikationssysteme',
                'education-bac-mention': 'Sehr gut',
                'modal-more': 'Mehr sehen',
                
                // Expériences
                'experience-title': 'Berufserfahrung',
                'exp-gaf-title': '2. Jahr BTS SIO SLAM, Praktikum',
                'exp-gaf-location': 'Game Asset Factory Dauendorf',
                'exp-ina1-title': '1. Jahr BTS SIO SLAM, Praktikum',
                'exp-ina1-location': 'INA Schaeffler Haguenau',
                'exp-oci-title': 'Abschlussjahr SN, Praktikum',
                'exp-oci-location': 'Groupe OCI Mundolsheim',
                'exp-ina2-title': 'Abschlussjahr SN, Praktikum',
                'exp-ina2-location': 'INA Schaeffler Haguenau',
                'exp-allo-title': 'Zweites und erstes Jahr SN, Praktikum',
                'exp-allo-location': 'Allo Informatique',
                'exp-siemens-title': 'Zweites Jahr SN, Praktikum',
                'exp-siemens-location': 'Siemens Haguenau',
                'experience-details': 'Praktikumsdetails:',
                'experience-1-desc': 'Implementierung von Fernsteuerungslösungen, sicherem Cloud-Speicher, Datensicherheit und Modernisierung der Unternehmenswebsite.',
                'experience-2-desc': 'Entwicklung einer C#-Anwendung zur Hinzufügung der Rückverfolgbarkeit der Härteprüfung von Kammeröfen zur Überwachung der Wärmebehandlung.',
                'experience-3-desc': 'Fehlerbehebung, Installation, Arbeitsplatzvorbereitung, Reparatur von Grant EST HP PCs und Implementierung einer angepassten Windows-Installation.',
                'experience-4-desc': 'Fehlerbehebung, Installation und Arbeitsplatzvorbereitung für das Unternehmen.',
                'experience-5-desc': 'Fehlerbehebung, Installation und Arbeitsplatzvorbereitung für das Unternehmen.',
                'experience-6-desc': 'Fehlerbehebung, Installation, Vorbereitung und C++-Programmierung.',
                
                // Certifications
                'certifications-title': 'Zertifizierungen',
                'certifications-subtitle': 'Meine Zertifizierungen',
                'cert-view': 'Zertifizierung anzeigen',
                'cert-pix-title': 'PIX-Zertifizierung',
                'cert-cisco-title': 'Cisco Netacad - Cybersecurity Essentials',
                'cert-anssi-title': 'Secnum Académie - ANSSI',
                'cert-psc1-title': 'PSC1',
                'cert-location-rene-cassin': 'Berufsgymnasium René-Cassin Straßburg',
                'cert-location-soufflenheim': 'Albert Camus College Soufflenheim',
                'cert-obtained': 'Erhalten am',
                'cert-obtained-in': 'Erhalten im',
                'cert-under-construction': 'Im Aufbau',
                
                // Projets
                'projects-title': 'Projekte',
                'projects-subtitle': 'Meine aktuellen Projekte',
                'project-view': 'Projekt anzeigen',
                'project-personal': 'Persönliches Projekt',
                'project-school': 'Berufsgymnasium René-Cassin Straßburg',
                'project-stage': 'Praktikumsprojekt',
                'project-started': 'Begonnen am',
                'project-finished': 'Beendet am',
                'project-gaf-period': 'Begonnen vom 06.01.25 bis 07.02.25',
                'project-school-rene-cassin': 'Berufsgymnasium René-Cassin Straßburg',
                'project-nzik-title': 'N-Zik ist eine mehrsprachige Android-Anwendung für YouTube Music, optimiert für UX/UI und mit neuen Funktionen angereichert.',
                'project-gaf-title': 'Game Asset Factory Website',
                'project-criee-title': 'Criee Website',
                'project-view-codeigniter': 'CodeIgniter318-Version anzeigen',
                'project-celeste-title': 'TP Himmlischer Kredit in C# mit einer SQL Server DB',
                'project-view-tp': 'Praktische Arbeit anzeigen',
                'project-resto-title': 'TP Restaurant in C#',
                'project-view-tp-resto': 'Restaurant Praktische Arbeit anzeigen',
                'project-boulangerie-title': 'Bäckerei-Website - Le Fournil Alsacien',
                'project-view-html': 'HTML/CSS/PHP-Version anzeigen',
                'project-jpo-title': 'JPO-Website - (Tag der offenen Tür)',
                
                // Contact
                'contact-title': 'Kontaktieren Sie mich per E-Mail',
                'contact-subtitle': 'Zögern Sie nicht, mich für weitere Informationen per E-Mail zu kontaktieren',
                'contact-email': 'E-Mail',
                'contact-location': 'Standort',
                'contact-location-value': 'Elsass, Frankreich',
                'contact-firstname': 'Vorname',
                'contact-lastname': 'Nachname',
                'contact-subject': 'Betreff',
                'contact-message': 'Nachricht',
                'contact-send': 'E-Mail senden',
                'contact-fill-all': 'Bitte füllen Sie alle Felder aus.',
                
                // Footer
                'footer-title': 'Daniels.exe',
                'footer-subtitle': 'Student für Anwendungs- und Webentwicklung',
                'footer-home': 'Startseite',
                'footer-contact': 'Kontakt',
                'footer-secret': 'GEHEIM'
            },
            es: {
                // Navigation
                'nav-home': 'Inicio',
                'nav-about': 'Acerca de',
                'nav-skills': 'Habilidades',
                'nav-education': 'Educación',
                'nav-experience': 'Experiencia',
                'nav-certifications': 'Certificaciones',
                'nav-projects': 'Proyectos',
                'nav-contact': 'Contáctame',
                
                // Accueil
                'home-title': 'Hola, soy',
                'home-name': 'Daniels Soares',
                'home-subtitle': 'Desarrollador Full Stack<br>Creativo & Autodidacta',
                'home-description': 'Apasionado por el desarrollo web, aplicaciones y diseño gráfico, actualmente estoy en BTS SIO SLAM en el Lycée René Cassin.',
                'home-contact-btn': 'Contáctame',
                'home-projects-btn': 'Mis Proyectos',
                'home-scroll': 'Desplázate hacia abajo',

                // Alts
                'alt-logo': 'Logo',
                'alt-matrix-rain': 'Lluvia de código Matrix',
                'alt-about': 'Sobre mí',
                'alt-dev': 'Desarrollo',
                'alt-design': 'Diseño',
                'alt-uiux': 'UX/UI',
                'alt-pix-cert': 'Certificación PIX',
                'alt-cisco-cert': 'Certificación Cisco',
                'alt-anssi-cert': 'Certificación ANSSI',
                'alt-psc1-cert': 'Certificación PSC1',
                'alt-nzik-project': 'Proyecto N-Zik',
                'alt-footer-profile': 'Foto de perfil de Daniels Soares',
                
                // À propos
                'about-title': 'Acerca de',
                'about-subtitle': 'Mi introducción',
                'about-description': 'Apasionado por la informática, videojuegos y gráficos, me especializo en desarrollo web y diseño gráfico. Mi objetivo es valorar mis habilidades técnicas y creativas al servicio de las empresas, acompañándolas en sus proyectos digitales. Motivado, autónomo y curioso, tengo el corazón de invertirme plenamente dentro de un equipo. Estoy disponible para una alternancia desde junio, julio o agosto de 2025, al ritmo de una semana en formación / una semana en empresa.',
                'about-projects': 'Proyectos',
                'about-experience': 'año<br/>de experiencia',
                'about-cv': 'CV',
                'about-motivation': 'Carta de motivación',
                'about-veille': 'Vigilancia tecnológica',
                'modal-redirect': 'Serás redirigido',
                'gdrive-cv': 'Todo está almacenado en mi GDrive',
                'gdrive-motivation': 'La carta de motivación está disponible en mi GDrive',
                'gdrive-veille': 'La vigilancia tecnológica está disponible en mi GDrive',
                'modal-view': 'Verlo',
                
                // Réalisations
                'realisations-title': 'Lo que puedo crear',
                'realisations-subtitle': 'Mis dominios de creación',
                'dev-title': 'Desarrollo<br>Digital',
                'dev-desc': 'Creación de sitios web, aplicaciones y modding de videojuegos',
                'design-title': 'Diseño<br>Creativo',
                'design-desc': 'Diseño gráfico, carteles y visuales para eventos, branding / logo',
                'uiux-title': 'Diseño UX/UI',
                'uiux-desc': 'Diseño de interfaz de usuario intuitiva, experiencia de usuario optimizada, prototipado y wireframing, diseño responsivo y adaptativo',
                
                // Compétences
                'skills-title': 'Mis Habilidades',
                'skills-subtitle': 'Mi nivel técnico',
                'languages-title': 'Idiomas',
                'skill-french': 'Francés',
                'skill-french-level': 'C2 (Idioma nativo)',
                'skill-english': 'Inglés',
                'skill-english-level': 'B2',
                'dev-languages-title': 'Lenguajes y Desarrollo',
                'skill-html-css': 'HTML / CSS',
                'skill-js': 'JavaScript',
                'skill-php-mysql': 'PHP / MySQL',
                'skill-csharp': 'C#',
                'skill-python': 'Python',
                'skill-vb-batch': 'VB / Batch',
                'skill-sql': 'SQL',
                'skill-kotlin': 'Kotlin',
                'skill-cpp': 'C++',
                'skill-java': 'Java',
                'skill-level-advanced': 'Avanzado',
                'skill-level-intermediate': 'Intermedio',
                'skill-level-basic': 'Básico',
                'tools-title': 'Herramientas y software',
                'tool-adobe': 'Adobe Photoshop / Illustrator',
                'tool-canva-figma': 'Canva / Figma',
                'tool-wordpress': 'WordPress',
                'tool-vs': 'Visual Studio / VS Code',
                'tool-git': 'GitHub / Git',
                'tool-vm': 'VirtualBox / VM Ware',
                'tool-office': 'Suite Office / Google Workspace',
                'tool-game-engine': 'Unity / Unreal Engine',
                'tool-android-studio': 'Android Studio',
                'skills-table': 'Tabla de habilidades',
                'gdrive-skills': 'La tabla de habilidades está disponible en mi GDrive',
                
                // Formations
                'education-title': 'Educación',
                'formation-bts-title': 'BTS SIO',
                'formation-bts-location': 'Liceo Profesional René-Cassin<Br>Estrasburgo',
                'formation-permis-title': 'Licencia de conducir',
                'formation-bac-title': 'Bac Pro SN opción C RISC',
                'formation-bac-location': 'Liceo Philippes Charles Goulden<Br>Bischwiller',
                'education-bts': 'BTS SIO Opción SLAM:',
                'education-bts-desc': 'BTS SIO Servicios de TI para Organizaciones Opción SLAM (actualmente en formación).',
                'education-permis': 'Licencia de conducir:',
                'education-permis-desc': 'Obtenida Licencia de conducir B',
                'education-bac': 'Bac Pro SN opción C RISC',
                'education-bac-desc': 'Sistema digital red informática, sistemas comunicantes',
                'education-bac-mention': 'Muy buena mención',
                'modal-more': 'Ver más',
                
                // Expériences
                'experience-title': 'Experiencia Profesional',
                'exp-gaf-title': '2º año BTS SIO SLAM, Prácticas',
                'exp-gaf-location': 'Game Asset Factory Dauendorf',
                'exp-ina1-title': '1er año BTS SIO SLAM, Prácticas',
                'exp-ina1-location': 'INA Schaeffler Haguenau',
                'exp-oci-title': 'Último año SN, Prácticas',
                'exp-oci-location': 'Groupe OCI Mundolsheim',
                'exp-ina2-title': 'Último año SN, Prácticas',
                'exp-ina2-location': 'INA Schaeffler Haguenau',
                'exp-allo-title': 'Segundo y Primer año SN, Prácticas',
                'exp-allo-location': 'Allo Informatique',
                'exp-siemens-title': 'Segundo año SN, Prácticas',
                'exp-siemens-location': 'Siemens Haguenau',
                'experience-details': 'Detalles de la pasantía:',
                'experience-1-desc': 'Implementación de soluciones de control remoto, almacenamiento seguro en la nube, seguridad de datos y modernización del sitio web de la empresa.',
                'experience-2-desc': 'Desarrollo de una aplicación en C# para agregar trazabilidad del control de dureza de los hornos de cámara a la supervisión del tratamiento térmico.',
                'experience-3-desc': 'Resolución de problemas, instalación, preparación de estaciones de trabajo, reparación de PC Grant EST HP e implementación de instalación de Windows personalizada.',
                'experience-4-desc': 'Resolución de problemas, instalación y preparación de estaciones de trabajo para la empresa.',
                'experience-5-desc': 'Resolución de problemas, instalación y preparación de estaciones de trabajo para la empresa.',
                'experience-6-desc': 'Resolución de problemas, instalación, preparación y programación en C++.',
                
                // Certifications
                'certifications-title': 'Certificaciones',
                'certifications-subtitle': 'Mis Certificaciones',
                'cert-view': 'Ver Certificación',
                'cert-pix-title': 'Certificación PIX',
                'cert-cisco-title': 'Cisco Netacad - Cybersecurity Essentials',
                'cert-anssi-title': 'Academia Secnum - ANSSI',
                'cert-psc1-title': 'PSC1',
                'cert-location-rene-cassin': 'Liceo Profesional René-Cassin de Estrasburgo',
                'cert-location-soufflenheim': 'Colegio Albert Camus de Soufflenheim',
                'cert-obtained': 'Obtenido el',
                'cert-obtained-in': 'Obtenido en',
                'cert-under-construction': 'En construcción',
                
                // Proyectos
                'projects-title': 'Proyectos',
                'projects-subtitle': 'Mis proyectos recientes',
                'project-view': 'Ver Proyecto',
                'project-personal': 'Proyecto Personal',
                'project-school': 'Liceo Profesional René-Cassin de Estrasburgo',
                'project-stage': 'Proyecto de Pasantía',
                'project-started': 'Iniciado el',
                'project-finished': 'Terminado el',
                'project-gaf-period': 'Iniciado del 06/01/25 al 07/02/25',
                'project-school-rene-cassin': 'Liceo Profesional René-Cassin de Estrasburgo',
                'project-nzik-title': 'N-Zik es una aplicación de Android multilingüe para YouTube Music, optimizada para UX/UI y enriquecida con nuevas características.',
                'project-gaf-title': 'Sitio web de Game Asset Factory',
                'project-criee-title': 'Sitio web de Criee',
                'project-view-codeigniter': 'Ver la versión de CodeIgniter318',
                'project-celeste-title': 'TP Crédito Celestial en C# con una BD de SQL Server',
                'project-view-tp': 'Ver Trabajo Práctico',
                'project-resto-title': 'TP Restaurante en C#',
                'project-view-tp-resto': 'Ver Trabajo Práctico de Restaurante',
                'project-boulangerie-title': 'Sitio Web de Panadería - Le Fournil Alsacien',
                'project-view-html': 'Ver Versión HTML/CSS/PHP',
                'project-jpo-title': 'Sitio web de JPO - (Jornada de Puertas Abiertas)',
                
                // Contact
                'contact-title': 'Contáctame por email',
                'contact-subtitle': 'No dudes en contactarme para más información por email',
                'contact-email': 'Email',
                'contact-location': 'Ubicación',
                'contact-location-value': 'Alsacia, Francia',
                'contact-firstname': 'Nombre',
                'contact-lastname': 'Apellido',
                'contact-subject': 'Asunto',
                'contact-message': 'Mensaje',
                'contact-send': 'Enviar email',
                'contact-fill-all': 'Por favor completa todos los campos.',
                
                // Footer
                'footer-title': 'Daniels.exe',
                'footer-subtitle': 'Estudiante en Desarrollo de Aplicaciones y Web',
                'footer-home': 'Inicio',
                'footer-contact': 'Contáctame',
                'footer-secret': 'SECRETO'
            }
        };
        
        this.init();
    }
    
    init() {
        this.detectLanguage();
        this.setupEventListeners();
        this.translatePage();
    }
    
    detectLanguage() {
        // Détection automatique basée sur la langue du navigateur
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0];
        
        // Vérifier si la langue détectée est supportée
        if (this.translations[langCode]) {
            this.currentLanguage = langCode;
        } else {
            // Fallback sur français
            this.currentLanguage = 'fr';
        }
        
        // Mettre à jour le sélecteur
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.value = this.currentLanguage;
        }
    }
    
    setupEventListeners() {
        const languageButton = document.getElementById('language-button');
        const languageOptions = document.getElementById('language-options');

        if (languageButton && languageOptions) {
            languageButton.addEventListener('click', (event) => {
                event.stopPropagation();
                languageOptions.classList.toggle('show');
            });

            document.addEventListener('click', (event) => {
                if (!languageButton.contains(event.target) && !languageOptions.contains(event.target)) {
                    languageOptions.classList.remove('show');
                }
            });

            languageOptions.addEventListener('click', (event) => {
                if (event.target.classList.contains('language-option')) {
                    event.preventDefault();
                    const langCode = event.target.getAttribute('data-lang');
                    this.changeLanguage(langCode);
                    languageOptions.classList.remove('show');
                }
            });
        }
    }
    
    changeLanguage(langCode) {
        if (this.translations[langCode]) {
            this.currentLanguage = langCode;
            this.translatePage();
            
            // Sauvegarder la préférence
            localStorage.setItem('preferred-language', langCode);
            
            // Animation de transition
            this.addTransitionEffect();
        }
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translations[this.currentLanguage][key];
            
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });
        
        // Mettre à jour les attributs spécifiques
        this.updateSpecificElements();
    }
    
    updateSpecificElements() {
        // Mettre à jour les titres de sections
        const sectionTitles = document.querySelectorAll('.section__title');
        const sectionSubtitles = document.querySelectorAll('.section__subtitle');
        
        // Titres de sections
        if (sectionTitles[0]) sectionTitles[0].textContent = this.translations[this.currentLanguage]['about-title'];
        if (sectionTitles[1]) sectionTitles[1].textContent = this.translations[this.currentLanguage]['realisations-title'];
        if (sectionTitles[2]) sectionTitles[2].textContent = this.translations[this.currentLanguage]['skills-title'];
        if (sectionTitles[3]) sectionTitles[3].textContent = this.translations[this.currentLanguage]['education-title'];
        if (sectionTitles[4]) sectionTitles[4].textContent = this.translations[this.currentLanguage]['experience-title'];
        if (sectionTitles[5]) sectionTitles[5].textContent = this.translations[this.currentLanguage]['certifications-title'];
        if (sectionTitles[6]) sectionTitles[6].textContent = this.translations[this.currentLanguage]['projects-title'];
        if (sectionTitles[7]) sectionTitles[7].textContent = this.translations[this.currentLanguage]['contact-title'];
        
        // Sous-titres de sections
        if (sectionSubtitles[0]) sectionSubtitles[0].textContent = this.translations[this.currentLanguage]['about-subtitle'];
        if (sectionSubtitles[1]) sectionSubtitles[1].textContent = this.translations[this.currentLanguage]['realisations-subtitle'];
        if (sectionSubtitles[2]) sectionSubtitles[2].textContent = this.translations[this.currentLanguage]['skills-subtitle'];
        if (sectionSubtitles[3]) sectionSubtitles[3].textContent = this.translations[this.currentLanguage]['certifications-subtitle'];
        if (sectionSubtitles[4]) sectionSubtitles[4].textContent = this.translations[this.currentLanguage]['projects-subtitle'];
        if (sectionSubtitles[5]) sectionSubtitles[5].textContent = this.translations[this.currentLanguage]['contact-subtitle'];
    }
    
    addTransitionEffect() {
        // Ajouter une classe pour l'animation de transition
        document.body.classList.add('language-transition');
        
        setTimeout(() => {
            document.body.classList.remove('language-transition');
        }, 300);
    }
    
    // Méthode pour traduire du texte dynamiquement
    translateText(key) {
        return this.translations[this.currentLanguage][key] || key;
    }
}

// Initialisation du système de langue
document.addEventListener('DOMContentLoaded', () => {
    window.languageSystem = new LanguageSystem();
    
    // Restaurer la langue préférée si elle existe
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && window.languageSystem.translations[savedLanguage]) {
        window.languageSystem.changeLanguage(savedLanguage);
    }
}); 