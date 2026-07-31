/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company or entry
 * @property {string} position - Position title or description
 * @property {string} url - Company website or link to resource
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - HTML/Markdown summary of the position
 * @property {string[]} highlights - Plain text highlights of the position (bulleted list)
 */

const work = [
  {
    name: 'Beta Theta Pi Fraternity',
    position: 'Risk Manager',
    url: 'https://beta.org/',
    startDate: '2024-09-01',
    summary:
      'Elected Risk Manager for the University of Delaware chapter, responsible for '
      + 'the safety and logistics of every chapter event.',
    highlights: [
      'Oversee safety protocols for all chapter events, managing logistics for 100+ attendees.',
      'Manage social event budgets, balancing cost control with member experience.',
      'Lead a safety committee, coordinating responsibilities across multiple members.',
      'Represent the chapter at university charity events, including UDance and Mrs. FTK.',
    ],
  },
  {
    name: 'Madison YMCA Gators',
    position: 'Volunteer Youth Basketball Coach',
    url: 'https://www.madisonareaymca.org/',
    startDate: '2023-11-01',
    endDate: '2024-03-01',
    summary:
      'Volunteer head coach for a 6th/7th-grade travel basketball team.',
    highlights: [
      'Led a 6th/7th-grade team to an undefeated championship season.',
      'Designed practices and game strategies, driving measurable improvement across 10+ players.',
      'Built team cohesion and confidence through structured coaching and mentorship.',
    ],
  },
  {
    name: 'Chatham Colony Pool Club',
    position: 'Lifeguard',
    url: 'https://chathamtownship.org/departments/parks-recreation/the-colony-pool-club/',
    startDate: '2021-05-01',
    endDate: '2024-09-01',
    summary:
      'Four summers guarding at my hometown pool club.',
    highlights: [
      'Maintained safety for 200+ daily members with zero incidents under supervision.',
      'Trained and onboarded new staff on safety procedures and emergency response.',
      'CPR and AED certified.',
    ],
  },
];

export default work;
