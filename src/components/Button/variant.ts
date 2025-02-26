interface ButtonStyle {
  button: {
    backgroundColor: string;
    borderWidth?: number;
    borderColor?: string;
  };
  title: {
    color: string;
  };
  icon: {
    color: string;
  };
}

export interface ButtonVariant {
  enabled: ButtonStyle;
  disabled: ButtonStyle;
}

const buttonPrimary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: 'green',
    },
    title: {
      color: 'white',
    },
    icon: {
      color: 'white',
    },
  },
  disabled: {
    button: {
      backgroundColor: 'gray',
    },
    title: {
      color: 'white',
    },
    icon: {
      color: 'white',
    },
  },
};

const buttonOutline: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: 'green',
    },
    title: {
      color: 'black',
    },
    icon: {
      color: 'black',
    },
  },
  disabled: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: 'green',
    },
    title: {
      color: 'black',
    },
    icon: {
      color: 'black',
    },
  },
};

const buttonBlack: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: 'black',
    },
    title: {
      color: 'yellow',
    },
    icon: {
      color: 'yellow',
    },
  },
  disabled: {
    button: {
      backgroundColor: 'gray',
    },
    title: {
      color: 'yellow',
    },
    icon: {
      color: 'yellow',
    },
  },
};

const buttonTransparent: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: 'transparent',
    },
    title: {
      color: 'gray',
    },
    icon: {
      color: 'gray',
    },
  },
  disabled: {
    button: {
      backgroundColor: 'transparent',
    },
    title: {
      color: 'gray',
    },
    icon: {
      color: 'gray',
    },
  },
};

export const variants = {
  primary: buttonPrimary,
  outline: buttonOutline,
  black: buttonBlack,
  transparent: buttonTransparent,
};
