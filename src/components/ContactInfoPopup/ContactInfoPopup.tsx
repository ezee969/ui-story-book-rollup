import { IContact } from '@trii/types/dist/Contacts';
import {
  CardContent,
  Typography,
  Divider,
  Box,
  Chip,
  styled,
  Avatar,
} from '@mui/material';
import {
  PhoneEnabled,
  WhatsApp,
  Facebook,
  Instagram,
  ThreeP,
} from '@mui/icons-material';
import { ContactMethod, Properties } from './components';

const PopupContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1300,
  maxHeight: '65vh',
  overflowY: 'auto',
  backgroundColor: 'white',
  boxShadow: theme.shadows[4],
  borderRadius: theme.shape.borderRadius,
  width: 300,
  transition: 'opacity 0.3s ease, transform 0.3s ease',

  '&::-webkit-scrollbar': {
    width: 8,
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.grey[200],
    borderRadius: 10,
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.grey[500],
    borderRadius: 10,
    transition: 'background 0.3s',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: theme.palette.grey[700],
  },
}));

const HeaderContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '16px',
});

const ContactAvatar = styled(Avatar)({
  width: 60, // Hice el avatar un poco más grande para mejor visualización
  height: 60,
  marginBottom: 8, // Espacio entre avatar y nombre
});

const ContactName = styled(Typography)({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: 200,
  textAlign: 'center', // Asegura que el texto esté centrado
});

const SectionTitle = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '8px',
  marginTop: '16px',
});

const TagContainer = styled(Box)({
  marginBottom: 16,
});

const StyledChip = styled(Chip)({
  marginRight: 8,
  marginBottom: 8,
});

export interface ContactInfoPopupProps {
  open: boolean;
  t?: (key: string) => string;
  contactData?: IContact;
}

const ContactInfoPopup = ({
  open,
  contactData,
  t = (key: string): string =>
    ({
      labels: 'Etiquetas',
      phone: 'Teléfono',
      business: 'Empresa',
      properties: 'Propiedades',
    }[key] || key),
}: ContactInfoPopupProps) => {
  const popupStyles = {
    visibility: open ? 'visible' : 'hidden',
    opacity: open ? 1 : 0,
    transform: open ? 'translate(-50%, -50%)' : 'translate(-50%, -40%)',
  };

  const contactMethods = [
    {
      icon: <PhoneEnabled fontSize="small" />,
      title: t('phone'),
      contactList: contactData?.phones || [],
      showTitle: true,
    },
    {
      icon: <WhatsApp fontSize="small" />,
      title: 'IM',
      contactList: contactData?.ims_whatsapp || [],
      showTitle: true,
    },
    {
      icon: <Facebook fontSize="small" />,
      contactList: contactData?.ims_facebook || [],
      showTitle: false,
    },
    {
      icon: <Instagram fontSize="small" />,
      contactList: contactData?.ims_instagram || [],
      showTitle: false,
    },
    {
      icon: <ThreeP fontSize="small" />,
      contactList: contactData?.ims_webchat || [],
      showTitle: false,
    },
  ];

  return (
    <PopupContainer sx={popupStyles}>
      <CardContent>
        {/* Header */}
        <HeaderContainer>
          <ContactAvatar src={contactData?.imageUrl} alt="Contact Avatar" />
          <ContactName variant="h6">{contactData?.name}</ContactName>
        </HeaderContainer>

        {/* Labels */}
        <SectionTitle variant="subtitle1">{t('labels')}</SectionTitle>
        <TagContainer>
          {contactData?.tags?.map((tag) => (
            <StyledChip key={tag.id} label={tag.name} color="primary" size="small" />
          ))}
        </TagContainer>
        <Divider />

        {/* Business */}
        <SectionTitle variant="subtitle1">{t('business')}</SectionTitle>
        <Typography variant="body2" color="text.secondary">
          {contactData?.businessName}
        </Typography>
        <Divider />

        {/* Contact Methods */}
        {contactMethods.map((method, index) => (
          <ContactMethod
            key={index}
            icon={method.icon}
            title={method.title}
            contactList={method.contactList}
            showTitle={method.showTitle}
          />
        ))}

        {/* Properties */}
        <Properties properties={contactData?.properties} title={t('properties')} />
      </CardContent>
    </PopupContainer>
  );
};

export default ContactInfoPopup;
