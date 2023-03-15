import {ProgressBar} from '@shopify/polaris';
import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function ProgressBarExample() {
  return (
    <div style={{width: 225}}>
      <ProgressBar progress={75} />
    </div>
  );
}

export default withPolarisExample(ProgressBarExample);
