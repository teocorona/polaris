import {LegacyStack, Badge} from '@shopify/polaris';
import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function LegacyStackExample() {
  return (
    <LegacyStack spacing="loose">
      <Badge>Paid</Badge>
      <Badge>Fulfilled</Badge>
    </LegacyStack>
  );
}

export default withPolarisExample(LegacyStackExample);
