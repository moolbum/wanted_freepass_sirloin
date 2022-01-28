const theme = {
  gray: '#ddd',
  blue: '#0066cc',
  white: '#fff',

  flex: (align = 'center', justify = 'center', direction = 'row') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content:${justify};
    `,
};

export default theme;
