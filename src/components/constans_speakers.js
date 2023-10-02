const speakers = [
  {
    id: 1,
    conference: 'Soluciones de calidad de la energía y digitalización para edificaciones inteligentes',
    name: 'Oliver Castellanos',
    company: 'Schneider Electric',
    rol: 'Solution Architect',
    avatar: '/futuristic-minds/speakers/oliver-castellanos.webp',
    sketch: 'Ingeniero Mecatrónico egresado de la Universidad Marista. Ha trabajado en diseño, ejecución y supervisión de proyectos de aire acondicionado y especiales con Hubard y Bourlon, ahora CICSA de Grupo Carso. Actualmente, se desempeña como Solution Architect de Building Management System Control de acceso y Medición Eléctrica, apoyando a la validación en la prescripción de productos en varios proyectos. También se encarga de impartir las certificaciones en los softwares de las soluciones, previamente mencionados. Fue miembro asociado de ASHRAE Capítulo Ciudad de México.'
  },
  {
    id: 2,
    conference: 'Soluciones de calidad de la energía y digitalización para edificaciones inteligentes',
    name: 'Sergio Romero',
    company: 'Schneider Electric',
    rol: 'Business Developer Manager for Power Quality & Energy Automation',
    avatar: '/futuristic-minds/speakers/sergio-romero.webp',
    sketch: 'Ingeniero eléctrico egresado de la UNAM. Especialista en medición eléctrica, calidad de la energía, sistemas de monitoreo (EMS). Apasionado de la tecnología, la innovación y las soluciones inteligentes. Experto en  soluciones que involucran el monitoreo de equipos en media y baja tensión para concentrar lecturas en software para la generación de reportes, monitoreo en tiempo real y registro de históricos.'
  },
  // {
  //   id: 3,
  //   conference: 'Estudiantes líderes: Las industrias del futuro están en tus manos.',
  //   name: 'Mariana Cruz',
  //   company: 'Schneider Electric',
  //   rol: 'Sales Distributors Engineer',
  //   avatar: '/futuristic-minds/speakers/mariana-cruz.webp',
  //   sketch: 'Egresada del Instituto Politécnico Nacional, en la carrera de Ingeniería en Control y Automatización con un posgrado en Administración de Negocios enfocado en Mercadotecnia, en la Universidad del Valle de México.  Profesional con 10 años de experiencia en el ámbito Industrial.  Actualmente se desempeña como Sales Distribuitors Engineer en Schneider Electric Mexico, enfocada principalmente en brindar soluciones de control y automatización a usuarios finales, Integradores y OEMs.'
  // },
  {
    id: 4,
    conference: 'Empower the School',
    name: 'Leonardo Pérez',
    company: 'Endress + Hauser Mexico',
    rol: 'Industry Manager',
    avatar: '/futuristic-minds/speakers/leonardo-perez.webp',
    sketch: 'Ingeniero en Comunicaciones y Electrónica en la especialidad de Control Desarrollando conocimiento y experiencia en temas relacionados con: Protocolos de Comunicación: Foundation Fieldbus, Profibus, Modbus, HART, WirelessHART y OPC. Plataforma Rockwell: Controladores y Módulos, RSLogix5000, RSEnergyMetrix, RSFieldbus Plataforma E+H: Instrumentos y componentes, Tankvision, SupplyCare, eSight, FieldCare Clasificación y métodos de protección para áreas clasificadas.'
  },
  {
    id: 5,
    conference: 'Implicaciones del Edge computing en la Industria (HBN)',
    name: 'Sac Nité Arzate',
    company: 'Schneider Electric',
    rol: 'Business Developer',
    avatar: '/futuristic-minds/speakers/sac-nite.webp',
    sketch: 'Líder de pronóstico experimentado y analista de mercado con más de 10 años de experiencia en diversas industrias. Perfil analítico con importante enfoque en modelos matemáticos, análisis de estacionalidad, seguimiento de proyectos, comunicación y networking con plantas, marketing y áreas comerciales. Experiencia en marketing de inteligencia de negocios como asesor de confianza para áreas comerciales, medianas y pequeñas organizaciones con comprensión de casos de uso de negocios verticales y funcionales en México. Buena comprensión de los revendedores, OEM, integración de sistemas y otros socios "influyentes". Fuerte liderazgo y habilidades de colaboración entre equipos. Historial demostrable de "liderazgo de pensamiento" original y apasionado dentro de Marketing. Historial de creación exitosa de alineación con ventas e influencia en una organización matricial.'
  },
  {
    id: 6,
    conference: 'La Exploración Robótica del Universo',
    name: 'Alfonso Feria Kaiser',
    company: 'Jet Propulsion Laboratory',
    rol: 'Ingeniero de Sistemas',
    avatar: '/futuristic-minds/speakers/alfonso-feria.webp',
    sketch: 'El doctor Alfonso Feria Kaiser obtuvo su licenciatura y maestría en Ingeniería Mecánica de la UNAM y un doctorado en la Universidad de Wisconsin. Ha trabajado en JPL desde 1992, en donde comenzó haciendo diseño y análisis estructural de antenas de comunicaciones, y diseño y desarrollo de estructuras inflables. Fue supervisor del Grupo de Ingeniería Mecánica y Estructural de Antenas, líder del equipo de análisis estructural de la misión de interferometría espacial y analista de la fuente de rayos X de CheMin, un instrumento en el Rover Opportunity. Alfonso trabajó como jefe de ingeniería del equipo mecánico para el ensamblado de naves espaciales y fue ingeniero del MIRI Crycooler, que es parte del JWST. Últimamente, trabajó en el Complejo de Comunicaciones del Espacio Profundo de Madrid durante la instalación de dos nuevas estaciones de seguimiento. Actualmente, es Ingeniero de sistemas de la Red del Espacio Profundo.'
  },
  {
    id: 7,
    conference: 'Cultura del agua y Día Cero',
    name: 'Amalia Anguiano Juárez',
    company: 'SAPAL',
    rol: 'Encargada de cultura del Agua',
    avatar: '/futuristic-minds/speakers/amalia-anguiano.webp',
    sketch: 'Egresada de la licenciatura de Comunicación, con especialidad en Relaciones Públicas, por la Universidad de León. Desde el 2002 forma parte del Sapal. En 2015 tiene a su cargo el área de Cultura del Agua, siendo promotora de comunicación de este tema y es parte de los Espacios de Cultura del Agua (ECAS) a nivel estado. Es el enlace del Sapal con las dependencias municipales en materia educativa. En abril de este año recibió el reconocimiento Internacional por la participación en la Promoción del Cuidado del Agua, por parte del Centro de Evaluación del Instituto de Mejores Gobernantes, la Red de gobierno y la Organización Mundial de Ciudades Sostenibles; en julio de este mismo año recibió el Certificado de Competencias Laboral por la promoción de cultura del agua,  por parte de la Secretaría de Desarrollo Económico Sustentable del Gobierno del Estado de Guanajuato.'
  },
  {
    id: 8,
    conference: 'Aprendizajes y retos sobre la electromovilidad en México',
    name: 'Manuel Sánchez Tello',
    company: 'Instituto Oviedo',
    rol: 'Consejero Delegado',
    avatar: '/futuristic-minds/speakers/manuel-sanchez.webp',
    sketch: 'Consejero Delegado del Instituto Oviedo. Tiene 25 años de trayectoria en el sector educativo, titular del curso Energías Renovables en la Universidad Iberoamericana León y 14 años de experiencia en el sector energético y de sustentabilidad. Además, es Director General de la empresa Soluciones Ecoeficientes SA de CV.'
  },
  {
    id: 9,
    conference: 'Economía circular ¿Una alternativa para resolver las problemáticas ambientales?',
    name: 'Ramón Ayala Álvarez',
    company: 'Escuela de Talentos Guanajuato Azteca',
    rol: 'Profesor de Innovación y Emprendimiento',
    avatar: '/futuristic-minds/speakers/ramon-ayala.webp',
    sketch: 'Ramón es apasionado de diseñar futuros mejores para las personas y el planeta. Estudió Negocios en el Tecnológico de Monterrey y es maestrando en Estudios para el Desarrollo por la Universidad de Guanajuato. Ha creado negocios en varios sectores, aunque se especializa en los servicios de consultoría; a través de estos, ha colaborado en iniciativas de Desarrollo Económico Sostenible en conjunto con gobiernos, universidades, empresas y organizaciones internacionales, como las Naciones Unidas. Ha capacitado a personas en México y otros 16 países de manera virtual. Actualmente, trabaja en 4 proyectos: Su familia, su investigación de maestría en relación con el desarrollo y la crítica al emprendimiento social, su Estudio de Innovación y Cambio, donde realiza proyectos de consultoría y capacitación en prospectiva estratégica, su rol como Profesor en temas de Innovación y Finanzas en la Escuela de Talentos Guanajuato - Azteca.'
  },
  {
    id: 10,
    conference: 'Inteligencia artificial, desde la diversión hasta la aplicación',
    name: 'Ylutiere Reyes Campos',
    company: 'YLUCA, Capacitación y Consultoría en empresa 4.0',
    rol: 'Investigador ',
    avatar: '/futuristic-minds/speakers/ylutiere-reyes.webp',
    sketch: 'Lleva más de 17 años siendo profesora de ingeniería y posgrado, su pasión es desarrollar proyectos que ayuden a resolver problemas de la industria, desde el escenario, de ciencia, tecnología y emprendimiento.Ha realizado proyectos donde se aplica la inteligencia artificial para detectar errores o defectos, en la clasificación de residuos inorgánicos de la basura y en la medición de piezas metálicas pequeñas. Actualmente, tiene una empresa con más de 5 años, la cual apoya a empresarias por medio de capacitaciones, herramientas digitales, optimización de sus procesos e insertando la inteligencia artificial.'
  },
  {
    id: 11,
    conference: 'Construyendo un Futuro Sostenible: Explorando los ODS en Nuestro Entorno',
    name: 'Laura Eugenia Alejandri Rábago',
    company: 'Escuela de Talentos Guanajuato Azteca',
    rol: 'Docente ',
    avatar: '/futuristic-minds/speakers/laura-alejandri.webp',
    sketch: 'Realizó sus estudios en Diseño de Interiores y una Maestría en Cultura y Arte en la Universidad de Guanajuato y en la Universidad Politécnica de Valencia; realizó una estancia de investigación en el Museo de Antioquia en Medellín. Tiene una Maestría en Estudio y Gestión del Desarrollo en la Universidad de La Salle Bogotá. Cuenta con una Especialidad en Políticas Culturales y Gestión Cultural, y actualmente cursa un Doctorado en Ciencias Sociales en la Universidad de Guanajuato. Destacó como diseñadora, interviniendo inmuebles patrimoniales en San Cristóbal de las Casas. Participó y coordinó programas de voluntariado internacional, con enfoque en patrimonio, turismo sostenible, cultura y educación, junto a la UNESCO en México, España, Italia, Portugal y Marruecos. Recientemente, obtuvo el 1er lugar en el Premio Municipal a las Buenas Prácticas Educativas 2023 en León. Ha impartido ponencias y talleres en el Coloquio de Cultura México-Québec y el XIII Congreso Internacional Anáhuac de Responsabilidad Social, entre otros.'
  },
  {
    id: 12,
    conference: 'Convivencia y comunicación cotidiana: las habilidades sociales en el siglo XXI',
    name: 'Erandi Teresa Ramírez García',
    company: 'Escuela de Talentos Guanajuato Azteca Nivel Medio Superior',
    rol: 'Coordinadora académica',
    avatar: '/futuristic-minds/speakers/erandi-teresa.webp',
    sketch: 'Apasionada de la educación, del desarrollo del potencial humano y la reconstrucción del tejido social, tiene más de 23 años trabajando en instituciones educativas, entre ellas la UNIVA, el IPN, la AMSPL, y el ITL. Actualmente, lleva la Coordinación académica de la Escuela de Talentos Guanajuato Azteca. Psicóloga de profesión, tiene formación como maestra en terapia familiar, y en educación. Realizó diplomados en Competencias de la Educación, Pedagogía interactiva como modelo educativo,  Psicoterapias integrativas y en la reconstrucción del tejido social.'
  },
  {
    id: 13,
    conference: 'Gotas de conciencia: Navegando el cálculo de la huella hídrica',
    name: 'Karen Adriana García Ramírez',
    company: 'Escuela de Talentos Guanajuato Azteca Nivel Medio Superior',
    rol: 'Docente',
    avatar: '/futuristic-minds/speakers/karen-adriana.webp',
    sketch: 'Ingeniera Ambiental de la Universidad de Guanajuato, apasionada por la seguridad ambiental y la sostenibilidad. Tiene un diplomado en Seguridad e Higiene, Residuos y Riesgo Ambiental, y un Curso en Manejo de Sustancias Químicas Peligrosas. Su interés por la innovación la llevó a explorar materiales sostenibles en el Tercer Congreso de Materiales y Procesos Industriales. Su participación en la Feria Ambiental Universitaria refleja mi deseo de compartir conocimientos, mientras que su formación en manejo de residuos y humedales ilustra su enfoque en soluciones prácticas. Tiene un compromiso continuo hacia nuevos desafíos en el campo ambiental.'
  },
  {
    id: 14,
    conference: 'La importancia de un Pitch efectivo',
    name: 'María Gutiérrez Rangel',
    company: 'Instituto Oviedo',
    rol: 'Jefatura de innovación y emprendimiento',
    avatar: '/futuristic-minds/speakers/maria-gutierrez.webp',
    sketch: 'Jefa de innovación y emprendimiento en el Instituto Oviedo, Lic. en Mercadotecnia por la Universidad de la Salle, cursando la maestría en Administración Estratégica, con experiencia en el sector educativo, y en sectores industriales, asesorando empresas, experta en temas de ventas, administración y servicio al cliente.'
  },
  {
    id: 16,
    conference: 'Inteligencia Artificial Generativa',
    name: 'Felipe Hernández Palafox',
    company: 'Universidad La Salle Bajío',
    rol: 'Secretario Académico',
    avatar: '/futuristic-minds/speakers/felipe-hernandez.webp',
    sketch: 'Doctorado en Sistemas Computacionales en la Universidad Del Sur, posee dos maestrías: una en Tecnologías Web y Dispositivos Móviles de la Universidad De La Salle Bajío y otra en Gerencia De Proyectos de la Universidad Europea de Monterrey. Ha desempeñado diversos roles como docente y coordinador de licenciatura en la Universidad La Salle Bajío, además de ser participante activo en diversos eventos y congresos.'
  },
  {
    id: 17,
    conference: 'Inteligencia Artificial Generativa',
    name: 'Miguel Salvador Gómez Díaz',
    company: 'Universidad La Salle Bajío',
    rol: 'Jefe académico de pregrado de Ingeniería de Software y Sistemas Computacionales',
    avatar: '/futuristic-minds/speakers/miguel-gomez.webp',
    sketch: 'Profesional en Ciencia y Tecnología, doctorado en la Universidad de Guadalajara. Posee títulos del Tecnológico Nacional de México. Cuenta con certificaciones como Análisis de Datos con Google y Ciencia de Datos. Como investigador, ha publicado trabajos sobre respuestas pupilares digitales, comportamiento no lineal y medición no invasiva de glucosa mediante algoritmos de Machine Learning y redes neuronales. Presentó sus investigaciones en congresos de diversos niveles. Creó aplicaciones móviles para niños con Autismo y Trastorno de Déficit de Atención. Su trayectoria refleja compromiso con la investigación, innovación y cambio social. Fue galardonado con el 2do lugar en el IX Premio a la Innovación Guanajuato, aspira a generar un impacto mundial positivo.'
  },
  {
    id: 18,
    conference: 'Industria 4.0 y el Gemelo Digital: Producto, Proceso y Desempeño',
    name: 'Mariana Del Rocío García Dorantes',
    company: 'Siemens México, Centroamérica y el Caribe',
    rol: 'Consultora en Transformación Digital y Sustentabilidad',
    avatar: '/futuristic-minds/speakers/mariana-garcía.webp',
    sketch: 'En constante búsqueda de inspiración, estrategias y herramientas para hacer realidad la industria del futuro, Mariana García ha acumulado experiencia en optimización continua de sistemas para la manufactura esbelta, planeación estratégica basada en objetivos, equipos de alto desempeño, digitalización y descarbonización industrial. Es Ingeniera Industrial y de Sistemas, por el Instituto Tecnológico y de Estudios Superiores de Monterrey; y actualmente, es Consultora en Transformación Digital y Sustentabilidad para Siemens México, Centroamérica y el Caribe.'
  },
  {
    id: 19,
    conference: 'Future Makers',
    name: 'Josué Nieto',
    company: 'Siemens México, Centroamérica y el Caribe',
    rol: 'Especialista de Recursos Humanos',
    avatar: '/futuristic-minds/speakers/josue-nieto.webp',
    sketch: 'Psicólogo e investigador con experiencia en la gestión, desarrollo y evaluación de proyectos para mejorar las condiciones de competencia empresarial, a través de la implementación de herramientas científicas, tecnológicas y creativas, con el fin de fortalecer las condiciones laborales. Cuenta con amplia experiencia en recursos humanos y entrenamiento laboral, durante la cual ha diseñado planes estratégicos para empresas y gestión de grupos.'
  },
  {
    id: 20,
    conference: '',
    name: 'René García Contreras',
    company: 'ENES UNAM',
    rol: 'Coordinador de la Licenciatura de Odontología',
    avatar: '/futuristic-minds/speakers/rene-garcia.webp',
    sketch: 'INFORMACIÓN POR CONFIRMAR'
  },
  {
    id: 21,
    conference: '',
    name: 'Benjamín Aranda Herrera',
    company: 'ENES UNAM',
    rol: 'Titular de la UNIPEV UNAM ENES León',
    avatar: '/futuristic-minds/speakers/benjamin-aranda.webp',
    sketch: 'INFORMACIÓN POR CONFIRMAR'
  },
  {
    id: 22,
    conference: '',
    name: 'Francisco Gustavo Mota Muñoz',
    company: 'Universidad Politécnica de Guanajuato',
    rol: '',
    avatar: '/futuristic-minds/speakers/francisco-mota.webp',
    sketch: 'Apasionado por la educación y formación de talentos STEAM. Especialista en programación aplicada, desarrollando proyectos de modelado matemático, simulación por computadora, control, automatización, robótica e Industria 4.0 (IA, IoT, ML). Ha impartido cursos y talleres STEAM, para educación básica (USICAMM), media superior, superior, y postgrado. Ha diseñado manuales de electrónica, robótica e internet de las cosas para la Secretaría de Educación de Guanajuato. Actualmente es coordinador de la academia de Robótica en la Universidad Politécnica de Guanajuato, profesor de la Universidad Latina de México y colaborador del Instituto de Gestión e Innovación Educativa.'
  },
  {
    id: 23,
    conference: 'Tecnologías emergentes que están preparando el futuro de la movilidad y la reducción de la huella de CO2',
    name: 'José Enrique Poceros Pérez',
    company: 'ROUE',
    rol: 'Chief Technology Officer',
    avatar: '/futuristic-minds/speakers/jose-enrique.webp',
    sketch: 'Es Ingeniero en Comunicaciones y Electrónica. Cuenta con 9 años en la industria, donde ha logrado sobresalir gracias a su entusiasmo y conocimientos en minería, energías renovables, gas y petróleo, desarrollándose en las áreas de Ciberseguridad, IoT, Industrial Control Systems y Soluciones de Diversas Tecnologías. Ha colaborado como arquitecto de soluciones como Estandarización de ciberseguridad para parques fotovoltaicos y parques eólicos, de Ciberseguridad para terminales de refinados, de Comunicación para gasoductos, de Comunicación y Ciberseguridad de estaciones de servicio, y para sistema de manufactura de envases, entre otros. Asimismo, ha colaborado como arquitecto de soluciones en el Oil and Gas ATC y ahora en su transición hacia el IoT HUB, como parte de las inversiones de Cisco del programa Country Digital Acceleration.'
  },
  {
    id: 24,
    conference: 'La influencia de la AI en los softskills',
    name: 'Rocío Bretchnaider',
    company: 'Metaphorce Tech',
    rol: 'COO',
    avatar: '/futuristic-minds/speakers/img-woman.webp',
    sketch: 'Licenciada en Relaciones Industriales por la Universidad Iberoamericana en León y con Maestría en Dirección de Recursos Humanos por la EAE Business School en Barcelona, ha consolidado su carrera en diferentes sectores como manufactura, retail, servicio, educación ejecutando herramientas y diseñando estrategias de valor para aportar valor con el talento de las organizaciones. Ha colaborado en empresas como BRANTANO, Tecnológico de Monterrey World Trade Center Association, TEDx Calzada de los Héroes, City Cáncer Challenge, Consejo Ciudadano de Innovación de Guanajuato, Municipio de Nuevo Laredo, Tamaulipas, entre otras compañías; y ha desarrollado proyectos en conjunto con Clústers y cámaras empresariales para el sector aeroespacial, logística, educación, comercial y financieros. Actualmente, dirige las operaciones del área de talento de METAPHORCE, una plataforma de soluciones llave en mano y talento para la industria de Tecnologías de Información.'
  },
  {
    id: 25,
    conference: 'La Inteligencia Artificial en la Robótica aplicada',
    name: 'Héctor Javier Arismendi Valle',
    company: 'Tecnológico de Monterrey campus León',
    rol: 'Profesor de la escuela de ingenierías y ciencias',
    avatar: '/futuristic-minds/speakers/hector-arismendi.webp',
    sketch: 'Es ingeniero mecánico en el Instituto Politécnico Nacional, recibió el  grado de maestro en Control Automático, en el Departamento de Control Automático en CINVESTAV-IPN; y el grado de Doctor en Control y Sistemas Dinámicos, en la División de Matemática Aplicada en IPICYT. Actualmente, es profesor de tiempo completo en el Tecnológico de Monterrey campus León dentro de la Escuela de Ingeniería y Ciencias y miembro del Sistema Nacional de Investigadores SNI. Sus líneas de investigación en la parte práctica son: automatización y control de robots, control de drones, inteligencia artificial y machine learning; en la parte teórica son: funcionales de Lyapunov-Krasovskii de tipo completo para análisis de estabilidad de sistemas con retardo, ecuaciones diferenciales e integrales con retardo y matrices de Lyapunov.'
  },
  {
    id: 26,
    conference: 'Propuestas de valor desde la Ingeniería para el Diseño FinTech desde el enfoque del emprendimiento',
    name: 'Elizabeth Mena Avilés',
    company: 'Tecnológico de Monterrey campus León',
    rol: 'Directora de Programa Ingeniería Industrial y de Sistemas',
    avatar: '/futuristic-minds/speakers/elizabeth_mena.webp',
    sketch: 'Egresada como Actuaría con especialidad en Estadística para la Calidad Total, por el ITAM; cuenta con formación en Ética Profesional en Negocios e Ingeniería por la Universidad de Western Michigan, y con una maestría en Ingeniería con Especialidad en Sistemas de Calidad y Productividad por el Tecnológico de Monterrey Campus León. Ha trabajado como Especialista en Planeación de Rutas para Aeroméxico y como académica en la Universidad Iberoamericana, UNAM, UVL, Anáhuac del Sur, Tecnológico de Monterrey Campus León; asimismo, tiene trayectoria como Consultora en Innovación Educativa para la Secretaría de Educación de Guanajuato, y Analista de producción y evaluación de procesos en el Laboratorio Logra de México.'
  },
  {
    id: 27,
    conference: 'Taller de sistemas de visión artificial',
    name: 'José Guadalupe Almanza Mireles',
    company: 'Instituto de Educación y Desarrollo Richard E. Dauch',
    rol: 'Instructor',
    avatar: '/futuristic-minds/speakers/jose-guadalupe.webp',
    sketch: 'Ingeniero en Robótica, especializado en las áreas de Automatización y Robótica Industrial, con experiencia profesional como agente capacitador, soporte técnico y encargado de proyectos de innovación tecnológica. Actualmente, es coordinador del Centro Especializado en Automatización del Instituto Estatal de Capacitación del Estado de Guanajuato.'
  },
  {
    id: 28,
    conference: 'Taller de Impresión 3D con NX',
    name: 'Nicolás Rafael Mena Guzmán',
    company: 'Instituto de Educación y Desarrollo Richard E. Dauch',
    rol: '',
    avatar: '/futuristic-minds/speakers/nicolas-mena.webp',
    sketch: 'Ingeniero en Mecatrónica, por el Instituto Tecnológico de León.   Certificado en Diseño y Simulación asistida por computadora con CATIA y NX. Ha impartido cursos de Industria 4.0 en el área de Robótica Colaborativa, Machine Learning y Visión Artificial. Actualmente, trabaja en el Centro de Innovación del IECA AAM, impulsando tecnologías emergentes.'
  },
  {
    id: 29,
    conference: 'Lego Serious Play',
    name: 'Hugo Iván Buenrostro Vázquez',
    company: 'Itesoluciones - Contpaqi',
    rol: '',
    avatar: '/futuristic-minds/speakers/hugo-buenrostro.webp',
    sketch: 'Hugo Buenrostro, diseñador UX/UI egresado de la Universidad de Guadalajara, se destaca en la conceptualización de ideas e ilustración. Su experiencia en comunicación gráfica, metodologías de innovación y tecnologías le ha permitido crear relaciones significativas en CONTPAQi a través del Blog Estudiantil: Empréndete. Su trabajo se centra en conectar con futuros profesionistas y emprendedores, promoviendo soluciones innovadoras. Además, ha compartido su conocimiento como expositor en diversos foros y universidades a nivel nacional, incluyendo TalentLand, UNAM, UANL y la Secretaría de Innovación Jalisco. Su pasión y dedicación lo posicionan como un profesional persuasivo y confiable en su campo.'
  },
  {
    id: 30,
    conference: 'Una empresa es tan inteligente como la gente que es parte de ella',
    name: 'Santiago Escalona',
    company: 'Nokia',
    rol: 'Director de marketing estratégico',
    avatar: '/futuristic-minds/speakers/santiago-escalona.webp',
    sketch: 'Santiago cuenta con alrededor de 20 años de experiencia en el sector de telecomunicaciones, desempeñando roles tanto técnicos como comerciales, de liderazgo de ventas y marketing, actualmente dirige el posicionamiento de Nokia y ayuda a la generación de negocios en el mercado Latinoamericano, con amplio enfoque en Transformación Digital, Industria 4.0 y Tecnología 5G, logrando aportar una visión tecnológica y de negocios global por haber vivido 9 años fuera de México en países como China, Nigeria, Ecuador, Panamá, Argelia, Marruecos y Suecia, lográndose consolidar como un referente en el sector. Es Ingeniero en Comunicaciones y Electrónica por el Instituto Politécnico Nacional de México y un diplomado master en Marketing por Wharton School de la Universidad de Pennsylvania.'
  },
  {
    id: 31,
    conference: 'La importancia de la ciberseguridad en los ambientes industriales',
    name: 'Orlando Hernández López',
    company: 'Ikusi',
    rol: 'Arquitecto de ciberseguridad',
    avatar: '/futuristic-minds/speakers/orlando-hernández.webp',
    sketch: 'Orlando Hernández López es egresado de la Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA – IPN) de la carrera de Licenciatura de ciencias de la informática, cuenta con la maestría de seguridad de la información de la UNIR México. Tiene 20 años de experiencia en tecnologías de comunicaciones y seguridad informática. Ha colaborado en empresas de servicios especializados de IT y consultorías de ciberseguridad. Actualmente forma parte de la empresa IKUSI como Arquitecto de soluciones en Ciberseguridad, apoyando a la parte comercial y de negocios en la integración de nuevas herramientas y soluciones para la generación de servicios que brinden un valor agregado a los clientes para mejorar sus estrategias de ciberseguridad en ambientes de IT y OT.'
  },
  {
    id: 32,
    conference: 'Ellos también fueron jóvenes. La brecha generacional en la industria',
    name: 'Maximiliano Hernández',
    company: 'Mitsubishi',
    rol: 'Ingeniero de producto',
    avatar: '/futuristic-minds/speakers/maximiliano-hernandez.webp',
    sketch: 'INFORMACIÓN POR CONFIRMAR'
  },
  {
    id: 33,
    conference: 'La revolución de la educación: la IA transformando el aprendizaje',
    name: 'Rigoberto García Contreras',
    company: 'UNAM ENES León',
    rol: 'Profesor ',
    avatar: '/futuristic-minds/speakers/rigoberto-garcia.webp',
    sketch: 'INFORMACIÓN POR CONFIRMAR'
  },
  {
    id: 34,
    conference: 'Foro con Embajadores',
    name: 'Gautier Mignot',
    company: 'Delegación de la Unión Europea en México',
    rol: 'Embajador de la Unión Europea en México ',
    avatar: '/futuristic-minds/speakers/gautier-mignot.webp',
    sketch: 'INFORMACIÓN POR CONFIRMAR'
  },
  {
    id: 35,
    conference: 'Foro con Embajadores',
    name: 'Wolfgang Dold',
    company: 'Embajada de la República Federal de Alemania en México',
    rol: 'Embajador de la República Federal de Alemania en México ',
    avatar: '/futuristic-minds/speakers/wolfgang-dold.webp',
    sketch: 'INFORMACIÓN POR CONFIRMAR'
  },
  {
    id: 36,
    conference: 'Charla de estudiantes con el Gobernador de Guanajuato',
    name: 'Diego Sinhue Rodríguez Vallejo',
    company: 'Gobierno del Estado de Guanajuato',
    rol: 'Gobernador del estado de Guanajuato',
    avatar: '/futuristic-minds/speakers/img-man.webp',
    sketch: 'INFORMACIÓN POR CONFIRMAR'
  },
  {
    id: 37,
    conference: 'Estudiantes líderes: las Industrias del Futuro están en tus manos',
    name: 'David Herrera',
    company: 'Schneider Electric',
    rol: 'Sales Engineer OEM',
    avatar: '/futuristic-minds/speakers/david-herrera.webp',
    sketch: 'Ingeniero de Ventas OEM en Schneider Electric. Es Ingeniero en Electricidad, Electrónica y Comunicaciones por la Universidad de Guanajuato. Cuenta con más de 15 años de experiencia en consultoría técnica y ventas.'
  },
  {
    id: 38,
    conference: 'Avance de los vehículos híbridos y eléctricos a través de la historia',
    name: 'Ernesto Enei Chi',
    company: 'Secretaría de Educación de Guanajuato',
    rol: '',
    avatar: '/futuristic-minds/speakers/ernesto-chai.webp',
    sketch: 'Ingeniero con más de 10 años en el diseño de vehículos todo terreno y vehículos eléctricos. Estudios: 1.Ingeniero Mecánico y Eléctrico. 2.Mtro. en Administración y Finanzas. Experiencia: 1. Fundador y coordinador del equipo de  desarrollo de TI y Redes en SAPAL. 2. Iniciador en México del desarrollo de  prototipos automotrices universitarios. 3. Primer mexicano en ganar la competencia  Internacional BAJA SAE. 4. Fundador del equipo BAJA SAE de la Universidad La Salle Bajío. 5. Primer Ingeniero en recibir el reconocimiento a trayectoria destacada por parte de SAE México. 6. Único faculty tricampeón nacional en  competencias BAJA SAE México y campeón  Internacional en USA. 7. Fundador del equipo Electratón de la Universidad La Salle Bajío. 8. Director y coordinador del diseño de más de 15 prototipos todo terreno y 5 prototipos de pista  100% eléctricos. 9. Profesor emérito en la Facultad de Ingenierías  y Tecnologías de la Universidad La Salle Bajío.'
  },
  {
    id: 39,
    conference: 'Tecnología para Emprender',
    name: 'Antonio Reus',
    company: 'IDEA GTO',
    rol: 'Director General',
    avatar: '/futuristic-minds/speakers/antonio-reus.webp',
    sketch: 'INFORMACIÓN POR CONFIRMAR'
  },
  {
    id: 40,
    conference: 'De la idea a la electromovilidad',
    name: 'Juan Manuel Luna',
    company: 'Secretaría de Educación de Guanajuato',
    rol: '',
    avatar: '/futuristic-minds/speakers/juan-luna.webp',
    sketch: 'Ingeniero con más de 10 años de experiencia en dirección y coordinación de equipos multidisciplinarios y desarrollo de proyectos. Estudios: 1. Ingeniero Mecánico y Eléctrico. 2. Especialista en Ingeniería Biomédica. 3. Mtro. en Optomecatrónica. 4. Doctor en Administración. Experiencia: 1. Juez Internacional y nacional en las competencias BAJA SAE. 2. Faculty en la competencia nacional BAJA SAE México por  más de 5 años. 3. Consultor y asesor de diseño de la escudería de Benito Guerra. 4. Director del comité organizador del evento Baja Bajío. 5. Parte del Comité Nacional de Asesores de la competencia nacional Electratón. 6. Promotor de desarrollo de prototipos para competencias  BAJA y Electraton. 7. Especialista en diseño mecánico enfocado a la industria  automotriz, trabajando para diversas empresas, centros de  investigación y universidades. 8. Juez en diversas competencias regionales en Robótica. 9. Docente en la universidad Iberoamericana de León. 10. Coordinador de Ing. Electromecánica de la U. Salle Bajío en  el periodo 2016-2023. 11. Asesor técnico para CENEVAL en Ing. Mecánica y Eléctrica  2016-2023, en el área de diseño mecánico. 12. Desarrollador y diseñador mecánico para el área de  Optomecánica en el Centro de Investigaciones en Óptica, para proyectos de desarrollo tecnológico. 13. Asesor para el diseño de sistema telemétrico de adquisición  de revoluciones de motor y transmisión para vehículos todo  terreno, en prototipos de competencia'
  },
  {
    id: 41,
    conference: 'Electromovilidad una solución sostenible',
    name: 'Dinorah Arellano Lara ',
    company: 'Secretaría de Educación de Guanajuato',
    rol: 'Docente',
    avatar: '/futuristic-minds/speakers/dinorah-arellano.webp',
    sketch: 'Ing. en electrónica y comunicaciones. Egresada de la Facultad de ingeniería mecánica, eléctrica, electrónica de la Universidad de Guanajuato. Maestría en ciencias en Ingeniería industrial y procesos de manufactura. Egresada de CIATEC. Desde 2007. Maestría en nanotecnología del CIMAV, realizó colaboración en cuerpo académico con análisis de vibraciones de molino de PET. Diplomado en robótica de la universidad Carnegie Mellon. Actualmente trabajo en UTL como PTC en el área de Tecnologías emergentes, industriales e informáticas, ha colaborado en el diseño e impartición de cursos para aula virtual, en desarrollo de programas educativos y participa como gestora de carrera de mecatrónica área sistemas de manufactura flexible.'
  },
  {
    id: 42,
    conference: 'Go Karts Eléctricos',
    name: 'Ellis Spiezia',
    company: 'Secretaría de Educación de Guanajuato',
    rol: 'Piloto de carreras',
    avatar: '/futuristic-minds/speakers/ellis-spiezia.webp',
    sketch: 'Piloto de carreras eléctricas, defensor y embajador de los deportes de motor eléctricos, liderando una nueva generación que redefinirá la educación, la economía y la equidad.'
  },
  {
    id: 43,
    conference: 'La ingeniería de la electrónica de potencia en la electromovilidad',
    name: 'Gerardo Vázquez Guzmán',
    company: 'Secretaría de Educación de Guanajuato',
    rol: '',
    avatar: '/futuristic-minds/speakers/gerardo-vazquez.webp',
    sketch: 'Dr. Gerardo Vázquez recibió el grado de Doctor en Ingeniería Eléctrica en la Universidad Politécnica de Cataluña (UPC), en Barcelona, España en el año 2013. Desde el año 2012 es Profesor-Investigador del departamento de ingeniería electrónica del Instituto Tecnológico Superior de Irapuato y ha sido reconocido por el sistema nacional de investigadores (SNI) del CONACYT con la distinción de Investigador nacional nivel 2. El Dr. Vázquez ha trabajado en proyectos de desarrollo tecnológico con diversas industrias tanto extranjeras como nacionales tales como: TORYTRANS, CIRPROTEC, ABENGOA-Solar, ANORTEC, IKERLAN, CEMER, BOS AOUTOMOTIVE y WURTH ELEKTRONIK MEXICO. Es Senior Member de la IEEE y cuenta con más de noventa artículos publicados tanto en revistas de investigación como en congresos internacionales y una patente internacional. Dentro de sus principales intereses de investigación se encuentran los convertidores de potencia para aplicaciones de energías renovables, estrategias de modulación para inversores, entre otros.'
  },
  {
    id: 44,
    conference: 'Mentes Ágiles = Juventudes Destacadas',
    name: 'Beatriz Álvarez Granados',
    company: 'Juventudes GTO',
    rol: 'Jefa de innovación para el desarrollo juvenil y formación especializada ',
    avatar: '/futuristic-minds/speakers/beatriz-alvarez.webp',
    sketch: 'Licenciada en Comercio Internacional por la Universidad de Guanajuato, con maestría en Comunicación Corporativa Empresarial con especialidad en Programación Neurolingüística y maestría en Administración de Negocios por la Escuela de Negocios Europea de Barcelona. Cuenta con una certificación Internacional en Estrategias de E-Commerce por Alibaba Group, el líder chino de comercio electrónico de todo el mundo y otra de Working in a Digital World: Professional Skills y Design Thinking de IBM. Trabajó en la Universidad de Guanajuato en el departamento de Desarrollo Estudiantil, generando esquemas de atención integral a los estudiantes mediante un sistema de atención en red con los diferentes campus y divisiones de la institución. Posteriormente trabajó en la Dirección de Extensión Cultural en el área de planeación y programación de eventos culturales, llevando la agenda global de los eventos de toda la Universidad, por último trabajó en la Dirección de Comunicación, en el cual desarrolló un proyecto de embajadores institucionales, en el área de comunicación estratégica. Después de algunos años en el sector educativo, decidió moverse al sector empresarial, entrando a la empresa MOTEBO, una empresa de desarrollo tecnológico de IoT, donde se encargó del desarrollo comercial de diferentes productos tecnológicos de la empresa y de su estrategia de comunicación'
  },
  {
    id: 45,
    conference: 'Paradigmas de la Inteligencia Artificial en la electromovilidad',
    name: 'Juan de Anda Suárez',
    company: 'Secretaría de Educación de Guanajuato',
    rol: '',
    avatar: '/futuristic-minds/speakers/juan-suarez.webp',
    sketch: 'Juan De Anda-Suárez obtuvo la Licenciatura en Física por la Universidad de Guanajuato, en 2012, la Maestría en Ciencias de la Computación por el TecNM-Instituto Tecnológico de León, en 2014, y el Doctorado en Ciencias de la Computación por el TecNM-Instituto Tecnológico de Tijuana, en 2019. Actualmente es profesor de tiempo completo en la División de Ingeniería Electromecánica del TecNM-Instituto Tecnológico Superior de Purísima del Rincón. Sus intereses de investigación incluyen algoritmos de estimación de distribución, teoría de la información y física computacional. Es miembro del Sistema Nacional de Investigadores del Consejo Nacional de Ciencia y Tecnología de México (SNI-CONACYT).'
  },
  {
    id: 46,
    conference: 'Inteligencia Artificial Aplicada en Medicina',
    name: 'Miguel Ángel Gil Rios',
    company: 'Universidad Tecnológica de León',
    rol: 'Profesor',
    avatar: '/futuristic-minds/speakers/miguel-rios.webp',
    sketch: 'El Dr. Miguel Angel Gil Rios es originario de la ciudad de León Guanajuato. Concluyó los estudios de la Licenciatura en Informática el año 2003, en el Instituto Tecnológico de León. Entre los años 2002 y 2007 laboró en el área de procesamiento de datos y desarrollo de software en el INEGI y posteriormente en la empresa QuarkSoft. En el periodo 2007-2009 estudió la Maestría en Ciencias de la Computación en el mismo instituto, con una beca del CONAHCyT ya que ésta se encuentra adscrita al Sistema Nacional de Posgrados. En el año 2022 obtuvo el Grado Laureado de Doctor en Ciencias de la Ingeniería, con especialidad en el área de Computación, por parte de la Universidad de Guanajuato. Desde el año 2010 a la fecha, trabaja en la Universidad Tecnológica de León como Profesor-Investigador en el área de Tecnologías de la Información.'
  },
  {
    id: 47,
    conference: 'El ADN del Futuro especialista en Electromovilidad',
    name: 'Antonio  Benjamín Pascual Tacea',
    company: 'Secretaría de Educación de Guanajuato',
    rol: 'CEO Masare Moto',
    avatar: '/futuristic-minds/speakers/antonio-pascual.webp',
    sketch: 'Antonio Pascual, CEO de Masare Motors; experto en educación de la Electromovilidad, softwares y habilidades que todo profesional de los Vehículos eléctricos debe saber y cómo las agencias están transformando su industria. Su organización, Masare Motors es una empresa mexicana enfocada en comercializar vehículos ecológicos, así como en fortalecer las capacidades de venta de los concesionarios a través de capacitaciones, estrategias de ventas digitales y reubicación de inventario.'
  },
  {
    id: 48,
    conference: 'Pitch : Encuentra tu voz',
    name: 'Ximena María Alarcón Verduzco',
    company: 'IDEA GTO',
    rol: '',
    avatar: '/futuristic-minds/speakers/img-woman.webp',
    sketch: 'Psicóloga por vocación, emprendedora de corazón y espíritu.  Agente de cambio y aprendiz por convicción. Apasionada por el crecimiento humano. Enfocada en ser agente de cambio, motivando a descubrir y desarrollar la grandeza interior del ser humano en todas sus dimensiones: psicológica, social, cognitiva, emocional y espiritual. Y así promover una vida más plena en lo individual y en lo colectivo. Licenciada en Psicología por parte de la Universidad Latina de América Maestra en Psicología Clínica por parte de la Universidad de las Américas Puebla. Tesis con mención honorífica y graduada Cum Laude. Con más de 15 años de experiencia en el sector público y  educativo. Ha desempeñado puestos de alta dirección en la administración pública estatal y federal. Cuenta con formación en: Creatividad, Coaching, Design Thinking, Diseño y marketing, planeación, emprendimiento e innovación, Mega tendencias ,Políticas Públicas, desarrollo personal e institucional, comunicación y solución de conflictos, liderazgo, programación neurolingüística, sexualidad e identidad de género, psicología del Mexicano, entre otros.'
  },
  {
    id: 49,
    conference: '',
    name: 'Francisco Gasca Vargas',
    company: 'Universidad Politécnica de Guanajuato',
    rol: '',
    avatar: '/futuristic-minds/speakers/francisco-gasca.webp',
    sketch: 'Ingeniero Mecánico por el Instituto Tecnológico de Celaya, especialista en automatización industrial. Ha sido asesor de alumnos en competencias de automatización nacionales convocadas por empresas como SIEMENS y SMC. Ha impartido conferencias tales como Automatización industrial, orígenes y nuevas tendencias. Actualmente desempeña el cargo de profesor Titular A en el Departamento de Ingeniería Robótica de la Universidad Politécnica de Guanajuato, impartiendo asignaturas como Sistemas neumáticos e hidráulicos, PLC, y Automatización industrial.'
  },
  // {
  //   id: 37,
  //   conference: '',
  //   name: '',
  //   company: '',
  //   rol: '',
  //   avatar: '',
  //   sketch: 'INFORMACIÓN POR CONFIRMAR'
  // },
]
export { speakers }
