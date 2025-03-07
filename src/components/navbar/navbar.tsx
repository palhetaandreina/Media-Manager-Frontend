import { AppBar, Box, Button, Icon, InputBase, Toolbar, Typography, alpha, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export type NavbarAttr = {
	title?: string;
	onSearch?: (search: string) => void;
};

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

export function Navbar({ title, onSearch }: NavbarAttr) {
	return (
		<React.Fragment>
			<AppBar>
				<Toolbar>
					<Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
						{title ?? 'Media Manager'}
					</Typography>

					<Box sx={{ flexGrow: 1 }} />

					{onSearch != undefined ? (
						<Search>
							<SearchIconWrapper>
								<Icon>search</Icon>
							</SearchIconWrapper>

							<StyledInputBase
								placeholder="Busca..."
								onChange={(e) => onSearch(e.target.value)}
								inputProps={{ 'aria-label': 'search' }}
							/>
						</Search>
					) : null}

					<Box sx={{ flexGrow: 1 }} />

					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						{/* <Link to="/dashboard">
							<Button variant="text" size="large" sx={{ color: '#fff' }}>
								Dashboard
							</Button>
						</Link> */}

						<Link to="/history">
							<Button variant="text" size="large" sx={{ color: '#fff' }}>
								Histórico
							</Button>
						</Link>

						<Link to="/">
							<Button variant="text" size="large" sx={{ color: '#fff' }}>
								Sair
							</Button>
						</Link>
					</Box>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
