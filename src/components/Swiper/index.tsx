import Card from 'components/Card';
import TinderCard from 'react-tinder-card';

const Swiper = (): JSX.Element => {
  const onSwipe = (direction: any) => {
    console.log('You swiped: ' + direction);
  };

  const onCardLeftScreen = (myIdentifier: any) => {
    console.log(myIdentifier + ' left the screen');
  };

  return (
    <TinderCard
      onSwipe={onSwipe}
      onCardLeftScreen={() => onCardLeftScreen('fooBar')}
      preventSwipe={['right', 'left']}
    >
      <Card />
    </TinderCard>
  );
};

export default Swiper;
