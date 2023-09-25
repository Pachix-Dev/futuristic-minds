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
  {
    id: 3,
    conference: 'Estudiantes líderes: Las industrias del futuro están en tus manos.',
    name: 'Mariana Cruz',
    company: 'Schneider Electric',
    rol: 'Sales Distributors Engineer',
    avatar: '/futuristic-minds/speakers/mariana-cruz.webp',
    sketch: 'Egresada del Instituto Politécnico Nacional, en la carrera de Ingeniería en Control y Automatización con un posgrado en Administración de Negocios enfocado en Mercadotecnia, en la Universidad del Valle de México.  Profesional con 10 años de experiencia en el ámbito Industrial.  Actualmente se desempeña como Sales Distribuitors Engineer en Schneider Electric Mexico, enfocada principalmente en brindar soluciones de control y automatización a usuarios finales, Integradores y OEMs.'
  },
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
    conference2: 'Diseño especulativo para resolver problemas',
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
    conference: 'Subirse a la ola de la Responsabilidad Social',
    name: 'Laura Eugenia Alejandri Rábago',
    company: 'Escuela de Talentos Guanajuato Azteca',
    rol: 'Docente ',
    avatar: '/futuristic-minds/speakers/laura-alejandri.webp',
    sketch: 'Apasionada de la educación, del desarrollo del potencial humano y la reconstrucción del tejido social, tiene más de 23 años trabajando en instituciones educativas, entre ellas la UNIVA, el IPN, la AMSPL, y el ITL. Actualmente, lleva la Coordinación académica de la Escuela de Talentos Guanajuato Azteca. Psicóloga de profesión, tiene formación como maestra en terapia familiar, y en educación. Realizó diplomados en Competencias de la Educación, Pedagogía interactiva como modelo educativo,  Psicoterapias integrativas y en la Reconstrucción del tejido social.'
  },
  {
    id: 12,
    conference: 'Convivencia y comunicación cotidiana: las habilidades sociales en el siglo XXI',
    name: 'Erandi Teresa Ramírez García',
    company: 'Escuela de Talentos Guanajuato Azteca Nivel Medio Superior',
    rol: 'Coordinadora académica',
    avatar: '/futuristic-minds/speakers/erandi-teresa.webp',
    sketch: 'Realizó sus estudios en Diseño de Interiores y una Maestría en Cultura y Arte en la Universidad de Guanajuato y en la Universidad Politécnica de Valencia; realizó una estancia de investigación en el Museo de Antioquia en Medellín. Tiene una Maestría en Estudio y Gestión del Desarrollo en la Universidad de La Salle Bogotá. Cuenta con una Especialidad en Políticas Culturales y Gestión Cultural, y actualmente cursa un Doctorado en Ciencias Sociales en la Universidad de Guanajuato. Destacó como diseñadora, interviniendo inmuebles patrimoniales en San Cristóbal de las Casas. Participó y coordinó programas de voluntariado internacional, con enfoque en patrimonio, turismo sostenible, cultura y educación, junto a la UNESCO en México, España, Italia, Portugal y Marruecos. Recientemente, obtuvo el 1er lugar en el Premio Municipal a las Buenas Prácticas Educativas 2023 en León. Ha impartido ponencias y talleres en el Coloquio de Cultura México-Québec y el XIII Congreso Internacional Anáhuac de Responsabilidad Social, entre otros.'
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
  // {
  //   id: 15,
  //   conference: 'Construyendo un Futuro Sostenible: Explorando los ODS en Nuestro Entorno',
  //   name: 'Laura Eugenia Alejandri Rábago',
  //   company: 'Escuela de Talentos Guanajuato Azteca',
  //   rol: 'Docente',
  //   avatar: '/futuristic-minds/img/bachillerato-talentos.webp',
  //   sketch: 'Diseñadora social con estudios en México y el extranjero con enfoque en Cultura, Arte y Gestión del Desarrollo. Se ha desempeñado como profesional en la intervención de inmuebles patrimoniales, coordinación de proyectos internacionales con Organizaciones no Gubernamentales, docente y gestora cultural universitaria en el Instituto Politécnico Nacional.'
  // },
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
    rol: 'Profesor de asignatura',
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
    avatar: '/futuristic-minds/speakers/img-man.webp',
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
    sketch: 'INFORMACIÓN POR CONFIRMAR'
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
    conference: 'Comunicación 4.0: ¿Qué es y cómo afecta a la industria 4.0?',
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
]
export { speakers }
