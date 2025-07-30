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
    name: 'Colony Pool Club',
    position: 'Lifeguard',
    url: 'https://chathamtownship.org/departments/parks-recreation/the-colony-pool-club/',
    startDate: '2021-06-01',
    endDate: '2024-08-01',
    summary:
      'I was a three year lifeguard at Colony Pool Club',
    highlights: [
      'Maintained a safe and enjoyable environment for all pool patrons.',
      'Provided first aid and emergency response as needed.',
    ],
  },
];

export default work;
