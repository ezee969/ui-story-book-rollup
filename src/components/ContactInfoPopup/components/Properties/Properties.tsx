// Components/ui
import { Box, Typography, styled } from '@mui/material';
// Icons
import { Handyman } from '@mui/icons-material';
import { ContactField_type, Property } from '@trii/types/dist/Contacts';
// Moment.js
import moment from 'moment';

interface Props {
  properties: Property[] | undefined;
  title: string;
}
const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'max-content',
  alignItems: 'center',
  gap: 8,
});

const SectionTitle = styled(Typography)({
  borderBottom: `1px solid lightgray`,
  width: '100%',
});

const PropertyItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  width: '100%',
});

const PropertyText = styled(Typography)({
  fontSize: 14,
});

const PropertyIcon = styled(Handyman)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 16,
}));
const Properties = ({ properties, title }: Props) => {
  const getPropertyTitle = (title: string) => title.replace(/-/g, ' ');

  const formatPropertyValue = (
    value: string | string[] | null | undefined,
    type: ContactField_type
  ): string => {
    if (!value || (Array.isArray(value) && value.length === 0)) return '';

    if (Array.isArray(value)) {
      return value.map((item) => formatPropertyValue(item, type)).join(', ');
    }

    if (typeof value === 'string') {
      const isValidDate = moment(value, moment.ISO_8601).isValid();
      const format = (formatStr: string) => moment(value).format(formatStr);

      switch (type) {
        case ContactField_type.TIME:
          return isValidDate ? format('HH:mm') : value;
        case ContactField_type.DATE:
          return isValidDate ? format('DD/MM/YYYY') : value;
        case ContactField_type.TIMERANGE:
        case ContactField_type.DATERANGE:
          if (isValidDate) {
            return type === ContactField_type.TIMERANGE
              ? format('HH:mm')
              : format('DD/MM/YYYY');
          }

          const parts = value.split(' ');
          if (parts.length === 2) {
            const [start, end] = parts;
            const startFormatted =
              type === ContactField_type.TIMERANGE
                ? moment(start).format('HH:mm')
                : moment(start).format('DD/MM/YYYY');
            const endFormatted =
              type === ContactField_type.TIMERANGE
                ? moment(end).format('HH:mm')
                : moment(end).format('DD/MM/YYYY');
            return `${startFormatted} - ${endFormatted}`;
          }
          return value;
        default:
          return value;
      }
    }

    return value;
  };

  return (
    <Container>
      <SectionTitle fontWeight="bold" gutterBottom mt={2} variant="subtitle1">
        {title}
      </SectionTitle>
      {properties?.map(
        (property, i) =>
          property.value.length > 0 && (
            <PropertyItem key={i}>
              <PropertyIcon />
              <PropertyText>
                {getPropertyTitle(property.nameKey)}:{' '}
                {formatPropertyValue(property.value, property.type)}
              </PropertyText>
            </PropertyItem>
          )
      )}
    </Container>
  );
};

export default Properties;
