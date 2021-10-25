import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Image from 'next/image';

export default function MenuAppBar() {
  return (
    <Box display="flex">
      <AppBar position="fixed" style={{ backgroundColor: '#341F65' }}>
        <Toolbar>
          <Box flexGrow={1}>
            <Image
              src="https://res.cloudinary.com/healync/image/upload/v1623996131/logo_hmqrid.png"
              alt="Logo"
              width="171"
              height="63"
            />
          </Box>
          <Box>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
