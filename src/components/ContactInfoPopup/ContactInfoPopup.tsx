import { IContact } from '@trii/types/dist/Contacts';
// Components/ui
import { CardContent, Typography, Divider, Box, Chip, styled } from '@mui/material';
import {
  PhoneEnabled,
  WhatsApp,
  Facebook,
  Instagram,
  ThreeP,
} from '@mui/icons-material';
import { ContactMethod, Header, Properties } from './components';

const PopupContainer = styled(Box)({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1300,
  maxHeight: '65vh',
  overflowY: 'auto',
  backgroundColor: 'white',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  width: 300,
  transition: 'opacity 0.3s ease, transform 0.3s ease',

  '&::-webkit-scrollbar': {
    width: 8,
  },
  '&::-webkit-scrollbar-track': {
    background: '#E0E0E0',
    borderRadius: 10,
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#9E9E9E',
    borderRadius: 10,
    transition: 'background 0.3s',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#616161',
  },
});

const SectionTitle = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '8px',
  marginTop: '16px',
  borderBottom: `1px solid lightgray`,
});

const TagContainer = styled(Box)({
  marginBottom: 16,
});

const StyledChip = styled(Chip)({
  marginRight: 8,
  marginBottom: 8,
});

export interface ContactInfoPopupProps {
  open?: boolean;
  t?: (key: string) => string;
  contactData?: IContact;
  avatarImgUrl?: string;
  handleNavigateToContacts?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const ContactInfoPopup = ({
  open = false,
  contactData,
  avatarImgUrl,
  handleNavigateToContacts = () => {},
  t = (key: string): string =>
    ({
      labels: 'Etiquetas',
      phone: 'Teléfono',
      business: 'Empresa',
      properties: 'Propiedades',
      view: 'Ver',
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
        <Header
          contactId={contactData?.id}
          imgUrl={avatarImgUrl}
          name={contactData?.name}
          t={t}
          handleNavigateToContacts={handleNavigateToContacts}
        />

        {/* Labels */}
        <SectionTitle gutterBottom mt={2} variant="subtitle1">
          {t('labels')}
        </SectionTitle>
        <TagContainer>
          {contactData?.tags?.map((tag) => (
            <StyledChip key={tag.id} label={tag.name} color="primary" size="small" />
          ))}
        </TagContainer>

        {/* Business */}
        <SectionTitle gutterBottom mt={2} variant="subtitle1">
          {t('business')}
        </SectionTitle>
        <Typography variant="body2" color="text.secondary">
          {contactData?.businessName}
        </Typography>

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
