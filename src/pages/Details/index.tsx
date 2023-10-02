/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import AnimatedLink from 'hooks/useAnimatedRouter/AnimatedLink';

import data from 'config/data';
import routes from 'config/routes';

import Header from 'components/atom/Header';

import { Container } from './styles';

const Details: React.FC = () => {
  const [selectedData, setSelectedData] = useState<IData | null>(null);

  const router = useRouter();

  const getSelectedData = useCallback((id: string) => {
    const found = data.find((o) => o.id === id);
    if (found) setSelectedData(found);
  }, []);

  useEffect(() => {
    if (router.query.id) getSelectedData(String(router.query.id));
  }, [getSelectedData, router.query.id]);

  if (!selectedData) return <></>;

  return (
    <Container $id={selectedData.id}>
      <Header>
        <AnimatedLink href={routes.home}>Go Back</AnimatedLink>
      </Header>

      <section>
        <img src={selectedData.image} alt={selectedData.id} />

        <p>{selectedData.content}</p>
      </section>
    </Container>
  );
};
export default Details;
