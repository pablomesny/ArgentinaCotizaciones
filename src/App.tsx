import { Converter, Footer, Logo, PricesDashboard } from './components';
import { useUsdPrices } from './hooks/useUsdPrices';

export const App = () => {

  const { usdPrices } = useUsdPrices();

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <header className="mt-5 overflow-hidden transition animate-from-top">
        <Logo />
      </header>

      <main className="container flex mx-auto -mt-6 w-11/12 gap-10">
        <aside className="w-3/12">
          <Converter usdPrices={ usdPrices } />
        </aside>

        <article className="w-9/12">
          <PricesDashboard usdPrices={ usdPrices } />
        </article>
      </main>

      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};
