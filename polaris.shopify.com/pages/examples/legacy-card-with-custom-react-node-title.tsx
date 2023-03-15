import {LegacyCard, LegacyStack, Icon, List, Text} from '@shopify/polaris';
import {ProductsMajor} from '@shopify/polaris-icons';
import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function LegacyCardExample() {
  return (
    <LegacyCard title="Products">
      <LegacyCard.Section
        title={
          <LegacyStack>
            <Icon source={ProductsMajor} />
            <Text variant="headingXs" as="h3">
              New Products
            </Text>
          </LegacyStack>
        }
      >
        <List>
          <List.Item>Socks</List.Item>
          <List.Item>Super Shoes</List.Item>
        </List>
      </LegacyCard.Section>
    </LegacyCard>
  );
}

export default withPolarisExample(LegacyCardExample);
