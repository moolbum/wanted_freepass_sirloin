const theme = {
  gray: '#a2a2a2',
  blue: '#0066cc',

  flex: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content:${justify};
    `,
};

export default theme;
