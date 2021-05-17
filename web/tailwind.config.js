module.exports = {
  theme: {
    extend: {
      screens: {
        xs: '425px',
        lg: '992px'
      },
      colors: {
        transparent: 'transparent',
      },
      backgroundColor: {
        blue: '#146ba3'
      },
      fontSize: {
        '12/16': ['12px', { lineHeight: '16px' }],
        '14/18': ['14px', { lineHeight: '18px' }],
        '16/18': ['16px', { lineHeight: '18px' }],
        '16/22': ['16px', { lineHeight: '22px' }],
        '18/22': ['18px', { lineHeight: '22px' }],
        '18/26': ['18px', { lineHeight: '26px' }],
        '20/24': ['20px', { lineHeight: '24px' }],
        '24/24': ['24px', { lineHeight: '1' }],
        '28/28': ['28px', { lineHeight: '1' }],
        '32/32': ['32px', { lineHeight: '1' }]
      },
      spacing: {
        '10p': '10px'
      },
      maxWidth: {
        '1/2': '50%'
      }
    }
  }
}