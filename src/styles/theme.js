const theme = {
  gray: '#ddd',
  blue: '#0066cc',

  flex: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content:${justify};
    `,
};

export default theme;
