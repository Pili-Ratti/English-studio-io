// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

export type NeighborhoodProfile =
  | "tech"
  | "familias"
  | "universitario"
  | "ejecutivo"
  | "creativo"
  | "comercial"
  | "turismo"
  | "viticola";

interface RawNeighborhood {
  slug: string;
  name: string;
  profile: NeighborhoodProfile;
}

interface RawCity {
  slug: string;
  name: string;
  province: string;
  institutes: string[];
  neighborhoods: RawNeighborhood[];
}

// ─────────────────────────────────────────────
// RAW DATA — add cities/neighborhoods here
// ─────────────────────────────────────────────

const RAW_CITIES: RawCity[] = [
  {
    slug: "buenos-aires",
    name: "Buenos Aires",
    province: "CABA y Gran Buenos Aires",
    institutes: [
      "Wall Street English",
      "Berlitz Argentina",
      "International House Buenos Aires",
      "ICANA",
      "Asociación Argentina de Cultura Inglesa (AACI)",
      "Instituto St. Michael's de Cultura Inglesa",
    ],
    neighborhoods: [
      { slug: "palermo",      name: "Palermo",       profile: "tech" },
      { slug: "belgrano",     name: "Belgrano",      profile: "familias" },
      { slug: "recoleta",     name: "Recoleta",      profile: "ejecutivo" },
      { slug: "san-telmo",    name: "San Telmo",     profile: "creativo" },
      { slug: "caballito",    name: "Caballito",     profile: "universitario" },
      { slug: "almagro",      name: "Almagro",       profile: "universitario" },
      { slug: "villa-urquiza",name: "Villa Urquiza", profile: "familias" },
      { slug: "colegiales",   name: "Colegiales",    profile: "tech" },
      { slug: "chacarita",    name: "Chacarita",     profile: "creativo" },
      { slug: "villa-crespo", name: "Villa Crespo",  profile: "tech" },
      { slug: "nunez",        name: "Núñez",         profile: "familias" },
      { slug: "boedo",        name: "Boedo",         profile: "creativo" },
      { slug: "flores",       name: "Flores",        profile: "comercial" },
      { slug: "devoto",       name: "Devoto",        profile: "familias" },
      { slug: "saavedra",     name: "Saavedra",      profile: "familias" },
      { slug: "san-isidro",   name: "San Isidro",    profile: "ejecutivo" },
      { slug: "vicente-lopez",name: "Vicente López",  profile: "ejecutivo" },
      { slug: "pilar",        name: "Pilar",         profile: "ejecutivo" },
      { slug: "tigre",        name: "Tigre",         profile: "familias" },
      { slug: "quilmes",      name: "Quilmes",       profile: "universitario" },
      { slug: "la-plata",     name: "La Plata",      profile: "universitario" },
    ],
  },
  {
    slug: "cordoba",
    name: "Córdoba",
    province: "Córdoba",
    institutes: [
      "Skills English Institute",
      "English Studio Córdoba",
      "Oxford Institute Córdoba",
      "Asociación Argentina de Cultura Británica",
    ],
    neighborhoods: [
      { slug: "nueva-cordoba",      name: "Nueva Córdoba",      profile: "universitario" },
      { slug: "general-paz",        name: "General Paz",        profile: "familias" },
      { slug: "cerro-de-las-rosas", name: "Cerro de las Rosas", profile: "ejecutivo" },
      { slug: "guemes",             name: "Güemes",             profile: "creativo" },
      { slug: "alta-cordoba",       name: "Alta Córdoba",       profile: "universitario" },
      { slug: "villa-el-libertador",name: "Villa el Libertador",profile: "familias" },
    ],
  },
  {
    slug: "rosario",
    name: "Rosario",
    province: "Santa Fe",
    institutes: [
      "Cultural Inglesa Rosario",
      "ALI Inglés",
      "Instituto Churchill",
      "Lets Go Instituto de Inglés",
      "Rosario Idiomas",
    ],
    neighborhoods: [
      { slug: "centro",      name: "Centro",      profile: "ejecutivo" },
      { slug: "fisherton",   name: "Fisherton",   profile: "familias" },
      { slug: "pichincha",   name: "Pichincha",   profile: "universitario" },
      { slug: "echesortu",   name: "Echesortu",   profile: "familias" },
      { slug: "puerto-norte",name: "Puerto Norte", profile: "tech" },
    ],
  },
  {
    slug: "mendoza",
    name: "Mendoza",
    province: "Mendoza",
    institutes: [
      "Speak Mendoza",
      "Fundación Master",
      "Berlitz Mendoza",
    ],
    neighborhoods: [
      { slug: "ciudad",       name: "Ciudad de Mendoza", profile: "turismo" },
      { slug: "godoy-cruz",   name: "Godoy Cruz",        profile: "familias" },
      { slug: "lujan-de-cuyo",name: "Luján de Cuyo",     profile: "viticola" },
    ],
  },
  {
    slug: "mar-del-plata",
    name: "Mar del Plata",
    province: "Buenos Aires",
    institutes: [
      "Biltmore English Center",
      "CEM English",
      "ICA Instituto Cultural Americano",
      "CADS English Language Institute",
    ],
    neighborhoods: [
      { slug: "centro",      name: "Centro",      profile: "turismo" },
      { slug: "playa-grande",name: "Playa Grande", profile: "familias" },
    ],
  },
];

