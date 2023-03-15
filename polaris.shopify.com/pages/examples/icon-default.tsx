import {Icon} from '@shopify/polaris';
import {CirclePlusMinor} from '@shopify/polaris-icons';
import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function IconExample() {
  return <Icon source={CirclePlusMinor} />;
}

export default withPolarisExample(IconExample);
