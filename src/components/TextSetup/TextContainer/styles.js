const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
  },
  setup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  formatWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectFont: {
    height: 25,
    marginLeft: 10,
    '& div': {
      fontSize: 12,
    },
  },
  slider: {
    width: '100%',
    marginLeft: 10,
  },
  icon: {
    fontSize: 15,
  },
  paper: {
    maxHeight: 'calc(50% - 96px)',
  },
  closeButton: {
    marginRight: -15,
  },
};

export default styles;
