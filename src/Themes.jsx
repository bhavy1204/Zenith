import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./Themes.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: 'rgb(55, 65, 81)',
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
        ...theme.applyStyles('dark', {
            color: theme.palette.grey[300],
        }),
    },
}));

export default function CustomizedMenus() {

    const { themeName, setThemeName, availableThemes } = useContext(ThemeContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleThemeSelect = (theme) => {
        setThemeName(theme);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className='themes'>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Themes
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                slotProps={{
                    list: {
                        'aria-labelledby': 'demo-customized-button',
                    },
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleThemeSelect('light')} disableRipple>
                    Light
                </MenuItem>
                <MenuItem onClick={() => handleThemeSelect('blue')} disableRipple>
                    Blue
                </MenuItem>
                <MenuItem onClick={() => handleThemeSelect('green')} disableRipple>
                    Green
                </MenuItem>
                <MenuItem onClick={() => handleThemeSelect('orange')} disableRipple>
                    Orange
                </MenuItem>
            </StyledMenu>
        </div>
    );
}

// return (
//     <div>
//         <label>Select Theme: </label>
//         <select value={themeName} onChange={(e) => }>
//             {availableThemes.map(theme => (
//                 <option key={theme} value={theme}>{theme}</option>
//             ))}
//         </select>
//     </div>
// );


