import {LegacyCard, SkeletonTabs} from '@shopify/polaris';
import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function SkeletonExample() {
  return (
    <LegacyCard>
      <SkeletonTabs />
    </LegacyCard>
  );
}

export default withPolarisExample(SkeletonExample);
