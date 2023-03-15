import {Badge} from '@shopify/polaris';
import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function BadgeExample() {
  return (
    <Badge
      status="success"
      progress="complete"
      statusAndProgressLabelOverride="Status: Published. Your online store is visible."
    >
      Published
    </Badge>
  );
}

export default withPolarisExample(BadgeExample);
