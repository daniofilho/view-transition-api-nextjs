/* eslint-disable @next/next/no-img-element */
import AnimatedLink from 'hooks/useAnimatedRouter/AnimatedLink';

import data from 'config/data';
import routes from 'config/routes';

import Header from 'components/atom/Header';

import { Container } from './styles';

const Home: React.FC = () => (
  <>
    <Header>
      <h2>View Transition API in NextJS</h2>

      <a href="https://github.com/daniofilho/view-transition-api-nextjs" target="_blank" rel="noreferrer">
        Github
      </a>
    </Header>

    <Container>
      {data.map(({ id, image }, index) => (
        <AnimatedLink key={index} href={routes.details(id)}>
          <img src={image} alt={id} style={{ viewTransitionName: `image-thumb-${id}` }} />
        </AnimatedLink>
      ))}
    </Container>
  </>
);
export default Home;
