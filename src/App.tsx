import Heading from './components/Heading';
import Hits from './components/Hits';
import SearchPagination from './components/SearchPagination';
import AudioPreview from './components/AudioPreview';
import useSearch from './hooks/useSearch';
import LoaderSVG from './components/LoaderSVG';
import NoResultsFound from './components/NoResultsFound';
import SearchBar from './components/SearchBar';

function App() {
  const { hits, base64Audio, isLoading, pagination, handleBase64AudioChange } =
    useSearch();
  const isNoResult = hits.length === 0;

  return (
    <main className='max-w-3xl m-auto pt-10 pb-20 flex flex-col gap-8 items-center'>
      <Heading />
      <SearchBar handleBase64AudioChange={handleBase64AudioChange} />

      {isLoading ? (
        <LoaderSVG />
      ) : (
        <>
          <Hits hits={hits} />
          {isNoResult ? (
            <NoResultsFound />
          ) : (
            <SearchPagination pagination={pagination} />
          )}
        </>
      )}

      {base64Audio && <AudioPreview base64Audio={base64Audio} />}
    </main>
  );
}

export default App;
