export const styles = {
    handler: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: '0',
        width: '26px',

        '@media screen and (min-width: 1024px)': {
            display: 'none',
        },
    },

    drawer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'dark',
    },

    close: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '25px',
        right: '30px',
        zIndex: '1',
        cursor: 'pointer',
    },

    content: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        pt: '100px',
        pb: '40px',
        px: '30px',
    },

    menu: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        a: {
            fontSize: '16px',
            fontWeight: '500',
            color: 'text_white',
            py: '15px',
            cursor: 'pointer',
            borderBottom: '1px solid #e8e5e5',
            transition: 'all 0.25s',
            '&:hover': {
                color: 'secondary',
            },
            '&.active': {
                color: 'secondary',
            },
        },
    },

    menuFooter: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 'auto',
    },

    social: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        icon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text',
            fontSize: 14,
            mr: '15px',
            transition: 'all 0.25s',
            cursor: 'pointer',
            ':last-child': {
                mr: '0',
            },
            '&:hover': {
                color: 'secondary',
            },
        },
    },

    button: {
        color: 'white',
        fontSize: '14px',
        fw: '700',
        height: '45px',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: '0',
    },
};