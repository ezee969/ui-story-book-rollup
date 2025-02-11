// Components/ui
import { Box, Tooltip, Typography, styled } from '@mui/material';
// Types
import { IContactAddress } from '@trii/types/dist/Contacts';

interface ContactProps {
  contactList: IContactAddress[];
  title?: string;
  showTitle?: boolean;
  icon: React.ReactNode;
}

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'max-content',
  alignItems: 'center',
  gap: 8,
});

const TitleBox = styled(Box)({
  width: '100%',
  borderBottom: `1px solid lightgray`,
});

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: 1,
  minHeight: '50px',
  position: 'relative',
});

const IconBox = styled(Box)(({ theme }) => ({
  marginTop: '-3px',
  padding: 0,
  color: theme.palette.primary.main,
}));

const InfoContainer = styled(Box)({
  display: 'flex',
  maxWidth: '90%',
  gap: '10px',
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  alignItems: 'center',
});

const AddressContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '40px',
});

const NoteText = styled(Typography)({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  maxWidth: '100%',
  position: 'absolute',
  bottom: 10,
  left: 40,
});

const ContactMethod = ({
  icon,
  contactList,
  title,
  showTitle = true,
}: ContactProps) => {
  const renderContactInfo = (contact: IContactAddress) => (
    <StyledBox key={contact.id}>
      <InfoContainer>
        <IconBox>{icon}</IconBox>
        <AddressContainer>
          <Tooltip title={contact.address} arrow placement="top">
            <Typography
              variant="subtitle1"
              fontWeight="semi-bold"
              fontSize={14}
              color="text.primary"
              sx={{
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                cursor: 'default',
                maxWidth: '100%',
              }}
            >
              {contact.address}
            </Typography>
          </Tooltip>
          {contact.profileName && (
            <Typography
              variant="body2"
              fontSize={10}
              color="text.disabled"
              sx={{ marginLeft: '5px' }}
            >
              {contact.profileName}
            </Typography>
          )}
        </AddressContainer>
        {contact.note && (
          <NoteText variant="body2" fontSize={12} color="text.secondary">
            {contact.note}
          </NoteText>
        )}
      </InfoContainer>
    </StyledBox>
  );

  return (
    <Container>
      {showTitle && (
        <TitleBox>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom mt={2}>
            {title}
          </Typography>
        </TitleBox>
      )}
      {contactList?.map(renderContactInfo)}
    </Container>
  );
};

export default ContactMethod;
