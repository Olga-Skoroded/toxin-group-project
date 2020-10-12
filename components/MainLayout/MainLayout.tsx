import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

type Props = {
  children?: JSX.Element;
};

const MainLayout: React.FC<Props> = ({ children }: Props): JSX.Element => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;