import {ButtonGroup, Button} from '@shopify/polaris';
import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function ButtonGroupExample() {
  return (
    <ButtonGroup>
      <Button>Cancel</Button>
      <Button primary>Save</Button>
    </ButtonGroup>
  );
}

export default withPolarisExample(ButtonGroupExample);
