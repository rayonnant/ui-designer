import { Add } from '@mui/icons-material';
import { AppBar, Box, Button, Container, Typography } from '@mui/material';
import { toggleCreateProjectModal } from '@store/slices/modalsSlice.ts';
import { useDispatch } from 'react-redux';

export const MainHeader: React.FC = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<AppBar position="static" sx={{ padding: '20px' }}>
				<Container maxWidth="lg">
					<Box
						sx={{ display: 'flex', alignItems: 'center', py: 1 }}
					>
						<Box sx={{ flexGrow: 1 }}>
							<Typography noWrap component="div" sx={{ flexGrow: 1, fontSize: '1.5rem', fontWeight: 600 }}>
								Графический редактор
							</Typography>
						</Box>

						<Button
							variant="contained"
							startIcon={<Add />}
							sx={{ textTransform: 'none' }}
							onClick={() => dispatch(toggleCreateProjectModal())}>
							Создать проект
						</Button>
					</Box>
				</Container>
			</AppBar>
		</div>
	);
};
