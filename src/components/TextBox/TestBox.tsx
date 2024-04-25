import { Button } from '@mui/material';

export interface TestBoxProps {
  /**
   * Color of the box background
   */
  bgColor?: 'red' | 'blue' | 'green';
}
const TestBox = ({ bgColor = 'red' }: TestBoxProps) => {
  return (
    <div
      style={{
        width: '150px',
        height: '150px',
        backgroundColor: bgColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      TestBox
      <Button size={'small'} variant="contained">
        Click me
      </Button>
    </div>
  );
};

export default TestBox;
