import Routes from 'Routes';
import emotionNormalize from 'emotion-normalize';
import { RecoilRoot } from 'recoil';

import { css, Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <Global
        styles={css`
          ${emotionNormalize}
          html,
          body {
            padding: 0;
            margin: 0;
            background: white;
            min-height: 100%;
            font-family: Helvetica, Arial, sans-serif;
          }
        `}
      />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
};

export default App;
