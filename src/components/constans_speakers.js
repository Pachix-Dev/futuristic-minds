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
    avatar: '/futuristic-minds/speakers/img-man.webp',
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
    name: 'Lic. Amalia Anguiano Juárez',
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
]
export { speakers }