// ─────────────────────────────────────────────
// TEMPLATES — edit copy here, not in the data
// ─────────────────────────────────────────────

const profileUseCases: Record<NeighborhoodProfile, string[]> = {
  tech:         ["Reuniones semanales en inglés con equipos remotos", "Entrevistas de trabajo para roles internacionales o remotos", "Comunicación con clientes y stakeholders del exterior"],
  familias:     ["Inglés para crecer en el trabajo sin cambiar de horario", "Preparación para viajes y mudanzas al exterior", "Apoyo con inglés del día a día y conversación cotidiana"],
  universitario:["Inglés para la facultad y materiales académicos", "Preparación para el IELTS, TOEFL o exámenes universitarios", "Entrevistas y primeros trabajos con componente internacional"],
  ejecutivo:    ["Presentaciones y negociaciones con socios internacionales", "Emails ejecutivos y comunicación formal en inglés", "Liderazgo de equipos multiculturales en inglés"],
  creativo:     ["Comunicación con clientes y agencias del exterior", "Pitches, portfolios y propuestas en inglés", "Networking internacional en ferias, eventos y plataformas digitales"],
  comercial:    ["Inglés para importación, exportación y comercio exterior", "Atención a clientes internacionales en persona o por email", "Negociación con proveedores y socios en inglés"],
  turismo:      ["Atención e información a turistas internacionales", "Inglés para guías, recepcionistas y personal de hotelería", "Comunicación en reservas, reclamos y situaciones imprevistas"],
  viticola:     ["Visitas guiadas y catas en inglés para turistas extranjeros", "Negociación y exportación con compradores internacionales", "Comunicación en ferias internacionales de vinos"],
};

const profileFlavor: Record<NeighborhoodProfile, (name: string) => string> = {
  tech:         (n) => `Muy elegido por profesionales de startups y empresas tech de ${n}, donde el inglés es casi un requisito cotidiano para trabajar.`,
  familias:     (n) => `Ideal para familias y profesionales de ${n} que buscan clases online flexibles y adaptadas a su rutina.`,
  universitario:(n) => `Perfecto para estudiantes universitarios y jóvenes profesionales de ${n} que necesitan inglés para la facu, el trabajo o salir al exterior.`,
  ejecutivo:    (n) => `Muy solicitado por ejecutivos y profesionales de ${n} que trabajan con empresas o clientes internacionales y necesitan un inglés sólido y profesional.`,
  creativo:     (n) => `Popular entre creativos, freelancers y emprendedores de ${n} que necesitan inglés para proyectos con clientes o socios del exterior.`,
  comercial:    (n) => `Muy buscado por comerciantes y profesionales de ${n} que quieren inglés para expandir sus negocios o interactuar con proveedores internacionales.`,
  turismo:      (n) => `Muy solicitado por profesionales del sector turismo y hotelería de ${n} que necesitan inglés para atender y comunicarse con visitantes internacionales.`,
  viticola:     (n) => `Muy elegido por profesionales de la industria vitivinícola de ${n} que necesitan inglés para atender a clientes, socios y visitantes del exterior.`,
};

function cityKeyword(name: string) {
  return `clases de inglés online ${name}`;
}

function cityDescription(name: string) {
  return `Clases de inglés personalizadas para estudiantes de ${name}. Online, en vivo, adaptadas a tu nivel y tus objetivos. Primera clase gratis.`;
}

function cityIntro(name: string) {
  return `Si estás en ${name} y querés mejorar tu inglés — para el trabajo, una entrevista, o simplemente para animarte a hablar — estás en el lugar indicado. Las clases son 100% online, se adaptan a tu horario y se construyen desde cero según lo que necesitás vos.`;
}

// ─────────────────────────────────────────────
// DERIVED TYPES & BUILDER
// ─────────────────────────────────────────────

export interface Neighborhood {
  slug: string;
  name: string;
  localFlavor: string;
  useCases: string[];
}

export interface GeoCity {
  slug: string;
  name: string;
  province: string;
  keyword: string;
  description: string;
  intro: string;
  institutes: string[];
  neighborhoods: Neighborhood[];
}

function buildCity(raw: RawCity): GeoCity {
  return {
    slug: raw.slug,
    name: raw.name,
    province: raw.province,
    keyword: cityKeyword(raw.name),
    description: cityDescription(raw.name),
    intro: cityIntro(raw.name),
    institutes: raw.institutes,
    neighborhoods: raw.neighborhoods.map((n) => ({
      slug: n.slug,
      name: n.name,
      localFlavor: profileFlavor[n.profile](n.name),
      useCases: profileUseCases[n.profile],
    })),
  };
}

// ─────────────────────────────────────────────
// PUBLIC API
// ─────────────────────────────────────────────

export const geoCities: GeoCity[] = RAW_CITIES.map(buildCity);

export function getGeoCity(slug: string): GeoCity | undefined {
  return geoCities.find((c) => c.slug === slug);
}

export function getNeighborhood(citySlug: string, neighborhoodSlug: string) {
  const city = getGeoCity(citySlug);
  return {
    city,
    neighborhood: city?.neighborhoods.find((n) => n.slug === neighborhoodSlug),
  };
}

export function getAllNeighborhoodParams() {
  return RAW_CITIES.flatMap((city) =>
    city.neighborhoods.map((n) => ({ ciudad: city.slug, barrio: n.slug }))
  );
}
