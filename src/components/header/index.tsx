import { tw, css } from 'twind/css';
import Button from '@/components/button';
import screenshot from '@/constants/png/screenshot-en.png';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(10vh);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1
        className={tw(
          `flex items-center justify-center font-sans
          font-bold text-4xl md:text-5xl lg:text-8xl leading-snug text-gray-800`,
        )}
      >
        GPT SPARKS
        <img className={tw(`h-24 w-24 ml-4`)} src="logo.svg" alt="logo" width={48} height={48} />
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>Sparks your potential with GPT.</p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>Get started</Button>
      </div>
      <img src={screenshot} alt="Screenshot" width="100%" height="100%" />
    </div>
  </header>
);

export default Header;
