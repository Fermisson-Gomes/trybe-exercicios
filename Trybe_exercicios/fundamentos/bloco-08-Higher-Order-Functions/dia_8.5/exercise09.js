
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const seasons = ({spring: mounth1, summer: mounth2, autumn: mounth3, winter: mounth4}) => [...mounth1, ...mounth2, ...mounth3, ...mounth4];
console.log(seasons(yearSeasons));