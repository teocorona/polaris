import {Box, Text} from '@shopify/polaris';

import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function BoxWithBorderExample() {
  return (
    <Box border="dark">
      <Placeholder label="Content inside a box" />
    </Box>
  );
}

const Placeholder = ({label = '', height = 'auto', width = 'auto'}) => {
  return (
    <div
      style={{
        background: '#BBD4F7',
        height: height,
        width: width,
      }}
    >
      <div
        style={{
          color: '#1F2124',
        }}
      >
        <Text as="h2" variant="bodyMd" fontWeight="medium">
          {label}
        </Text>
      </div>
    </div>
  );
};

export default withPolarisExample(BoxWithBorderExample);
