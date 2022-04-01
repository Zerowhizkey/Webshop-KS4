import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

function ProductCard({ product, onClick }) {
	return (
		<Grid item margin={2} align="center" md={3} sm={4} xs={12}>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component="img"
					sx={{ objectFit: "contain" }}
					alt={product.title}
					height="140"
					image={product.image}
				/>
				<CardContent>
					<Typography gutterBottom variant="h6" component="div">
						{product.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{product.category}
					</Typography>
				</CardContent>
				<CardActions>
					<Button onClick={onClick}>Add</Button>

					<Button
						size="small"
						component={Link}
						to={`${location.pathname}/${product.id}`}
					>
						Learn More
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}

export default ProductCard;
