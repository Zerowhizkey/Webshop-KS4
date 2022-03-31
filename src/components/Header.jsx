import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { useRecoilValue, useRecoilState, useResetRecoilState } from "recoil";
import authState from "../stores/auth/atom";

const createLink = (text, path) => {
	return { text, path };
};

const pages = [
	createLink("Home", "/"),
	createLink("Products", "/products"),
	createLink("Cart", "/cart"),
];
const settings = [
	createLink("Profile", "/profile"),
	// createLink("Account", "/account"),
	createLink("Dashboard", "/dashboard"),
];

const signInOut = [createLink("Login", "/login")];

const Header = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const user = useRecoilValue(authState);
	const resetAuth = useResetRecoilState(authState);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleSignOut = () => {
		resetAuth();
	};

	const navLinks = pages.map((page) => (
		<MenuItem key={page.text} component={NavLink} to={page.path}>
			<Typography textAlign="center">{page.text}</Typography>
		</MenuItem>
	));

	const userLinks = settings.map((setting) => (
		<MenuItem key={setting.text} component={NavLink} to={setting.path}>
			<Typography textAlign="center">{setting.text}</Typography>
		</MenuItem>
	));

	const signInOutLinks = signInOut.map((signInOut) => (
		<MenuItem key={signInOut.text} component={NavLink} to={signInOut.path}>
			{user.token ? (
				<Button
					style={{
						minWidth: 0,
						padding: 0,
						color: "rgba(0, 0, 0, 0.87)",
						textTransform: "none",
					}}
				>
					<Typography onClick={handleSignOut}>Logout</Typography>
				</Button>
			) : (
				<Typography textAlign="center">{signInOut.text}</Typography>
			)}
		</MenuItem>
	));

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
					>
						PGS
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>

						{/* BURGER MENU */}
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{navLinks}
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}
					>
						PGS
					</Typography>

					{/* DESKTOP MENU */}
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
						}}
					>
						{navLinks}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<Avatar alt="Remy Sharp" src="" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{userLinks}
							{signInOutLinks}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Header;
