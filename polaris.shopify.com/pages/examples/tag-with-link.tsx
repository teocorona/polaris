import {Tag} from '@shopify/polaris';
import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function TagExample() {
  return <Tag url="#">Wholesale</Tag>;
}

export default withPolarisExample(TagExample);
