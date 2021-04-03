import useMediaQuery from '@material-ui/core/useMediaQuery';

interface Utility {
    IsDesktop: () => boolean
};

const utility: Utility = {
    IsDesktop: () => useMediaQuery('(min-width:960px)')
};

export default utility;