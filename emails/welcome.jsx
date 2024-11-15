// /emails/WelcomeEmail.jsx
import {
  Tailwind,
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
} from '@react-email/components';

const WelcomeEmail = ({ name = 'awdwad' }) => (
  <Html>
    <Head />
    <Preview>Welcome to Our Service</Preview>
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: '#007291',
            },
          },
        },
      }}
    >
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Welcome, {name}!</Heading>
          <Text style={text}>
            Thank you for joining us. We're excited to have you on board!
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default WelcomeEmail;

// Styles
const main = { backgroundColor: '#f6f9fc', padding: '10px' };
const container = {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '8px',
};
const h1 = { fontSize: '24px', color: '#333' };
const text = { fontSize: '16px', color: '#555' };
