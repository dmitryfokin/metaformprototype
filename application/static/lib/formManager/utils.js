export const getTitle = (title) => {
  if (typeof title === 'string') return title;
  if (typeof title === 'object') {
    const i18n = application.i18n || 'en';
    return title[i18n] || title['en']; 
  };
};
