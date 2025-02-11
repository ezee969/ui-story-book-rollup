// Components/ui
import { OpenInNew, Visibility } from '@mui/icons-material';
import { Avatar, Box, Button, IconButton, styled, Typography } from '@mui/material';

const ButtonsContainer = styled(Box)({
  position: 'absolute',
  top: 8,
  right: 8,
  display: 'flex',
  gap: 4,
});

const SmallButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
}));

const SmallIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  padding: 4,
}));

const HeaderContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '16px',
});

const ContactAvatar = styled(Avatar)({
  width: 60,
  height: 60,
  marginBottom: 8,
});

const ContactName = styled(Typography)({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: 200,
  textAlign: 'center',
});

type HeaderProps = {
  imgUrl: string | undefined;
  name: string | undefined;
  contactId: string | undefined;
  t: (key: string) => string;
  handleNavigateToContacts: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | undefined;
};

const Header = ({
  handleNavigateToContacts,
  imgUrl,
  name,
  contactId,
  t = (key) => key,
}: HeaderProps) => {
  const handleOpenInNewTab = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const url = `/a/contacts/contacts/${contactId}`;

    window.open(url, '_blank');
  };

  return (
    <HeaderContainer>
      <ButtonsContainer>
        <SmallButton
          variant="outlined"
          size="small"
          startIcon={<Visibility />}
          onClick={handleNavigateToContacts}
        >
          {t('view')}
        </SmallButton>
        <SmallIconButton size="small" onClick={handleOpenInNewTab}>
          <OpenInNew fontSize="small" />
        </SmallIconButton>
      </ButtonsContainer>
      <ContactAvatar src={imgUrl} alt="Contact Avatar" />
      <ContactName variant="h6">{name}</ContactName>
    </HeaderContainer>
  );
};

export default Header;
