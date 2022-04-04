import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import authState from "../stores/auth/atom";
import { Avatar as MuiAvatar } from "@mui/material/";
import Avatar from "boring-avatars";

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
	createLink("Dashboard", "/dashboard"),
];

const Header = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const auth = useRecoilValue(authState);
	const resetAuth = useResetRecoilState(authState);
	const navigate = useNavigate();

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

	const handleSignInOut = () => {
		if (auth.token) resetAuth();
		navigate("/login");
	};

	const navLinks = pages.map((page) => (
		<MenuItem
			key={page.text}
			component={NavLink}
			to={page.path}
			onClick={handleCloseNavMenu}
		>
			<Typography textAlign="center">{page.text}</Typography>
		</MenuItem>
	));

	const userLinks = settings.map((setting) => (
		<MenuItem
			key={setting.text}
			component={NavLink}
			to={setting.path}
			onClick={handleCloseUserMenu}
		>
			<Typography>{setting.text}</Typography>
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
								{auth.token ? (
									<Avatar
										size={40}
										name={auth.user.username}
										variant="beam"
										colors={[
											"#92A1C6",
											"#146A7C",
											"#F0AB3D",
											"#C271B4",
											"#C20D90",
										]}
									/>
								) : (
									<MuiAvatar alt="Remy Sharp" src="" />
								)}
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
							<MenuItem
								onClick={() => {
									handleSignInOut();
									handleCloseUserMenu();
								}}
							>
								<Typography>
									{auth.token ? "Logout" : "Login"}
								</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Header;
